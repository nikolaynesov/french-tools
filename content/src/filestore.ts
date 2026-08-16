// ============================================================
// FileStore — la progression auto-écrite dans un vrai fichier
// sur le disque (File System Access API).
//
// Supporté : Chrome / Edge (desktop et Android). Ailleurs,
// supported() renvoie false et l'app garde l'export manuel.
// Le handle du fichier est conservé dans IndexedDB : à la
// prochaine visite, un clic sur « Reconnecter » suffit
// (le navigateur redemande la permission, c'est la règle).
// ============================================================

// --- minimal ambient types (File System Access API is not in every lib.dom) ---

interface FSWritableStream {
  write(data: string): Promise<void>;
  close(): Promise<void>;
}

export interface FSFileHandle {
  readonly name: string;
  getFile(): Promise<File>;
  createWritable(): Promise<FSWritableStream>;
  queryPermission?(opts: { mode: "readwrite" }): Promise<PermissionState>;
  requestPermission?(opts: { mode: "readwrite" }): Promise<PermissionState>;
}

interface SavePickerOptions {
  suggestedName?: string;
  types?: { description: string; accept: Record<string, string[]> }[];
}

declare global {
  interface Window {
    showSaveFilePicker?(opts?: SavePickerOptions): Promise<FSFileHandle>;
  }
}

// --- tiny IndexedDB key-value helper (handles are structured-cloneable) ---

const DB_NAME = "french-filestore";
const STORE = "handles";

function idb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function idbGet<V>(key: string): Promise<V | undefined> {
  const db = await idb();
  return new Promise((resolve, reject) => {
    const req = db.transaction(STORE).objectStore(STORE).get(key);
    req.onsuccess = () => resolve(req.result as V | undefined);
    req.onerror = () => reject(req.error);
  });
}

async function idbSet(key: string, value: unknown): Promise<void> {
  const db = await idb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(value, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function idbDel(key: string): Promise<void> {
  const db = await idb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// --- the store ---

export type FileStoreStatus =
  | "unsupported" // browser has no File System Access API
  | "none" // supported, nothing connected yet
  | "stored" // a handle from a previous visit exists — offer « Reconnecter »
  | "connected"; // live: every save() writes to the file

export class FileStore<T> {
  status: FileStoreStatus = "none";
  fileName: string | null = null;

  private handle: FSFileHandle | null = null;
  private timer: number | null = null;
  private pending: T | null = null;

  constructor(private key: string, private suggestedName: string) {}

  supported(): boolean {
    return typeof window !== "undefined" && !!window.showSaveFilePicker;
  }

  /** Call once at startup; resolves status to unsupported / none / stored. */
  async init(): Promise<void> {
    if (!this.supported()) {
      this.status = "unsupported";
      return;
    }
    try {
      const saved = await idbGet<{ handle: FSFileHandle; name: string }>(this.key);
      if (saved?.handle) {
        this.status = "stored";
        this.fileName = saved.name ?? null;
      }
    } catch {
      /* IndexedDB unavailable (private mode…) — stay at "none" */
    }
  }

  /** Pick (or create) the file. Returns its existing content, parsed, or null. */
  async connect(): Promise<T | null> {
    const handle = await window.showSaveFilePicker!({
      suggestedName: this.suggestedName,
      types: [{ description: "Progression JSON", accept: { "application/json": [".json"] } }],
    });
    this.handle = handle;
    this.fileName = handle.name;
    this.status = "connected";
    try {
      await idbSet(this.key, { handle, name: handle.name });
    } catch {
      /* fine — reconnection just won't be offered next visit */
    }
    return this.read();
  }

  /** Re-attach the handle stored at a previous visit (one permission click). */
  async reconnect(): Promise<T | null> {
    const saved = await idbGet<{ handle: FSFileHandle; name: string }>(this.key);
    if (!saved?.handle) return null;
    const h = saved.handle;
    const perm = (await h.queryPermission?.({ mode: "readwrite" })) ?? "granted";
    if (perm !== "granted") {
      const req = (await h.requestPermission?.({ mode: "readwrite" })) ?? "denied";
      if (req !== "granted") return null;
    }
    this.handle = h;
    this.fileName = saved.name ?? h.name;
    this.status = "connected";
    return this.read();
  }

  /** Debounced write — call as often as you like. */
  scheduleSave(data: T): void {
    if (this.status !== "connected") return;
    this.pending = data;
    if (this.timer !== null) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.timer = null;
      void this.flush();
    }, 500) as unknown as number;
  }

  /** Write immediately (used by the debounce; also handy before unload). */
  async flush(): Promise<void> {
    if (!this.handle || this.pending === null) return;
    const data = this.pending;
    this.pending = null;
    try {
      const w = await this.handle.createWritable();
      await w.write(JSON.stringify(data, null, 2));
      await w.close();
    } catch {
      /* write refused (permission revoked, disque plein…) — keep running in memory */
    }
  }

  /** Detach and forget the stored handle. */
  async forget(): Promise<void> {
    this.handle = null;
    this.fileName = null;
    this.status = this.supported() ? "none" : "unsupported";
    try {
      await idbDel(this.key);
    } catch {
      /* ignore */
    }
  }

  private async read(): Promise<T | null> {
    if (!this.handle) return null;
    try {
      const text = await (await this.handle.getFile()).text();
      if (!text.trim()) return null;
      return JSON.parse(text) as T;
    } catch {
      return null;
    }
  }
}
