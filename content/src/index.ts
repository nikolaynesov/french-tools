// Shared content package — imported by reference-app, exercises-app and vocab-app.
export * from "./types";
export { TENSES } from "./tenses";
export { STRUCTURES } from "./structures";
export { CONTRASTS } from "./contrasts";
export { ROLE_LABELS, markedHtml, escapeHtml } from "./ui";
export { DRILLS } from "./drills";
export { VOCAB } from "./vocab";
export { VISUALS } from "./visuals";

/** Old ids kept working after the B1 rename. */
export const ID_ALIASES: Record<string, string> = {
  "conditionnel-politesse": "conditionnel-present",
};
