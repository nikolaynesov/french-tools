// ============================================================
// Vocabulaire — banque thématique + répétition espacée (Leitner)
// Séparé des apps grammaire : autre modèle, autre rythme.
// ============================================================

import { VOCAB, type VocabItem } from "../../content/src/index";
import { FileStore } from "../../content/src/filestore";

const SESSION_SIZE = 15;
const MAX_BOX = 5;

const THEMES: { id: string; label: string }[] = [
  { id: "cinema", label: "Cinéma" },
  { id: "bd", label: "BD" },
  { id: "art", label: "Art" },
  { id: "loisirs", label: "Loisirs" },
  { id: "celebrite", label: "Célébrité" },
  { id: "logement", label: "Logement" },
  { id: "renovation", label: "Rénovation" },
  { id: "carriere", label: "Carrière" },
  { id: "transport", label: "Transport" },
  { id: "general", label: "Général" },
];

function themeLabel(id: string): string {
  return THEMES.find((t) => t.id === id)?.label ?? id;
}

// ---------- progress ----------

interface Progress {
  version: 1;
  /** id → Leitner box (1 = à revoir souvent … 5 = acquis) */
  box: Record<string, number>;
  seen: Record<string, number>;
}

const progress: Progress = { version: 1, box: {}, seen: {} };

type Saved = Progress & {
  prefs?: { theme: string; mode: string; reverse: boolean };
};

const fstore = new FileStore<Saved>("vocabulaire", "progression-vocabulaire.json");

function snapshot(): Saved {
  return {
    ...progress,
    prefs: { theme: state.theme, mode: state.mode, reverse: state.reverse },
  };
}

function persist(): void {
  fstore.scheduleSave(snapshot());
}

function applySaved(data: Saved): void {
  if (data.version !== 1) return;
  progress.box = data.box || {};
  progress.seen = data.seen || {};
  if (data.prefs) {
    state.theme = data.prefs.theme ?? state.theme;
    if (["cartes", "quiz", "ecrire"].includes(data.prefs.mode))
      state.mode = data.prefs.mode as Mode;
    state.reverse = !!data.prefs.reverse;
  }
}

function boxOf(id: string): number {
  return progress.box[id] ?? 0; // 0 = jamais vu
}

function grade(item: VocabItem, ok: boolean): void {
  const b = boxOf(item.id);
  progress.box[item.id] = ok ? Math.min(MAX_BOX, (b || 1) + 1) : 1;
  progress.seen[item.id] = (progress.seen[item.id] ?? 0) + 1;
}

// ---------- state ----------

type Mode = "cartes" | "quiz" | "ecrire";
type Screen = "home" | "session" | "result";

interface Card {
  item: VocabItem;
  choices?: VocabItem[];
}

const state: {
  screen: Screen;
  mode: Mode;
  theme: string; // "all" | theme id
  reverse: boolean; // quiz direction UK → FR
  cards: Card[];
  i: number;
  flipped: boolean;
  answered: boolean;
  lastOk: boolean;
  lastKind: "ok" | "accent" | "wrong";
  given: string;
  results: { item: VocabItem; ok: boolean }[];
} = {
  screen: "home",
  mode: "cartes",
  theme: "all",
  reverse: false,
  cards: [],
  i: 0,
  flipped: false,
  answered: false,
  lastOk: false,
  lastKind: "wrong",
  given: "",
  results: [],
};

// ---------- helpers ----------

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function shuffle<T>(a: T[]): T[] {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

function norm(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/[‘’ʼ´]/g, "'")
    .replace(/\s+/g, " ")
    .replace(/\s*'\s*/g, "'");
}

function deacc(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

const ARTICLES = /^(le |la |les |un |une |des |l'|se |s')/;

function checkWritten(item: VocabItem, given: string): "ok" | "accent" | "wrong" {
  const g = norm(given);
  const a = norm(item.fr);
  if (!g) return "wrong";
  if (g === a) return "ok";
  if (deacc(g) === deacc(a)) return "accent";
  // accept without the article, but only as a near miss
  if (g === a.replace(ARTICLES, "") || deacc(g) === deacc(a.replace(ARTICLES, "")))
    return "accent";
  return "wrong";
}

function themePool(): VocabItem[] {
  return state.theme === "all" ? VOCAB.slice() : VOCAB.filter((v) => v.theme === state.theme);
}

/** Low boxes and unseen items first. */
function buildSession(): Card[] {
  const p = themePool();
  const weighted = p
    .map((v) => ({ v, w: boxOf(v.id) === 0 ? 1.5 : MAX_BOX + 1 - boxOf(v.id) + Math.random() }))
    .sort((a, b) => b.w - a.w)
    .slice(0, SESSION_SIZE)
    .map((x) => x.v);

  return shuffle(weighted).map((item) => {
    if (state.mode !== "quiz") return { item };
    const sameTheme = shuffle(VOCAB.filter((v) => v.theme === item.theme && v.id !== item.id));
    const others = shuffle(VOCAB.filter((v) => v.theme !== item.theme && v.id !== item.id));
    const distractors = [...sameTheme, ...others].slice(0, 3);
    return { item, choices: shuffle([item, ...distractors]) };
  });
}

// ---------- views ----------

function homeHtml(): string {
  const p = themePool();
  const counts = [0, 1, 2, 3, 4, 5].map((b) => p.filter((v) => boxOf(v.id) === b).length);
  const known = counts[5];
  const chips = [{ id: "all", label: "Tous" }, ...THEMES]
    .map((t) => {
      const n = t.id === "all" ? VOCAB.length : VOCAB.filter((v) => v.theme === t.id).length;
      return `<button class="chip ${state.theme === t.id ? "on" : ""}" data-theme="${t.id}">${esc(
        t.label
      )} <span class="chip-n">${n}</span></button>`;
    })
    .join("");

  const modes: { id: Mode; label: string; help: string }[] = [
    { id: "cartes", label: "Cartes", help: "FR → devine, puis retourne la carte" },
    { id: "quiz", label: "Quiz", help: "choisis la bonne traduction parmi 4" },
    { id: "ecrire", label: "Écrire", help: "on donne l'ukrainien, tu écris le français" },
  ];

  const boxBar = counts
    .map((n, b) => {
      const pct = p.length ? (n / p.length) * 100 : 0;
      return pct > 0
        ? `<div class="seg seg-${b}" style="width:${pct}%" title="boîte ${b} — ${n} mots"></div>`
        : "";
    })
    .join("");

  return `
  <div class="hero">
    <h2>Vocabulaire</h2>
    <p class="sub">${VOCAB.length} mots tirés du board de ta prof · ${known} acquis · ${
    p.length - counts[0]
  }/${p.length} commencés dans cette sélection.</p>

    <div class="boxbar" aria-label="Répartition Leitner">${boxBar}</div>
    <div class="boxkey">
      <span><i class="seg-0"></i> jamais vu</span>
      <span><i class="seg-1"></i> 1</span>
      <span><i class="seg-2"></i> 2</span>
      <span><i class="seg-3"></i> 3</span>
      <span><i class="seg-4"></i> 4</span>
      <span><i class="seg-5"></i> acquis</span>
    </div>
  </div>

  <section class="grp">
    <h3>Thème</h3>
    <div class="chips">${chips}</div>
  </section>

  <section class="grp">
    <h3>Mode</h3>
    <div class="mode-grid">
      ${modes
        .map(
          (m) =>
            `<button class="mode-btn ${state.mode === m.id ? "on" : ""}" data-mode="${m.id}">
              <span class="mode-name">${m.label}</span>
              <span class="mode-help">${esc(m.help)}</span>
            </button>`
        )
        .join("")}
    </div>
    ${
      state.mode === "quiz"
        ? `<label class="rev"><input type="checkbox" id="reverse" ${
            state.reverse ? "checked" : ""
          } /> sens inverse (УКР → FR)</label>`
        : ""
    }
  </section>

  <div class="quick">
    <button class="big-btn primary" id="start" ${p.length ? "" : "disabled"}>
      Commencer — ${Math.min(SESSION_SIZE, p.length)} mots
    </button>
  </div>

  <div class="io">
    ${fileUiHtml()}
    <button class="link-btn" id="export">⤓ Exporter ma progression</button>
    <label class="link-btn" for="import-file">⤒ Importer</label>
    <input type="file" id="import-file" accept="application/json" hidden />
    <button class="link-btn" id="browse">☰ Voir toute la liste</button>
  </div>

  <div id="list-wrap"></div>`;
}

function fileUiHtml(): string {
  switch (fstore.status) {
    case "connected":
      return `<span class="fs-status fs-on" title="Chaque réponse est écrite dans le fichier">● ${esc(
        fstore.fileName ?? "fichier"
      )}</span>
      <button class="link-btn" id="fs-forget">détacher</button>`;
    case "stored":
      return `<button class="link-btn" id="fs-reconnect">🗂 Reconnecter ${
        fstore.fileName ? esc(fstore.fileName) : "le fichier de progression"
      }</button>`;
    case "none":
      return `<button class="link-btn" id="fs-connect" title="La progression s'écrira toute seule dans un fichier .json sur ton disque">🗂 Connecter un fichier de progression</button>`;
    case "unsupported":
      return `<span class="fs-status" title="File System Access API — utilise Chrome ou Edge pour l'auto-sauvegarde">sauvegarde-fichier : non supportée par ce navigateur</span>`;
  }
}

function listHtml(): string {
  const rows = themePool()
    .map(
      (v) => `<tr>
        <td class="v-fr">${esc(v.fr)}<span class="v-pos">${esc(v.pos)}</span></td>
        <td class="v-uk">${esc(v.uk)}</td>
        <td class="v-en">${esc(v.en)}</td>
        <td class="v-th">${esc(themeLabel(v.theme))}</td>
        <td class="v-box"><span class="dot seg-${boxOf(v.id)}"></span></td>
      </tr>`
    )
    .join("");
  return `<div class="list-scroll"><table class="v-table">
    <thead><tr><th>Français</th><th>Українська</th><th>English</th><th>Thème</th><th></th></tr></thead>
    <tbody>${rows}</tbody></table></div>`;
}

function cardHtml(): string {
  const c = state.cards[state.i];
  const v = c.item;
  const pct = Math.round((state.i / state.cards.length) * 100);
  const head = `
    <div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>
    <div class="q-head">
      <span class="q-count">${state.i + 1} / ${state.cards.length}</span>
      <span class="q-rule">${esc(themeLabel(v.theme))}</span>
      <span class="q-lvl">boîte ${boxOf(v.id) || "—"}</span>
      <button class="link-btn quit" id="quit">Arrêter</button>
    </div>`;

  const back = `
    <div class="back">
      <p class="uk">${esc(v.uk)}</p>
      <p class="en">${esc(v.en)}</p>
      <p class="ex">${esc(v.example)}</p>
      ${v.note ? `<p class="note">💡 ${esc(v.note)}</p>` : ""}
      <p class="src">source : ${esc(v.source)}</p>
    </div>`;

  if (state.mode === "cartes") {
    return `${head}
    <div class="v-card">
      <p class="fr-big">${esc(v.fr)}</p>
      ${state.flipped ? back : `<button class="big-btn" id="flip">Retourner la carte</button>`}
      ${
        state.flipped
          ? `<div class="judge">
              <button class="big-btn bad-btn" data-know="0">Je ne savais pas</button>
              <button class="big-btn primary" data-know="1">Je savais</button>
            </div>`
          : ""
      }
    </div>`;
  }

  if (state.mode === "quiz") {
    const askFr = !state.reverse;
    const q = askFr ? v.fr : v.uk;
    const opts = c
      .choices!.map((o, k) => {
        const label = askFr ? o.uk : o.fr;
        let cls = "choice";
        if (state.answered) {
          if (o.id === v.id) cls += " right";
          else if (state.given === o.id) cls += " wrongpick";
        }
        return `<button class="${cls}" data-pick="${k}" ${
          state.answered ? "disabled" : ""
        }>${esc(label)}</button>`;
      })
      .join("");
    return `${head}
    <div class="v-card">
      <p class="fr-big">${esc(q)}</p>
      <div class="choices">${opts}</div>
      ${state.answered ? back + `<button class="big-btn primary" id="next">Suivant →</button>` : ""}
    </div>`;
  }

  // écrire
  return `${head}
  <div class="v-card">
    <p class="fr-big">${esc(v.uk)}</p>
    <p class="q-hint">${esc(v.pos)} — écris le mot français (avec l'article pour les noms)</p>
    <div class="answer-row">
      <input id="answer" type="text" autocomplete="off" autocapitalize="off" spellcheck="false"
             placeholder="en français…" value="${state.answered ? esc(state.given) : ""}"
             ${state.answered ? "disabled" : ""} />
      <button class="big-btn primary" id="submit">${state.answered ? "Suivant →" : "Vérifier"}</button>
    </div>
    ${
      state.answered
        ? `<div class="fb fb-${
            state.lastKind === "ok" ? "ok" : state.lastKind === "accent" ? "near" : "bad"
          }">
            <p class="fb-head">${
              state.lastKind === "ok"
                ? "✓ Correct"
                : state.lastKind === "accent"
                ? "≈ Presque — accent ou article"
                : "✗ Pas tout à fait"
            }</p>
            <p class="fb-line"><code>${esc(v.fr)}</code></p>
          </div>${back}`
        : ""
    }
  </div>`;
}

function resultHtml(): string {
  const ok = state.results.filter((r) => r.ok).length;
  const n = state.results.length;
  const pct = n ? Math.round((ok / n) * 100) : 0;
  const missed = state.results.filter((r) => !r.ok);
  return `
  <div class="result">
    <div class="score ${pct >= 80 ? "great" : pct >= 50 ? "mid" : "low"}">
      <span class="score-n">${ok}/${n}</span><span class="score-p">${pct}%</span>
    </div>
    ${
      missed.length
        ? `<h3>Remis en boîte 1 (${missed.length})</h3>
           <ul class="misses">${missed
             .map(
               (r) =>
                 `<li class="miss"><span class="m-fr">${esc(r.item.fr)}</span> — ${esc(
                   r.item.uk
                 )}</li>`
             )
             .join("")}</ul>`
        : `<p class="perfect">Tout juste. 🎉</p>`
    }
    <div class="quick">
      <button class="big-btn primary" id="again">Nouvelle série</button>
      <button class="big-btn" id="home">← Retour</button>
    </div>
  </div>`;
}

// ---------- flow ----------

function render(): void {
  const main = document.getElementById("main")!;
  if (state.screen === "home") main.innerHTML = homeHtml();
  else if (state.screen === "session") main.innerHTML = cardHtml();
  else main.innerHTML = resultHtml();
  const inp = document.getElementById("answer") as HTMLInputElement | null;
  if (inp && !state.answered) inp.focus();
}

function answer(ok: boolean): void {
  const v = state.cards[state.i].item;
  grade(v, ok);
  state.results.push({ item: v, ok });
  state.answered = true;
  state.lastOk = ok;
  persist();
}

function next(): void {
  if (state.i + 1 >= state.cards.length) {
    state.screen = "result";
  } else {
    state.i++;
    state.flipped = false;
    state.answered = false;
    state.given = "";
  }
  render();
}

function startSession(): void {
  state.cards = buildSession();
  if (!state.cards.length) return;
  state.i = 0;
  state.flipped = false;
  state.answered = false;
  state.given = "";
  state.results = [];
  state.screen = "session";
  render();
}

function download(): void {
  const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "progression-vocabulaire.json";
  a.click();
  URL.revokeObjectURL(a.href);
}

function init(): void {
  document.body.addEventListener("click", (e) => {
    const t = e.target as HTMLElement;

    const th = t.closest<HTMLElement>("[data-theme]");
    if (th) {
      state.theme = th.dataset.theme!;
      persist();
      return render();
    }
    const md = t.closest<HTMLElement>("[data-mode]");
    if (md) {
      state.mode = md.dataset.mode as Mode;
      persist();
      return render();
    }
    if (t.closest("#start")) return startSession();
    if (t.closest("#flip")) {
      state.flipped = true;
      return render();
    }
    const know = t.closest<HTMLElement>("[data-know]");
    if (know) {
      answer(know.dataset.know === "1");
      return next();
    }
    const pick = t.closest<HTMLElement>("[data-pick]");
    if (pick) {
      const c = state.cards[state.i];
      const chosen = c.choices![Number(pick.dataset.pick)];
      state.given = chosen.id;
      answer(chosen.id === c.item.id);
      return render();
    }
    if (t.closest("#next")) return next();
    if (t.closest("#submit")) {
      if (state.answered) return next();
      const inp = document.getElementById("answer") as HTMLInputElement;
      const kind = checkWritten(state.cards[state.i].item, inp.value);
      state.given = inp.value;
      state.lastKind = kind;
      answer(kind === "ok");
      return render();
    }
    if (t.closest("#quit")) {
      state.screen = state.results.length ? "result" : "home";
      return render();
    }
    if (t.closest("#home")) {
      state.screen = "home";
      return render();
    }
    if (t.closest("#again")) return startSession();
    if (t.closest("#export")) return download();
    if (t.closest("#fs-connect")) {
      void fstore
        .connect()
        .then((data) => {
          if (data) applySaved(data);
          persist();
          render();
        })
        .catch(() => {
          /* picker dismissed */
        });
      return;
    }
    if (t.closest("#fs-reconnect")) {
      void fstore.reconnect().then((data) => {
        if (data) applySaved(data);
        render();
      });
      return;
    }
    if (t.closest("#fs-forget")) {
      void fstore.forget().then(render);
      return;
    }
    if (t.closest("#browse")) {
      const w = document.getElementById("list-wrap")!;
      w.innerHTML = w.innerHTML ? "" : listHtml();
      return;
    }
  });

  document.body.addEventListener("change", (e) => {
    const el = e.target as HTMLInputElement;
    if (el.id === "reverse") {
      state.reverse = el.checked;
      persist();
      return;
    }
    if (el.id === "import-file" && el.files?.[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(String(reader.result)) as Saved;
          if (data.version === 1) {
            applySaved(data);
            persist();
            render();
          }
        } catch {
          /* ignore a bad file */
        }
      };
      reader.readAsText(el.files[0]);
    }
  });

  document.body.addEventListener("keydown", (e) => {
    if (state.screen !== "session") return;
    if (state.mode === "cartes" && e.key === " " && !state.flipped) {
      e.preventDefault();
      state.flipped = true;
      return render();
    }
    if (e.key !== "Enter") return;
    e.preventDefault();
    if (state.mode === "ecrire") {
      if (state.answered) return next();
      const inp = document.getElementById("answer") as HTMLInputElement | null;
      if (!inp) return;
      const kind = checkWritten(state.cards[state.i].item, inp.value);
      state.given = inp.value;
      state.lastKind = kind;
      answer(kind === "ok");
      return render();
    }
    if (state.answered) return next();
  });

  render();

  void fstore.init().then(() => {
    if (state.screen === "home") render();
  });
  window.addEventListener("beforeunload", () => void fstore.flush());
}

document.addEventListener("DOMContentLoaded", init);
