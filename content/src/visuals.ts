// ============================================================
// Schémas — un ou deux visuels par règle.
// Clé = Tense.id ou Structure.id. Aucune couleur nouvelle :
// on réutilise le code couleur de la morphologie.
// ============================================================

import type { Visual } from "./types";

export const VISUALS: Record<string, Visual[]> = {
  // ---------------- TEMPS ----------------

  present: [
    {
      kind: "assembly",
      anchor: "formation",
      caption: {
        fr: "Le présent : on part de l'infinitif, on coupe, on recolle.",
        en: "The present: start from the infinitive, cut, re-attach.",
        uk: "Теперішній час: беремо інфінітив, відрізаємо, приклеюємо.",
      },
      parts: [
        { text: "parl", role: "stem", label: "radical" },
        { text: "ons", role: "end", label: "terminaison" },
      ],
      result: "nous parlons",
    },
    {
      kind: "timeline",
      anchor: "usage",
      marks: [
        { type: "point", at: 0, label: "maintenant", tone: "now" },
        { type: "span", at: -0.75, to: 0.75, label: "habitudes, vérités générales", tone: "accent", below: true },
      ],
    },
  ],

  "passe-compose": [
    {
      kind: "assembly",
      anchor: "formation",
      caption: {
        fr: "Deux morceaux : l'auxiliaire porte la personne, le participe porte le sens.",
        en: "Two pieces: the auxiliary carries the person, the participle carries the meaning.",
        uk: "Дві частини: допоміжне несе особу, дієприкметник — значення.",
      },
      parts: [
        { text: "j'ai", role: "aux", label: "auxiliaire" },
        { text: "mangé", role: "part", label: "participe passé" },
      ],
      result: "j'ai mangé",
    },
    {
      kind: "timeline",
      anchor: "usage",
      marks: [
        { type: "point", at: -0.5, label: "une action finie", tone: "past" },
        { type: "point", at: 0, label: "maintenant", tone: "now" },
      ],
    },
  ],

  imparfait: [
    {
      kind: "assembly",
      anchor: "formation",
      caption: {
        fr: "Le radical vient toujours de la forme « nous » du présent.",
        en: "The stem always comes from the present “nous” form.",
        uk: "Основа завжди береться з форми «nous» теперішнього часу.",
      },
      sources: [{ label: "nous parlons", text: "parl", role: "stem" }],
      parts: [
        { text: "parl", role: "stem", label: "radical de « nous »" },
        { text: "ais", role: "end", label: "terminaison" },
      ],
      result: "je parlais",
    },
    {
      kind: "timeline",
      anchor: "usage",
      caption: {
        fr: "L'imparfait, c'est la vidéo ; le passé composé, c'est la photo.",
        en: "The imparfait is the video; the passé composé is the snapshot.",
        uk: "Imparfait — це відео; passé composé — це фото.",
      },
      marks: [
        { type: "span", at: -0.9, to: -0.2, label: "décor, habitude (vidéo)", tone: "past" },
        { type: "point", at: -0.55, label: "l'événement (photo)", tone: "warn", below: true },
        { type: "point", at: 0, label: "maintenant", tone: "now" },
      ],
    },
  ],

  "futur-proche": [
    {
      kind: "assembly",
      anchor: "formation",
      caption: {
        fr: "Comme l'anglais « going to » : ALLER conjugué + l'infinitif intact.",
        en: "Like English “going to”: ALLER conjugated + the bare infinitive.",
        uk: "Як англійське «going to»: ALLER + інфінітив.",
      },
      parts: [
        { text: "je vais", role: "aux", label: "aller au présent" },
        { text: "partir", role: "inf", label: "infinitif" },
      ],
      result: "je vais partir",
    },
    {
      kind: "timeline",
      anchor: "usage",
      marks: [
        { type: "point", at: 0, label: "maintenant", tone: "now" },
        { type: "arrow", at: 0.1, to: 0.4, label: "tout de suite, c'est décidé", tone: "future" },
      ],
    },
  ],

  imperatif: [
    {
      kind: "assembly",
      anchor: "formation",
      caption: {
        fr: "On prend le présent et on enlève le sujet. Pour les verbes en -er, le « s » de « tu » disparaît.",
        en: "Take the present and drop the subject. For -er verbs, the “s” of “tu” disappears.",
        uk: "Беремо теперішній час і прибираємо підмет.",
      },
      sources: [{ label: "tu parles", text: "tu", role: "pron" }],
      parts: [{ text: "parle", role: "stem", label: "sans sujet, sans -s" }],
      result: "Parle !",
    },
  ],

  "futur-simple": [
    {
      kind: "assembly",
      anchor: "formation",
      caption: {
        fr: "L'infinitif entier sert de radical. Les terminaisons sont celles de « avoir ».",
        en: "The whole infinitive is the stem. The endings are those of “avoir”.",
        uk: "Увесь інфінітив є основою. Закінчення — від «avoir».",
      },
      parts: [
        { text: "parler", role: "stem", label: "infinitif = radical" },
        { text: "ai", role: "end", label: "terminaison (avoir)" },
      ],
      result: "je parlerai",
    },
    {
      kind: "timeline",
      anchor: "usage",
      marks: [
        { type: "point", at: 0, label: "maintenant", tone: "now" },
        { type: "point", at: 0.7, label: "un projet, une prédiction", tone: "future" },
      ],
    },
  ],

  "passe-recent": [
    {
      kind: "assembly",
      anchor: "formation",
      parts: [
        { text: "je viens", role: "aux", label: "venir au présent" },
        { text: "de", role: "pron" },
        { text: "manger", role: "inf", label: "infinitif" },
      ],
      result: "je viens de manger",
    },
    {
      kind: "timeline",
      anchor: "usage",
      marks: [
        { type: "arrow", at: -0.3, to: -0.05, label: "il y a une minute", tone: "past" },
        { type: "point", at: 0, label: "maintenant", tone: "now" },
      ],
    },
  ],

  "conditionnel-present": [
    {
      kind: "assembly",
      anchor: "formation",
      caption: {
        fr: "Le conditionnel est un hybride : il emprunte le radical au futur et les terminaisons à l'imparfait.",
        en: "The conditional is a hybrid: stem borrowed from the future, endings from the imparfait.",
        uk: "Умовний спосіб — гібрид: основа від майбутнього, закінчення від imparfait.",
      },
      sources: [
        { label: "du FUTUR", text: "parler-", role: "stem" },
        { label: "de l'IMPARFAIT", text: "-ais", role: "end" },
      ],
      parts: [
        { text: "parler", role: "stem", label: "radical du futur" },
        { text: "ais", role: "end", label: "terminaison d'imparfait" },
      ],
      result: "je parlerais",
    },
    {
      kind: "slots",
      anchor: "formation",
      caption: {
        fr: "Le -r- est le seul signe qui sépare l'imparfait du conditionnel. Ne le perdez pas.",
        en: "The -r- is the only sign separating imparfait from conditional. Don't lose it.",
        uk: "-r- — єдина ознака, що відрізняє imparfait від умовного способу.",
      },
      rows: [
        {
          label: "imparfait",
          cells: [
            { text: "je voul", role: "stem" },
            { text: "ais", role: "end" },
          ],
          note: "je voulais = ce que je voulais avant",
        },
        {
          label: "conditionnel",
          cells: [
            { text: "je voud", role: "stem" },
            { text: "r", role: "inf" },
            { text: "ais", role: "end" },
          ],
          note: "je voudrais = poliment, maintenant",
        },
      ],
    },
  ],

  "conditionnel-passe": [
    {
      kind: "assembly",
      anchor: "formation",
      caption: {
        fr: "L'auxiliaire passe au conditionnel, le participe ne bouge pas.",
        en: "The auxiliary goes into the conditional, the participle doesn't move.",
        uk: "Допоміжне переходить в умовний спосіб, дієприкметник не змінюється.",
      },
      sources: [{ label: "j'ai dû → ", text: "aurais", role: "aux" }],
      parts: [
        { text: "j'aurais", role: "aux", label: "avoir au conditionnel" },
        { text: "dû", role: "part", label: "participe passé" },
      ],
      result: "j'aurais dû",
    },
    {
      kind: "timeline",
      anchor: "usage",
      caption: {
        fr: "Ce qui aurait pu arriver — et qui n'est pas arrivé.",
        en: "What could have happened — and didn't.",
        uk: "Те, що могло статися — і не сталося.",
      },
      marks: [
        { type: "point", at: -0.55, label: "le moment où c'était possible", tone: "past" },
        { type: "span", at: -0.55, to: 0, label: "le regret dure jusqu'à maintenant", tone: "warn", below: true },
        { type: "point", at: 0, label: "maintenant", tone: "now" },
      ],
    },
  ],

  "plus-que-parfait": [
    {
      kind: "assembly",
      anchor: "formation",
      caption: {
        fr: "Passé composé avec l'auxiliaire à l'imparfait. Rien d'autre ne change.",
        en: "Passé composé with the auxiliary in the imparfait. Nothing else changes.",
        uk: "Passé composé з допоміжним в imparfait. Більше нічого не змінюється.",
      },
      sources: [{ label: "j'ai fini → ", text: "avais", role: "aux" }],
      parts: [
        { text: "j'avais", role: "aux", label: "avoir à l'imparfait" },
        { text: "fini", role: "part", label: "participe passé" },
      ],
      result: "j'avais fini",
    },
    {
      kind: "timeline",
      anchor: "usage",
      caption: {
        fr: "Le passé du passé : la première action des deux.",
        en: "The past of the past: the first of the two actions.",
        uk: "Минуле в минулому: перша з двох дій.",
      },
      marks: [
        { type: "point", at: -0.8, label: "il était déjà parti", tone: "accent" },
        { type: "point", at: -0.35, label: "je suis arrivé", tone: "past", below: true },
        { type: "point", at: 0, label: "maintenant", tone: "now" },
      ],
    },
  ],

  gerondif: [
    {
      kind: "assembly",
      anchor: "formation",
      caption: {
        fr: "Radical de « nous », terminaison -ant, et « en » devant. Trois exceptions : étant, ayant, sachant.",
        en: "The “nous” stem, the -ant ending, and “en” in front. Three exceptions: étant, ayant, sachant.",
        uk: "Основа «nous», закінчення -ant і «en» попереду.",
      },
      sources: [{ label: "nous mangeons", text: "mange", role: "stem" }],
      parts: [
        { text: "en", role: "pron" },
        { text: "mange", role: "stem", label: "radical de « nous »" },
        { text: "ant", role: "end", label: "terminaison" },
      ],
      result: "en mangeant",
    },
    {
      kind: "slots",
      anchor: "formation",
      caption: {
        fr: "La règle absolue : un seul sujet pour les deux verbes.",
        en: "The absolute rule: one subject for both verbs.",
        uk: "Абсолютне правило: один суб'єкт для обох дієслів.",
      },
      rows: [
        {
          label: "✓",
          cells: [
            { text: "En arrivant,", role: "stem" },
            { text: "j'", role: "pron" },
            { text: "ai vu ma mère." },
          ],
          note: "c'est JE qui arrive et JE qui vois",
        },
        {
          label: "✗",
          bad: true,
          cells: [
            { text: "En arrivant,", role: "stem" },
            { text: "ma mère", role: "pron" },
            { text: "m'a ouvert." },
          ],
          note: "ce n'est pas la mère qui arrive",
        },
      ],
    },
  ],

  // ---------------- STRUCTURES ----------------
  // Les schémas s'insèrent APRÈS le bloc de règle qu'ils illustrent (afterBlock).
  // Rien qui redise simplement un tableau : chaque schéma montre ce que le tableau ne peut pas montrer.

  "si-clauses": [
    {
      kind: "pairs",
      afterBlock: 0,
      caption: {
        fr: "Le tableau donne les exemples ; ce schéma donne le squelette : trois couples soudés, rien à choisir une fois le premier temps identifié.",
        en: "The table gives the examples; this gives the skeleton: three welded couples, nothing left to choose once the first tense is identified.",
        uk: "Таблиця дає приклади; ця схема — каркас: три зварені пари.",
      },
      leftLabel: "Si + …",
      rightLabel: "→ résultat",
      rows: [
        { tag: "I", left: "présent", right: "futur simple", tone: "good", note: "c'est possible" },
        { tag: "II", left: "imparfait", right: "conditionnel présent", tone: "accent", note: "c'est imaginaire" },
        { tag: "III", left: "plus-que-parfait", right: "conditionnel passé", tone: "warn", note: "c'est trop tard" },
      ],
    },
    {
      kind: "slots",
      afterBlock: 2,
      caption: {
        fr: "La règle d'or en image : le conditionnel est expulsé de la moitié gauche.",
        en: "The golden rule as a picture: the conditional is expelled from the left half.",
        uk: "Золоте правило в образі: умовний спосіб виганяється з лівої половини.",
      },
      rows: [
        {
          label: "✗",
          bad: true,
          cells: [
            { text: "Si je serais riche,", role: "end" },
            { text: "j'achèterais une maison." },
          ],
        },
        {
          label: "✓",
          cells: [
            { text: "Si j'étais riche,", role: "stem" },
            { text: "j'achèterais", role: "end" },
            { text: "une maison." },
          ],
          note: "l'imparfait à gauche, le conditionnel à droite",
        },
      ],
    },
  ],

  "discours-rapporte": [
    {
      kind: "slots",
      afterBlock: 0,
      caption: {
        fr: "Le tableau donne les mots de liaison ; il ne montre pas l'erreur n°1, qui est de garder la personne d'origine. Demande-toi toujours QUI parle à QUI.",
        en: "The table gives the linkers; it can't show mistake number one — keeping the original person. Always ask WHO is speaking to WHOM.",
        uk: "Таблиця дає сполучники; вона не показує помилку №1 — збереження вихідної особи.",
      },
      rows: [
        {
          label: "✗",
          bad: true,
          cells: [
            { text: "Laurence demande si" },
            { text: "tu as", role: "end" },
            { text: "vu le film." },
          ],
        },
        {
          label: "✓",
          cells: [
            { text: "Laurence demande si" },
            { text: "j'ai", role: "stem" },
            { text: "vu le film." },
          ],
          note: "c'est moi qu'on interroge : tu → je",
        },
      ],
    },
  ],

  "concordance-temps": [
    {
      kind: "slots",
      afterBlock: 2,
      caption: {
        fr: "Les tableaux listent les changements un par un ; ici on les voit tomber ensemble. Marqueur en orange, personne en bleu, temps en violet — les trois bougent dans la même phrase.",
        en: "The tables list the changes one by one; here you see them fall together. Marker in orange, person in blue, tense in purple — all three move in the same sentence.",
        uk: "Таблиці перелічують зміни по одній; тут видно, що вони відбуваються разом.",
      },
      rows: [
        {
          label: "direct",
          cells: [
            { text: "Hier", role: "end" },
            { text: "j'", role: "aux" },
            { text: "ai visité", role: "part" },
            { text: "un appartement." },
          ],
          note: "marqueur · personne · temps",
        },
        {
          label: "rapporté",
          cells: [
            { text: "la veille", role: "end" },
            { text: "il", role: "aux" },
            { text: "avait visité", role: "part" },
            { text: "un appartement." },
          ],
          note: "les trois changent en même temps",
        },
      ],
    },
  ],

  restriction: [
    {
      kind: "slots",
      afterBlock: 1,
      caption: {
        fr: "La règle dit où va « que » ; le schéma le montre sauter par-dessus le participe.",
        en: "The rule says where “que” goes; the diagram shows it hopping over the participle.",
        uk: "Правило каже, де стоїть «que»; схема показує, як воно перестрибує дієприкметник.",
      },
      rows: [
        {
          label: "simple",
          cells: [
            { text: "Il", role: "pron" },
            { text: "ne", role: "end" },
            { text: "mange" },
            { text: "qu'", role: "end" },
            { text: "une pomme.", role: "stem" },
          ],
        },
        {
          label: "composé",
          cells: [
            { text: "Il", role: "pron" },
            { text: "n'", role: "end" },
            { text: "a", role: "aux" },
            { text: "mangé", role: "part" },
            { text: "qu'", role: "end" },
            { text: "une pomme.", role: "stem" },
          ],
          note: "« que » passe APRÈS le participe",
        },
      ],
    },
    {
      kind: "slots",
      afterBlock: 2,
      caption: {
        fr: "Les deux phrases côte à côte : c'est l'article qui trahit la différence.",
        en: "The two sentences side by side: the article is what gives the difference away.",
        uk: "Два речення поруч: саме артикль видає різницю.",
      },
      rows: [
        {
          label: "négation",
          cells: [
            { text: "Je ne bois" },
            { text: "pas", role: "end" },
            { text: "de", role: "inf" },
            { text: "café." },
          ],
          note: "la vraie négation écrase l'article",
        },
        {
          label: "restriction",
          cells: [
            { text: "Je ne bois" },
            { text: "que", role: "end" },
            { text: "du", role: "stem" },
            { text: "café." },
          ],
          note: "le partitif reste entier",
        },
      ],
    },
  ],

  "cause-consequence": [
    {
      kind: "axis",
      afterBlock: 0,
      caption: {
        fr: "La colonne « nuance » dit négatif ou positif ; l'axe montre qu'il s'agit d'une gradation, avec un connecteur neutre au milieu.",
        en: "The “nuance” column says negative or positive; the axis shows it's a gradient, with a neutral connector in the middle.",
        uk: "Колонка «нюанс» каже негативний чи позитивний; вісь показує градацію.",
      },
      leftLabel: "résultat négatif",
      rightLabel: "résultat positif",
      marks: [
        { at: 0.05, label: "à cause de", tone: "warn" },
        { at: 0.5, label: "en raison de", tone: "accent" },
        { at: 0.95, label: "grâce à", tone: "good" },
      ],
    },
    {
      kind: "axis",
      afterBlock: 1,
      caption: {
        fr: "Même sens pour tous : seul le registre les sépare. Le tableau les étiquette un par un, l'axe les met en ordre — utile quand il faut choisir entre deux voisins.",
        en: "Same meaning for all: only register separates them. The table labels them one by one, the axis ranks them — useful when choosing between two neighbours.",
        uk: "Значення однакове: розрізняє лише регістр. Вісь вишиковує їх у порядку.",
      },
      leftLabel: "oral, familier",
      rightLabel: "écrit, formel",
      marks: [
        { at: 0.04, label: "du coup", tone: "warn" },
        { at: 0.26, label: "alors", tone: "warn" },
        { at: 0.5, label: "donc", tone: "accent" },
        { at: 0.74, label: "c'est pourquoi", tone: "good" },
        { at: 0.97, label: "par conséquent", tone: "good" },
      ],
    },
  ],
};
