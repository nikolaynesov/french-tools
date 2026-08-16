// Auto-split from the original tenses-app data.ts — shared by all three apps.
import type { ContrastSet } from "./types";

export const CONTRASTS: ContrastSet[] = [
  {
    key: "imparfait|passe-compose",
    headline: {
      fr: "La vidéo (imparfait) contre la photo (passé composé) — LE contraste à maîtriser.",
      en: "The video (imparfait) versus the photo (passé composé) — THE contrast to master.",
      uk: "Відео (imparfait) проти фото (passé composé) — ГОЛОВНИЙ контраст.",
    },
    rows: [
      {
        a: {
          fr: "Quand j'{ét:stem}{ais:end} étudiant, je {mange:stem}{ais:end} souvent des pizzas.",
          en: "When I was a student, I often ate pizza. (habit — no start, no end)",
          uk: "Коли я був студентом, я часто їв піцу. (звичка — без початку й кінця)",
        },
        b: {
          fr: "Hier, j'{ai:aux} {mangé:part} une pizza.",
          en: "Yesterday I ate a pizza. (one finished event)",
          uk: "Учора я з'їв піцу. (одна завершена подія)",
        },
        point: {
          fr: "Habitude répétée → imparfait · événement unique et fini → passé composé.",
          en: "Repeated habit → imparfait · single finished event → passé composé.",
          uk: "Повторювана звичка → imparfait · одинична завершена подія → passé composé.",
        },
      },
      {
        a: {
          fr: "Il {pleuv:stem}{ait:end} et les rues {ét:stem}{aient:end} vides.",
          en: "It was raining and the streets were empty. (setting the scene)",
          uk: "Ішов дощ, і вулиці були порожні. (опис сцени)",
        },
        b: {
          fr: "Soudain, quelqu'un {a:aux} {frappé:part} à la porte.",
          en: "Suddenly, someone knocked at the door. (the event)",
          uk: "Раптом хтось постукав у двері. (подія)",
        },
        point: {
          fr: "Le décor de l'histoire → imparfait · ce qui arrive → passé composé.",
          en: "The story's background → imparfait · what happens → passé composé.",
          uk: "Тло історії → imparfait · те, що стається → passé composé.",
        },
      },
      {
        a: {
          fr: "Je {dorm:stem}{ais:end} tranquillement…",
          en: "I was sleeping peacefully… (action in progress)",
          uk: "Я спокійно спав… (дія триває)",
        },
        b: {
          fr: "…quand le téléphone {a:aux} {sonné:part}.",
          en: "…when the phone rang. (interruption)",
          uk: "…коли задзвонив телефон. (переривання)",
        },
        point: {
          fr: "La phrase type du DELF : imparfait (en cours) + « quand » + passé composé (interruption).",
          en: "The classic DELF sentence: imparfait (in progress) + “quand” + passé composé (interruption).",
          uk: "Класичне речення DELF: imparfait (триває) + «quand» + passé composé (переривання).",
        },
      },
    ],
  },
  {
    key: "futur-proche|futur-simple",
    headline: {
      fr: "Décidé et proche (futur proche) contre lointain et rêvé (futur simple).",
      en: "Decided and near (futur proche) versus distant and dreamed (futur simple).",
      uk: "Вирішене й близьке (futur proche) проти далекого й омріяного (futur simple).",
    },
    rows: [
      {
        a: {
          fr: "Je {vais:aux} {déménager:inf} le mois prochain.",
          en: "I'm moving next month. (decided, organized)",
          uk: "Я переїжджаю наступного місяця. (вирішено, організовано)",
        },
        b: {
          fr: "Un jour, je {déménager:inf}{ai:end} à la campagne.",
          en: "One day I will move to the countryside. (a dream)",
          uk: "Колись я переїду в село. (мрія)",
        },
        point: {
          fr: "Plan concret → futur proche · projet vague / lointain → futur simple.",
          en: "Concrete plan → futur proche · vague / distant project → futur simple.",
          uk: "Конкретний план → futur proche · туманний / далекий проєкт → futur simple.",
        },
      },
      {
        a: {
          fr: "Regarde le ciel : il {va:aux} {pleuvoir:inf} !",
          en: "Look at the sky: it's going to rain! (evidence now)",
          uk: "Подивись на небо: зараз піде дощ! (докази зараз)",
        },
        b: {
          fr: "Selon la météo, il {pleuvr:inf}{a:end} demain.",
          en: "According to the forecast, it will rain tomorrow. (formal prediction)",
          uk: "За прогнозом, завтра йтиме дощ. (офіційний прогноз)",
        },
        point: {
          fr: "Signes visibles maintenant → futur proche · prévision officielle → futur simple.",
          en: "Visible signs now → futur proche · official forecast → futur simple.",
          uk: "Видимі ознаки зараз → futur proche · офіційний прогноз → futur simple.",
        },
      },
    ],
  },
  {
    key: "passe-compose|passe-recent",
    headline: {
      fr: "Il y a 5 minutes (passé récent) contre hier (passé composé).",
      en: "5 minutes ago (passé récent) versus yesterday (passé composé).",
      uk: "5 хвилин тому (passé récent) проти вчора (passé composé).",
    },
    rows: [
      {
        a: {
          fr: "J'{ai:aux} {déjeuné:part} à midi avec un collègue.",
          en: "I had lunch at noon with a colleague. (completed, situated in time)",
          uk: "Я пообідав опівдні з колегою. (завершено, з часовою прив'язкою)",
        },
        b: {
          fr: "Non merci, je {viens:aux} {de:aux} {déjeuner:inf}.",
          en: "No thanks, I just had lunch. (moments ago)",
          uk: "Ні, дякую, я щойно пообідав. (мить тому)",
        },
        point: {
          fr: "Action très fraîche (à l'instant) → passé récent · action passée située → passé composé.",
          en: "Very fresh action (just now) → passé récent · situated past action → passé composé.",
          uk: "Щойно завершена дія → passé récent · дія в минулому з прив'язкою → passé composé.",
        },
      },
    ],
  },
  {
    key: "conditionnel-present|futur-simple",
    headline: {
      fr: "Une lettre change tout : je voudrai (futur) contre je voudrais (poli).",
      en: "One letter changes everything: je voudrai (future) versus je voudrais (polite).",
      uk: "Одна літера змінює все: je voudrai (майбутнє) проти je voudrais (ввічливо).",
    },
    rows: [
      {
        a: {
          fr: "Je {voudr:inf}{ais:end} un café, s'il vous plaît.",
          en: "I would like a coffee, please. (polite request, now)",
          uk: "Я хотів би каву, будь ласка. (ввічливе прохання, зараз)",
        },
        b: {
          fr: "Plus tard, je {voudr:inf}{ai:end} peut-être un dessert.",
          en: "Later, I will perhaps want a dessert. (future fact)",
          uk: "Пізніше я, можливо, захочу десерт. (факт у майбутньому)",
        },
        point: {
          fr: "Même radical (voudr-) : -ais = politesse · -ai = futur. Le -s change le sens !",
          en: "Same stem (voudr-): -ais = politeness · -ai = future. The -s changes the meaning!",
          uk: "Та сама основа (voudr-): -ais = ввічливість · -ai = майбутнє. Літера -s змінює зміст!",
        },
      },
    ],
  },
  {
    key: "futur-proche|passe-recent",
    headline: {
      fr: "Le miroir parfait autour de MAINTENANT : venir de ← · → aller.",
      en: "The perfect mirror around NOW: venir de ← · → aller.",
      uk: "Ідеальне дзеркало навколо ЗАРАЗ: venir de ← · → aller.",
    },
    rows: [
      {
        a: {
          fr: "Je {vais:aux} {manger:inf}. (dans un instant)",
          en: "I'm going to eat. (in a moment)",
          uk: "Я збираюся їсти. (за мить)",
        },
        b: {
          fr: "Je {viens:aux} {de:aux} {manger:inf}. (il y a un instant)",
          en: "I just ate. (a moment ago)",
          uk: "Я щойно поїв. (мить тому)",
        },
        point: {
          fr: "Même structure : verbe au présent + infinitif. Seul le verbe change : aller (futur) / venir de (passé).",
          en: "Same structure: present-tense verb + infinitive. Only the verb changes: aller (future) / venir de (past).",
          uk: "Однакова структура: дієслово в теперішньому + інфінітив. Змінюється лише дієслово: aller (майбутнє) / venir de (минуле).",
        },
      },
    ],
  },
  {
    key: "imperatif|present",
    headline: {
      fr: "Enlevez le sujet et le présent devient un ordre.",
      en: "Remove the subject and the present becomes an order.",
      uk: "Приберіть підмет — і теперішній час стає наказом.",
    },
    rows: [
      {
        a: {
          fr: "{Parle:stem} plus fort !",
          en: "Speak louder! (order — note: no -s)",
          uk: "Говори голосніше! (наказ — без -s)",
        },
        b: {
          fr: "Tu {parl:stem}{es:end} très doucement.",
          en: "You speak very quietly. (statement)",
          uk: "Ти говориш дуже тихо. (твердження)",
        },
        point: {
          fr: "tu parles → Parle ! : sujet supprimé, et le -s tombe pour les verbes en -er.",
          en: "tu parles → Parle!: subject removed, and the -s drops for -er verbs.",
          uk: "tu parles → Parle!: підмет прибрано, а -s зникає в дієсловах на -er.",
        },
      },
    ],
  },
  {
    key: "imparfait|present",
    headline: {
      fr: "Le présent fabrique l'imparfait : prenez « nous », enlevez -ons.",
      en: "The present builds the imparfait: take “nous”, drop -ons.",
      uk: "Теперішній час утворює imparfait: беремо «nous», відкидаємо -ons.",
    },
    rows: [
      {
        a: {
          fr: "Avant, je {buv:stem}{ais:end} beaucoup de café.",
          en: "Before, I drank a lot of coffee. (imparfait)",
          uk: "Раніше я пив багато кави. (imparfait)",
        },
        b: {
          fr: "Nous {buv:stem}{ons:end} un café ensemble.",
          en: "We are drinking a coffee together. (present — the stem donor!)",
          uk: "Ми п'ємо каву разом. (теперішній — донор основи!)",
        },
        point: {
          fr: "boire : nous buvons → buv- → je buvais. Ça marche pour tous les verbes sauf être.",
          en: "boire: nous buvons → buv- → je buvais. Works for every verb except être.",
          uk: "boire: nous buvons → buv- → je buvais. Працює для всіх дієслів, крім être.",
        },
      },
    ],
  },
];
