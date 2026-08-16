// ============================================================
// Les Temps du Français — A2 · application
// ============================================================

import {
  TENSES,
  STRUCTURES,
  CONTRASTS,
  ROLE_LABELS,
  ID_ALIASES,
  VISUALS,
  type Tense,
  type Visual,
  type Part,
  type Cell,
  type Structure,
  type I18n,
  type Example,
  type Role,
} from "../../content/src/index";

type View = "overview" | "cards" | "structures" | "connecteurs" | "compare";

interface State {
  view: View;
  compareA: string;
  compareB: string;
}

const state: State = {
  view: "overview",
  compareA: "passe-compose",
  compareB: "imparfait",
};

const ROLES: Role[] = ["aux", "stem", "end", "part", "inf", "pron"];

// ---------- helpers ----------

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Parse colour markup {text:role} into spans. */
function marked(src: string): string {
  let out = "";
  let last = 0;
  const re = /\{([^:{}]+):(aux|stem|end|part|inf|pron)\}/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src)) !== null) {
    out += esc(src.slice(last, m.index));
    out += `<span class="role role-${m[2]}">${esc(m[1])}</span>`;
    last = m.index + m[0].length;
  }
  out += esc(src.slice(last));
  return out;
}

/** Trilingual block: FR always visible, EN/UK toggled globally. */
function tri(t: I18n, frHtml = false): string {
  const fr = frHtml ? marked(t.fr) : esc(t.fr);
  return (
    `<span class="fr">${fr}</span>` +
    `<span class="tr tr-en">${esc(t.en)}</span>` +
    `<span class="tr tr-uk">${esc(t.uk)}</span>`
  );
}

function resolve(id: string): string {
  return ID_ALIASES[id] ?? id;
}

function tenseById(id: string): Tense {
  const t = TENSES.find((x) => x.id === resolve(id));
  if (!t) throw new Error(`Unknown tense: ${id}`);
  return t;
}

function structureById(id: string): Structure | undefined {
  return STRUCTURES.find((x) => x.id === resolve(id));
}

/** Display name for any card id — tense or structure. */
function nameById(id: string): string {
  const s = structureById(id);
  if (s) return s.name;
  const t = TENSES.find((x) => x.id === resolve(id));
  return t ? t.name : id;
}

/** Which view holds this card? */
function viewOf(id: string): View {
  const s = structureById(id);
  if (s) return s.section === "connecteurs" ? "connecteurs" : "structures";
  return "cards";
}

// ---------- shared components ----------

function legendHtml(): string {
  const items = ROLES.map(
    (r) =>
      `<span class="legend-item"><span class="legend-dot role-${r}"></span>${tri(
        ROLE_LABELS[r]
      )}</span>`
  ).join("");
  return `<div class="legend" aria-label="Code couleur">${items}</div>`;
}

function badgeHtml(t: Tense): string {
  return t.badge === "essentiel"
    ? `<span class="badge badge-core">★ essentiel</span>`
    : `<span class="badge badge-soft">◐ à reconnaître</span>`;
}

function exampleHtml(ex: Example, tenseId: string, i: number, open = false): string {
  const note = ex.note
    ? `<div class="ex-note">💡 ${tri(ex.note)}</div>`
    : "";
  return `
  <li class="example ${open ? "revealed" : ""}" data-ex="${tenseId}-${i}">
    <button class="reveal-btn" type="button" aria-expanded="${open}">
      <span class="when-hidden">👁 Montrer</span><span class="when-shown">Cacher</span>
    </button>
    <div class="ex-body">
      <div class="ex-fr">${marked(ex.fr)}</div>
      <div class="ex-tr tr tr-en">${esc(ex.en)}</div>
      <div class="ex-tr tr tr-uk">${esc(ex.uk)}</div>
      ${note}
    </div>
  </li>`;
}

function tenseCardHtml(t: Tense): string {
  const usage = t.usage
    .map((u) => `<li>${tri(u)}</li>`)
    .join("");

  const tables = t.tables
    .map((tb) => {
      const rows = tb.rows
        .map(
          (r) =>
            `<tr><td class="pronoun">${esc(r.pronoun)}</td><td class="form">${marked(
              r.form
            )}</td></tr>`
        )
        .join("");
      const foot = tb.footnote
        ? `<p class="table-foot">${tri(tb.footnote)}</p>`
        : "";
      return `<div class="conj">
        <p class="conj-title">${tri(tb.title)}</p>
        <table><tbody>${rows}</tbody></table>${foot}
      </div>`;
    })
    .join("");

  const extra = t.extra
    ? `<details class="extra">
        <summary>${tri(t.extra.title)}</summary>
        <table class="extra-table"><tbody>${t.extra.rows
          .map(
            (r) =>
              `<tr><td class="pronoun">${esc(r.pronoun)}</td><td>${marked(
                r.form
              )}</td></tr>`
          )
          .join("")}</tbody></table>
        ${t.extra.footnote ? `<p class="table-foot">${tri(t.extra.footnote)}</p>` : ""}
      </details>`
    : "";

  const formulaNotes = t.formulaNotes
    .map((n) => `<li>${tri(n)}</li>`)
    .join("");

  const examples = t.examples
    .map((ex, i) => exampleHtml(ex, t.id, i))
    .join("");

  const related = t.related
    .map(
      (r) =>
        `<li><button class="link-btn" data-goto="${r.id}">${esc(
          nameById(r.id)
        )}</button> — ${tri(r.why)}</li>`
    )
    .join("");

  return `
  <article class="card" id="card-${t.id}" data-tense="${t.id}">
    <header class="card-head">
      <h2>${esc(t.name)}</h2>
      ${badgeHtml(t)}
    </header>
    <p class="tagline">${tri(t.tagline)}</p>

    <section>
      <h3>Quand l'utiliser ?</h3>
      <ul class="usage">${usage}</ul>
      ${visualsAt(t.id, "usage")}
    </section>

    <section>
      <h3>Formation</h3>
      <p class="formula">${marked(t.formula)}</p>
      <ul class="notes">${formulaNotes}</ul>
      ${visualsAt(t.id, "formation")}
      <div class="conj-row">${tables}</div>
      ${extra}
    </section>

    <section class="mnemo">
      <h3>🧠 Astuce mémo</h3>
      <p>${tri(t.mnemo)}</p>
    </section>

    <section>
      <div class="ex-head">
        <h3>Exemples</h3>
        <button class="link-btn reveal-all" data-card="${t.id}" type="button">Tout montrer</button>
      </div>
      <ul class="examples">${examples}</ul>
    </section>

    <section class="related">
      <h3>Liens avec les autres temps</h3>
      <ul>${related}</ul>
    </section>
  </article>`;
}

// ---------- overview: timeline + hub ----------

function timelineSvg(): string {
  // geometry
  const W = 960;
  const CX = 480;
  const AXIS_Y = 250;

  const wave = (() => {
    let d = `M 70 70`;
    for (let x = 70; x <= 400; x += 10) {
      const y = 70 + Math.sin((x - 70) / 18) * 7;
      d += ` L ${x} ${y.toFixed(1)}`;
    }
    return d;
  })();

  return `
<svg class="timeline" viewBox="0 0 ${W} 372" role="img" aria-label="Frise chronologique des temps">
  <!-- zones -->
  <rect x="20" y="30" width="${CX - 30}" height="250" class="zone zone-past" rx="10"/>
  <rect x="${CX + 10}" y="30" width="${W - CX - 30}" height="250" class="zone zone-future" rx="10"/>
  <text x="40" y="56" class="zone-label">LE PASSÉ</text>
  <text x="${W - 40}" y="56" class="zone-label" text-anchor="end">LE FUTUR</text>

  <!-- axis -->
  <line x1="40" y1="${AXIS_Y}" x2="${W - 48}" y2="${AXIS_Y}" class="axis"/>
  <polygon points="${W - 48},${AXIS_Y - 6} ${W - 34},${AXIS_Y} ${W - 48},${AXIS_Y + 6}" class="axis-head"/>

  <!-- NOW line / présent -->
  <g class="tl-item" data-goto="present" tabindex="0" role="button" aria-label="Le présent">
    <line x1="${CX}" y1="60" x2="${CX}" y2="292" class="now-line"/>
    <circle cx="${CX}" cy="${AXIS_Y}" r="9" class="now-dot"/>
    <circle cx="${CX}" cy="${AXIS_Y}" r="9" class="now-pulse"/>
    <text x="${CX}" y="320" text-anchor="middle" class="tl-label now-label">MAINTENANT — le présent</text>
  </g>

  <!-- imparfait: background wave -->
  <g class="tl-item" data-goto="imparfait" tabindex="0" role="button" aria-label="L'imparfait">
    <path d="${wave}" class="mark-wave"/>
    <text x="70" y="100" class="tl-label">l'imparfait <tspan class="tl-hint">— le décor, les habitudes</tspan></text>
  </g>

  <!-- passé composé: events -->
  <g class="tl-item" data-goto="passe-compose" tabindex="0" role="button" aria-label="Le passé composé">
    <line x1="150" y1="152" x2="150" y2="168" class="mark-tick"/>
    <line x1="235" y1="152" x2="235" y2="168" class="mark-tick"/>
    <line x1="320" y1="152" x2="320" y2="168" class="mark-tick"/>
    <circle cx="150" cy="160" r="7" class="mark-dot"/>
    <circle cx="235" cy="160" r="7" class="mark-dot"/>
    <circle cx="320" cy="160" r="7" class="mark-dot"/>
    <text x="70" y="192" class="tl-label">le passé composé <tspan class="tl-hint">— les événements finis</tspan></text>
  </g>

  <!-- passé récent: arrow into now -->
  <g class="tl-item" data-goto="passe-recent" tabindex="0" role="button" aria-label="Le passé récent">
    <line x1="384" y1="222" x2="458" y2="222" class="mark-arrow"/>
    <polygon points="458,216 470,222 458,228" class="mark-arrow-head"/>
    <text x="466" y="210" text-anchor="end" class="tl-label">le passé récent <tspan class="tl-hint">— je viens de…</tspan></text>
  </g>

  <!-- futur proche: arrow out of now -->
  <g class="tl-item" data-goto="futur-proche" tabindex="0" role="button" aria-label="Le futur proche">
    <line x1="502" y1="222" x2="576" y2="222" class="mark-arrow"/>
    <polygon points="576,216 588,222 576,228" class="mark-arrow-head"/>
    <text x="502" y="210" class="tl-label">le futur proche <tspan class="tl-hint">— je vais…</tspan></text>
  </g>

  <!-- futur simple: distant dots -->
  <g class="tl-item" data-goto="futur-simple" tabindex="0" role="button" aria-label="Le futur simple">
    <circle cx="700" cy="160" r="7" class="mark-dot mark-dot-hollow"/>
    <circle cx="800" cy="160" r="7" class="mark-dot mark-dot-hollow"/>
    <circle cx="875" cy="160" r="7" class="mark-dot mark-dot-hollow"/>
    <text x="640" y="192" class="tl-label">le futur simple <tspan class="tl-hint">— un jour, plus tard…</tspan></text>
  </g>

  <!-- modes strip -->
  <g class="modes">
    <text x="40" y="352" class="modes-label">Hors du temps (les modes) :</text>
    <g class="tl-item" data-goto="imperatif" tabindex="0" role="button" aria-label="L'impératif">
      <rect x="270" y="336" width="150" height="26" rx="13" class="mode-chip"/>
      <text x="345" y="353" text-anchor="middle" class="mode-text">l'impératif — Fais !</text>
    </g>
    <g class="tl-item" data-goto="conditionnel-politesse" tabindex="0" role="button" aria-label="Le conditionnel de politesse">
      <rect x="440" y="336" width="230" height="26" rx="13" class="mode-chip"/>
      <text x="555" y="353" text-anchor="middle" class="mode-text">le conditionnel — je voudrais…</text>
    </g>
  </g>
</svg>`;
}

function hubSvg(): string {
  // "The present is the hub" diagram
  interface Node {
    id: string;
    x: number;
    y: number;
    label: string;
    recipe: string;
  }
  const nodes: Node[] = [
    { id: "imparfait", x: 130, y: 84, label: "imparfait", recipe: "« nous » sans -ons + -ais" },
    { id: "passe-compose", x: 130, y: 208, label: "passé composé", recipe: "avoir / être + participe" },
    { id: "passe-recent", x: 240, y: 322, label: "passé récent", recipe: "venir + de + infinitif" },
    { id: "futur-proche", x: 660, y: 322, label: "futur proche", recipe: "aller + infinitif" },
    { id: "imperatif", x: 770, y: 84, label: "impératif", recipe: "présent sans sujet" },
  ];
  const hub = { x: 450, y: 195 };

  const spokes = nodes
    .map((n) => {
      const dx = n.x - hub.x;
      const dy = n.y - hub.y;
      const len = Math.hypot(dx, dy);
      const sx = hub.x + (dx / len) * 66;
      const sy = hub.y + (dy / len) * 40;
      const ex = n.x - (dx / len) * 78;
      const ey = n.y - (dy / len) * 30;
      const mx = (sx + ex) / 2;
      const my = (sy + ey) / 2;
      return `
      <g class="spoke">
        <line x1="${sx.toFixed(1)}" y1="${sy.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" class="spoke-line"/>
        <rect x="${mx - 92}" y="${my - 12}" width="184" height="22" rx="11" class="recipe-bg"/>
        <text x="${mx}" y="${my + 3}" text-anchor="middle" class="recipe">${esc(n.recipe)}</text>
      </g>`;
    })
    .join("");

  const nodeEls = nodes
    .map(
      (n) => `
    <g class="tl-item hub-node" data-goto="${n.id}" tabindex="0" role="button" aria-label="${esc(n.label)}">
      <rect x="${n.x - 78}" y="${n.y - 20}" width="156" height="40" rx="20" class="node-bg"/>
      <text x="${n.x}" y="${n.y + 5}" text-anchor="middle" class="node-text">${esc(n.label)}</text>
    </g>`
    )
    .join("");

  return `
<svg class="hub" viewBox="0 0 900 420" role="img" aria-label="Le présent construit les autres temps">
  ${spokes}
  ${nodeEls}
  <g class="tl-item hub-center" data-goto="present" tabindex="0" role="button" aria-label="Le présent">
    <circle cx="${hub.x}" cy="${hub.y}" r="56" class="hub-bg"/>
    <text x="${hub.x}" y="${hub.y - 2}" text-anchor="middle" class="hub-text">LE</text>
    <text x="${hub.x}" y="${hub.y + 18}" text-anchor="middle" class="hub-text">PRÉSENT</text>
  </g>
  <!-- side chain: infinitif → futur simple → conditionnel -->
  <g class="chain">
    <text x="450" y="392" text-anchor="middle" class="chain-text">
      Et à part : <tspan class="chain-strong">infinitif</tspan> + avoir →
      <tspan class="chain-link" data-goto="futur-simple">futur simple</tspan>
      → même radical + -ais →
      <tspan class="chain-link" data-goto="conditionnel-politesse">conditionnel</tspan>
    </text>
  </g>
</svg>`;
}

function overviewHtml(): string {
  return `
  <section class="panel">
    <h2 class="panel-title">La frise du temps</h2>
    <p class="panel-sub">${tri({
      fr: "Où « vit » chaque temps ? Cliquez sur un temps pour ouvrir sa fiche.",
      en: "Where does each tense “live”? Click a tense to open its card.",
      uk: "Де «живе» кожен час? Натисніть на час, щоб відкрити його картку.",
    })}</p>
    ${timelineSvg()}
  </section>

  <section class="panel">
    <h2 class="panel-title">Tout part du présent</h2>
    <p class="panel-sub">${tri({
      fr: "Apprenez bien le présent : les autres temps sont des recettes à partir de lui.",
      en: "Learn the present well: the other tenses are recipes built from it.",
      uk: "Добре вивчіть теперішній час: інші часи — це рецепти на його основі.",
    })}</p>
    ${hubSvg()}
  </section>`;
}

// ---------- cards view ----------

function cardsHtml(): string {
  const chips = TENSES.map(
    (t) =>
      `<button class="chip" data-goto="${t.id}">${esc(
        t.name.replace(/^(Le |L'|La )/, "")
      )}</button>`
  ).join("");
  return `
  <div class="toc">${chips}</div>
  ${legendHtml()}
  <div class="cards">${TENSES.map(tenseCardHtml).join("")}</div>`;
}

// ---------- compare view ----------

function compareColumn(t: Tense): string {
  const usage = t.usage.map((u) => `<li>${tri(u)}</li>`).join("");
  const tb = t.tables[0];
  const rows = tb.rows
    .map(
      (r) =>
        `<tr><td class="pronoun">${esc(r.pronoun)}</td><td class="form">${marked(
          r.form
        )}</td></tr>`
    )
    .join("");
  return `
  <div class="cmp-col">
    <h3 class="cmp-name">${esc(t.name)} ${badgeHtml(t)}</h3>
    <p class="formula">${marked(t.formula)}</p>
    <h4>Quand ?</h4>
    <ul class="usage">${usage}</ul>
    <h4>${tri(tb.title)}</h4>
    <table class="cmp-table"><tbody>${rows}</tbody></table>
    <p class="cmp-more"><button class="link-btn" data-goto="${t.id}">Voir la fiche complète →</button></p>
  </div>`;
}

function compareHtml(): string {
  const opts = (sel: string) =>
    TENSES.map(
      (t) =>
        `<option value="${t.id}" ${t.id === sel ? "selected" : ""}>${esc(
          t.name
        )}</option>`
    ).join("");

  const a = tenseById(state.compareA);
  const b = tenseById(state.compareB);

  const key = [a.id, b.id].sort().join("|");
  const contrast = CONTRASTS.find((c) => c.key === key);
  // In contrast data, `a` belongs to the alphabetically-first id.
  // Render cells in the same left/right order as the A/B pickers.
  const aIsFirst = a.id.localeCompare(b.id) <= 0;

  const cell = (t: Tense, ex: Example) => `
        <div class="face-cell">
          <div class="face-tense">${esc(t.name)}</div>
          <div class="face-fr">${marked(ex.fr)}</div>
          <div class="tr tr-en">${esc(ex.en)}</div>
          <div class="tr tr-uk">${esc(ex.uk)}</div>
        </div>`;

  const faceRows = contrast
    ? contrast.rows
        .map(
          (r) => `
      <div class="face-row">
        ${aIsFirst ? cell(a, r.a) + cell(b, r.b) : cell(a, r.b) + cell(b, r.a)}
        <div class="face-point">→ ${tri(r.point)}</div>
      </div>`
        )
        .join("")
    : "";

  const faceSection = contrast
    ? `<section class="panel face">
        <h3 class="panel-title">Face à face</h3>
        <p class="panel-sub">${tri(contrast.headline)}</p>
        ${faceRows}
      </section>`
    : `<p class="no-contrast">${tri({
        fr: "Pas de duel préparé pour cette paire — mais comparez la formation et l'usage ci-dessus ! Paires recommandées : passé composé ↔ imparfait, futur proche ↔ futur simple.",
        en: "No prepared duel for this pair — but compare the formation and usage above! Recommended pairs: passé composé ↔ imparfait, futur proche ↔ futur simple.",
        uk: "Для цієї пари немає готового дуелю — але порівняйте утворення та вжиток вище! Рекомендовані пари: passé composé ↔ imparfait, futur proche ↔ futur simple.",
      })}</p>`;

  return `
  <div class="cmp-pickers">
    <label>A <select id="cmp-a">${opts(state.compareA)}</select></label>
    <span class="vs">contre</span>
    <label>B <select id="cmp-b">${opts(state.compareB)}</select></label>
  </div>
  ${legendHtml()}
  <div class="cmp-grid">
    ${compareColumn(a)}
    ${compareColumn(b)}
  </div>
  ${faceSection}`;
}

// ---------- render + events ----------

function render(): void {
  const main = document.getElementById("main")!;
  document
    .querySelectorAll<HTMLButtonElement>(".nav-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.view === state.view));

  if (state.view === "overview") main.innerHTML = overviewHtml();
  else if (state.view === "cards") main.innerHTML = cardsHtml();
  else if (state.view === "structures") main.innerHTML = sectionHtml("structures");
  else if (state.view === "connecteurs") main.innerHTML = sectionHtml("connecteurs");
  else main.innerHTML = compareHtml();

  if (state.view === "compare") {
    (document.getElementById("cmp-a") as HTMLSelectElement).addEventListener(
      "change",
      (e) => {
        state.compareA = (e.target as HTMLSelectElement).value;
        render();
      }
    );
    (document.getElementById("cmp-b") as HTMLSelectElement).addEventListener(
      "change",
      (e) => {
        state.compareB = (e.target as HTMLSelectElement).value;
        render();
      }
    );
  }
}

function goToTense(rawId: string): void {
  const id = resolve(rawId);
  const want = viewOf(id);
  if (state.view !== want) {
    state.view = want;
    render();
  }
  const el = document.getElementById(`card-${id}`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.remove("flash");
    // retrigger animation
    void el.offsetWidth;
    el.classList.add("flash");
  }
}

function init(): void {
  // nav
  document.querySelectorAll<HTMLButtonElement>(".nav-btn").forEach((b) =>
    b.addEventListener("click", () => {
      state.view = b.dataset.view as View;
      render();
      window.scrollTo({ top: 0 });
    })
  );

  // translation toggles
  const btnEn = document.getElementById("toggle-en")!;
  const btnUk = document.getElementById("toggle-uk")!;
  btnEn.addEventListener("click", () => {
    document.body.classList.toggle("show-en");
    btnEn.classList.toggle("active");
  });
  btnUk.addEventListener("click", () => {
    document.body.classList.toggle("show-uk");
    btnUk.classList.toggle("active");
  });

  // delegated clicks: reveal, goto, reveal-all
  document.body.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;

    const goto = target.closest<HTMLElement>("[data-goto]");
    if (goto) {
      goToTense(goto.dataset.goto!);
      return;
    }

    const revealAll = target.closest<HTMLElement>(".reveal-all");
    if (revealAll) {
      const card = document.getElementById(`card-${revealAll.dataset.card}`)!;
      const examples = card.querySelectorAll(".example");
      const anyHidden = Array.from(examples).some(
        (x) => !x.classList.contains("revealed")
      );
      examples.forEach((x) => x.classList.toggle("revealed", anyHidden));
      revealAll.textContent = anyHidden ? "Tout cacher" : "Tout montrer";
      return;
    }

    const ex = target.closest<HTMLElement>(".example");
    if (ex && (target.closest(".reveal-btn") || !ex.classList.contains("revealed"))) {
      ex.classList.toggle("revealed");
      return;
    }
  });

  // keyboard activation for SVG items
  document.body.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const goto = (e.target as HTMLElement).closest?.<HTMLElement>("[data-goto]");
    if (goto) {
      e.preventDefault();
      goToTense(goto.dataset.goto!);
    }
  });

  render();

  // deep link from the exercises app: #card-<id>
  const openHash = (): void => {
    const m = /^#card-(.+)$/.exec(location.hash);
    if (m) goToTense(m[1]);
  };
  window.addEventListener("hashchange", openHash);
  openHash();
}

document.addEventListener("DOMContentLoaded", init);


// ---------- structures & connecteurs ----------

/** marked() + a tiny whitelist of layout tags allowed inside table cells. */
function rich(src: string): string {
  return marked(src)
    .replace(/&lt;br\s*\/?&gt;/g, "<br>")
    .replace(/&lt;(\/?)(b|em|strong|small)&gt;/g, "<$1$2>");
}

/** A cell is either a bare French form (never translated) or a trilingual block. */
function cellHtml(c: Cell): string {
  if (typeof c === "string") return rich(c);
  return (
    `<span class="fr">${rich(c.fr)}</span>` +
    `<span class="tr tr-en">${rich(c.en)}</span>` +
    `<span class="tr tr-uk">${rich(c.uk)}</span>`
  );
}

function blockHtml(b: Structure["blocks"][number]): string {
  if (b.kind === "rule") {
    return `<div class="rule-box">
      <p class="rule-title">${tri(b.title)}</p>
      <p class="rule-body">${tri(b.body)}</p>
    </div>`;
  }
  if (b.kind === "list") {
    return `<div class="blk">
      <p class="conj-title">${tri(b.title)}</p>
      <ul class="notes">${b.items.map((i) => `<li>${tri(i)}</li>`).join("")}</ul>
    </div>`;
  }
  const head = b.head.map((h) => `<th>${cellHtml(h)}</th>`).join("");
  const rows = b.rows
    .map((r) => `<tr>${r.map((c) => `<td>${cellHtml(c)}</td>`).join("")}</tr>`)
    .join("");
  const note = b.note ? `<p class="table-foot">${tri(b.note)}</p>` : "";
  return `<div class="blk">
    <p class="conj-title">${tri(b.title)}</p>
    <div class="grid-table-wrap">
      <table class="grid-table"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>
    </div>${note}
  </div>`;
}

function structureCardHtml(s: Structure): string {
  // each diagram is emitted straight after the rule block it illustrates
  const vis = VISUALS[s.id] ?? [];
  const blocks =
    s.blocks
      .map(
        (b, i) =>
          blockHtml(b) +
          vis
            .filter((v) => v.afterBlock === i)
            .map(visualHtml)
            .join("")
      )
      .join("") +
    vis
      .filter((v) => v.afterBlock === undefined || v.afterBlock >= s.blocks.length)
      .map(visualHtml)
      .join("");
  const pitfalls = s.pitfalls
    .map(
      (p) => `<li class="pitfall">
        <div class="pf-pair">
          <span class="pf-bad">${esc(p.bad)}</span>
          <span class="pf-arrow">→</span>
          <span class="pf-good">${esc(p.good)}</span>
        </div>
        <div class="pf-why">${tri(p.why)}</div>
      </li>`
    )
    .join("");
  const examples = s.examples.map((ex, i) => exampleHtml(ex, s.id, i)).join("");
  const related = s.related
    .map(
      (r) =>
        `<li><button class="link-btn" data-goto="${r.id}">${esc(
          nameById(r.id)
        )}</button> — ${tri(r.why)}</li>`
    )
    .join("");

  return `
  <article class="card" id="card-${s.id}" data-structure="${s.id}">
    <header class="card-head">
      <h2>${esc(s.name)}</h2>
      ${
        s.badge === "essentiel"
          ? `<span class="badge badge-core">★ essentiel</span>`
          : `<span class="badge badge-soft">◐ à reconnaître</span>`
      }
    </header>
    <p class="tagline">${tri(s.tagline)}</p>

    ${blocks}

    <section class="pitfalls">
      <h3>⚠ Pièges à éviter</h3>
      <ul class="pitfall-list">${pitfalls}</ul>
    </section>

    <section>
      <div class="ex-head">
        <h3>Exemples</h3>
        <button class="link-btn reveal-all" data-card="${s.id}" type="button">Tout montrer</button>
      </div>
      <ul class="examples">${examples}</ul>
    </section>

    <section class="related">
      <h3>Liens</h3>
      <ul>${related}</ul>
    </section>
  </article>`;
}

function sectionHtml(section: Structure["section"]): string {
  const list = STRUCTURES.filter((s) => s.section === section);
  const chips = list
    .map((s) => `<button class="chip" data-goto="${s.id}">${esc(s.name.replace(/^(Le |L\'|La |Les )/, ""))}</button>`)
    .join("");
  const intro =
    section === "structures"
      ? "Les constructions qui organisent la phrase : hypothèse, discours rapporté, restriction."
      : "Les mots qui articulent le raisonnement : pourquoi, et donc.";
  return `
  <div class="toc">${chips}</div>
  <p class="panel-sub section-intro">${esc(intro)}</p>
  ${legendHtml()}
  <div class="cards">${list.map(structureCardHtml).join("")}</div>`;
}


// ---------- schémas ----------

const TONE: Record<string, string> = {
  past: "var(--role-end)",
  now: "var(--ink-2)",
  future: "var(--role-stem)",
  accent: "var(--accent)",
  warn: "var(--role-inf)",
  good: "var(--role-stem)",
};

function tone(t?: string): string {
  return TONE[t ?? "accent"] ?? TONE.accent;
}

function partHtml(p: Part, extra = ""): string {
  const cls = p.role ? ` role-${p.role}` : "";
  return `<span class="blk${cls}${extra}">${esc(p.text)}</span>`;
}

function capHtml(v: Visual): string {
  return v.caption ? `<p class="dg-cap">${tri(v.caption)}</p>` : "";
}

function assemblyHtml(v: Extract<Visual, { kind: "assembly" }>): string {
  const src = v.sources?.length
    ? `<div class="dg-src">${v.sources
        .map(
          (s) =>
            `<span class="dg-src-i"><span class="dg-src-l">${esc(s.label)}</span>` +
            `<span class="blk ghost${s.role ? ` role-${s.role}` : ""}">${esc(s.text)}</span></span>`
        )
        .join("")}<span class="dg-src-arrow">↓</span></div>`
    : "";
  const parts = v.parts
    .map(
      (p) =>
        `<span class="dg-unit">${partHtml(p)}${
          p.label ? `<span class="dg-lab">${esc(p.label)}</span>` : ""
        }</span>`
    )
    .join(`<span class="dg-op">+</span>`);
  const res = v.result
    ? `<span class="dg-op">=</span><span class="dg-unit"><span class="blk res">${esc(
        v.result
      )}</span></span>`
    : "";
  return `<figure class="dg dg-assembly">${src}<div class="dg-row">${parts}${res}</div>${capHtml(
    v
  )}</figure>`;
}

function slotsHtml(v: Extract<Visual, { kind: "slots" }>): string {
  const rows = v.rows
    .map(
      (r) => `<div class="dg-slot ${r.bad ? "is-bad" : ""}">
        ${r.label ? `<span class="dg-slot-l">${esc(r.label)}</span>` : ""}
        <span class="dg-slot-c">${r.cells.map((c) => partHtml(c)).join("")}</span>
        ${r.note ? `<span class="dg-note">${esc(r.note)}</span>` : ""}
      </div>`
    )
    .join("");
  return `<figure class="dg dg-slots">${rows}${capHtml(v)}</figure>`;
}

function flowHtml(v: Extract<Visual, { kind: "flow" }>): string {
  const rows = v.rows
    .map(
      (r) => `<div class="dg-flow-r ${r.same ? "is-same" : ""}">
        <span class="dg-f-a">${esc(r.from)}</span>
        <span class="dg-f-arrow" style="--c:${r.same ? "var(--muted)" : tone(r.tone)}">
          ${r.edge ? `<span class="dg-edge">${esc(r.edge)}</span>` : ""}
        </span>
        <span class="dg-f-b" style="--c:${r.same ? "var(--muted)" : tone(r.tone)}">${esc(
        r.to
      )}</span>
      </div>`
    )
    .join("");
  return `<figure class="dg dg-flow">
    <div class="dg-flow-h"><span>${esc(v.fromLabel)}</span><span>${esc(v.toLabel)}</span></div>
    ${rows}${capHtml(v)}
  </figure>`;
}

function pairsHtml(v: Extract<Visual, { kind: "pairs" }>): string {
  const rows = v.rows
    .map(
      (r) => `<div class="dg-pair" style="--c:${tone(r.tone)}">
        <span class="dg-tag">${esc(r.tag)}</span>
        <span class="dg-p-a">${esc(r.left)}</span>
        <span class="dg-p-arrow"></span>
        <span class="dg-p-b">${esc(r.right)}</span>
        ${r.note ? `<span class="dg-note">${esc(r.note)}</span>` : ""}
      </div>`
    )
    .join("");
  return `<figure class="dg dg-pairs">
    <div class="dg-pair-h"><span></span><span>${esc(v.leftLabel)}</span><span></span><span>${esc(
    v.rightLabel
  )}</span></div>
    ${rows}${capHtml(v)}
  </figure>`;
}

// ---- SVG diagrams ----

const W = 720;
const X0 = 62;
const X1 = 658;

function tx(at: number): number {
  return X0 + ((at + 1) / 2) * (X1 - X0);
}

function timelineSvgFor(v: Extract<Visual, { kind: "timeline" }>): string {
  const AY = 66;
  const mid = tx(0);
  const parts: string[] = [];

  parts.push(
    `<rect x="${X0}" y="${AY - 13}" width="${mid - X0}" height="26" fill="var(--zone-past)" rx="4"/>`,
    `<rect x="${mid}" y="${AY - 13}" width="${X1 - mid}" height="26" fill="var(--zone-future)" rx="4"/>`,
    `<line x1="${X0}" y1="${AY}" x2="${X1}" y2="${AY}" stroke="var(--hairline)" stroke-width="2"/>`,
    `<line x1="${mid}" y1="${AY - 20}" x2="${mid}" y2="${AY + 20}" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="3 3"/>`,
    `<text x="${X0 - 4}" y="${AY + 4}" class="dg-end" text-anchor="end">passé</text>`,
    `<text x="${X1 + 4}" y="${AY + 4}" class="dg-end" text-anchor="start">futur</text>`
  );

  for (const m of v.marks) {
    const c = tone(m.tone);
    const x = tx(m.at);
    const ly = m.below ? AY + 34 : AY - 26;
    const lx = Math.max(96, Math.min(W - 96, m.type === "point" ? x : (x + tx(m.to ?? m.at)) / 2));

    if (m.type === "point") {
      parts.push(
        `<circle cx="${x}" cy="${AY}" r="5.5" fill="${c}" stroke="var(--surface)" stroke-width="2"/>`,
        `<line x1="${x}" y1="${AY + (m.below ? 8 : -8)}" x2="${lx}" y2="${
          ly + (m.below ? -10 : 8)
        }" stroke="${c}" stroke-width="1" opacity="0.45"/>`
      );
    } else if (m.type === "span") {
      const x2 = tx(m.to ?? m.at);
      parts.push(
        `<rect x="${x}" y="${AY - 6}" width="${Math.max(
          6,
          x2 - x
        )}" height="12" rx="6" fill="${c}" opacity="0.32"/>`,
        `<rect x="${x}" y="${AY - 6}" width="${Math.max(
          6,
          x2 - x
        )}" height="12" rx="6" fill="none" stroke="${c}" stroke-width="1.5"/>`
      );
    } else {
      const x2 = tx(m.to ?? m.at);
      parts.push(
        `<line x1="${x}" y1="${AY}" x2="${x2 - 8}" y2="${AY}" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`,
        `<path d="M ${x2 - 9} ${AY - 6} L ${x2} ${AY} L ${x2 - 9} ${AY + 6} Z" fill="${c}"/>`
      );
    }
    parts.push(
      `<text x="${lx}" y="${ly}" class="dg-mk" text-anchor="middle" fill="${c}">${esc(
        m.label
      )}</text>`
    );
  }

  return `<figure class="dg dg-svg">
    <svg viewBox="0 0 ${W} 116" role="img" aria-label="${esc(
      v.marks.map((m) => m.label).join(", ")
    )}">${parts.join("")}</svg>${capHtml(v)}
  </figure>`;
}

let axisSeq = 0;

function axisSvgFor(v: Extract<Visual, { kind: "axis" }>): string {
  const AY = 62;
  const gid = `axg${++axisSeq}`;
  const parts: string[] = [
    `<defs><linearGradient id="${gid}" x1="0" x2="1">
      <stop offset="0" stop-color="var(--role-inf)" stop-opacity="0.8"/>
      <stop offset="0.5" stop-color="var(--accent)" stop-opacity="0.8"/>
      <stop offset="1" stop-color="var(--role-stem)" stop-opacity="0.8"/>
    </linearGradient></defs>`,
    `<line x1="${X0}" y1="${AY}" x2="${X1}" y2="${AY}" stroke="var(--hairline)" stroke-width="8" stroke-linecap="round"/>`,
    `<line x1="${X0}" y1="${AY}" x2="${X1}" y2="${AY}" stroke="url(#${gid})" stroke-width="5" stroke-linecap="round"/>`,
    `<text x="${X0}" y="${AY + 26}" class="dg-end" text-anchor="start">${esc(v.leftLabel)}</text>`,
    `<text x="${X1}" y="${AY + 26}" class="dg-end" text-anchor="end">${esc(v.rightLabel)}</text>`,
  ];

  v.marks.forEach((m, i) => {
    const c = tone(m.tone);
    const x = X0 + m.at * (X1 - X0);
    const ly = i % 2 === 0 ? AY - 30 : AY - 12;
    const lx = Math.max(70, Math.min(W - 70, x));
    parts.push(
      `<line x1="${x}" y1="${AY - 6}" x2="${lx}" y2="${ly + 5}" stroke="${c}" stroke-width="1" opacity="0.4"/>`,
      `<circle cx="${x}" cy="${AY}" r="5" fill="${c}" stroke="var(--surface)" stroke-width="2"/>`,
      `<text x="${lx}" y="${ly}" class="dg-mk" text-anchor="middle" fill="${c}">${esc(m.label)}</text>`
    );
  });

  return `<figure class="dg dg-svg">
    <svg viewBox="0 0 ${W} 100" role="img" aria-label="${esc(
      v.leftLabel + " → " + v.rightLabel
    )}">${parts.join("")}</svg>${capHtml(v)}
  </figure>`;
}

function visualHtml(v: Visual): string {
  switch (v.kind) {
    case "assembly":
      return assemblyHtml(v);
    case "slots":
      return slotsHtml(v);
    case "flow":
      return flowHtml(v);
    case "pairs":
      return pairsHtml(v);
    case "timeline":
      return timelineSvgFor(v);
    case "axis":
      return axisSvgFor(v);
  }
}

/** Diagrams for a Tense card, filtered to the section they belong to. */
function visualsAt(id: string, anchor: "usage" | "formation"): string {
  const list = (VISUALS[id] ?? []).filter((v) => (v.anchor ?? "formation") === anchor);
  return list.length ? list.map(visualHtml).join("") : "";
}
