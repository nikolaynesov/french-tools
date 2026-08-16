// ============================================================
// Exercices de grammaire — A2 → B1
// Sessions courtes (10 items max) branchées sur la banque partagée.
// ============================================================

import {
  DRILLS,
  TENSES,
  STRUCTURES,
  ID_ALIASES,
  markedHtml,
  type Drill,
  type I18n,
  type Tense,
  type Structure,
} from "../../content/src/index";
import { FileStore } from "../../content/src/filestore";

/** Works both from exercises-app/index.html and from exercises-app/dist/standalone.html. */
const REFERENCE_URL = location.pathname.includes("/dist/")
  ? "../../reference-app/dist/standalone.html"
  : "../reference-app/dist/standalone.html";
const SET_SIZE = 10;

// ---------- rule catalogue ----------

interface RuleMeta {
  id: string;
  name: string;
  group: "Temps" | "Structures" | "Connecteurs";
}

const RULES: RuleMeta[] = (() => {
  const out: RuleMeta[] = [];
  for (const t of TENSES) out.push({ id: t.id, name: t.name, group: "Temps" });
  for (const s of STRUCTURES)
    out.push({
      id: s.id,
      name: s.name,
      group: s.section === "connecteurs" ? "Connecteurs" : "Structures",
    });
  return out.filter((r) => DRILLS.some((d) => d.ruleId === r.id));
})();

function ruleName(id: string): string {
  return RULES.find((r) => r.id === id)?.name ?? id;
}

// ---------- progress (in memory; export/import as JSON) ----------

interface RuleStat {
  seen: number;
  correct: number;
}

interface Progress {
  version: 1;
  byRule: Record<string, RuleStat>;
  byItem: Record<
    string,
    { seen: number; correct: number; lastOk: boolean; helped?: number }
  >;
}

const progress: Progress = { version: 1, byRule: {}, byItem: {} };

/** What lands in the connected file: progress + UI preferences. */
type Saved = Progress & {
  prefs?: { aide: number; level: number; lang: string };
};

const fstore = new FileStore<Saved>("exercices", "progression-exercices.json");

function snapshot(): Saved {
  return {
    ...progress,
    prefs: { aide: state.aide, level: state.level, lang: state.lang },
  };
}

function persist(): void {
  fstore.scheduleSave(snapshot());
}

function applySaved(data: Saved): void {
  if (data.version !== 1) return;
  progress.byRule = data.byRule || {};
  progress.byItem = data.byItem || {};
  if (data.prefs) {
    if ([1, 2, 3, 4].includes(data.prefs.aide)) state.aide = data.prefs.aide as Aide;
    if ([0, 1, 2, 3].includes(data.prefs.level))
      state.level = data.prefs.level as 0 | 1 | 2 | 3;
    if (["fr", "en", "uk"].includes(data.prefs.lang))
      state.lang = data.prefs.lang as "fr" | "en" | "uk";
  }
}

function recordAnswer(d: Drill, ok: boolean, helped: boolean): void {
  const r = (progress.byRule[d.ruleId] ??= { seen: 0, correct: 0 });
  r.seen++;
  if (ok) r.correct++;
  const i = (progress.byItem[d.id] ??= { seen: 0, correct: 0, lastOk: false });
  i.seen++;
  if (ok) i.correct++;
  i.lastOk = ok;
  if (helped) i.helped = (i.helped ?? 0) + 1;
}

function wrongPool(): Drill[] {
  return DRILLS.filter((d) => progress.byItem[d.id] && !progress.byItem[d.id].lastOk);
}

// ---------- session state ----------

type Screen = "home" | "session" | "result";

interface Session {
  items: Drill[];
  i: number;
  answered: boolean;
  lastOk: boolean;
  lastKind: "ok" | "accent" | "pronoun" | "wrong";
  given: string;
  /** the « Indice » button was clicked on the current item (aide level 3) */
  indice: boolean;
  /** help was visible at some point on the current item — switching to
   *  « Examen » after peeking still counts as helped */
  sawHelp: boolean;
  results: { drill: Drill; ok: boolean; given: string; helped: boolean }[];
  label: string;
}

/** Assistance level — how much help is visible BEFORE answering.
 *  Orthogonal to drill.level (content difficulty). */
type Aide = 1 | 2 | 3 | 4;

const AIDE_META: Record<Aide, { label: string; desc: string }> = {
  1: { label: "Guidé", desc: "la règle + le squelette de la réponse" },
  2: { label: "Aidé", desc: "la règle sous les yeux" },
  3: { label: "Léger", desc: "un indice sur demande" },
  4: { label: "Examen", desc: "aucune aide, comme au DELF" },
};

const state: {
  screen: Screen;
  session: Session | null;
  level: 0 | 1 | 2 | 3;
  aide: Aide;
  lang: "fr" | "en" | "uk";
} = { screen: "home", session: null, level: 0, aide: 2, lang: "fr" };

// ---------- helpers ----------

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function tr(t: I18n): string {
  return t[state.lang] || t.fr;
}

function shuffle<T>(a: T[]): T[] {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

/** Normalise for comparison: case, apostrophes, spacing, final punctuation. */
function norm(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/[‘’ʼ´]/g, "'")
    .replace(/[«»"]/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*'\s*/g, "'")
    .replace(/\s*([?!.,;:])/g, "$1")
    .replace(/[.!?]+$/, "");
}

function deacc(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

const PRONOUNS = /^(je |j'|tu |il |elle |on |nous |vous |ils |elles |il\/elle |ils\/elles )/;

function grade(d: Drill, given: string): "ok" | "accent" | "pronoun" | "wrong" {
  const g = norm(given);
  if (!g) return "wrong";
  const answers = d.answer.map(norm);
  if (answers.includes(g)) return "ok";
  if (answers.some((a) => deacc(a) === deacc(g))) return "accent";
  if (d.kind === "conjugate") {
    // learner typed the verb but dropped the pronoun
    if (answers.some((a) => a.replace(PRONOUNS, "") === g.replace(PRONOUNS, ""))) {
      return "pronoun";
    }
  }
  return "wrong";
}

// ---------- assistance (rule panel, skeleton) ----------

function canonicalId(ruleId: string): string {
  return ID_ALIASES[ruleId] ?? ruleId;
}

function ruleTense(ruleId: string): Tense | undefined {
  const id = canonicalId(ruleId);
  return TENSES.find((t) => t.id === id);
}

function ruleStructure(ruleId: string): Structure | undefined {
  const id = canonicalId(ruleId);
  return STRUCTURES.find((s) => s.id === id);
}

/** Letter tiles: first letter of each word shown, one empty tile per hidden
 *  letter. Letters after apostrophes/hyphens are also revealed (j'aurais → j'a······). */
function skeletonHtml(answer: string): string {
  let out = "";
  let reveal = true;
  for (const ch of answer) {
    if (/\p{L}/u.test(ch)) {
      out += reveal
        ? `<span class="sk sk-show">${esc(ch)}</span>`
        : `<span class="sk"></span>`;
      reveal = false;
    } else if (ch === " ") {
      out += `<span class="sk-gap"></span>`;
      reveal = true;
    } else {
      out += `<span class="sk-sep">${esc(ch)}</span>`;
      reveal = true;
    }
  }
  return out;
}

/** Did the learner have help visible before answering this item? */
function helpedNow(): boolean {
  const s = state.session!;
  return s.sawHelp || state.aide <= 2 || (state.aide === 3 && s.indice);
}

/** The rule reference rendered live from the shared bank — the same data
 *  the reference app shows, so the two apps can never drift apart. */
function rulePanelHtml(d: Drill, full: boolean): string {
  const link = `<a class="rule-link" href="${REFERENCE_URL}#card-${canonicalId(
    d.ruleId
  )}" target="_blank" rel="noopener">Fiche complète : ${esc(ruleName(d.ruleId))} ↗</a>`;

  const head = `<div class="rp-head">📖 La règle</div>`;
  const t = ruleTense(d.ruleId);
  if (t) {
    let body = head + `<p class="rp-formula">${markedHtml(t.formula)}</p>`;
    if (full) {
      const tb = t.tables[0];
      if (tb) {
        // highlight the row matching the pronoun of a « je / aller » prompt
        const p = d.prompt.split("/")[0]?.trim().toLowerCase() ?? "";
        const rows = tb.rows
          .map((r) => {
            const cands = r.pronoun
              .toLowerCase()
              .split("/")
              .map((x) => x.trim().replace(/[()']/g, ""));
            const hl =
              p &&
              d.kind === "conjugate" &&
              cands.some((c) => c === p || c === p.replace("'", ""));
            return `<tr class="${hl ? "hl" : ""}"><td class="pronoun">${esc(
              r.pronoun
            )}</td><td>${markedHtml(r.form)}</td></tr>`;
          })
          .join("");
        body += `<table class="rp-table"><tbody>${rows}</tbody></table>`;
      }
      body += `<p class="rp-mnemo">🧠 ${esc(t.mnemo.fr)}</p>`;
    }
    return `<div class="rule-panel">${body}${link}</div>`;
  }

  const s = ruleStructure(d.ruleId);
  if (s) {
    let body = head + `<p class="rp-formula">${esc(s.tagline.fr)}</p>`;
    if (full) {
      const b = s.blocks.find((x) => x.kind === "rule");
      if (b && b.kind === "rule") {
        body += `<p class="rp-rule"><b>${esc(b.title.fr)}</b> — ${esc(b.body.fr)}</p>`;
      }
    }
    return `<div class="rule-panel">${body}${link}</div>`;
  }

  return `<div class="rule-panel">${link}</div>`;
}

// ---------- set building ----------

function pool(ruleId: string): Drill[] {
  let p = ruleId === "all" ? DRILLS.slice() : DRILLS.filter((d) => d.ruleId === ruleId);
  if (state.level !== 0) p = p.filter((d) => d.level === state.level);
  return p;
}

/** Unseen first, then previously-wrong, then the rest. */
function buildSet(ruleId: string, label: string): Session {
  let items: Drill[];
  if (ruleId === "errors") {
    items = shuffle(wrongPool()).slice(0, SET_SIZE);
  } else {
    const p = pool(ruleId);
    const unseen = shuffle(p.filter((d) => !progress.byItem[d.id]));
    const wrong = shuffle(p.filter((d) => progress.byItem[d.id]?.lastOk === false));
    const rest = shuffle(p.filter((d) => progress.byItem[d.id]?.lastOk === true));
    items = [...wrong.slice(0, 3), ...unseen, ...rest].slice(0, SET_SIZE);
    items = shuffle(items);
  }
  return {
    items,
    i: 0,
    answered: false,
    lastOk: false,
    lastKind: "wrong",
    given: "",
    indice: false,
    sawHelp: false,
    results: [],
    label,
  };
}

// ---------- rendering ----------

function homeHtml(): string {
  const groups: RuleMeta["group"][] = ["Temps", "Structures", "Connecteurs"];
  const blocks = groups
    .map((g) => {
      const rows = RULES.filter((r) => r.group === g)
        .map((r) => {
          const n = pool(r.id).length;
          const s = progress.byRule[r.id];
          const pct = s && s.seen ? Math.round((s.correct / s.seen) * 100) : null;
          return `<button class="rule-btn" data-start="${r.id}" ${n === 0 ? "disabled" : ""}>
            <span class="rule-name">${esc(r.name)}</span>
            <span class="rule-meta">${n} item${n > 1 ? "s" : ""}${
            pct !== null ? ` · <b class="acc">${pct}%</b>` : ""
          }</span>
            ${
              pct !== null
                ? `<span class="rule-bar"><i style="width:${pct}%"></i></span>`
                : ""
            }
          </button>`;
        })
        .join("");
      return `<section class="grp"><h3>${g}</h3><div class="rule-grid">${rows}</div></section>`;
    })
    .join("");

  const wrong = wrongPool().length;
  const total = DRILLS.length;
  const seen = Object.keys(progress.byItem).length;
  const answered = Object.values(progress.byRule);
  const totSeen = answered.reduce((n, r) => n + r.seen, 0);
  const totOk = answered.reduce((n, r) => n + r.correct, 0);
  const globalPct = totSeen ? Math.round((totOk / totSeen) * 100) : null;
  const rulesTouched = answered.filter((r) => r.seen > 0).length;

  return `
  <div class="hero">
    <h2>Choisis ta série</h2>
    <p class="sub">${SET_SIZE} items par série — courte et finissable, c'est le principe.</p>
    <div class="stats">
      <div class="stat"><span class="stat-n">${seen}<em>/${total}</em></span><span class="stat-l">items vus</span></div>
      <div class="stat"><span class="stat-n">${
        globalPct === null ? "—" : `${globalPct}%`
      }</span><span class="stat-l">précision</span></div>
      <div class="stat"><span class="stat-n">${rulesTouched}<em>/${RULES.length}</em></span><span class="stat-l">règles travaillées</span></div>
    </div>
    <div class="quick">
      <button class="big-btn primary" data-start="all">Révision générale</button>
      <button class="big-btn ${wrong ? "" : "muted"}" data-start="errors" ${
    wrong ? "" : "disabled"
  }>Mes erreurs <span class="pill">${wrong}</span></button>
    </div>
    <div class="levels">
      <span class="lbl">Difficulté :</span>
      ${[0, 1, 2, 3]
        .map(
          (l) =>
            `<button class="lvl-btn ${state.level === l ? "on" : ""}" data-level="${l}">${
              l === 0 ? "tous" : l
            }</button>`
        )
        .join("")}
    </div>
    <div class="levels aide-row">
      <span class="lbl">Aide :</span>
      ${([1, 2, 3, 4] as Aide[])
        .map(
          (a) =>
            `<button class="lvl-btn ${state.aide === a ? "on" : ""}" data-aide="${a}"
              title="${esc(AIDE_META[a].desc)}">${AIDE_META[a].label}</button>`
        )
        .join("")}
      <span class="aide-desc">${esc(AIDE_META[state.aide].desc)}</span>
    </div>
  </div>
  ${blocks}
  <div class="io">
    ${fileUiHtml()}
    <button class="link-btn" id="export">⤓ Exporter ma progression</button>
    <label class="link-btn" for="import-file">⤒ Importer</label>
    <input type="file" id="import-file" accept="application/json" hidden />
  </div>`;
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

function promptHtml(d: Drill): string {
  const p = esc(d.prompt).replace(
    /___+/g,
    '<span class="blank">_____</span>'
  );
  return p.replace(/\(([^)]+)\)/g, '<span class="cue">($1)</span>');
}

function sessionHtml(): string {
  const s = state.session!;
  const d = s.items[s.i];
  const pct = Math.round(((s.i + (s.answered ? 1 : 0)) / s.items.length) * 100);

  const input =
    d.kind === "choice"
      ? `<div class="choices">${d
          .choices!.map(
            (c, k) =>
              `<button class="choice" data-choice="${k}" ${
                s.answered ? "disabled" : ""
              }>${esc(c)}</button>`
          )
          .join("")}</div>`
      : `<div class="answer-row">
          <input id="answer" type="text" autocomplete="off" autocapitalize="off"
                 spellcheck="false" placeholder="ta réponse…"
                 value="${s.answered ? esc(s.given) : ""}" ${s.answered ? "disabled" : ""} />
          <button class="big-btn primary" id="submit">${s.answered ? "Suivant →" : "Vérifier"}</button>
        </div>`;

  let feedback = "";
  if (s.answered) {
    const tone =
      s.lastKind === "ok" ? "ok" : s.lastKind === "wrong" ? "bad" : "near";
    const head =
      s.lastKind === "ok"
        ? "✓ Correct"
        : s.lastKind === "accent"
        ? "≈ Presque — attention aux accents"
        : s.lastKind === "pronoun"
        ? "≈ Presque — il manque le pronom"
        : "✗ Pas tout à fait";
    const shown = d.answer.map((a) => `<code>${esc(a)}</code>`).join(" · ");
    feedback = `
      <div class="fb fb-${tone}">
        <p class="fb-head">${head}</p>
        ${
          s.lastKind !== "ok"
            ? `<p class="fb-line"><span class="fb-lbl">Réponse${
                d.answer.length > 1 ? "s" : ""
              } :</span> ${shown}</p>`
            : ""
        }
        <p class="fb-why">${esc(tr(d.explain))}</p>
        <a class="rule-link" href="${REFERENCE_URL}#card-${
      ID_ALIASES[d.ruleId] ?? d.ruleId
    }" target="_blank" rel="noopener">Voir la règle : ${esc(ruleName(d.ruleId))} ↗</a>
      </div>
      ${d.kind === "choice" ? `<button class="big-btn primary" id="next">Suivant →</button>` : ""}`;
  }

  // ----- assistance zone (before answering; level 4 = nothing) -----
  let help = "";
  if (!s.answered) {
    if (state.aide <= 3) s.sawHelp = s.sawHelp || state.aide <= 2 || s.indice;
    if (state.aide <= 2) {
      help = rulePanelHtml(d, state.aide === 1);
      if (state.aide === 1 && d.kind !== "choice") {
        help += `<div class="skel" title="squelette de la réponse">${skeletonHtml(
          d.answer[0]
        )}</div>`;
      }
    } else if (state.aide === 3) {
      help = s.indice
        ? rulePanelHtml(d, false)
        : `<button class="link-btn indice" id="indice">💡 Indice</button>`;
    }
  }
  const showHint =
    d.hint && (state.aide <= 2 || (state.aide === 3 && s.indice));

  const aideSel = `<select id="aide-sel" class="aide-sel" title="Niveau d'aide">
    ${([1, 2, 3, 4] as Aide[])
      .map(
        (a) =>
          `<option value="${a}" ${state.aide === a ? "selected" : ""}>Aide : ${
            AIDE_META[a].label
          }</option>`
      )
      .join("")}
  </select>`;

  return `
  <div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>
  <div class="q-head">
    <span class="q-count">${s.i + 1} / ${s.items.length}</span>
    <span class="q-rule">${esc(ruleName(d.ruleId))}</span>
    <span class="q-lvl">difficulté ${d.level}</span>
    ${aideSel}
    <button class="link-btn quit" id="quit">Arrêter</button>
  </div>
  <div class="q-card">
    <p class="q-prompt">${promptHtml(d)}</p>
    ${showHint ? `<p class="q-hint">${esc(d.hint!)}</p>` : ""}
    ${help}
    ${input}
    ${feedback}
  </div>`;
}

function resultHtml(): string {
  const s = state.session!;
  const ok = s.results.filter((r) => r.ok).length;
  const n = s.results.length;
  const pct = n ? Math.round((ok / n) * 100) : 0;
  const missed = s.results.filter((r) => !r.ok);
  const helpedOk = s.results.filter((r) => r.ok && r.helped).length;

  const list = missed
    .map(
      (r) => `<li class="miss">
        <div class="miss-p">${promptHtml(r.drill)}${
        r.helped ? ` <span class="badge-help">avec aide</span>` : ""
      }</div>
        <div class="miss-a"><span class="bad">${esc(r.given || "—")}</span> → <span class="good">${esc(
        r.drill.answer[0]
      )}</span></div>
        <div class="miss-w">${esc(tr(r.drill.explain))}</div>
      </li>`
    )
    .join("");

  return `
  <div class="result">
    <div class="score ${pct >= 80 ? "great" : pct >= 50 ? "mid" : "low"}">
      <div class="ring" style="--p:${pct}"><span>${pct}%</span></div>
      <span class="score-n">${ok}<em>/${n}</em></span>
    </div>
    <p class="sub">${esc(s.label)} · aide : ${AIDE_META[state.aide].label.toLowerCase()}${
    helpedOk ? ` · ${helpedOk} bonne${helpedOk > 1 ? "s" : ""} réponse${
        helpedOk > 1 ? "s" : ""
      } avec aide` : ""
  }</p>
    ${
      missed.length
        ? `<h3>À revoir (${missed.length})</h3><ul class="misses">${list}</ul>`
        : `<p class="perfect">Série parfaite. 🎉</p>`
    }
    <div class="quick">
      ${
        missed.length
          ? `<button class="big-btn primary" id="retry">Rejouer mes erreurs</button>`
          : ""
      }
      <button class="big-btn" id="home">← Retour</button>
    </div>
  </div>`;
}

// ---------- flow ----------

function render(): void {
  const main = document.getElementById("main")!;
  if (state.screen === "home") main.innerHTML = homeHtml();
  else if (state.screen === "session") main.innerHTML = sessionHtml();
  else main.innerHTML = resultHtml();

  const inp = document.getElementById("answer") as HTMLInputElement | null;
  if (inp && !state.session?.answered) inp.focus();
}

function submit(given: string): void {
  const s = state.session!;
  if (s.answered) return;
  const d = s.items[s.i];
  const helped = helpedNow();
  const kind = grade(d, given);
  const ok = kind === "ok";
  s.answered = true;
  s.lastOk = ok;
  s.lastKind = kind;
  s.given = given;
  s.results.push({ drill: d, ok, given, helped });
  recordAnswer(d, ok, helped);
  persist();
  render();
}

function next(): void {
  const s = state.session!;
  if (s.i + 1 >= s.items.length) {
    state.screen = "result";
  } else {
    s.i++;
    s.answered = false;
    s.given = "";
    s.indice = false;
    s.sawHelp = false;
  }
  render();
}

function start(ruleId: string): void {
  const label =
    ruleId === "all"
      ? "Révision générale"
      : ruleId === "errors"
      ? "Mes erreurs"
      : ruleName(ruleId);
  const sess = buildSet(ruleId, label);
  if (!sess.items.length) return;
  state.session = sess;
  state.screen = "session";
  render();
}

function download(): void {
  const blob = new Blob([JSON.stringify(progress, null, 2)], {
    type: "application/json",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "progression-exercices.json";
  a.click();
  URL.revokeObjectURL(a.href);
}

function init(): void {
  document.body.addEventListener("click", (e) => {
    const t = e.target as HTMLElement;

    const startBtn = t.closest<HTMLElement>("[data-start]");
    if (startBtn) return start(startBtn.dataset.start!);

    const lvl = t.closest<HTMLElement>("[data-level]");
    if (lvl) {
      state.level = Number(lvl.dataset.level) as 0 | 1 | 2 | 3;
      persist();
      return render();
    }

    const aide = t.closest<HTMLElement>("[data-aide]");
    if (aide) {
      state.aide = Number(aide.dataset.aide) as Aide;
      persist();
      return render();
    }

    if (t.closest("#fs-connect")) {
      void fstore
        .connect()
        .then((data) => {
          if (data) applySaved(data);
          persist(); // write current state into the (possibly empty) file
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

    if (t.closest("#indice")) {
      state.session!.indice = true;
      return render();
    }

    const ch = t.closest<HTMLElement>("[data-choice]");
    if (ch) {
      const d = state.session!.items[state.session!.i];
      return submit(d.choices![Number(ch.dataset.choice)]);
    }

    if (t.closest("#submit")) {
      const s = state.session!;
      if (s.answered) return next();
      const inp = document.getElementById("answer") as HTMLInputElement;
      return submit(inp.value);
    }
    if (t.closest("#next")) return next();
    if (t.closest("#quit")) {
      state.screen = state.session!.results.length ? "result" : "home";
      return render();
    }
    if (t.closest("#home")) {
      state.screen = "home";
      state.session = null;
      return render();
    }
    if (t.closest("#retry")) return start("errors");
    if (t.closest("#export")) return download();
  });

  document.body.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" || state.screen !== "session") return;
    e.preventDefault();
    const s = state.session!;
    if (s.answered) return next();
    const inp = document.getElementById("answer") as HTMLInputElement | null;
    if (inp) submit(inp.value);
  });

  document.getElementById("main")!.addEventListener("change", (e) => {
    const sel = e.target as HTMLSelectElement;
    if (sel.id === "aide-sel") {
      state.aide = Number(sel.value) as Aide;
      persist();
      return render();
    }
    const f = e.target as HTMLInputElement;
    if (f.id !== "import-file" || !f.files?.[0]) return;
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
    reader.readAsText(f.files[0]);
  });

  document.querySelectorAll<HTMLButtonElement>(".lang-btn").forEach((b) =>
    b.addEventListener("click", () => {
      state.lang = b.dataset.lang as "fr" | "en" | "uk";
      document
        .querySelectorAll(".lang-btn")
        .forEach((x) => x.classList.toggle("active", x === b));
      persist();
      render();
    })
  );

  render();

  // resolve the file-storage status (async), then refresh the home screen
  void fstore.init().then(() => {
    if (state.screen === "home") render();
  });
  // flush a pending debounced write when the tab closes
  window.addEventListener("beforeunload", () => void fstore.flush());

  // testability hook: lets the build harness grade every item against its own key
  (window as unknown as Record<string, unknown>).__grade = (id: string, given: string) => {
    const d = DRILLS.find((x) => x.id === id);
    return d ? grade(d, given) : "unknown";
  };
}

document.addEventListener("DOMContentLoaded", init);
