// ============================================================
// Les Temps du Français — A2 · application
// ============================================================

import {
  TENSES,
  CONTRASTS,
  ROLE_LABELS,
  type Tense,
  type I18n,
  type Example,
  type Role,
} from "./data";

type View = "overview" | "cards" | "compare";

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

function tenseById(id: string): Tense {
  const t = TENSES.find((x) => x.id === id);
  if (!t) throw new Error(`Unknown tense: ${id}`);
  return t;
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
    ? `<span class="badge badge-core">★ essentiel A2</span>`
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
          tenseById(r.id).name
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
    </section>

    <section>
      <h3>Formation</h3>
      <p class="formula">${marked(t.formula)}</p>
      <ul class="notes">${formulaNotes}</ul>
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

function goToTense(id: string): void {
  if (state.view !== "cards") {
    state.view = "cards";
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
}

document.addEventListener("DOMContentLoaded", init);
