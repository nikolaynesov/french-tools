// Auto-split from the original tenses-app data.ts — shared by all three apps.
// ============================================================
// Types partagés — référence, exercices, vocabulaire
// IDs are stable: the future exercises app will reference them.
// ============================================================

/** Morphology roles used for colour coding across the whole app. */
export type Role = "aux" | "stem" | "end" | "part" | "inf" | "pron";

/** Trilingual text block: French first, translations toggleable. */
export interface I18n {
  fr: string;
  en: string;
  uk: string;
}

export interface Example {
  /** French sentence with colour markup: {text:role}, e.g. "j'{ai:aux} {mang:stem}{é:part}" */
  fr: string;
  en: string;
  uk: string;
  note?: I18n;
}

export interface ConjRow {
  pronoun: string;
  /** form with colour markup */
  form: string;
}

export interface ConjTable {
  title: I18n;
  rows: ConjRow[];
  footnote?: I18n;
}

export interface Tense {
  id: string;
  name: string;
  badge: "essentiel" | "reconnaitre";
  tagline: I18n;
  usage: I18n[];
  /** formation formula with colour markup */
  formula: string;
  formulaNotes: I18n[];
  tables: ConjTable[];
  /** collapsible extra (irregulars etc.) */
  extra?: { title: I18n; rows: ConjRow[]; footnote?: I18n };
  mnemo: I18n;
  examples: Example[];
  related: { id: string; why: I18n }[];
}

// ------------------------------------------------------------
// The 8 tenses
// ------------------------------------------------------------
// ------------------------------------------------------------
// Curated face-à-face contrasts for the compare view.
// Key = two ids sorted alphabetically, joined by "|".
// ------------------------------------------------------------

export interface ContrastRow {
  a: Example; // example in tense A (alphabetically first id)
  b: Example; // example in tense B
  point: I18n; // what this row demonstrates
}

export interface ContrastSet {
  key: string;
  headline: I18n;
  rows: ContrastRow[];
}

// ------------------------------------------------------------
// Structures & connecteurs (added for the B1 extension)
// ------------------------------------------------------------

/** A wrong→right pair drawn from the learner's real mistakes. */
export interface Pitfall {
  bad: string;
  good: string;
  why: I18n;
}

/** A table cell: a bare French string (a form being taught — never translated),
 *  or a trilingual block (an example, a nuance — shown in EN/УКР when toggled). */
export type Cell = string | I18n;

export type Block =
  | { kind: "rule"; title: I18n; body: I18n }
  | { kind: "table"; title: I18n; head: Cell[]; rows: Cell[][]; note?: I18n }
  | { kind: "list"; title: I18n; items: I18n[] };

export interface Structure {
  id: string;
  name: string;
  section: "structures" | "connecteurs";
  badge: "essentiel" | "reconnaitre";
  tagline: I18n;
  blocks: Block[];
  pitfalls: Pitfall[];
  examples: Example[];
  related: { id: string; why: I18n }[];
}

// ------------------------------------------------------------
// Exercises
// ------------------------------------------------------------

export type DrillKind = "conjugate" | "cloze" | "choice" | "transform";

export interface Drill {
  id: string;
  /** id of a Tense or a Structure — deep-links to its card in the reference app */
  ruleId: string;
  kind: DrillKind;
  prompt: string;
  hint?: string;
  choices?: string[];
  /** every acceptable answer, correctly accented */
  answer: string[];
  explain: I18n;
  tags: string[];
  level: 1 | 2 | 3;
}

// ------------------------------------------------------------
// Vocabulary
// ------------------------------------------------------------

export interface VocabItem {
  id: string;
  fr: string;
  uk: string;
  en: string;
  pos: string;
  theme: string;
  example: string;
  note?: string;
  source: string;
}

// ------------------------------------------------------------
// Visuals — schematic diagrams attached to a rule card.
// Box-shaped kinds render as HTML/CSS; geometric ones as SVG.
// ------------------------------------------------------------

/** A morphology block: text + the role that colours it. */
export interface Part {
  text: string;
  role?: Role;
  /** small label under the block, e.g. "radical du futur" */
  label?: string;
}

export type Tone = "past" | "now" | "future" | "accent" | "warn" | "good";

/** Where a diagram sits inside a Tense card. Structures use afterBlock instead. */
export type VisualAnchor = "usage" | "formation";

export type Visual =
  /** Formation as blocks that snap together: radical + terminaison = forme. */
  | {
      kind: "assembly";
      caption?: I18n;
      anchor?: VisualAnchor;
      afterBlock?: number;
      parts: Part[];
      /** what the blocks add up to */
      result?: string;
      /** optional second source line, e.g. the futur stem feeding the conditional */
      sources?: { label: string; text: string; role?: Role }[];
    }
  /** Where the tense sits on a past ← maintenant → futur axis. */
  | {
      kind: "timeline";
      caption?: I18n;
      anchor?: VisualAnchor;
      afterBlock?: number;
      marks: {
        type: "point" | "span" | "arrow";
        /** −1 = passé lointain, 0 = maintenant, 1 = futur lointain */
        at: number;
        /** end of a span */
        to?: number;
        label: string;
        tone?: Tone;
        below?: boolean;
      }[];
    }
  /** A transformation ladder: left column becomes right column. */
  | {
      kind: "flow";
      caption?: I18n;
      anchor?: VisualAnchor;
      afterBlock?: number;
      fromLabel: string;
      toLabel: string;
      rows: { from: string; to: string; edge?: string; tone?: Tone; same?: boolean }[];
    }
  /** Condition → résultat couples, one band per row. */
  | {
      kind: "pairs";
      caption?: I18n;
      anchor?: VisualAnchor;
      afterBlock?: number;
      leftLabel: string;
      rightLabel: string;
      rows: { tag: string; left: string; right: string; tone?: Tone; note?: string }[];
    }
  /** A spectrum with markers — register, polarity. */
  | {
      kind: "axis";
      caption?: I18n;
      anchor?: VisualAnchor;
      afterBlock?: number;
      leftLabel: string;
      rightLabel: string;
      marks: { at: number; label: string; tone?: Tone }[];
    }
  /** A sentence broken into slots, with one slot highlighted. */
  | {
      kind: "slots";
      caption?: I18n;
      anchor?: VisualAnchor;
      afterBlock?: number;
      rows: { label?: string; cells: Part[]; note?: string; bad?: boolean }[];
    };
