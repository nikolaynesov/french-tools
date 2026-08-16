// Auto-split from the original tenses-app data.ts — shared by all three apps.
import type { I18n, Role } from "./types";

// ------------------------------------------------------------
// UI strings (French-first interface)
// ------------------------------------------------------------

export function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Parse colour markup {text:role} into spans — same rendering in every app. */
export function markedHtml(src: string): string {
  let out = "";
  let last = 0;
  const re = /\{([^:{}]+):(aux|stem|end|part|inf|pron)\}/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src)) !== null) {
    out += escapeHtml(src.slice(last, m.index));
    out += `<span class="role role-${m[2]}">${escapeHtml(m[1])}</span>`;
    last = m.index + m[0].length;
  }
  out += escapeHtml(src.slice(last));
  return out;
}

export const ROLE_LABELS: Record<Role, I18n> = {
  aux: { fr: "auxiliaire / semi-auxiliaire", en: "auxiliary", uk: "допоміжне дієслово" },
  stem: { fr: "radical", en: "stem", uk: "основа" },
  end: { fr: "terminaison", en: "ending", uk: "закінчення" },
  part: { fr: "participe passé", en: "past participle", uk: "дієприкметник минулого часу" },
  inf: { fr: "infinitif", en: "infinitive", uk: "інфінітив" },
  pron: { fr: "pronom réfléchi", en: "reflexive pronoun", uk: "зворотний займенник" },
};
