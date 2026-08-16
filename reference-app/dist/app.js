"use strict";
(() => {
  // ../content/src/tenses.ts
  var TENSES = [
    // ========== 1. PRÉSENT ==========
    {
      id: "present",
      name: "Le pr\xE9sent",
      badge: "essentiel",
      tagline: {
        fr: "Le temps de base : maintenant, les habitudes, les v\xE9rit\xE9s g\xE9n\xE9rales. Tous les autres temps se construisent \xE0 partir de lui.",
        en: "The base tense: now, habits, general truths. All the other tenses are built from it.",
        uk: "\u0411\u0430\u0437\u043E\u0432\u0438\u0439 \u0447\u0430\u0441: \u0437\u0430\u0440\u0430\u0437, \u0437\u0432\u0438\u0447\u043A\u0438, \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0456 \u0456\u0441\u0442\u0438\u043D\u0438. \u0423\u0441\u0456 \u0456\u043D\u0448\u0456 \u0447\u0430\u0441\u0438 \u0431\u0443\u0434\u0443\u044E\u0442\u044C\u0441\u044F \u0432\u0456\u0434 \u043D\u044C\u043E\u0433\u043E."
      },
      usage: [
        {
          fr: "Ce qui se passe maintenant : \xAB Je travaille en ce moment. \xBB",
          en: "What is happening now: \u201CI am working right now.\u201D",
          uk: "\u0422\u0435, \u0449\u043E \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u0437\u0430\u0440\u0430\u0437: \xAB\u042F \u043F\u0440\u0430\u0446\u044E\u044E \u0432 \u0446\u0435\u0439 \u043C\u043E\u043C\u0435\u043D\u0442\xBB."
        },
        {
          fr: "Les habitudes : \xAB Je prends le m\xE9tro tous les jours. \xBB",
          en: "Habits: \u201CI take the metro every day.\u201D",
          uk: "\u0417\u0432\u0438\u0447\u043A\u0438: \xAB\u042F \u0457\u0436\u0434\u0436\u0443 \u043D\u0430 \u043C\u0435\u0442\u0440\u043E \u0449\u043E\u0434\u043D\u044F\xBB."
        },
        {
          fr: "Les v\xE9rit\xE9s g\xE9n\xE9rales : \xAB Paris est la capitale de la France. \xBB",
          en: "General truths: \u201CParis is the capital of France.\u201D",
          uk: "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0456 \u0456\u0441\u0442\u0438\u043D\u0438: \xAB\u041F\u0430\u0440\u0438\u0436 \u2014 \u0441\u0442\u043E\u043B\u0438\u0446\u044F \u0424\u0440\u0430\u043D\u0446\u0456\u0457\xBB."
        },
        {
          fr: "Avec \xAB depuis \xBB pour une action qui continue : \xAB J'habite \xE0 Paris depuis deux ans. \xBB",
          en: "With \u201Cdepuis\u201D for an action that continues: \u201CI have lived in Paris for two years.\u201D (French uses the present!)",
          uk: "\u0417 \xABdepuis\xBB \u0434\u043B\u044F \u0434\u0456\u0457, \u0449\u043E \u0442\u0440\u0438\u0432\u0430\u0454: \xAB\u042F \u0436\u0438\u0432\u0443 \u0432 \u041F\u0430\u0440\u0438\u0436\u0456 \u0432\u0436\u0435 \u0434\u0432\u0430 \u0440\u043E\u043A\u0438\xBB. (\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u044C\u043A\u0430 \u0432\u0436\u0438\u0432\u0430\u0454 \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0456\u0439 \u0447\u0430\u0441!)"
        }
      ],
      formula: "sujet + {radical:stem} + {terminaison:end}",
      formulaNotes: [
        {
          fr: "Verbes en -er : radical = infinitif sans -er (parler \u2192 parl-).",
          en: "-er verbs: stem = infinitive without -er (parler \u2192 parl-).",
          uk: "\u0414\u0456\u0454\u0441\u043B\u043E\u0432\u0430 \u043D\u0430 -er: \u043E\u0441\u043D\u043E\u0432\u0430 = \u0456\u043D\u0444\u0456\u043D\u0456\u0442\u0438\u0432 \u0431\u0435\u0437 -er (parler \u2192 parl-)."
        },
        {
          fr: "Prononciation : -e, -es, -e et -ent sont muets \u2192 4 formes sur 6 se prononcent pareil !",
          en: "Pronunciation: -e, -es, -e and -ent are silent \u2192 4 of the 6 forms sound the same!",
          uk: "\u0412\u0438\u043C\u043E\u0432\u0430: -e, -es, -e \u0442\u0430 -ent \u043D\u0456\u043C\u0456 \u2192 4 \u0437 6 \u0444\u043E\u0440\u043C \u0437\u0432\u0443\u0447\u0430\u0442\u044C \u043E\u0434\u043D\u0430\u043A\u043E\u0432\u043E!"
        }
      ],
      tables: [
        {
          title: {
            fr: "Mod\xE8le : parler (verbes en -er, ~90 % des verbes)",
            en: "Model: parler (-er verbs, ~90% of all verbs)",
            uk: "\u0417\u0440\u0430\u0437\u043E\u043A: parler (\u0434\u0456\u0454\u0441\u043B\u043E\u0432\u0430 \u043D\u0430 -er, ~90 % \u0434\u0456\u0454\u0441\u043B\u0456\u0432)"
          },
          rows: [
            { pronoun: "je", form: "{parl:stem}{e:end}" },
            { pronoun: "tu", form: "{parl:stem}{es:end}" },
            { pronoun: "il / elle / on", form: "{parl:stem}{e:end}" },
            { pronoun: "nous", form: "{parl:stem}{ons:end}" },
            { pronoun: "vous", form: "{parl:stem}{ez:end}" },
            { pronoun: "ils / elles", form: "{parl:stem}{ent:end}" }
          ]
        }
      ],
      extra: {
        title: {
          fr: "Les 4 irr\xE9guliers vitaux",
          en: "The 4 vital irregulars",
          uk: "4 \u0436\u0438\u0442\u0442\u0454\u0432\u043E \u0432\u0430\u0436\u043B\u0438\u0432\u0456 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u0430"
        },
        rows: [
          { pronoun: "\xEAtre", form: "suis \xB7 es \xB7 est \xB7 sommes \xB7 \xEAtes \xB7 sont" },
          { pronoun: "avoir", form: "ai \xB7 as \xB7 a \xB7 avons \xB7 avez \xB7 ont" },
          { pronoun: "aller", form: "vais \xB7 vas \xB7 va \xB7 allons \xB7 allez \xB7 vont" },
          { pronoun: "faire", form: "fais \xB7 fais \xB7 fait \xB7 faisons \xB7 faites \xB7 font" }
        ],
        footnote: {
          fr: "\xC0 apprendre par c\u0153ur : ils servent aussi \xE0 construire les autres temps.",
          en: "Learn these by heart: they are also used to build the other tenses.",
          uk: "\u0412\u0438\u0432\u0447\u0456\u0442\u044C \u043D\u0430\u043F\u0430\u043C'\u044F\u0442\u044C: \u0432\u043E\u043D\u0438 \u0442\u0430\u043A\u043E\u0436 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456 \u0434\u043B\u044F \u0443\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0456\u043D\u0448\u0438\u0445 \u0447\u0430\u0441\u0456\u0432."
        }
      },
      mnemo: {
        fr: "Le pr\xE9sent est le HUB : nous \u2192 imparfait, aller \u2192 futur proche, venir \u2192 pass\xE9 r\xE9cent, avoir/\xEAtre \u2192 pass\xE9 compos\xE9.",
        en: "The present is the HUB: nous \u2192 imparfait, aller \u2192 futur proche, venir \u2192 pass\xE9 r\xE9cent, avoir/\xEAtre \u2192 pass\xE9 compos\xE9.",
        uk: "\u0422\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0456\u0439 \u0447\u0430\u0441 \u2014 \u0446\u0435 \u0426\u0415\u041D\u0422\u0420: nous \u2192 imparfait, aller \u2192 futur proche, venir \u2192 pass\xE9 r\xE9cent, avoir/\xEAtre \u2192 pass\xE9 compos\xE9."
      },
      examples: [
        {
          fr: "J'{habit:stem}{e:end} \xE0 Paris depuis deux ans.",
          en: "I have lived in Paris for two years.",
          uk: "\u042F \u0436\u0438\u0432\u0443 \u0432 \u041F\u0430\u0440\u0438\u0436\u0456 \u0432\u0436\u0435 \u0434\u0432\u0430 \u0440\u043E\u043A\u0438.",
          note: {
            fr: "depuis + pr\xE9sent (pas de pass\xE9 !)",
            en: "depuis + present (not past!)",
            uk: "depuis + \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0456\u0439 \u0447\u0430\u0441 (\u043D\u0435 \u043C\u0438\u043D\u0443\u043B\u0438\u0439!)"
          }
        },
        {
          fr: "Elle {prend:stem} le m\xE9tro \xE0 huit heures.",
          en: "She takes the metro at eight o'clock.",
          uk: "\u0412\u043E\u043D\u0430 \u0457\u0434\u0435 \u043D\u0430 \u043C\u0435\u0442\u0440\u043E \u043E \u0432\u043E\u0441\u044C\u043C\u0456\u0439 \u0433\u043E\u0434\u0438\u043D\u0456."
        },
        {
          fr: "Nous {parl:stem}{ons:end} anglais au bureau.",
          en: "We speak English at the office.",
          uk: "\u041C\u0438 \u0440\u043E\u0437\u043C\u043E\u0432\u043B\u044F\u0454\u043C\u043E \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u044E \u0432 \u043E\u0444\u0456\u0441\u0456."
        },
        {
          fr: "Qu'est-ce que tu {fais:stem} ce week-end ?",
          en: "What are you doing this weekend?",
          uk: "\u0429\u043E \u0442\u0438 \u0440\u043E\u0431\u0438\u0448 \u043D\u0430 \u0446\u0438\u0445 \u0432\u0438\u0445\u0456\u0434\u043D\u0438\u0445?",
          note: {
            fr: "Le pr\xE9sent peut parler du futur proche avec un mot de temps.",
            en: "The present can refer to the near future with a time word.",
            uk: "\u0422\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0456\u0439 \u0447\u0430\u0441 \u043C\u043E\u0436\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0442\u0438 \u0431\u043B\u0438\u0437\u044C\u043A\u0435 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454 \u0437\u0456 \u0441\u043B\u043E\u0432\u043E\u043C \u0447\u0430\u0441\u0443."
          }
        }
      ],
      related: [
        {
          id: "imparfait",
          why: {
            fr: "Le radical de l'imparfait = la forme \xAB nous \xBB du pr\xE9sent.",
            en: "The imparfait stem = the \u201Cnous\u201D form of the present.",
            uk: "\u041E\u0441\u043D\u043E\u0432\u0430 imparfait = \u0444\u043E\u0440\u043C\u0430 \xABnous\xBB \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u044C\u043E\u0433\u043E \u0447\u0430\u0441\u0443."
          }
        },
        {
          id: "imperatif",
          why: {
            fr: "L'imp\xE9ratif = le pr\xE9sent sans sujet (tu / nous / vous).",
            en: "The imperative = the present without a subject (tu / nous / vous).",
            uk: "\u041D\u0430\u043A\u0430\u0437\u043E\u0432\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 = \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0456\u0439 \u0447\u0430\u0441 \u0431\u0435\u0437 \u043F\u0456\u0434\u043C\u0435\u0442\u0430 (tu / nous / vous)."
          }
        },
        {
          id: "futur-proche",
          why: {
            fr: "Futur proche = aller au pr\xE9sent + infinitif.",
            en: "Futur proche = aller in the present + infinitive.",
            uk: "Futur proche = aller \u0443 \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u044C\u043E\u043C\u0443 \u0447\u0430\u0441\u0456 + \u0456\u043D\u0444\u0456\u043D\u0456\u0442\u0438\u0432."
          }
        }
      ]
    },
    // ========== 2. PASSÉ COMPOSÉ ==========
    {
      id: "passe-compose",
      name: "Le pass\xE9 compos\xE9",
      badge: "essentiel",
      tagline: {
        fr: "Le pass\xE9 des actions termin\xE9es. C'est LE temps pour raconter ce qui s'est pass\xE9.",
        en: "The past of completed actions. THE tense for telling what happened.",
        uk: "\u041C\u0438\u043D\u0443\u043B\u0438\u0439 \u0447\u0430\u0441 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0445 \u0434\u0456\u0439. \u0413\u041E\u041B\u041E\u0412\u041D\u0418\u0419 \u0447\u0430\u0441, \u0449\u043E\u0431 \u0440\u043E\u0437\u043F\u043E\u0432\u0456\u0441\u0442\u0438, \u0449\u043E \u0441\u0442\u0430\u043B\u043E\u0441\u044F."
      },
      usage: [
        {
          fr: "Une action finie, souvent dat\xE9e : \xAB Hier, j'ai visit\xE9 le Louvre. \xBB",
          en: "A finished action, often with a date: \u201CYesterday I visited the Louvre.\u201D",
          uk: "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u0434\u0456\u044F, \u0447\u0430\u0441\u0442\u043E \u0437 \u0434\u0430\u0442\u043E\u044E: \xAB\u0423\u0447\u043E\u0440\u0430 \u044F \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u0432 \u041B\u0443\u0432\u0440\xBB."
        },
        {
          fr: "Une suite d'actions : \xAB Je me suis lev\xE9, j'ai pris un caf\xE9 et je suis parti. \xBB",
          en: "A sequence of actions: \u201CI got up, had a coffee and left.\u201D",
          uk: "\u041F\u043E\u0441\u043B\u0456\u0434\u043E\u0432\u043D\u0456\u0441\u0442\u044C \u0434\u0456\u0439: \xAB\u042F \u0432\u0441\u0442\u0430\u0432, \u0432\u0438\u043F\u0438\u0432 \u043A\u0430\u0432\u0443 \u0456 \u043F\u0456\u0448\u043E\u0432\xBB."
        },
        {
          fr: "L'\xE9v\xE9nement qui interrompt le d\xE9cor : \xAB Je dormais quand le t\xE9l\xE9phone a sonn\xE9. \xBB",
          en: "The event that interrupts the background: \u201CI was sleeping when the phone rang.\u201D",
          uk: "\u041F\u043E\u0434\u0456\u044F, \u0449\u043E \u043F\u0435\u0440\u0435\u0440\u0438\u0432\u0430\u0454 \u0442\u043B\u043E: \xAB\u042F \u0441\u043F\u0430\u0432, \u043A\u043E\u043B\u0438 \u0437\u0430\u0434\u0437\u0432\u043E\u043D\u0438\u0432 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\xBB."
        }
      ],
      formula: "sujet + {avoir / \xEAtre au pr\xE9sent:aux} + {participe pass\xE9:part}",
      formulaNotes: [
        {
          fr: "Participe pass\xE9 : -er \u2192 -\xE9 (mang\xE9) \xB7 -ir \u2192 -i (fini) \xB7 -re \u2192 -u (vendu).",
          en: "Past participle: -er \u2192 -\xE9 (mang\xE9) \xB7 -ir \u2192 -i (fini) \xB7 -re \u2192 -u (vendu).",
          uk: "\u0414\u0456\u0454\u043F\u0440\u0438\u043A\u043C\u0435\u0442\u043D\u0438\u043A: -er \u2192 -\xE9 (mang\xE9) \xB7 -ir \u2192 -i (fini) \xB7 -re \u2192 -u (vendu)."
        },
        {
          fr: "Avec \xEAtre, le participe s'accorde : elle est all\xE9e, ils sont partis.",
          en: "With \xEAtre, the participle agrees: elle est all\xE9e, ils sont partis.",
          uk: "\u0417 \xEAtre \u0434\u0456\u0454\u043F\u0440\u0438\u043A\u043C\u0435\u0442\u043D\u0438\u043A \u0443\u0437\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u044C\u0441\u044F: elle est all\xE9e, ils sont partis."
        }
      ],
      tables: [
        {
          title: {
            fr: "Avec avoir : manger",
            en: "With avoir: manger",
            uk: "\u0417 avoir: manger"
          },
          rows: [
            { pronoun: "j'", form: "{ai:aux} {mang\xE9:part}" },
            { pronoun: "tu", form: "{as:aux} {mang\xE9:part}" },
            { pronoun: "il / elle", form: "{a:aux} {mang\xE9:part}" },
            { pronoun: "nous", form: "{avons:aux} {mang\xE9:part}" },
            { pronoun: "vous", form: "{avez:aux} {mang\xE9:part}" },
            { pronoun: "ils / elles", form: "{ont:aux} {mang\xE9:part}" }
          ]
        },
        {
          title: {
            fr: "Avec \xEAtre : aller (accord !)",
            en: "With \xEAtre: aller (agreement!)",
            uk: "\u0417 \xEAtre: aller (\u0443\u0437\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F!)"
          },
          rows: [
            { pronoun: "je", form: "{suis:aux} {all\xE9(e):part}" },
            { pronoun: "tu", form: "{es:aux} {all\xE9(e):part}" },
            { pronoun: "elle", form: "{est:aux} {all\xE9e:part}" },
            { pronoun: "nous", form: "{sommes:aux} {all\xE9(e)s:part}" },
            { pronoun: "vous", form: "{\xEAtes:aux} {all\xE9(e)(s):part}" },
            { pronoun: "elles", form: "{sont:aux} {all\xE9es:part}" }
          ]
        }
      ],
      extra: {
        title: {
          fr: "Qui prend \xEAtre ? (la \xAB maison d'\xEAtre \xBB) + participes irr\xE9guliers",
          en: "Which verbs take \xEAtre? (the \u201Chouse of \xEAtre\u201D) + irregular participles",
          uk: "\u042F\u043A\u0456 \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u0430 \u0431\u0435\u0440\u0443\u0442\u044C \xEAtre? (\xAB\u0434\u0456\u043C \xEAtre\xBB) + \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0434\u0456\u0454\u043F\u0440\u0438\u043A\u043C\u0435\u0442\u043D\u0438\u043A\u0438"
        },
        rows: [
          {
            pronoun: "\xEAtre + mouvement",
            form: "aller \xB7 venir \xB7 arriver \xB7 partir \xB7 entrer \xB7 sortir \xB7 monter \xB7 descendre \xB7 rester \xB7 tomber \xB7 retourner \xB7 passer \xB7 na\xEEtre \xB7 mourir"
          },
          {
            pronoun: "\xEAtre + pronominaux",
            form: "se lever \xB7 se coucher \xB7 s'habiller \xB7 se r\xE9veiller\u2026"
          },
          {
            pronoun: "participes irr\xE9guliers",
            form: "\xEAtre \u2192 \xE9t\xE9 \xB7 avoir \u2192 eu \xB7 faire \u2192 fait \xB7 prendre \u2192 pris \xB7 voir \u2192 vu \xB7 boire \u2192 bu \xB7 lire \u2192 lu \xB7 pouvoir \u2192 pu \xB7 vouloir \u2192 voulu \xB7 venir \u2192 venu \xB7 mettre \u2192 mis \xB7 dire \u2192 dit \xB7 \xE9crire \u2192 \xE9crit \xB7 ouvrir \u2192 ouvert"
          }
        ],
        footnote: {
          fr: "Tous les autres verbes prennent avoir (\u2248 95 % des verbes).",
          en: "All other verbs take avoir (\u2248 95% of verbs).",
          uk: "\u0423\u0441\u0456 \u0456\u043D\u0448\u0456 \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u0430 \u0431\u0435\u0440\u0443\u0442\u044C avoir (\u2248 95 % \u0434\u0456\u0454\u0441\u043B\u0456\u0432)."
        }
      },
      mnemo: {
        fr: "Le pass\xE9 compos\xE9 = une PHOTO : clic ! L'action est captur\xE9e, finie. (L'imparfait, lui, c'est la vid\xE9o.)",
        en: "The pass\xE9 compos\xE9 = a PHOTO: click! The action is captured, finished. (The imparfait is the video.)",
        uk: "Pass\xE9 compos\xE9 = \u0424\u041E\u0422\u041E: \u043A\u043B\u0430\u0446! \u0414\u0456\u044E \u0437\u0430\u0444\u0456\u043A\u0441\u043E\u0432\u0430\u043D\u043E, \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E. (\u0410 imparfait \u2014 \u0446\u0435 \u0432\u0456\u0434\u0435\u043E.)"
      },
      examples: [
        {
          fr: "Hier soir, nous {avons:aux} {mang\xE9:part} au restaurant.",
          en: "Last night we ate at a restaurant.",
          uk: "\u0423\u0447\u043E\u0440\u0430 \u0432\u0432\u0435\u0447\u0435\u0440\u0456 \u043C\u0438 \u043F\u043E\u0432\u0435\u0447\u0435\u0440\u044F\u043B\u0438 \u0432 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0456."
        },
        {
          fr: "Elle {est:aux} {arriv\xE9e:part} \xE0 Paris en 2024.",
          en: "She arrived in Paris in 2024.",
          uk: "\u0412\u043E\u043D\u0430 \u043F\u0440\u0438\u0457\u0445\u0430\u043B\u0430 \u0434\u043E \u041F\u0430\u0440\u0438\u0436\u0430 \u0443 2024 \u0440\u043E\u0446\u0456.",
          note: {
            fr: "arriver \u2192 \xEAtre \u2192 accord : arriv\xE9e.",
            en: "arriver \u2192 \xEAtre \u2192 agreement: arriv\xE9e.",
            uk: "arriver \u2192 \xEAtre \u2192 \u0443\u0437\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F: arriv\xE9e."
          }
        },
        {
          fr: "J'{ai:aux} d\xE9j\xE0 {vu:part} ce film.",
          en: "I have already seen this film.",
          uk: "\u042F \u0432\u0436\u0435 \u0431\u0430\u0447\u0438\u0432 \u0446\u0435\u0439 \u0444\u0456\u043B\u044C\u043C.",
          note: {
            fr: "\xAB d\xE9j\xE0 \xBB se place entre l'auxiliaire et le participe.",
            en: "\u201Cd\xE9j\xE0\u201D goes between the auxiliary and the participle.",
            uk: "\xABd\xE9j\xE0\xBB \u0441\u0442\u0430\u0432\u0438\u0442\u044C\u0441\u044F \u043C\u0456\u0436 \u0434\u043E\u043F\u043E\u043C\u0456\u0436\u043D\u0438\u043C \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u043E\u043C \u0456 \u0434\u0456\u0454\u043F\u0440\u0438\u043A\u043C\u0435\u0442\u043D\u0438\u043A\u043E\u043C."
          }
        },
        {
          fr: "Ils {se:pron} {sont:aux} {lev\xE9s:part} tr\xE8s t\xF4t ce matin.",
          en: "They got up very early this morning.",
          uk: "\u0412\u043E\u043D\u0438 \u0432\u0441\u0442\u0430\u043B\u0438 \u0434\u0443\u0436\u0435 \u0440\u0430\u043D\u043E \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u0432\u0440\u0430\u043D\u0446\u0456.",
          note: {
            fr: "Verbe pronominal \u2192 \xEAtre.",
            en: "Reflexive verb \u2192 \xEAtre.",
            uk: "\u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0435 \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u043E \u2192 \xEAtre."
          }
        }
      ],
      related: [
        {
          id: "imparfait",
          why: {
            fr: "Le duo du pass\xE9 : pass\xE9 compos\xE9 = l'action (photo), imparfait = le d\xE9cor (vid\xE9o).",
            en: "The past-tense duo: pass\xE9 compos\xE9 = the action (photo), imparfait = the background (video).",
            uk: "\u0414\u0443\u0435\u0442 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E: pass\xE9 compos\xE9 = \u0434\u0456\u044F (\u0444\u043E\u0442\u043E), imparfait = \u0442\u043B\u043E (\u0432\u0456\u0434\u0435\u043E)."
          }
        },
        {
          id: "present",
          why: {
            fr: "L'auxiliaire (avoir/\xEAtre) se conjugue au pr\xE9sent.",
            en: "The auxiliary (avoir/\xEAtre) is conjugated in the present.",
            uk: "\u0414\u043E\u043F\u043E\u043C\u0456\u0436\u043D\u0435 \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u043E (avoir/\xEAtre) \u0432\u0456\u0434\u043C\u0456\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u0432 \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u044C\u043E\u043C\u0443 \u0447\u0430\u0441\u0456."
          }
        },
        {
          id: "passe-recent",
          why: {
            fr: "Action tr\xE8s r\xE9cente ? \xAB Je viens de manger \xBB plut\xF4t que \xAB j'ai mang\xE9 il y a 5 minutes \xBB.",
            en: "Very recent action? \u201CJe viens de manger\u201D rather than \u201Cj'ai mang\xE9 5 minutes ago\u201D.",
            uk: "\u0429\u043E\u0439\u043D\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u0434\u0456\u044F? \xABJe viens de manger\xBB, \u0430 \u043D\u0435 \xABj'ai mang\xE9\xBB 5 \u0445\u0432\u0438\u043B\u0438\u043D \u0442\u043E\u043C\u0443."
          }
        }
      ]
    },
    // ========== 3. IMPARFAIT ==========
    {
      id: "imparfait",
      name: "L'imparfait",
      badge: "essentiel",
      tagline: {
        fr: "Le d\xE9cor du pass\xE9 : descriptions, habitudes, actions en cours. La cam\xE9ra qui filme l'arri\xE8re-plan.",
        en: "The background of the past: descriptions, habits, ongoing actions. The camera filming the scene.",
        uk: "\u0422\u043B\u043E \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E: \u043E\u043F\u0438\u0441\u0438, \u0437\u0432\u0438\u0447\u043A\u0438, \u0442\u0440\u0438\u0432\u0430\u043B\u0456 \u0434\u0456\u0457. \u041A\u0430\u043C\u0435\u0440\u0430, \u0449\u043E \u0437\u043D\u0456\u043C\u0430\u0454 \u0437\u0430\u0434\u043D\u0456\u0439 \u043F\u043B\u0430\u043D."
      },
      usage: [
        {
          fr: "Description dans le pass\xE9 (m\xE9t\xE9o, lieux, sentiments) : \xAB Il faisait beau, j'\xE9tais content. \xBB",
          en: "Description in the past (weather, places, feelings): \u201CThe weather was nice, I was happy.\u201D",
          uk: "\u041E\u043F\u0438\u0441 \u0443 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443 (\u043F\u043E\u0433\u043E\u0434\u0430, \u043C\u0456\u0441\u0446\u044F, \u043F\u043E\u0447\u0443\u0442\u0442\u044F): \xAB\u0411\u0443\u043B\u0430 \u0433\u0430\u0440\u043D\u0430 \u043F\u043E\u0433\u043E\u0434\u0430, \u044F \u0431\u0443\u0432 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u0438\u0439\xBB."
        },
        {
          fr: "Habitude pass\xE9e : \xAB Quand j'\xE9tais petit, je jouais au foot le dimanche. \xBB",
          en: "Past habit: \u201CWhen I was little, I played football on Sundays.\u201D",
          uk: "\u0417\u0432\u0438\u0447\u043A\u0430 \u0432 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443: \xAB\u041A\u043E\u043B\u0438 \u044F \u0431\u0443\u0432 \u043C\u0430\u043B\u0438\u043C, \u044F \u0433\u0440\u0430\u0432 \u0443 \u0444\u0443\u0442\u0431\u043E\u043B \u0449\u043E\u043D\u0435\u0434\u0456\u043B\u0456\xBB."
        },
        {
          fr: "Action en cours, interrompue par un \xE9v\xE9nement : \xAB Je dormais quand tu as appel\xE9. \xBB",
          en: "Ongoing action interrupted by an event: \u201CI was sleeping when you called.\u201D",
          uk: "\u0422\u0440\u0438\u0432\u0430\u043B\u0430 \u0434\u0456\u044F, \u043F\u0435\u0440\u0435\u0440\u0432\u0430\u043D\u0430 \u043F\u043E\u0434\u0456\u0454\u044E: \xAB\u042F \u0441\u043F\u0430\u0432, \u043A\u043E\u043B\u0438 \u0442\u0438 \u043F\u043E\u0434\u0437\u0432\u043E\u043D\u0438\u0432\xBB."
        }
      ],
      formula: "sujet + {radical de \xAB nous \xBB au pr\xE9sent:stem} + {-ais, -ais, -ait, -ions, -iez, -aient:end}",
      formulaNotes: [
        {
          fr: "Radical = la forme \xAB nous \xBB du pr\xE9sent sans -ons : nous faisons \u2192 fais- ; nous finissons \u2192 finiss-.",
          en: "Stem = the present \u201Cnous\u201D form without -ons: nous faisons \u2192 fais-; nous finissons \u2192 finiss-.",
          uk: "\u041E\u0441\u043D\u043E\u0432\u0430 = \u0444\u043E\u0440\u043C\u0430 \xABnous\xBB \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u044C\u043E\u0433\u043E \u0447\u0430\u0441\u0443 \u0431\u0435\u0437 -ons: nous faisons \u2192 fais-; nous finissons \u2192 finiss-."
        },
        {
          fr: "Une seule exception dans toute la langue : \xEAtre \u2192 \xE9t- (j'\xE9tais).",
          en: "Only one exception in the whole language: \xEAtre \u2192 \xE9t- (j'\xE9tais).",
          uk: "\u0404\u0434\u0438\u043D\u0438\u0439 \u0432\u0438\u043D\u044F\u0442\u043E\u043A \u0443 \u0432\u0441\u0456\u0439 \u043C\u043E\u0432\u0456: \xEAtre \u2192 \xE9t- (j'\xE9tais)."
        },
        {
          fr: "Prononciation : -ais, -ait, -aient se prononcent tous \xAB \xE8 \xBB.",
          en: "Pronunciation: -ais, -ait, -aient are all pronounced \u201C\xE8\u201D.",
          uk: "\u0412\u0438\u043C\u043E\u0432\u0430: -ais, -ait, -aient \u0443\u0441\u0456 \u0432\u0438\u043C\u043E\u0432\u043B\u044F\u044E\u0442\u044C\u0441\u044F \u044F\u043A \xAB\u0435\xBB."
        }
      ],
      tables: [
        {
          title: {
            fr: "Mod\xE8le : faire (nous faisons \u2192 fais-)",
            en: "Model: faire (nous faisons \u2192 fais-)",
            uk: "\u0417\u0440\u0430\u0437\u043E\u043A: faire (nous faisons \u2192 fais-)"
          },
          rows: [
            { pronoun: "je", form: "{fais:stem}{ais:end}" },
            { pronoun: "tu", form: "{fais:stem}{ais:end}" },
            { pronoun: "il / elle", form: "{fais:stem}{ait:end}" },
            { pronoun: "nous", form: "{fais:stem}{ions:end}" },
            { pronoun: "vous", form: "{fais:stem}{iez:end}" },
            { pronoun: "ils / elles", form: "{fais:stem}{aient:end}" }
          ],
          footnote: {
            fr: "\xEAtre : j'\xE9tais, tu \xE9tais, il \xE9tait, nous \xE9tions, vous \xE9tiez, ils \xE9taient.",
            en: "\xEAtre: j'\xE9tais, tu \xE9tais, il \xE9tait, nous \xE9tions, vous \xE9tiez, ils \xE9taient.",
            uk: "\xEAtre: j'\xE9tais, tu \xE9tais, il \xE9tait, nous \xE9tions, vous \xE9tiez, ils \xE9taient."
          }
        }
      ],
      mnemo: {
        fr: "L'imparfait = la VID\xC9O qui tourne en fond. Mots-signaux : avant, quand j'\xE9tais\u2026, tous les jours, pendant que, souvent, d'habitude.",
        en: "The imparfait = the VIDEO running in the background. Signal words: avant, quand j'\xE9tais\u2026, tous les jours, pendant que, souvent, d'habitude.",
        uk: "Imparfait = \u0412\u0406\u0414\u0415\u041E, \u0449\u043E \u043A\u0440\u0443\u0442\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u0442\u043B\u0456. \u0421\u043B\u043E\u0432\u0430-\u0441\u0438\u0433\u043D\u0430\u043B\u0438: avant, quand j'\xE9tais\u2026, tous les jours, pendant que, souvent, d'habitude."
      },
      examples: [
        {
          fr: "Il {fais:stem}{ait:end} tr\xE8s froid ce matin.",
          en: "It was very cold this morning.",
          uk: "\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u0432\u0440\u0430\u043D\u0446\u0456 \u0431\u0443\u043B\u043E \u0434\u0443\u0436\u0435 \u0445\u043E\u043B\u043E\u0434\u043D\u043E."
        },
        {
          fr: "Avant, j'{habit:stem}{ais:end} \xE0 Kyiv.",
          en: "Before, I lived in Kyiv.",
          uk: "\u0420\u0430\u043D\u0456\u0448\u0435 \u044F \u0436\u0438\u0432 \u0443 \u041A\u0438\u0454\u0432\u0456."
        },
        {
          fr: "Nous {regard:stem}{ions:end} la t\xE9l\xE9 quand il {est:aux} {entr\xE9:part}.",
          en: "We were watching TV when he came in.",
          uk: "\u041C\u0438 \u0434\u0438\u0432\u0438\u043B\u0438\u0441\u044F \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440, \u043A\u043E\u043B\u0438 \u0432\u0456\u043D \u0443\u0432\u0456\u0439\u0448\u043E\u0432.",
          note: {
            fr: "Imparfait (d\xE9cor) + pass\xE9 compos\xE9 (\xE9v\xE9nement).",
            en: "Imparfait (background) + pass\xE9 compos\xE9 (event).",
            uk: "Imparfait (\u0442\u043B\u043E) + pass\xE9 compos\xE9 (\u043F\u043E\u0434\u0456\u044F)."
          }
        },
        {
          fr: "Quand j'{\xE9t:stem}{ais:end} \xE9tudiant, je {mange:stem}{ais:end} souvent des p\xE2tes.",
          en: "When I was a student, I often ate pasta.",
          uk: "\u041A\u043E\u043B\u0438 \u044F \u0431\u0443\u0432 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u043C, \u044F \u0447\u0430\u0441\u0442\u043E \u0457\u0432 \u043C\u0430\u043A\u0430\u0440\u043E\u043D\u0438."
        }
      ],
      related: [
        {
          id: "passe-compose",
          why: {
            fr: "Le contraste n\xB0 1 du DELF : d\xE9cor (imparfait) vs action (pass\xE9 compos\xE9).",
            en: "DELF contrast #1: background (imparfait) vs action (pass\xE9 compos\xE9).",
            uk: "\u041A\u043E\u043D\u0442\u0440\u0430\u0441\u0442 \u2116 1 \u043D\u0430 DELF: \u0442\u043B\u043E (imparfait) \u043F\u0440\u043E\u0442\u0438 \u0434\u0456\u0457 (pass\xE9 compos\xE9)."
          }
        },
        {
          id: "present",
          why: {
            fr: "Le radical vient de \xAB nous \xBB au pr\xE9sent.",
            en: "The stem comes from the present \u201Cnous\u201D form.",
            uk: "\u041E\u0441\u043D\u043E\u0432\u0430 \u043F\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0432\u0456\u0434 \u0444\u043E\u0440\u043C\u0438 \xABnous\xBB \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u044C\u043E\u0433\u043E \u0447\u0430\u0441\u0443."
          }
        },
        {
          id: "conditionnel-present",
          why: {
            fr: "Le conditionnel utilise les m\xEAmes terminaisons (-ais, -ait\u2026).",
            en: "The conditional uses the same endings (-ais, -ait\u2026).",
            uk: "\u0423\u043C\u043E\u0432\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0442\u0456 \u0441\u0430\u043C\u0456 \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F (-ais, -ait\u2026)."
          }
        }
      ]
    },
    // ========== 4. FUTUR PROCHE ==========
    {
      id: "futur-proche",
      name: "Le futur proche",
      badge: "essentiel",
      tagline: {
        fr: "Le futur de tous les jours : plans, intentions, ce qui va arriver. \xC0 l'oral, c'est lui qu'on utilise.",
        en: "The everyday future: plans, intentions, what is about to happen. In speech, this is the one you use.",
        uk: "\u041F\u043E\u0432\u0441\u044F\u043A\u0434\u0435\u043D\u043D\u0435 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454: \u043F\u043B\u0430\u043D\u0438, \u043D\u0430\u043C\u0456\u0440\u0438, \u0442\u0435, \u0449\u043E \u043E\u0442-\u043E\u0442 \u0441\u0442\u0430\u043D\u0435\u0442\u044C\u0441\u044F. \u0412 \u0443\u0441\u043D\u043E\u043C\u0443 \u043C\u043E\u0432\u043B\u0435\u043D\u043D\u0456 \u0432\u0436\u0438\u0432\u0430\u044E\u0442\u044C \u0441\u0430\u043C\u0435 \u0439\u043E\u0433\u043E."
      },
      usage: [
        {
          fr: "Un plan d\xE9cid\xE9, proche : \xAB Je vais partir dans cinq minutes. \xBB",
          en: "A decided, near plan: \u201CI'm going to leave in five minutes.\u201D",
          uk: "\u0412\u0438\u0440\u0456\u0448\u0435\u043D\u0438\u0439, \u0431\u043B\u0438\u0437\u044C\u043A\u0438\u0439 \u043F\u043B\u0430\u043D: \xAB\u042F \u0437\u0431\u0438\u0440\u0430\u044E\u0441\u044F \u043F\u0456\u0442\u0438 \u0437\u0430 \u043F'\u044F\u0442\u044C \u0445\u0432\u0438\u043B\u0438\u043D\xBB."
        },
        {
          fr: "Une intention : \xAB On va d\xE9m\xE9nager l'ann\xE9e prochaine. \xBB",
          en: "An intention: \u201CWe're going to move next year.\u201D",
          uk: "\u041D\u0430\u043C\u0456\u0440: \xAB\u041C\u0438 \u0437\u0431\u0438\u0440\u0430\u0454\u043C\u043E\u0441\u044F \u043F\u0435\u0440\u0435\u0457\u0445\u0430\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u0440\u043E\u043A\u0443\xBB."
        },
        {
          fr: "Une pr\xE9diction \xE9vidente : \xAB Regarde les nuages ! Il va pleuvoir. \xBB",
          en: "An obvious prediction: \u201CLook at the clouds! It's going to rain.\u201D",
          uk: "\u041E\u0447\u0435\u0432\u0438\u0434\u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0435\u043D\u043D\u044F: \xAB\u041F\u043E\u0434\u0438\u0432\u0438\u0441\u044C \u043D\u0430 \u0445\u043C\u0430\u0440\u0438! \u0417\u0430\u0440\u0430\u0437 \u043F\u0456\u0434\u0435 \u0434\u043E\u0449\xBB."
        }
      ],
      formula: "sujet + {aller au pr\xE9sent:aux} + {infinitif:inf}",
      formulaNotes: [
        {
          fr: "Exactement comme l'anglais \xAB going to \xBB : I am going to eat = je vais manger.",
          en: "Exactly like English \u201Cgoing to\u201D: I am going to eat = je vais manger.",
          uk: "\u0422\u043E\u0447\u043D\u043E \u044F\u043A \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0435 \xABgoing to\xBB: I am going to eat = je vais manger."
        },
        {
          fr: "N\xE9gation autour de \xAB aller \xBB : Je ne vais pas venir.",
          en: "Negation goes around \u201Caller\u201D: Je ne vais pas venir.",
          uk: "\u0417\u0430\u043F\u0435\u0440\u0435\u0447\u0435\u043D\u043D\u044F \u043D\u0430\u0432\u043A\u043E\u043B\u043E \xABaller\xBB: Je ne vais pas venir."
        }
      ],
      tables: [
        {
          title: {
            fr: "Mod\xE8le : partir",
            en: "Model: partir",
            uk: "\u0417\u0440\u0430\u0437\u043E\u043A: partir"
          },
          rows: [
            { pronoun: "je", form: "{vais:aux} {partir:inf}" },
            { pronoun: "tu", form: "{vas:aux} {partir:inf}" },
            { pronoun: "il / elle", form: "{va:aux} {partir:inf}" },
            { pronoun: "nous", form: "{allons:aux} {partir:inf}" },
            { pronoun: "vous", form: "{allez:aux} {partir:inf}" },
            { pronoun: "ils / elles", form: "{vont:aux} {partir:inf}" }
          ]
        }
      ],
      mnemo: {
        fr: "ALLER + infinitif = \xAB going to \xBB. Si c'est d\xE9cid\xE9 ou proche \u2192 futur proche. Si c'est un r\xEAve lointain \u2192 futur simple.",
        en: "ALLER + infinitive = \u201Cgoing to\u201D. Decided or near \u2192 futur proche. A distant dream \u2192 futur simple.",
        uk: "ALLER + \u0456\u043D\u0444\u0456\u043D\u0456\u0442\u0438\u0432 = \xABgoing to\xBB. \u0412\u0438\u0440\u0456\u0448\u0435\u043D\u043E \u0430\u0431\u043E \u0431\u043B\u0438\u0437\u044C\u043A\u043E \u2192 futur proche. \u0414\u0430\u043B\u0435\u043A\u0430 \u043C\u0440\u0456\u044F \u2192 futur simple."
      },
      examples: [
        {
          fr: "Je {vais:aux} {prendre:inf} un caf\xE9. Tu en veux un ?",
          en: "I'm going to get a coffee. Do you want one?",
          uk: "\u042F \u0437\u0431\u0438\u0440\u0430\u044E\u0441\u044F \u0432\u0437\u044F\u0442\u0438 \u043A\u0430\u0432\u0443. \u0425\u043E\u0447\u0435\u0448 \u0456 \u0441\u043E\u0431\u0456?"
        },
        {
          fr: "Nous {allons:aux} {visiter:inf} Lyon ce week-end.",
          en: "We're going to visit Lyon this weekend.",
          uk: "\u041C\u0438 \u0437\u0431\u0438\u0440\u0430\u0454\u043C\u043E\u0441\u044F \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u0442\u0438 \u041B\u0456\u043E\u043D \u043D\u0430 \u0432\u0438\u0445\u0456\u0434\u043D\u0438\u0445."
        },
        {
          fr: "Attention, tu {vas:aux} {tomber:inf} !",
          en: "Careful, you're going to fall!",
          uk: "\u041E\u0431\u0435\u0440\u0435\u0436\u043D\u043E, \u0442\u0438 \u0437\u0430\u0440\u0430\u0437 \u0432\u043F\u0430\u0434\u0435\u0448!"
        },
        {
          fr: "Ils ne {vont:aux} pas {venir:inf} \xE0 la f\xEAte.",
          en: "They are not going to come to the party.",
          uk: "\u0412\u043E\u043D\u0438 \u043D\u0435 \u043F\u0440\u0438\u0439\u0434\u0443\u0442\u044C \u043D\u0430 \u0432\u0435\u0447\u0456\u0440\u043A\u0443.",
          note: {
            fr: "ne + aller + pas + infinitif.",
            en: "ne + aller + pas + infinitive.",
            uk: "ne + aller + pas + \u0456\u043D\u0444\u0456\u043D\u0456\u0442\u0438\u0432."
          }
        }
      ],
      related: [
        {
          id: "futur-simple",
          why: {
            fr: "Futur proche = d\xE9cid\xE9/proche \xB7 futur simple = lointain/moins certain.",
            en: "Futur proche = decided/near \xB7 futur simple = distant/less certain.",
            uk: "Futur proche = \u0432\u0438\u0440\u0456\u0448\u0435\u043D\u043E/\u0431\u043B\u0438\u0437\u044C\u043A\u043E \xB7 futur simple = \u0434\u0430\u043B\u0435\u043A\u043E/\u043C\u0435\u043D\u0448 \u043F\u0435\u0432\u043D\u043E."
          }
        },
        {
          id: "passe-recent",
          why: {
            fr: "Construction miroir : venir de + infinitif (pass\xE9) \u2194 aller + infinitif (futur).",
            en: "Mirror construction: venir de + infinitive (past) \u2194 aller + infinitive (future).",
            uk: "\u0414\u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u044F: venir de + \u0456\u043D\u0444\u0456\u043D\u0456\u0442\u0438\u0432 (\u043C\u0438\u043D\u0443\u043B\u0435) \u2194 aller + \u0456\u043D\u0444\u0456\u043D\u0456\u0442\u0438\u0432 (\u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454)."
          }
        },
        {
          id: "present",
          why: {
            fr: "\xAB Aller \xBB se conjugue au pr\xE9sent.",
            en: "\u201CAller\u201D is conjugated in the present.",
            uk: "\xABAller\xBB \u0432\u0456\u0434\u043C\u0456\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u0432 \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u044C\u043E\u043C\u0443 \u0447\u0430\u0441\u0456."
          }
        }
      ]
    },
    // ========== 5. IMPÉRATIF ==========
    {
      id: "imperatif",
      name: "L'imp\xE9ratif",
      badge: "essentiel",
      tagline: {
        fr: "Ordres, conseils, instructions et invitations \u2014 sans sujet ! Seulement 3 formes : tu, nous, vous.",
        en: "Orders, advice, instructions and invitations \u2014 without a subject! Only 3 forms: tu, nous, vous.",
        uk: "\u041D\u0430\u043A\u0430\u0437\u0438, \u043F\u043E\u0440\u0430\u0434\u0438, \u0456\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457 \u0442\u0430 \u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044F \u2014 \u0431\u0435\u0437 \u043F\u0456\u0434\u043C\u0435\u0442\u0430! \u041B\u0438\u0448\u0435 3 \u0444\u043E\u0440\u043C\u0438: tu, nous, vous."
      },
      usage: [
        {
          fr: "Les directions : \xAB Tournez \xE0 gauche, prenez la deuxi\xE8me rue. \xBB",
          en: "Directions: \u201CTurn left, take the second street.\u201D",
          uk: "\u041D\u0430\u043F\u0440\u044F\u043C\u043A\u0438: \xAB\u041F\u043E\u0432\u0435\u0440\u043D\u0456\u0442\u044C \u043B\u0456\u0432\u043E\u0440\u0443\u0447, \u0434\u0440\u0443\u0433\u0430 \u0432\u0443\u043B\u0438\u0446\u044F\xBB."
        },
        {
          fr: "Les conseils : \xAB Repose-toi ! Ne t'inqui\xE8te pas. \xBB",
          en: "Advice: \u201CRest! Don't worry.\u201D",
          uk: "\u041F\u043E\u0440\u0430\u0434\u0438: \xAB\u0412\u0456\u0434\u043F\u043E\u0447\u0438\u043D\u044C! \u041D\u0435 \u0445\u0432\u0438\u043B\u044E\u0439\u0441\u044F\xBB."
        },
        {
          fr: "Les instructions et recettes : \xAB Ajoutez le sel, m\xE9langez bien. \xBB",
          en: "Instructions and recipes: \u201CAdd the salt, mix well.\u201D",
          uk: "\u0406\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0457 \u0442\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0438: \xAB\u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u0441\u0456\u043B\u044C, \u0434\u043E\u0431\u0440\u0435 \u043F\u0435\u0440\u0435\u043C\u0456\u0448\u0430\u0439\u0442\u0435\xBB."
        },
        {
          fr: "Les invitations : \xAB Allons-y ! Venez d\xEEner chez nous ! \xBB",
          en: "Invitations: \u201CLet's go! Come have dinner at our place!\u201D",
          uk: "\u0417\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044F: \xAB\u0425\u043E\u0434\u0456\u043C\u043E! \u041F\u0440\u0438\u0445\u043E\u0434\u044C\u0442\u0435 \u0434\u043E \u043D\u0430\u0441 \u043D\u0430 \u0432\u0435\u0447\u0435\u0440\u044E!\xBB"
        }
      ],
      formula: "{pr\xE9sent:stem} sans sujet (tu \xB7 nous \xB7 vous)",
      formulaNotes: [
        {
          fr: "Verbes en -er : le -s de \xAB tu \xBB dispara\xEEt \u2192 tu parles \u2192 Parle !",
          en: "-er verbs: the -s of the \u201Ctu\u201D form disappears \u2192 tu parles \u2192 Parle!",
          uk: "\u0414\u0456\u0454\u0441\u043B\u043E\u0432\u0430 \u043D\u0430 -er: -s \u0444\u043E\u0440\u043C\u0438 \xABtu\xBB \u0437\u043D\u0438\u043A\u0430\u0454 \u2192 tu parles \u2192 Parle!"
        },
        {
          fr: "Pronominaux : le pronom passe apr\xE8s avec un trait d'union \u2192 L\xE8ve-toi ! (mais : Ne te l\xE8ve pas.)",
          en: "Reflexives: the pronoun moves after the verb with a hyphen \u2192 L\xE8ve-toi! (but: Ne te l\xE8ve pas.)",
          uk: "\u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0456: \u0437\u0430\u0439\u043C\u0435\u043D\u043D\u0438\u043A \u0456\u0434\u0435 \u043F\u0456\u0441\u043B\u044F \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u0430 \u0447\u0435\u0440\u0435\u0437 \u0434\u0435\u0444\u0456\u0441 \u2192 L\xE8ve-toi! (\u0430\u043B\u0435: Ne te l\xE8ve pas.)"
        }
      ],
      tables: [
        {
          title: {
            fr: "Mod\xE8le : parler / prendre",
            en: "Model: parler / prendre",
            uk: "\u0417\u0440\u0430\u0437\u043E\u043A: parler / prendre"
          },
          rows: [
            { pronoun: "(tu)", form: "{Parle:stem} ! \xB7 {Prends:stem} !" },
            { pronoun: "(nous)", form: "{Parlons:stem} ! \xB7 {Prenons:stem} !" },
            { pronoun: "(vous)", form: "{Parlez:stem} ! \xB7 {Prenez:stem} !" }
          ],
          footnote: {
            fr: "\xAB nous \xBB = suggestion (Let's\u2026) : Allons-y !",
            en: "\u201Cnous\u201D = suggestion (Let's\u2026): Allons-y!",
            uk: "\xABnous\xBB = \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u044F (Let's\u2026): Allons-y!"
          }
        }
      ],
      extra: {
        title: {
          fr: "Les irr\xE9guliers de l'imp\xE9ratif",
          en: "Irregular imperatives",
          uk: "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0444\u043E\u0440\u043C\u0438 \u043D\u0430\u043A\u0430\u0437\u043E\u0432\u043E\u0433\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u0443"
        },
        rows: [
          { pronoun: "\xEAtre", form: "sois \xB7 soyons \xB7 soyez  (Sois sage !)" },
          { pronoun: "avoir", form: "aie \xB7 ayons \xB7 ayez  (N'aie pas peur !)" },
          { pronoun: "savoir", form: "sache \xB7 sachons \xB7 sachez" }
        ]
      },
      mnemo: {
        fr: "Imp\xE9ratif = pr\xE9sent MOINS le sujet (et moins le -s pour les verbes en -er, forme \xAB tu \xBB).",
        en: "Imperative = present MINUS the subject (and minus the -s for -er verbs, \u201Ctu\u201D form).",
        uk: "\u041D\u0430\u043A\u0430\u0437\u043E\u0432\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 = \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0456\u0439 \u0447\u0430\u0441 \u041C\u0406\u041D\u0423\u0421 \u043F\u0456\u0434\u043C\u0435\u0442 (\u0456 \u043C\u0456\u043D\u0443\u0441 -s \u0434\u043B\u044F \u0434\u0456\u0454\u0441\u043B\u0456\u0432 \u043D\u0430 -er \u0443 \u0444\u043E\u0440\u043C\u0456 \xABtu\xBB)."
      },
      examples: [
        {
          fr: "{Tournez:stem} \xE0 droite apr\xE8s la boulangerie.",
          en: "Turn right after the bakery.",
          uk: "\u041F\u043E\u0432\u0435\u0440\u043D\u0456\u0442\u044C \u043F\u0440\u0430\u0432\u043E\u0440\u0443\u0447 \u043F\u0456\u0441\u043B\u044F \u043F\u0435\u043A\u0430\u0440\u043D\u0456."
        },
        {
          fr: "{\xC9coute:stem} bien la question !",
          en: "Listen carefully to the question!",
          uk: "\u0423\u0432\u0430\u0436\u043D\u043E \u0441\u043B\u0443\u0445\u0430\u0439 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F!",
          note: {
            fr: "\xE9couter \u2192 tu \xE9coutes \u2192 \xC9coute ! (sans -s)",
            en: "\xE9couter \u2192 tu \xE9coutes \u2192 \xC9coute! (no -s)",
            uk: "\xE9couter \u2192 tu \xE9coutes \u2192 \xC9coute! (\u0431\u0435\u0437 -s)"
          }
        },
        {
          fr: "{Allons:stem}-y, on est en retard !",
          en: "Let's go, we're late!",
          uk: "\u0425\u043E\u0434\u0456\u043C\u043E, \u043C\u0438 \u0437\u0430\u043F\u0456\u0437\u043D\u044E\u0454\u043C\u043E\u0441\u044C!"
        },
        {
          fr: "Ne {vous:pron} {inqui\xE9tez:stem} pas, tout va bien.",
          en: "Don't worry, everything is fine.",
          uk: "\u041D\u0435 \u0445\u0432\u0438\u043B\u044E\u0439\u0442\u0435\u0441\u044F, \u0432\u0441\u0435 \u0434\u043E\u0431\u0440\u0435."
        }
      ],
      related: [
        {
          id: "present",
          why: {
            fr: "Les formes viennent directement du pr\xE9sent.",
            en: "The forms come directly from the present.",
            uk: "\u0424\u043E\u0440\u043C\u0438 \u043F\u043E\u0445\u043E\u0434\u044F\u0442\u044C \u0431\u0435\u0437\u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E \u0432\u0456\u0434 \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u044C\u043E\u0433\u043E \u0447\u0430\u0441\u0443."
          }
        },
        {
          id: "conditionnel-present",
          why: {
            fr: "Pour \xEAtre plus poli qu'un ordre : \xAB Pourriez-vous\u2026 ? \xBB au lieu de \xAB Faites\u2026 ! \xBB",
            en: "To be more polite than an order: \u201CPourriez-vous\u2026?\u201D instead of \u201CFaites\u2026!\u201D",
            uk: "\u0429\u043E\u0431 \u0431\u0443\u0442\u0438 \u0432\u0432\u0456\u0447\u043B\u0438\u0432\u0456\u0448\u0438\u043C \u0437\u0430 \u043D\u0430\u043A\u0430\u0437: \xABPourriez-vous\u2026?\xBB \u0437\u0430\u043C\u0456\u0441\u0442\u044C \xABFaites\u2026!\xBB"
          }
        }
      ]
    },
    // ========== 6. FUTUR SIMPLE ==========
    {
      id: "futur-simple",
      name: "Le futur simple",
      badge: "reconnaitre",
      tagline: {
        fr: "Le futur \xAB officiel \xBB : projets lointains, promesses, pr\xE9visions. \xC0 reconna\xEEtre \xE0 l'A2, \xE0 ma\xEEtriser au B1.",
        en: "The \u201Cofficial\u201D future: distant plans, promises, forecasts. Recognize it at A2, master it at B1.",
        uk: "\xAB\u041E\u0444\u0456\u0446\u0456\u0439\u043D\u0435\xBB \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454: \u0434\u0430\u043B\u0435\u043A\u0456 \u043F\u043B\u0430\u043D\u0438, \u043E\u0431\u0456\u0446\u044F\u043D\u043A\u0438, \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0438. \u041D\u0430 A2 \u2014 \u0432\u043F\u0456\u0437\u043D\u0430\u0432\u0430\u0442\u0438, \u043D\u0430 B1 \u2014 \u0432\u043E\u043B\u043E\u0434\u0456\u0442\u0438."
      },
      usage: [
        {
          fr: "Un futur lointain ou incertain : \xAB Un jour, j'habiterai \xE0 la mer. \xBB",
          en: "A distant or uncertain future: \u201COne day I will live by the sea.\u201D",
          uk: "\u0414\u0430\u043B\u0435\u043A\u0435 \u0430\u0431\u043E \u043D\u0435\u043F\u0435\u0432\u043D\u0435 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454: \xAB\u041A\u043E\u043B\u0438\u0441\u044C \u044F \u0436\u0438\u0442\u0438\u043C\u0443 \u0431\u0456\u043B\u044F \u043C\u043E\u0440\u044F\xBB."
        },
        {
          fr: "Une promesse : \xAB Je t'appellerai demain, promis. \xBB",
          en: "A promise: \u201CI'll call you tomorrow, promise.\u201D",
          uk: "\u041E\u0431\u0456\u0446\u044F\u043D\u043A\u0430: \xAB\u042F \u043F\u043E\u0434\u0437\u0432\u043E\u043D\u044E \u0442\u043E\u0431\u0456 \u0437\u0430\u0432\u0442\u0440\u0430, \u043E\u0431\u0456\u0446\u044F\u044E\xBB."
        },
        {
          fr: "Les pr\xE9visions (m\xE9t\xE9o\u2026) : \xAB Demain, il pleuvra sur Paris. \xBB",
          en: "Forecasts (weather\u2026): \u201CTomorrow it will rain in Paris.\u201D",
          uk: "\u041F\u0440\u043E\u0433\u043D\u043E\u0437\u0438 (\u043F\u043E\u0433\u043E\u0434\u0430\u2026): \xAB\u0417\u0430\u0432\u0442\u0440\u0430 \u0432 \u041F\u0430\u0440\u0438\u0436\u0456 \u0439\u0442\u0438\u043C\u0435 \u0434\u043E\u0449\xBB."
        },
        {
          fr: "Apr\xE8s \xAB si + pr\xE9sent \xBB : \xAB Si j'ai le temps, je viendrai. \xBB",
          en: "After \u201Csi + present\u201D: \u201CIf I have time, I will come.\u201D",
          uk: "\u041F\u0456\u0441\u043B\u044F \xABsi + \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0456\u0439 \u0447\u0430\u0441\xBB: \xAB\u042F\u043A\u0449\u043E \u043C\u0430\u0442\u0438\u043C\u0443 \u0447\u0430\u0441, \u044F \u043F\u0440\u0438\u0439\u0434\u0443\xBB."
        }
      ],
      formula: "sujet + {infinitif:inf} + {-ai, -as, -a, -ons, -ez, -ont:end}",
      formulaNotes: [
        {
          fr: "Les terminaisons = avoir au pr\xE9sent (ai, as, a, ons, ez, ont) !",
          en: "The endings = avoir in the present (ai, as, a, ons, ez, ont)!",
          uk: "\u0417\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F = avoir \u0443 \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u044C\u043E\u043C\u0443 \u0447\u0430\u0441\u0456 (ai, as, a, ons, ez, ont)!"
        },
        {
          fr: "Verbes en -re : on enl\xE8ve le -e final \u2192 prendre \u2192 je prendrai.",
          en: "-re verbs: drop the final -e \u2192 prendre \u2192 je prendrai.",
          uk: "\u0414\u0456\u0454\u0441\u043B\u043E\u0432\u0430 \u043D\u0430 -re: \u0432\u0456\u0434\u043A\u0438\u0434\u0430\u0454\u043C\u043E \u043A\u0456\u043D\u0446\u0435\u0432\u0435 -e \u2192 prendre \u2192 je prendrai."
        },
        {
          fr: "Le radical du futur contient toujours un R \u2014 c'est le son du futur : je parleRai.",
          en: "The future stem always contains an R \u2014 that's the sound of the future: je parleRai.",
          uk: "\u041E\u0441\u043D\u043E\u0432\u0430 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044C\u043E\u0433\u043E \u0437\u0430\u0432\u0436\u0434\u0438 \u043C\u0456\u0441\u0442\u0438\u0442\u044C R \u2014 \u0446\u0435 \u0437\u0432\u0443\u043A \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044C\u043E\u0433\u043E: je parleRai."
        }
      ],
      tables: [
        {
          title: {
            fr: "Mod\xE8le : parler",
            en: "Model: parler",
            uk: "\u0417\u0440\u0430\u0437\u043E\u043A: parler"
          },
          rows: [
            { pronoun: "je", form: "{parler:inf}{ai:end}" },
            { pronoun: "tu", form: "{parler:inf}{as:end}" },
            { pronoun: "il / elle", form: "{parler:inf}{a:end}" },
            { pronoun: "nous", form: "{parler:inf}{ons:end}" },
            { pronoun: "vous", form: "{parler:inf}{ez:end}" },
            { pronoun: "ils / elles", form: "{parler:inf}{ont:end}" }
          ]
        }
      ],
      extra: {
        title: {
          fr: "Radicaux irr\xE9guliers fr\xE9quents",
          en: "Common irregular stems",
          uk: "\u0427\u0430\u0441\u0442\u0456 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u043E\u0441\u043D\u043E\u0432\u0438"
        },
        rows: [
          { pronoun: "\xEAtre \u2192 ser-", form: "je serai" },
          { pronoun: "avoir \u2192 aur-", form: "j'aurai" },
          { pronoun: "aller \u2192 ir-", form: "j'irai" },
          { pronoun: "faire \u2192 fer-", form: "je ferai" },
          { pronoun: "venir \u2192 viendr-", form: "je viendrai" },
          { pronoun: "pouvoir \u2192 pourr-", form: "je pourrai" },
          { pronoun: "voir \u2192 verr-", form: "je verrai" },
          { pronoun: "devoir \u2192 devr-", form: "je devrai" }
        ]
      },
      mnemo: {
        fr: "Infinitif + AVOIR : \xAB je parler-AI \xBB = j'ai \xE0 parler dans le futur. Et le R est toujours l\xE0 : parleRai, seRai, iRai.",
        en: "Infinitive + AVOIR: \u201Cje parler-AI\u201D. And the R is always there: parleRai, seRai, iRai.",
        uk: "\u0406\u043D\u0444\u0456\u043D\u0456\u0442\u0438\u0432 + AVOIR: \xABje parler-AI\xBB. \u0406 R \u0437\u0430\u0432\u0436\u0434\u0438 \u043D\u0430 \u043C\u0456\u0441\u0446\u0456: parleRai, seRai, iRai."
      },
      examples: [
        {
          fr: "Un jour, nous {ach\xE8ter:inf}{ons:end} une maison en Provence.",
          en: "One day we will buy a house in Provence.",
          uk: "\u041A\u043E\u043B\u0438\u0441\u044C \u043C\u0438 \u043A\u0443\u043F\u0438\u043C\u043E \u0431\u0443\u0434\u0438\u043D\u043E\u043A \u0443 \u041F\u0440\u043E\u0432\u0430\u043D\u0441\u0456."
        },
        {
          fr: "Je t'{appeller:inf}{ai:end} ce soir.",
          en: "I will call you tonight.",
          uk: "\u042F \u043F\u043E\u0434\u0437\u0432\u043E\u043D\u044E \u0442\u043E\u0431\u0456 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u0432\u0432\u0435\u0447\u0435\u0440\u0456."
        },
        {
          fr: "Si tu \xE9tudies chaque jour, tu {r\xE9ussir:inf}{as:end} le DELF.",
          en: "If you study every day, you will pass the DELF.",
          uk: "\u042F\u043A\u0449\u043E \u0442\u0438 \u0432\u0447\u0438\u0442\u0438\u043C\u0435\u0448\u0441\u044F \u0449\u043E\u0434\u043D\u044F, \u0442\u0438 \u0441\u043A\u043B\u0430\u0434\u0435\u0448 DELF.",
          note: {
            fr: "si + pr\xE9sent \u2192 futur simple.",
            en: "si + present \u2192 futur simple.",
            uk: "si + \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0456\u0439 \u0447\u0430\u0441 \u2192 futur simple."
          }
        },
        {
          fr: "Demain, il {fer:inf}{a:end} beau sur toute la France.",
          en: "Tomorrow the weather will be nice all over France.",
          uk: "\u0417\u0430\u0432\u0442\u0440\u0430 \u043F\u043E \u0432\u0441\u0456\u0439 \u0424\u0440\u0430\u043D\u0446\u0456\u0457 \u0431\u0443\u0434\u0435 \u0433\u0430\u0440\u043D\u0430 \u043F\u043E\u0433\u043E\u0434\u0430.",
          note: {
            fr: "faire \u2192 radical irr\xE9gulier fer-.",
            en: "faire \u2192 irregular stem fer-.",
            uk: "faire \u2192 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430 fer-."
          }
        }
      ],
      related: [
        {
          id: "futur-proche",
          why: {
            fr: "\xC0 l'oral, le futur proche remplace souvent le futur simple.",
            en: "In speech, the futur proche often replaces the futur simple.",
            uk: "\u0412 \u0443\u0441\u043D\u043E\u043C\u0443 \u043C\u043E\u0432\u043B\u0435\u043D\u043D\u0456 futur proche \u0447\u0430\u0441\u0442\u043E \u0437\u0430\u043C\u0456\u043D\u044E\u0454 futur simple."
          }
        },
        {
          id: "conditionnel-present",
          why: {
            fr: "M\xEAme radical ! futur + terminaisons de l'imparfait = conditionnel : je voudrai \u2192 je voudrais.",
            en: "Same stem! future + imparfait endings = conditional: je voudrai \u2192 je voudrais.",
            uk: "\u0422\u0430 \u0441\u0430\u043C\u0430 \u043E\u0441\u043D\u043E\u0432\u0430! \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454 + \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F imparfait = \u0443\u043C\u043E\u0432\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431: je voudrai \u2192 je voudrais."
          }
        }
      ]
    },
    // ========== 7. PASSÉ RÉCENT ==========
    {
      id: "passe-recent",
      name: "Le pass\xE9 r\xE9cent",
      badge: "essentiel",
      tagline: {
        fr: "\xAB Je viens de\u2026 \xBB \u2014 une action termin\xE9e il y a quelques instants. Le miroir du futur proche.",
        en: "\u201CJe viens de\u2026\u201D \u2014 an action finished moments ago. The mirror of the futur proche.",
        uk: "\xABJe viens de\u2026\xBB \u2014 \u0434\u0456\u044F, \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u043C\u0438\u0442\u044C \u0442\u043E\u043C\u0443. \u0414\u0437\u0435\u0440\u043A\u0430\u043B\u043E futur proche."
      },
      usage: [
        {
          fr: "Une action tout juste finie : \xAB Je viens de rentrer du travail. \xBB",
          en: "An action that just finished: \u201CI just got home from work.\u201D",
          uk: "\u0429\u043E\u0439\u043D\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u0434\u0456\u044F: \xAB\u042F \u0449\u043E\u0439\u043D\u043E \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0432\u0441\u044F \u0437 \u0440\u043E\u0431\u043E\u0442\u0438\xBB."
        },
        {
          fr: "Refuser poliment : \xAB \u2014 Tu veux d\xE9jeuner ? \u2014 Non merci, je viens de manger. \xBB",
          en: "Declining politely: \u201C\u2014 Want to have lunch? \u2014 No thanks, I just ate.\u201D",
          uk: "\u0412\u0432\u0456\u0447\u043B\u0438\u0432\u0430 \u0432\u0456\u0434\u043C\u043E\u0432\u0430: \xAB\u2014 \u041F\u043E\u043E\u0431\u0456\u0434\u0430\u0454\u043C\u043E? \u2014 \u041D\u0456, \u0434\u044F\u043A\u0443\u044E, \u044F \u0449\u043E\u0439\u043D\u043E \u043F\u043E\u0457\u0432\xBB."
        },
        {
          fr: "Une nouvelle toute fra\xEEche : \xAB Le train vient de partir ! \xBB",
          en: "Fresh news: \u201CThe train just left!\u201D",
          uk: "\u0421\u0432\u0456\u0436\u0430 \u043D\u043E\u0432\u0438\u043D\u0430: \xAB\u041F\u043E\u0442\u044F\u0433 \u0449\u043E\u0439\u043D\u043E \u043F\u043E\u0457\u0445\u0430\u0432!\xBB"
        }
      ],
      formula: "sujet + {venir au pr\xE9sent:aux} + {de:aux} + {infinitif:inf}",
      formulaNotes: [
        {
          fr: "= anglais \xAB to have just \xBB : I just ate = je viens de manger.",
          en: "= English \u201Cto have just\u201D: I just ate = je viens de manger.",
          uk: "= \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0435 \xABto have just\xBB: I just ate = je viens de manger."
        },
        {
          fr: "de + voyelle \u2192 d' : je viens d'arriver.",
          en: "de + vowel \u2192 d': je viens d'arriver.",
          uk: "de + \u0433\u043E\u043B\u043E\u0441\u043D\u0430 \u2192 d': je viens d'arriver."
        }
      ],
      tables: [
        {
          title: {
            fr: "Mod\xE8le : finir",
            en: "Model: finir",
            uk: "\u0417\u0440\u0430\u0437\u043E\u043A: finir"
          },
          rows: [
            { pronoun: "je", form: "{viens:aux} {de:aux} {finir:inf}" },
            { pronoun: "tu", form: "{viens:aux} {de:aux} {finir:inf}" },
            { pronoun: "il / elle", form: "{vient:aux} {de:aux} {finir:inf}" },
            { pronoun: "nous", form: "{venons:aux} {de:aux} {finir:inf}" },
            { pronoun: "vous", form: "{venez:aux} {de:aux} {finir:inf}" },
            { pronoun: "ils / elles", form: "{viennent:aux} {de:aux} {finir:inf}" }
          ]
        }
      ],
      mnemo: {
        fr: "VENIR DE = \xAB je viens (j'arrive) de cette action \xBB. Miroir parfait : je viens de manger \u2190 MAINTENANT \u2192 je vais manger.",
        en: "VENIR DE = \u201CI'm coming from that action\u201D. Perfect mirror: je viens de manger \u2190 NOW \u2192 je vais manger.",
        uk: "VENIR DE = \xAB\u044F \u0439\u0434\u0443 \u0432\u0456\u0434 \u0446\u0456\u0454\u0457 \u0434\u0456\u0457\xBB. \u0406\u0434\u0435\u0430\u043B\u044C\u043D\u0435 \u0434\u0437\u0435\u0440\u043A\u0430\u043B\u043E: je viens de manger \u2190 \u0417\u0410\u0420\u0410\u0417 \u2192 je vais manger."
      },
      examples: [
        {
          fr: "Je {viens:aux} {d':aux}{arriver:inf} au bureau.",
          en: "I just arrived at the office.",
          uk: "\u042F \u0449\u043E\u0439\u043D\u043E \u043F\u0440\u0438\u0439\u0448\u043E\u0432 \u0432 \u043E\u0444\u0456\u0441."
        },
        {
          fr: "Elle {vient:aux} {de:aux} {finir:inf} sa le\xE7on de fran\xE7ais.",
          en: "She just finished her French lesson.",
          uk: "\u0412\u043E\u043D\u0430 \u0449\u043E\u0439\u043D\u043E \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u043B\u0430 \u0443\u0440\u043E\u043A \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u044C\u043A\u043E\u0457."
        },
        {
          fr: "Nous {venons:aux} {de:aux} {voir:inf} ce film.",
          en: "We just saw that film.",
          uk: "\u041C\u0438 \u0449\u043E\u0439\u043D\u043E \u043F\u043E\u0434\u0438\u0432\u0438\u043B\u0438\u0441\u044F \u0446\u0435\u0439 \u0444\u0456\u043B\u044C\u043C."
        },
        {
          fr: "Le bus {vient:aux} {de:aux} {passer:inf} \u2014 le prochain est dans dix minutes.",
          en: "The bus just went by \u2014 the next one is in ten minutes.",
          uk: "\u0410\u0432\u0442\u043E\u0431\u0443\u0441 \u0449\u043E\u0439\u043D\u043E \u043F\u0440\u043E\u0457\u0445\u0430\u0432 \u2014 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0437\u0430 \u0434\u0435\u0441\u044F\u0442\u044C \u0445\u0432\u0438\u043B\u0438\u043D."
        }
      ],
      related: [
        {
          id: "futur-proche",
          why: {
            fr: "Construction miroir : venir de + inf (juste avant) \u2194 aller + inf (juste apr\xE8s).",
            en: "Mirror construction: venir de + inf (just before) \u2194 aller + inf (just after).",
            uk: "\u0414\u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u044F: venir de + \u0456\u043D\u0444 (\u0449\u043E\u0439\u043D\u043E) \u2194 aller + \u0456\u043D\u0444 (\u043E\u0442-\u043E\u0442)."
          }
        },
        {
          id: "passe-compose",
          why: {
            fr: "Il y a 5 minutes \u2192 pass\xE9 r\xE9cent \xB7 hier \u2192 pass\xE9 compos\xE9.",
            en: "5 minutes ago \u2192 pass\xE9 r\xE9cent \xB7 yesterday \u2192 pass\xE9 compos\xE9.",
            uk: "5 \u0445\u0432\u0438\u043B\u0438\u043D \u0442\u043E\u043C\u0443 \u2192 pass\xE9 r\xE9cent \xB7 \u0443\u0447\u043E\u0440\u0430 \u2192 pass\xE9 compos\xE9."
          }
        }
      ]
    },
    // ========== 8. CONDITIONNEL PRÉSENT ==========
    {
      id: "conditionnel-present",
      name: "Le conditionnel pr\xE9sent",
      badge: "essentiel",
      tagline: {
        fr: "Le temps du poli, du r\xEAve et de l'hypoth\xE8se. Radical du futur + terminaisons de l'imparfait \u2014 le -r- est toujours l\xE0.",
        en: "The tense of politeness, dreams and hypothesis. Future stem + imparfait endings \u2014 the -r- is always there.",
        uk: "\u0427\u0430\u0441 \u0432\u0432\u0456\u0447\u043B\u0438\u0432\u043E\u0441\u0442\u0456, \u043C\u0440\u0456\u0457 \u0442\u0430 \u043F\u0440\u0438\u043F\u0443\u0449\u0435\u043D\u043D\u044F. \u041E\u0441\u043D\u043E\u0432\u0430 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044C\u043E\u0433\u043E + \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F imparfait \u2014 -r- \u0437\u0430\u0432\u0436\u0434\u0438 \u043F\u0440\u0438\u0441\u0443\u0442\u043D\u0454."
      },
      usage: [
        {
          fr: "La politesse : \xAB Je voudrais un renseignement. \xBB / \xAB Pourriez-vous m'aider ? \xBB",
          en: "Politeness: \u201CI'd like some information.\u201D / \u201CCould you help me?\u201D",
          uk: "\u0412\u0432\u0456\u0447\u043B\u0438\u0432\u0456\u0441\u0442\u044C: \xAB\u042F \u0445\u043E\u0442\u0456\u0432 \u0431\u0438 \u0434\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F\xBB. / \xAB\u0427\u0438 \u043D\u0435 \u043C\u043E\u0433\u043B\u0438 \u0431 \u0432\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438?\xBB"
        },
        {
          fr: "Le conseil : \xAB Tu devrais voir ce film en v.o. \xBB",
          en: "Advice: \u201CYou should see that film in the original version.\u201D",
          uk: "\u041F\u043E\u0440\u0430\u0434\u0430: \xAB\u0422\u043E\u0431\u0456 \u0432\u0430\u0440\u0442\u043E \u043F\u043E\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044F \u0446\u0435\u0439 \u0444\u0456\u043B\u044C\u043C \u043C\u043E\u0432\u043E\u044E \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u0443\xBB."
        },
        {
          fr: "Le souhait : \xAB J'aimerais vivre \xE0 Lyon. \xBB / \xAB Je boirais bien un caf\xE9. \xBB",
          en: "A wish: \u201CI'd love to live in Lyon.\u201D / \u201CI could go for a coffee.\u201D",
          uk: "\u0411\u0430\u0436\u0430\u043D\u043D\u044F: \xAB\u042F \u0445\u043E\u0442\u0456\u0432 \u0431\u0438 \u0436\u0438\u0442\u0438 \u0432 \u041B\u0456\u043E\u043D\u0456\xBB. / \xAB\u042F \u0431 \u0432\u0438\u043F\u0438\u0432 \u043A\u0430\u0432\u0438\xBB."
        },
        {
          fr: "La suggestion : \xAB On pourrait aller au cin\xE9-club ? \xBB",
          en: "A suggestion: \u201CWe could go to the film club?\u201D",
          uk: "\u041F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u044F: \xAB\u041C\u043E\u0436\u0435, \u043F\u0456\u0434\u0435\u043C\u043E \u0432 \u043A\u0456\u043D\u043E\u043A\u043B\u0443\u0431?\xBB"
        },
        {
          fr: "L'hypoth\xE8se, avec \xAB si \xBB + imparfait : \xAB Si j'\xE9tais am\xE9ricain, je serais une star. \xBB",
          en: "Hypothesis, with \u201Csi\u201D + imparfait: \u201CIf I were American, I'd be a star.\u201D",
          uk: "\u041F\u0440\u0438\u043F\u0443\u0449\u0435\u043D\u043D\u044F, \u0456\u0437 \xABsi\xBB + imparfait: \xAB\u042F\u043A\u0431\u0438 \u044F \u0431\u0443\u0432 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0446\u0435\u043C, \u044F \u0431\u0443\u0432 \u0431\u0438 \u0437\u0456\u0440\u043A\u043E\u044E\xBB."
        },
        {
          fr: "L'information non confirm\xE9e (presse) : \xAB Il y aurait trois bless\xE9s. \xBB",
          en: "Unconfirmed information (news): \u201CThere are reportedly three injured.\u201D",
          uk: "\u041D\u0435\u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F (\u043F\u0440\u0435\u0441\u0430): \xAB\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u044F\u044E\u0442\u044C \u043F\u0440\u043E \u0442\u0440\u044C\u043E\u0445 \u043F\u043E\u0440\u0430\u043D\u0435\u043D\u0438\u0445\xBB."
        },
        {
          fr: "Le futur dans le pass\xE9 : \xAB Il a dit qu'il viendrait. \xBB",
          en: "The future in the past: \u201CHe said he would come.\u201D",
          uk: "\u041C\u0430\u0439\u0431\u0443\u0442\u043D\u0454 \u0432 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443: \xAB\u0412\u0456\u043D \u0441\u043A\u0430\u0437\u0430\u0432, \u0449\u043E \u043F\u0440\u0438\u0439\u0434\u0435\xBB."
        }
      ],
      formula: "{radical du FUTUR:stem} + {terminaisons de l'IMPARFAIT:end}",
      formulaNotes: [
        {
          fr: "Le -r- du radical est la signature du conditionnel. Sans -r-, c'est l'imparfait : je voulais \u2260 je voudrais.",
          en: "The -r- in the stem is the conditional's signature. Without -r- it's the imparfait: je voulais \u2260 je voudrais.",
          uk: "-r- \u0432 \u043E\u0441\u043D\u043E\u0432\u0456 \u2014 \u043F\u0456\u0434\u043F\u0438\u0441 \u0443\u043C\u043E\u0432\u043D\u043E\u0433\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u0443. \u0411\u0435\u0437 -r- \u0446\u0435 imparfait: je voulais \u2260 je voudrais."
        },
        {
          fr: "Verbes en -re : on enl\xE8ve le e \u2192 prendre \u2192 je prendrais.",
          en: "-re verbs: drop the e \u2192 prendre \u2192 je prendrais.",
          uk: "\u0414\u0456\u0454\u0441\u043B\u043E\u0432\u0430 \u043D\u0430 -re: \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u0454\u043C\u043E e \u2192 prendre \u2192 je prendrais."
        },
        {
          fr: "\xC0 l'oral, je parlerai (futur) et je parlerais (conditionnel) se ressemblent. \xC0 l'\xE9crit, ne les confondez pas.",
          en: "Aloud, je parlerai (future) and je parlerais (conditional) sound alike. In writing, don't confuse them.",
          uk: "\u041D\u0430 \u0441\u043B\u0443\u0445 je parlerai (\u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454) \u0456 je parlerais (\u0443\u043C\u043E\u0432\u043D\u0438\u0439) \u0441\u0445\u043E\u0436\u0456. \u041D\u0430 \u043F\u0438\u0441\u044C\u043C\u0456 \u043D\u0435 \u043F\u043B\u0443\u0442\u0430\u0439\u0442\u0435."
        }
      ],
      tables: [
        {
          title: { fr: "Mod\xE8le : parler", en: "Model: parler", uk: "\u0417\u0440\u0430\u0437\u043E\u043A: parler" },
          rows: [
            { pronoun: "je", form: "{parler:stem}{ais:end}" },
            { pronoun: "tu", form: "{parler:stem}{ais:end}" },
            { pronoun: "il / elle / on", form: "{parler:stem}{ait:end}" },
            { pronoun: "nous", form: "{parler:stem}{ions:end}" },
            { pronoun: "vous", form: "{parler:stem}{iez:end}" },
            { pronoun: "ils / elles", form: "{parler:stem}{aient:end}" }
          ],
          footnote: {
            fr: "Attention : nous \u2192 -IONS, vous \u2192 -IEZ. Jamais -ons ni -ez tout seuls.",
            en: "Careful: nous \u2192 -IONS, vous \u2192 -IEZ. Never bare -ons or -ez.",
            uk: "\u0423\u0432\u0430\u0433\u0430: nous \u2192 -IONS, vous \u2192 -IEZ. \u041D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E -ons \u0447\u0438 -ez."
          }
        }
      ],
      extra: {
        title: {
          fr: "Les 18 radicaux irr\xE9guliers \u2014 \xE0 savoir par c\u0153ur",
          en: "The 18 irregular stems \u2014 learn by heart",
          uk: "18 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0445 \u043E\u0441\u043D\u043E\u0432 \u2014 \u0432\u0438\u0432\u0447\u0438\u0442\u0438 \u043D\u0430\u043F\u0430\u043C'\u044F\u0442\u044C"
        },
        rows: [
          { pronoun: "\xEAtre", form: "{ser:stem}{ais:end} \u2014 je serais" },
          { pronoun: "avoir", form: "{aur:stem}{ais:end} \u2014 j'aurais" },
          { pronoun: "aller", form: "{ir:stem}{ais:end} \u2014 j'irais" },
          { pronoun: "faire", form: "{fer:stem}{ais:end} \u2014 je ferais" },
          { pronoun: "pouvoir", form: "{pourr:stem}{ais:end} \u2014 je pourrais" },
          { pronoun: "vouloir", form: "{voudr:stem}{ais:end} \u2014 je voudrais" },
          { pronoun: "devoir", form: "{devr:stem}{ais:end} \u2014 je devrais" },
          { pronoun: "savoir", form: "{saur:stem}{ais:end} \u2014 je saurais" },
          { pronoun: "voir", form: "{verr:stem}{ais:end} \u2014 je verrais" },
          { pronoun: "venir", form: "{viendr:stem}{ais:end} \u2014 je viendrais" },
          { pronoun: "tenir", form: "{tiendr:stem}{ais:end} \u2014 je tiendrais" },
          { pronoun: "envoyer", form: "{enverr:stem}{ais:end} \u2014 j'enverrais" },
          { pronoun: "recevoir", form: "{recevr:stem}{ais:end} \u2014 je recevrais" },
          { pronoun: "courir", form: "{courr:stem}{ais:end} \u2014 je courrais" },
          { pronoun: "mourir", form: "{mourr:stem}{ais:end} \u2014 je mourrais" },
          { pronoun: "valoir", form: "{vaudr:stem}{ait:end} \u2014 \xE7a vaudrait" },
          { pronoun: "falloir", form: "{faudr:stem}{ait:end} \u2014 il faudrait" },
          { pronoun: "pleuvoir", form: "{pleuvr:stem}{ait:end} \u2014 il pleuvrait" }
        ],
        footnote: {
          fr: "Ce sont exactement les radicaux du futur simple. Apprenez-les une fois, servez-vous-en deux fois.",
          en: "These are exactly the futur simple stems. Learn them once, use them twice.",
          uk: "\u0426\u0435 \u0440\u0456\u0432\u043D\u043E \u0442\u0456 \u0441\u0430\u043C\u0456 \u043E\u0441\u043D\u043E\u0432\u0438, \u0449\u043E \u0439 \u0443 futur simple. \u0412\u0438\u0432\u0447\u0456\u0442\u044C \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u2014 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0439\u0442\u0435\u0441\u044F \u0434\u0432\u0456\u0447\u0456."
        }
      },
      mnemo: {
        fr: "FUTUR + IMPARFAIT = CONDITIONNEL. Le radical vient du futur (avec son -r-), la terminaison vient de l'imparfait.",
        en: "FUTURE + IMPARFAIT = CONDITIONAL. Stem from the future (with its -r-), ending from the imparfait.",
        uk: "\u041C\u0410\u0419\u0411\u0423\u0422\u041D\u0404 + IMPARFAIT = \u0423\u041C\u041E\u0412\u041D\u0418\u0419. \u041E\u0441\u043D\u043E\u0432\u0430 \u0432\u0456\u0434 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044C\u043E\u0433\u043E (\u0437 -r-), \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F \u0432\u0456\u0434 imparfait."
      },
      examples: [
        {
          fr: "Je {voudr:stem}{ais:end} visiter cet appartement, s'il vous pla\xEEt.",
          en: "I would like to view this flat, please.",
          uk: "\u042F \u0445\u043E\u0442\u0456\u0432 \u0431\u0438 \u043F\u043E\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044F \u0446\u044E \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443, \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430."
        },
        {
          fr: "Vous {ser:stem}{iez:end} plus tranquille en banlieue.",
          en: "You would be quieter in the suburbs.",
          uk: "\u0412\u0430\u043C \u0431\u0443\u043B\u043E \u0431 \u0441\u043F\u043E\u043A\u0456\u0439\u043D\u0456\u0448\u0435 \u0432 \u043F\u0435\u0440\u0435\u0434\u043C\u0456\u0441\u0442\u0456.",
          note: {
            fr: "vous \u2192 -IEZ. \xAB vous serons \xBB est une faute tr\xE8s fr\xE9quente.",
            en: "vous \u2192 -IEZ. \u201Cvous serons\u201D is a very common mistake.",
            uk: "vous \u2192 -IEZ. \xABvous serons\xBB \u2014 \u0434\u0443\u0436\u0435 \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430."
          }
        },
        {
          fr: "Si j'avais le temps, j'{ir:stem}{ais:end} au cin\xE9ma ce soir.",
          en: "If I had time, I'd go to the cinema tonight.",
          uk: "\u042F\u043A\u0431\u0438 \u044F \u043C\u0430\u0432 \u0447\u0430\u0441, \u044F \u0431 \u043F\u0456\u0448\u043E\u0432 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u0432 \u043A\u0456\u043D\u043E.",
          note: {
            fr: "\xC9lision obligatoire : j'irais, jamais \xAB je irais \xBB.",
            en: "Elision required: j'irais, never \u201Cje irais\u201D.",
            uk: "\u041E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0430 \u0435\u043B\u0456\u0437\u0456\u044F: j'irais, \u043D\u0456\u043A\u043E\u043B\u0438 \xABje irais\xBB."
          }
        },
        {
          fr: "On {pourr:stem}{ait:end} repeindre le salon avant de pendre la cr\xE9maill\xE8re.",
          en: "We could repaint the living room before the housewarming.",
          uk: "\u041C\u043E\u0436\u043D\u0430 \u0431\u0443\u043B\u043E \u0431 \u043F\u0435\u0440\u0435\u0444\u0430\u0440\u0431\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u0442\u0430\u043B\u044C\u043D\u044E \u043F\u0435\u0440\u0435\u0434 \u043D\u043E\u0432\u043E\u0441\u0456\u043B\u043B\u044F\u043C."
        }
      ],
      related: [
        {
          id: "futur-simple",
          why: {
            fr: "M\xEAme radical. Seule la terminaison change : je parlerai (futur) / je parlerais (conditionnel).",
            en: "Same stem. Only the ending changes: je parlerai (future) / je parlerais (conditional).",
            uk: "\u0422\u0430 \u0441\u0430\u043C\u0430 \u043E\u0441\u043D\u043E\u0432\u0430. \u0417\u043C\u0456\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F: je parlerai / je parlerais."
          }
        },
        {
          id: "imparfait",
          why: {
            fr: "M\xEAmes terminaisons (-ais, -ait, -ions, -iez, -aient).",
            en: "Same endings (-ais, -ait, -ions, -iez, -aient).",
            uk: "\u0422\u0456 \u0441\u0430\u043C\u0456 \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F (-ais, -ait, -ions, -iez, -aient)."
          }
        },
        {
          id: "conditionnel-passe",
          why: {
            fr: "Le conditionnel pass\xE9, c'est celui-ci + un participe pass\xE9.",
            en: "The past conditional is this one plus a past participle.",
            uk: "\u0423\u043C\u043E\u0432\u043D\u0438\u0439 \u043C\u0438\u043D\u0443\u043B\u0438\u0439 \u2014 \u0446\u0435 \u0446\u0435\u0439 \u043F\u043B\u044E\u0441 \u0434\u0456\u0454\u043F\u0440\u0438\u043A\u043C\u0435\u0442\u043D\u0438\u043A."
          }
        }
      ]
    },
    // ========== 9. CONDITIONNEL PASSÉ ==========
    {
      id: "conditionnel-passe",
      name: "Le conditionnel pass\xE9",
      badge: "essentiel",
      tagline: {
        fr: "Le temps du regret et du reproche : ce qui aurait pu arriver, mais n'est pas arriv\xE9.",
        en: "The tense of regret and reproach: what could have happened, but didn't.",
        uk: "\u0427\u0430\u0441 \u0436\u0430\u043B\u044E \u0439 \u0434\u043E\u043A\u043E\u0440\u0443: \u0442\u0435, \u0449\u043E \u043C\u043E\u0433\u043B\u043E \u0441\u0442\u0430\u0442\u0438\u0441\u044F, \u0430\u043B\u0435 \u043D\u0435 \u0441\u0442\u0430\u043B\u043E\u0441\u044F."
      },
      usage: [
        {
          fr: "Le regret : \xAB J'aurais aim\xE9 visiter Le Cyclop. \xBB (mais je ne l'ai pas fait)",
          en: "Regret: \u201CI would have liked to visit Le Cyclop.\u201D (but I didn't)",
          uk: "\u0416\u0430\u043B\u044C: \xAB\u042F \u0445\u043E\u0442\u0456\u0432 \u0431\u0438 \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u0442\u0438 Le Cyclop\xBB. (\u0430\u043B\u0435 \u043D\u0435 \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u0432)"
        },
        {
          fr: "Le reproche : \xAB Tu aurais d\xFB me pr\xE9venir. \xBB / \xAB Vous auriez pu r\xE9pondre. \xBB",
          en: "Reproach: \u201CYou should have told me.\u201D / \u201CYou could have answered.\u201D",
          uk: "\u0414\u043E\u043A\u0456\u0440: \xAB\u0422\u0438 \u043C\u0430\u0432 \u0431\u0438 \u043C\u0435\u043D\u0435 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u0438\u0442\u0438\xBB. / \xAB\u0412\u0438 \u043C\u043E\u0433\u043B\u0438 \u0431 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0441\u0442\u0438\xBB."
        },
        {
          fr: "L'action non r\xE9alis\xE9e, avec \xAB si \xBB + plus-que-parfait : \xAB Si j'avais su, je serais venu. \xBB",
          en: "An unrealised action, with \u201Csi\u201D + pluperfect: \u201CIf I had known, I would have come.\u201D",
          uk: "\u041D\u0435\u0437\u0434\u0456\u0439\u0441\u043D\u0435\u043D\u0430 \u0434\u0456\u044F, \u0456\u0437 \xABsi\xBB + plus-que-parfait: \xAB\u042F\u043A\u0431\u0438 \u044F \u0437\u043D\u0430\u0432, \u044F \u0431 \u043F\u0440\u0438\u0439\u0448\u043E\u0432\xBB."
        },
        {
          fr: "L'information non confirm\xE9e au pass\xE9 : \xAB Le feu aurait d\xE9truit trois maisons. \xBB",
          en: "Unconfirmed past information: \u201CThe fire reportedly destroyed three houses.\u201D",
          uk: "\u041D\u0435\u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u043C\u0438\u043D\u0443\u043B\u0435: \xAB\u041F\u043E\u0436\u0435\u0436\u0430 \u043D\u0456\u0431\u0438\u0442\u043E \u0437\u043D\u0438\u0449\u0438\u043B\u0430 \u0442\u0440\u0438 \u0431\u0443\u0434\u0438\u043D\u043A\u0438\xBB."
        }
      ],
      formula: "{avoir / \xEAtre au conditionnel pr\xE9sent:aux} + {participe pass\xE9:part}",
      formulaNotes: [
        {
          fr: "Les deux formules \xE0 conna\xEEtre absolument : j'aurais d\xFB + infinitif (moi) \xB7 tu aurais pu + infinitif (toi).",
          en: "The two must-know formulas: j'aurais d\xFB + infinitive (me) \xB7 tu aurais pu + infinitive (you).",
          uk: "\u0414\u0432\u0456 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0456 \u0444\u043E\u0440\u043C\u0443\u043B\u0438: j'aurais d\xFB + \u0456\u043D\u0444\u0456\u043D\u0456\u0442\u0438\u0432 (\u044F) \xB7 tu aurais pu + \u0456\u043D\u0444\u0456\u043D\u0456\u0442\u0438\u0432 (\u0442\u0438)."
        },
        {
          fr: "Avec \xEAtre : le participe s'accorde. Elle serait venue. Ils seraient partis.",
          en: "With \xEAtre: the participle agrees. Elle serait venue. Ils seraient partis.",
          uk: "\u0417 \xEAtre: \u0434\u0456\u0454\u043F\u0440\u0438\u043A\u043C\u0435\u0442\u043D\u0438\u043A \u0443\u0437\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u044C\u0441\u044F. Elle serait venue. Ils seraient partis."
        },
        {
          fr: "Avec avoir : pas d'accord, sauf si le COD est plac\xE9 avant. La lettre qu'il aurait \xE9crite.",
          en: "With avoir: no agreement, unless the direct object comes first. La lettre qu'il aurait \xE9crite.",
          uk: "\u0417 avoir: \u0431\u0435\u0437 \u0443\u0437\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F, \u043A\u0440\u0456\u043C \u0432\u0438\u043F\u0430\u0434\u043A\u0443, \u043A\u043E\u043B\u0438 \u0434\u043E\u0434\u0430\u0442\u043E\u043A \u0441\u0442\u043E\u0457\u0442\u044C \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u0443."
        }
      ],
      tables: [
        {
          title: { fr: "Avec AVOIR : parler", en: "With AVOIR: parler", uk: "\u0417 AVOIR: parler" },
          rows: [
            { pronoun: "j'", form: "{aurais:aux} {parl\xE9:part}" },
            { pronoun: "tu", form: "{aurais:aux} {parl\xE9:part}" },
            { pronoun: "il / elle / on", form: "{aurait:aux} {parl\xE9:part}" },
            { pronoun: "nous", form: "{aurions:aux} {parl\xE9:part}" },
            { pronoun: "vous", form: "{auriez:aux} {parl\xE9:part}" },
            { pronoun: "ils / elles", form: "{auraient:aux} {parl\xE9:part}" }
          ]
        },
        {
          title: { fr: "Avec \xCATRE : partir", en: "With \xCATRE: partir", uk: "\u0417 \xCATRE: partir" },
          rows: [
            { pronoun: "je", form: "{serais:aux} {parti:part}{(e):end}" },
            { pronoun: "tu", form: "{serais:aux} {parti:part}{(e):end}" },
            { pronoun: "il / elle", form: "{serait:aux} {parti:part}{(e):end}" },
            { pronoun: "nous", form: "{serions:aux} {parti:part}{(e)s:end}" },
            { pronoun: "vous", form: "{seriez:aux} {parti:part}{(e)(s):end}" },
            { pronoun: "ils / elles", form: "{seraient:aux} {parti:part}{(e)s:end}" }
          ],
          footnote: {
            fr: "Les verbes pronominaux aussi : je me serais repos\xE9(e), elle se serait install\xE9e.",
            en: "Reflexive verbs too: je me serais repos\xE9(e), elle se serait install\xE9e.",
            uk: "\u0422\u0430\u043A \u0441\u0430\u043C\u043E \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u0456 \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u0430: je me serais repos\xE9(e), elle se serait install\xE9e."
          }
        }
      ],
      mnemo: {
        fr: "\xAB J'aurais d\xFB \xBB = le temps des regrets. Si vous pensez \xAB ah, si seulement\u2026 \xBB, c'est le conditionnel pass\xE9.",
        en: "\u201CJ'aurais d\xFB\u201D = the tense of regrets. If you're thinking \u201Cah, if only\u2026\u201D, it's the past conditional.",
        uk: "\xABJ'aurais d\xFB\xBB \u2014 \u0447\u0430\u0441 \u0436\u0430\u043B\u044E. \u042F\u043A\u0449\u043E \u0434\u0443\u043C\u0430\u0454\u0442\u0435 \xAB\u0430\u0445, \u044F\u043A\u0431\u0438 \u0436\u2026\xBB, \u0446\u0435 conditionnel pass\xE9."
      },
      examples: [
        {
          fr: "Tu {aurais:aux} {d\xFB:part} lire le devis avant de signer.",
          en: "You should have read the quote before signing.",
          uk: "\u0422\u043E\u0431\u0456 \u0432\u0430\u0440\u0442\u043E \u0431\u0443\u043B\u043E \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u0438 \u043A\u043E\u0448\u0442\u043E\u0440\u0438\u0441 \u043F\u0435\u0440\u0435\u0434 \u043F\u0456\u0434\u043F\u0438\u0441\u0430\u043D\u043D\u044F\u043C.",
          note: {
            fr: "Participe irr\xE9gulier avec accent circonflexe : d\xFB (jamais \xAB devu \xBB).",
            en: "Irregular participle with a circumflex: d\xFB (never \u201Cdevu\u201D).",
            uk: "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0434\u0456\u0454\u043F\u0440\u0438\u043A\u043C\u0435\u0442\u043D\u0438\u043A \u0456\u0437 \u0446\u0438\u0440\u043A\u0443\u043C\u0444\u043B\u0435\u043A\u0441\u043E\u043C: d\xFB (\u043D\u0456\u043A\u043E\u043B\u0438 \xABdevu\xBB)."
          }
        },
        {
          fr: "Si nous avions eu le budget, nous {aurions:aux} {abattu:part} ce mur.",
          en: "If we'd had the budget, we would have knocked down that wall.",
          uk: "\u042F\u043A\u0431\u0438 \u043C\u0438 \u043C\u0430\u043B\u0438 \u0431\u044E\u0434\u0436\u0435\u0442, \u043C\u0438 \u0431 \u0437\u043D\u0435\u0441\u043B\u0438 \u0446\u044E \u0441\u0442\u0456\u043D\u0443."
        },
        {
          fr: "Elle {serait:aux} {venue:part} au vernissage, mais son train a \xE9t\xE9 annul\xE9.",
          en: "She would have come to the opening, but her train was cancelled.",
          uk: "\u0412\u043E\u043D\u0430 \u043F\u0440\u0438\u0439\u0448\u043B\u0430 \u0431 \u043D\u0430 \u0432\u0435\u0440\u043D\u0456\u0441\u0430\u0436, \u0430\u043B\u0435 \u0457\u0457 \u043F\u043E\u0442\u044F\u0433 \u0441\u043A\u0430\u0441\u0443\u0432\u0430\u043B\u0438.",
          note: {
            fr: "Accord avec \xEAtre : elle serait venuE.",
            en: "Agreement with \xEAtre: elle serait venuE.",
            uk: "\u0423\u0437\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0437 \xEAtre: elle serait venuE."
          }
        }
      ],
      related: [
        {
          id: "conditionnel-present",
          why: {
            fr: "L'auxiliaire est simplement au conditionnel pr\xE9sent.",
            en: "The auxiliary is simply in the present conditional.",
            uk: "\u0414\u043E\u043F\u043E\u043C\u0456\u0436\u043D\u0435 \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0432 conditionnel pr\xE9sent."
          }
        },
        {
          id: "plus-que-parfait",
          why: {
            fr: "Son partenaire obligatoire : si + plus-que-parfait \u2192 conditionnel pass\xE9.",
            en: "Its obligatory partner: si + pluperfect \u2192 past conditional.",
            uk: "\u0419\u043E\u0433\u043E \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u0442\u043D\u0435\u0440: si + plus-que-parfait \u2192 conditionnel pass\xE9."
          }
        }
      ]
    },
    // ========== 10. PLUS-QUE-PARFAIT ==========
    {
      id: "plus-que-parfait",
      name: "Le plus-que-parfait",
      badge: "essentiel",
      tagline: {
        fr: "Le pass\xE9 du pass\xE9 : l'action d\xE9j\xE0 termin\xE9e quand une autre action pass\xE9e a eu lieu.",
        en: "The past of the past: the action already finished when another past action happened.",
        uk: "\u041C\u0438\u043D\u0443\u043B\u0435 \u0432 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443: \u0434\u0456\u044F, \u0432\u0436\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430, \u043A\u043E\u043B\u0438 \u0441\u0442\u0430\u043B\u0430\u0441\u044F \u0456\u043D\u0448\u0430 \u043C\u0438\u043D\u0443\u043B\u0430 \u0434\u0456\u044F."
      },
      usage: [
        {
          fr: "L'ant\xE9riorit\xE9 : \xAB Quand je suis arriv\xE9, il \xE9tait d\xE9j\xE0 parti. \xBB",
          en: "Anteriority: \u201CWhen I arrived, he had already left.\u201D",
          uk: "\u041F\u0435\u0440\u0435\u0434\u0443\u0432\u0430\u043D\u043D\u044F: \xAB\u041A\u043E\u043B\u0438 \u044F \u043F\u0440\u0438\u0439\u0448\u043E\u0432, \u0432\u0456\u043D \u0443\u0436\u0435 \u043F\u0456\u0448\u043E\u0432\xBB."
        },
        {
          fr: "Le discours rapport\xE9 au pass\xE9 : \xAB Il a dit qu'il avait fini. \xBB",
          en: "Reported speech in the past: \u201CHe said he had finished.\u201D",
          uk: "\u041D\u0435\u043F\u0440\u044F\u043C\u0430 \u043C\u043E\u0432\u0430 \u0432 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443: \xAB\u0412\u0456\u043D \u0441\u043A\u0430\u0437\u0430\u0432, \u0449\u043E \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0432\xBB."
        },
        {
          fr: "L'hypoth\xE8se irr\xE9elle du pass\xE9 : \xAB Si j'avais su, je serais venu. \xBB",
          en: "Unreal past hypothesis: \u201CIf I had known, I would have come.\u201D",
          uk: "\u041D\u0435\u0440\u0435\u0430\u043B\u044C\u043D\u0435 \u043F\u0440\u0438\u043F\u0443\u0449\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u043C\u0438\u043D\u0443\u043B\u0435: \xAB\u042F\u043A\u0431\u0438 \u044F \u0437\u043D\u0430\u0432, \u044F \u0431 \u043F\u0440\u0438\u0439\u0448\u043E\u0432\xBB."
        },
        {
          fr: "Le regret seul : \xAB Ah, si j'avais su ! \xBB",
          en: "Standalone regret: \u201CAh, if only I had known!\u201D",
          uk: "\u0421\u0430\u043C\u043E\u0441\u0442\u0456\u0439\u043D\u0438\u0439 \u0436\u0430\u043B\u044C: \xAB\u0410\u0445, \u044F\u043A\u0431\u0438 \u0436 \u044F \u0437\u043D\u0430\u0432!\xBB"
        }
      ],
      formula: "{avoir / \xEAtre \xE0 l'IMPARFAIT:aux} + {participe pass\xE9:part}",
      formulaNotes: [
        {
          fr: "M\xEAme choix d'auxiliaire qu'au pass\xE9 compos\xE9 : les m\xEAmes verbes prennent \xEAtre.",
          en: "Same auxiliary choice as the pass\xE9 compos\xE9: the same verbs take \xEAtre.",
          uk: "\u0422\u043E\u0439 \u0441\u0430\u043C\u0438\u0439 \u0432\u0438\u0431\u0456\u0440 \u0434\u043E\u043F\u043E\u043C\u0456\u0436\u043D\u043E\u0433\u043E, \u0449\u043E \u0439 \u0443 pass\xE9 compos\xE9."
        },
        {
          fr: "M\xEAmes r\xE8gles d'accord qu'au pass\xE9 compos\xE9.",
          en: "Same agreement rules as the pass\xE9 compos\xE9.",
          uk: "\u0422\u0456 \u0441\u0430\u043C\u0456 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0443\u0437\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F, \u0449\u043E \u0439 \u0443 pass\xE9 compos\xE9."
        }
      ],
      tables: [
        {
          title: { fr: "Avec AVOIR : finir", en: "With AVOIR: finir", uk: "\u0417 AVOIR: finir" },
          rows: [
            { pronoun: "j'", form: "{avais:aux} {fini:part}" },
            { pronoun: "tu", form: "{avais:aux} {fini:part}" },
            { pronoun: "il / elle / on", form: "{avait:aux} {fini:part}" },
            { pronoun: "nous", form: "{avions:aux} {fini:part}" },
            { pronoun: "vous", form: "{aviez:aux} {fini:part}" },
            { pronoun: "ils / elles", form: "{avaient:aux} {fini:part}" }
          ]
        },
        {
          title: { fr: "Avec \xCATRE : partir", en: "With \xCATRE: partir", uk: "\u0417 \xCATRE: partir" },
          rows: [
            { pronoun: "j'", form: "{\xE9tais:aux} {parti:part}{(e):end}" },
            { pronoun: "tu", form: "{\xE9tais:aux} {parti:part}{(e):end}" },
            { pronoun: "il / elle", form: "{\xE9tait:aux} {parti:part}{(e):end}" },
            { pronoun: "nous", form: "{\xE9tions:aux} {parti:part}{(e)s:end}" },
            { pronoun: "vous", form: "{\xE9tiez:aux} {parti:part}{(e)(s):end}" },
            { pronoun: "ils / elles", form: "{\xE9taient:aux} {parti:part}{(e)s:end}" }
          ]
        }
      ],
      mnemo: {
        fr: "Pass\xE9 compos\xE9 avec l'auxiliaire \xE0 l'imparfait. J'ai fini \u2192 j'avais fini. C'est tout.",
        en: "Pass\xE9 compos\xE9 with the auxiliary in the imparfait. J'ai fini \u2192 j'avais fini. That's it.",
        uk: "Pass\xE9 compos\xE9 \u0437 \u0434\u043E\u043F\u043E\u043C\u0456\u0436\u043D\u0438\u043C \u0432 imparfait. J'ai fini \u2192 j'avais fini. \u041E\u0441\u044C \u0456 \u0432\u0441\u0435."
      },
      examples: [
        {
          fr: "Quand nous avons emm\xE9nag\xE9, les anciens propri\xE9taires {avaient:aux} d\xE9j\xE0 {repeint:part} la cuisine.",
          en: "When we moved in, the previous owners had already repainted the kitchen.",
          uk: "\u041A\u043E\u043B\u0438 \u043C\u0438 \u0437\u0430\u0441\u0435\u043B\u0438\u043B\u0438\u0441\u044F, \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456 \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u0438 \u0432\u0436\u0435 \u043F\u0435\u0440\u0435\u0444\u0430\u0440\u0431\u0443\u0432\u0430\u043B\u0438 \u043A\u0443\u0445\u043D\u044E."
        },
        {
          fr: "Il m'a expliqu\xE9 qu'il {avait:aux} {sign\xE9:part} le bail la veille.",
          en: "He explained to me that he had signed the lease the day before.",
          uk: "\u0412\u0456\u043D \u043F\u043E\u044F\u0441\u043D\u0438\u0432 \u043C\u0435\u043D\u0456, \u0449\u043E \u043F\u0456\u0434\u043F\u0438\u0441\u0430\u0432 \u0434\u043E\u0433\u043E\u0432\u0456\u0440 \u043D\u0430\u043F\u0435\u0440\u0435\u0434\u043E\u0434\u043D\u0456."
        },
        {
          fr: "Elle {\xE9tait:aux} {sortie:part} quand le plombier est pass\xE9.",
          en: "She had gone out when the plumber came by.",
          uk: "\u0412\u043E\u043D\u0430 \u0432\u0436\u0435 \u0432\u0438\u0439\u0448\u043B\u0430, \u043A\u043E\u043B\u0438 \u043F\u0440\u0438\u0439\u0448\u043E\u0432 \u0441\u0430\u043D\u0442\u0435\u0445\u043D\u0456\u043A."
        }
      ],
      related: [
        {
          id: "passe-compose",
          why: {
            fr: "M\xEAme construction : il suffit de mettre l'auxiliaire \xE0 l'imparfait.",
            en: "Same construction: just put the auxiliary in the imparfait.",
            uk: "\u0422\u0430 \u0441\u0430\u043C\u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u044F: \u0434\u043E\u0441\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0434\u043E\u043F\u043E\u043C\u0456\u0436\u043D\u0435 \u0432 imparfait."
          }
        },
        {
          id: "conditionnel-passe",
          why: {
            fr: "Si + plus-que-parfait \u2192 conditionnel pass\xE9 (l'irr\xE9el du pass\xE9).",
            en: "Si + pluperfect \u2192 past conditional (the unreal past).",
            uk: "Si + plus-que-parfait \u2192 conditionnel pass\xE9 (\u043D\u0435\u0440\u0435\u0430\u043B\u044C\u043D\u0435 \u043C\u0438\u043D\u0443\u043B\u0435)."
          }
        }
      ]
    },
    // ========== 11. GÉRONDIF ==========
    {
      id: "gerondif",
      name: "Le g\xE9rondif",
      badge: "essentiel",
      tagline: {
        fr: "\xAB en + -ant \xBB : deux actions du m\xEAme sujet en une seule phrase. Simultan\xE9it\xE9, mani\xE8re, moyen, condition, cause.",
        en: "\u201Cen + -ant\u201D: two actions by the same subject in one sentence. Simultaneity, manner, means, condition, cause.",
        uk: "\xABen + -ant\xBB: \u0434\u0432\u0456 \u0434\u0456\u0457 \u0442\u043E\u0433\u043E \u0441\u0430\u043C\u043E\u0433\u043E \u0441\u0443\u0431'\u0454\u043A\u0442\u0430 \u0432 \u043E\u0434\u043D\u043E\u043C\u0443 \u0440\u0435\u0447\u0435\u043D\u043D\u0456."
      },
      usage: [
        {
          fr: "La simultan\xE9it\xE9 : \xAB Il lit en mangeant. \xBB",
          en: "Simultaneity: \u201CHe reads while eating.\u201D",
          uk: "\u041E\u0434\u043D\u043E\u0447\u0430\u0441\u043D\u0456\u0441\u0442\u044C: \xAB\u0412\u0456\u043D \u0447\u0438\u0442\u0430\u0454, \u0457\u0434\u0443\u0447\u0438\xBB."
        },
        {
          fr: "La mani\xE8re : \xAB Il est parti en courant. \xBB",
          en: "Manner: \u201CHe left running.\u201D",
          uk: "\u0421\u043F\u043E\u0441\u0456\u0431: \xAB\u0412\u0456\u043D \u043F\u0456\u0448\u043E\u0432 \u0431\u0456\u0433\u043E\u043C\xBB."
        },
        {
          fr: "Le moyen : \xAB Il a r\xE9ussi en travaillant beaucoup. \xBB",
          en: "Means: \u201CHe succeeded by working a lot.\u201D",
          uk: "\u0417\u0430\u0441\u0456\u0431: \xAB\u0412\u0456\u043D \u0434\u043E\u0441\u044F\u0433 \u0443\u0441\u043F\u0456\u0445\u0443, \u0431\u0430\u0433\u0430\u0442\u043E \u043F\u0440\u0430\u0446\u044E\u044E\u0447\u0438\xBB."
        },
        {
          fr: "La condition : \xAB En r\xE9visant, tu r\xE9ussiras. \xBB (= si tu r\xE9vises)",
          en: "Condition: \u201CBy revising, you'll succeed.\u201D (= if you revise)",
          uk: "\u0423\u043C\u043E\u0432\u0430: \xAB\u041F\u043E\u0432\u0442\u043E\u0440\u044E\u044E\u0447\u0438, \u0442\u0438 \u0432\u043F\u043E\u0440\u0430\u0454\u0448\u0441\u044F\xBB. (= \u044F\u043A\u0449\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0448)"
        },
        {
          fr: "La cause : \xAB Il s'est bless\xE9 en tombant. \xBB",
          en: "Cause: \u201CHe hurt himself falling.\u201D",
          uk: "\u041F\u0440\u0438\u0447\u0438\u043D\u0430: \xAB\u0412\u0456\u043D \u0442\u0440\u0430\u0432\u043C\u0443\u0432\u0430\u0432\u0441\u044F, \u0432\u043F\u0430\u0432\u0448\u0438\xBB."
        },
        {
          fr: "L'opposition, avec \xAB tout \xBB : \xAB Tout en \xE9tant fatigu\xE9, il a continu\xE9. \xBB",
          en: "Opposition, with \u201Ctout\u201D: \u201CEven while tired, he carried on.\u201D",
          uk: "\u041F\u0440\u043E\u0442\u0438\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044F, \u0437 \xABtout\xBB: \xAB\u0425\u043E\u0447 \u0456 \u0432\u0442\u043E\u043C\u043B\u0435\u043D\u0438\u0439, \u0432\u0456\u043D \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0432\xBB."
        }
      ],
      formula: "en + {radical de \xAB nous \xBB au pr\xE9sent:stem} + {ant:end}",
      formulaNotes: [
        {
          fr: "nous parlons \u2192 en parlant \xB7 nous finissons \u2192 en finissant \xB7 nous prenons \u2192 en prenant",
          en: "nous parlons \u2192 en parlant \xB7 nous finissons \u2192 en finissant \xB7 nous prenons \u2192 en prenant",
          uk: "nous parlons \u2192 en parlant \xB7 nous finissons \u2192 en finissant \xB7 nous prenons \u2192 en prenant"
        },
        {
          fr: "Trois exceptions seulement : \xEAtre \u2192 en \xE9tant \xB7 avoir \u2192 en ayant \xB7 savoir \u2192 en sachant",
          en: "Only three exceptions: \xEAtre \u2192 en \xE9tant \xB7 avoir \u2192 en ayant \xB7 savoir \u2192 en sachant",
          uk: "\u041B\u0438\u0448\u0435 \u0442\u0440\u0438 \u0432\u0438\u043D\u044F\u0442\u043A\u0438: \xEAtre \u2192 en \xE9tant \xB7 avoir \u2192 en ayant \xB7 savoir \u2192 en sachant"
        },
        {
          fr: "R\xC8GLE ABSOLUE : le g\xE9rondif a le m\xEAme sujet que le verbe principal. \u2717 En arrivant, ma m\xE8re m'a ouvert. \u2713 En arrivant, j'ai vu ma m\xE8re.",
          en: "ABSOLUTE RULE: the g\xE9rondif shares the subject of the main verb. \u2717 En arrivant, ma m\xE8re m'a ouvert. \u2713 En arrivant, j'ai vu ma m\xE8re.",
          uk: "\u0410\u0411\u0421\u041E\u041B\u042E\u0422\u041D\u0415 \u041F\u0420\u0410\u0412\u0418\u041B\u041E: g\xE9rondif \u043C\u0430\u0454 \u0442\u043E\u0439 \u0441\u0430\u043C\u0438\u0439 \u0441\u0443\u0431'\u0454\u043A\u0442, \u0449\u043E \u0439 \u0433\u043E\u043B\u043E\u0432\u043D\u0435 \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u043E."
        }
      ],
      tables: [
        {
          title: { fr: "Formation", en: "Formation", uk: "\u0423\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F" },
          rows: [
            { pronoun: "parler", form: "nous {parl:stem}ons \u2192 en {parl:stem}{ant:end}" },
            { pronoun: "finir", form: "nous {finiss:stem}ons \u2192 en {finiss:stem}{ant:end}" },
            { pronoun: "prendre", form: "nous {pren:stem}ons \u2192 en {pren:stem}{ant:end}" },
            { pronoun: "faire", form: "nous {fais:stem}ons \u2192 en {fais:stem}{ant:end}" },
            { pronoun: "\xEAtre \u26A0", form: "en {\xE9t:stem}{ant:end}" },
            { pronoun: "avoir \u26A0", form: "en {ay:stem}{ant:end}" },
            { pronoun: "savoir \u26A0", form: "en {sach:stem}{ant:end}" }
          ]
        }
      ],
      mnemo: {
        fr: "Prenez la forme \xAB nous \xBB, coupez -ons, collez -ant, mettez \xAB en \xBB devant. M\xEAme sujet, toujours.",
        en: "Take the \u201Cnous\u201D form, cut -ons, add -ant, put \u201Cen\u201D in front. Same subject, always.",
        uk: "\u0412\u0456\u0437\u044C\u043C\u0456\u0442\u044C \u0444\u043E\u0440\u043C\u0443 \xABnous\xBB, \u0432\u0456\u0434\u0440\u0456\u0436\u0442\u0435 -ons, \u0434\u043E\u0434\u0430\u0439\u0442\u0435 -ant, \u043F\u043E\u0441\u0442\u0430\u0432\u0442\u0435 \xABen\xBB. \u0422\u043E\u0439 \u0441\u0430\u043C\u0438\u0439 \u0441\u0443\u0431'\u0454\u043A\u0442, \u0437\u0430\u0432\u0436\u0434\u0438."
      },
      examples: [
        {
          fr: "Gaston casse tout en {voul:stem}{ant:end} aider.",
          en: "Gaston breaks everything while trying to help.",
          uk: "\u0413\u0430\u0441\u0442\u043E\u043D \u0443\u0441\u0435 \u043B\u0430\u043C\u0430\u0454, \u043D\u0430\u043C\u0430\u0433\u0430\u044E\u0447\u0438\u0441\u044C \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438."
        },
        {
          fr: "On apprend le fran\xE7ais en {regard:stem}{ant:end} des films en v.o.",
          en: "You learn French by watching films in the original version.",
          uk: "\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u044C\u043A\u0443 \u0432\u0447\u0430\u0442\u044C, \u0434\u0438\u0432\u043B\u044F\u0447\u0438\u0441\u044C \u0444\u0456\u043B\u044C\u043C\u0438 \u043C\u043E\u0432\u043E\u044E \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u0443."
        },
        {
          fr: "En {sach:stem}{ant:end} cela, j'aurais choisi un autre appartement.",
          en: "Knowing that, I'd have chosen a different flat.",
          uk: "\u0417\u043D\u0430\u044E\u0447\u0438 \u0446\u0435, \u044F \u0431 \u043E\u0431\u0440\u0430\u0432 \u0456\u043D\u0448\u0443 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443."
        }
      ],
      related: [
        {
          id: "present",
          why: {
            fr: "Le radical vient de la forme \xAB nous \xBB du pr\xE9sent.",
            en: "The stem comes from the present \u201Cnous\u201D form.",
            uk: "\u041E\u0441\u043D\u043E\u0432\u0430 \u0431\u0435\u0440\u0435\u0442\u044C\u0441\u044F \u0437 \u0444\u043E\u0440\u043C\u0438 \xABnous\xBB \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u044C\u043E\u0433\u043E \u0447\u0430\u0441\u0443."
          }
        }
      ]
    }
  ];

  // ../content/src/structures.ts
  var STRUCTURES = [
    // ========== SI ==========
    {
      id: "si-clauses",
      name: "Les trois \xAB si \xBB",
      section: "structures",
      badge: "essentiel",
      tagline: {
        fr: "Trois syst\xE8mes, trois couples de temps. Une fois le couple identifi\xE9, il n'y a plus de choix \xE0 faire.",
        en: "Three systems, three tense pairs. Once you've identified the pair, there's no choice left to make.",
        uk: "\u0422\u0440\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0438, \u0442\u0440\u0438 \u043F\u0430\u0440\u0438 \u0447\u0430\u0441\u0456\u0432. \u0429\u043E\u0439\u043D\u043E \u0432\u0438\u0437\u043D\u0430\u0447\u0438\u043B\u0438 \u043F\u0430\u0440\u0443 \u2014 \u0432\u0438\u0431\u043E\u0440\u0443 \u0431\u0456\u043B\u044C\u0448\u0435 \u043D\u0435\u043C\u0430\u0454."
      },
      blocks: [
        {
          kind: "table",
          title: { fr: "Les trois syst\xE8mes", en: "The three systems", uk: "\u0422\u0440\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0438" },
          head: [{ fr: "Type", en: "Type", uk: "\u0422\u0438\u043F" }, "Si + \u2026", { fr: "\u2192 r\xE9sultat", en: "\u2192 result", uk: "\u2192 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442" }, { fr: "Exemple", en: "Example", uk: "\u041F\u0440\u0438\u043A\u043B\u0430\u0434" }],
          rows: [
            [
              { fr: "I \u2014 r\xE9el<br><em>c'est possible</em>", en: "I \u2014 real<br><em>it's possible</em>", uk: "I \u2014 \u0440\u0435\u0430\u043B\u044C\u043D\u0435<br><em>\u0446\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u043E</em>" },
              "si + {pr\xE9sent:end}",
              "{futur simple:end}<br>ou {pr\xE9sent:end}<br>ou {imp\xE9ratif:end}",
              { fr: "S'il pleut, je <b>resterai</b> chez moi.<br>Si tu chauffes l'eau, elle <b>bout</b>.<br>Si tu as le temps, <b>appelle</b>-moi !", en: "If it rains, I <b>will stay</b> home.<br>If you heat water, it <b>boils</b>.<br>If you have time, <b>call</b> me!", uk: "\u042F\u043A\u0449\u043E \u0439\u0442\u0438\u043C\u0435 \u0434\u043E\u0449, \u044F <b>\u0437\u0430\u043B\u0438\u0448\u0443\u0441\u044F</b> \u0432\u0434\u043E\u043C\u0430.<br>\u042F\u043A\u0449\u043E \u043D\u0430\u0433\u0440\u0456\u0432\u0430\u0454\u0448 \u0432\u043E\u0434\u0443, \u0432\u043E\u043D\u0430 <b>\u043A\u0438\u043F\u0438\u0442\u044C</b>.<br>\u042F\u043A\u0449\u043E \u043C\u0430\u0454\u0448 \u0447\u0430\u0441, <b>\u043F\u043E\u0434\u0437\u0432\u043E\u043D\u0438</b> \u043C\u0435\u043D\u0456!" }
            ],
            [
              { fr: "II \u2014 irr\xE9el du pr\xE9sent<br><em>c'est imaginaire</em>", en: "II \u2014 unreal present<br><em>it's imaginary</em>", uk: "II \u2014 \u043D\u0435\u0440\u0435\u0430\u043B\u044C\u043D\u0435 \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0454<br><em>\u0446\u0435 \u0443\u044F\u0432\u043D\u0435</em>" },
              "si + {imparfait:end}",
              "{conditionnel pr\xE9sent:end}",
              { fr: "Si j'<b>\xE9tais</b> am\xE9ricain, je <b>serais</b> une star.<br>Si j'<b>avais</b> de l'argent, j'<b>ach\xE8terais</b> un trois-pi\xE8ces.", en: "If I <b>were</b> American, I <b>would be</b> a star.<br>If I <b>had</b> money, I <b>would buy</b> a three-room flat.", uk: "\u042F\u043A\u0431\u0438 \u044F <b>\u0431\u0443\u0432</b> \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0446\u0435\u043C, \u044F <b>\u0431\u0443\u0432 \u0431\u0438</b> \u0437\u0456\u0440\u043A\u043E\u044E.<br>\u042F\u043A\u0431\u0438 \u044F <b>\u043C\u0430\u0432</b> \u0433\u0440\u043E\u0448\u0456, \u044F <b>\u043A\u0443\u043F\u0438\u0432 \u0431\u0438</b> \u0442\u0440\u0438\u043A\u0456\u043C\u043D\u0430\u0442\u043D\u0443 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443." }
            ],
            [
              { fr: "III \u2014 irr\xE9el du pass\xE9<br><em>c'est trop tard</em>", en: "III \u2014 unreal past<br><em>it's too late</em>", uk: "III \u2014 \u043D\u0435\u0440\u0435\u0430\u043B\u044C\u043D\u0435 \u043C\u0438\u043D\u0443\u043B\u0435<br><em>\u0443\u0436\u0435 \u0437\u0430\u043F\u0456\u0437\u043D\u043E</em>" },
              "si + {plus-que-parfait:end}",
              "{conditionnel pass\xE9:end}",
              { fr: "Si j'<b>avais su</b>, je <b>serais venu</b>.<br>Si tu <b>avais r\xE9vis\xE9</b>, tu <b>aurais r\xE9ussi</b>.", en: "If I <b>had known</b>, I <b>would have come</b>.<br>If you <b>had revised</b>, you <b>would have passed</b>.", uk: "\u042F\u043A\u0431\u0438 \u044F <b>\u0437\u043D\u0430\u0432</b>, \u044F <b>\u043F\u0440\u0438\u0439\u0448\u043E\u0432 \u0431\u0438</b>.<br>\u042F\u043A\u0431\u0438 \u0442\u0438 <b>\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0432</b>, \u0442\u0438 <b>\u0441\u043A\u043B\u0430\u0432 \u0431\u0438</b>." }
            ]
          ],
          note: {
            fr: "Le type II parle du pr\xE9sent ou du futur, malgr\xE9 l'imparfait. Le type III parle d'un pass\xE9 qu'on ne peut plus changer.",
            en: "Type II talks about the present or future, despite the imparfait. Type III is about a past you can no longer change.",
            uk: "\u0422\u0438\u043F II \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C \u043F\u0440\u043E \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0454 \u0447\u0438 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454, \u043F\u043E\u043F\u0440\u0438 imparfait. \u0422\u0438\u043F III \u2014 \u043F\u0440\u043E \u043C\u0438\u043D\u0443\u043B\u0435, \u044F\u043A\u0435 \u0432\u0436\u0435 \u043D\u0435 \u0437\u043C\u0456\u043D\u0438\u0442\u0438."
          }
        },
        {
          kind: "table",
          title: {
            fr: "Le type I de pr\xE8s : trois r\xE9sultats, trois intentions",
            en: "Type I up close: three results, three intentions",
            uk: "\u0422\u0438\u043F I \u0437\u0431\u043B\u0438\u0437\u044C\u043A\u0430: \u0442\u0440\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0438, \u0442\u0440\u0438 \u043D\u0430\u043C\u0456\u0440\u0438"
          },
          head: [
            { fr: "R\xE9sultat", en: "Result", uk: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442" },
            { fr: "Ce que tu fais", en: "What you're doing", uk: "\u0429\u043E \u0442\u0438 \u0440\u043E\u0431\u0438\u0448" },
            { fr: "Exemple", en: "Example", uk: "\u041F\u0440\u0438\u043A\u043B\u0430\u0434" },
            { fr: "Comment le reconna\xEEtre", en: "How to recognise it", uk: "\u042F\u043A \u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u0442\u0438" }
          ],
          rows: [
            [
              "{futur simple:end}",
              {
                fr: "Tu <b>pr\xE9dis</b> ce qui arrivera si la condition se r\xE9alise. Une seule fois, dans l'avenir.",
                en: "You <b>predict</b> what will happen if the condition is met. Once, in the future.",
                uk: "\u0422\u0438 <b>\u043F\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0430\u0454\u0448</b>, \u0449\u043E \u0441\u0442\u0430\u043D\u0435\u0442\u044C\u0441\u044F, \u044F\u043A\u0449\u043E \u0443\u043C\u043E\u0432\u0430 \u0441\u043F\u0440\u0430\u0432\u0434\u0438\u0442\u044C\u0441\u044F. \u041E\u0434\u0438\u043D \u0440\u0430\u0437, \u0443 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044C\u043E\u043C\u0443."
              },
              {
                fr: "S'il pleut demain, je <b>resterai</b> chez moi.",
                en: "If it rains tomorrow, I <b>will stay</b> home.",
                uk: "\u042F\u043A\u0449\u043E \u0437\u0430\u0432\u0442\u0440\u0430 \u043F\u0456\u0434\u0435 \u0434\u043E\u0449, \u044F <b>\u0437\u0430\u043B\u0438\u0448\u0443\u0441\u044F</b> \u0432\u0434\u043E\u043C\u0430."
              },
              {
                fr: "Tu peux ajouter \xAB demain \xBB, \xAB la semaine prochaine \xBB. C'est un \xE9v\xE9nement unique et futur.",
                en: "You can add \u201Ctomorrow\u201D, \u201Cnext week\u201D. It's a single future event.",
                uk: "\u041C\u043E\u0436\u043D\u0430 \u0434\u043E\u0434\u0430\u0442\u0438 \xAB\u0437\u0430\u0432\u0442\u0440\u0430\xBB, \xAB\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u0442\u0438\u0436\u043D\u044F\xBB. \u0426\u0435 \u043E\u0434\u0438\u043D\u0438\u0447\u043D\u0430 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044F \u043F\u043E\u0434\u0456\u044F."
              }
            ],
            [
              "{pr\xE9sent:end}",
              {
                fr: "Tu \xE9nonces une <b>loi g\xE9n\xE9rale</b> ou une <b>habitude</b> : c'est vrai \xE0 chaque fois, pas seulement demain.",
                en: "You state a <b>general law</b> or a <b>habit</b>: true every time, not just tomorrow.",
                uk: "\u0422\u0438 \u043A\u043E\u043D\u0441\u0442\u0430\u0442\u0443\u0454\u0448 <b>\u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0437\u0430\u043A\u043E\u043D</b> \u0430\u0431\u043E <b>\u0437\u0432\u0438\u0447\u043A\u0443</b>: \u0446\u0435 \u0441\u043F\u0440\u0430\u0432\u0434\u0436\u0443\u0454\u0442\u044C\u0441\u044F \u0449\u043E\u0440\u0430\u0437\u0443."
              },
              {
                fr: "Si tu chauffes l'eau \xE0 100\xB0, elle <b>bout</b>.<br>Si j'ai le temps, je <b>vais</b> \xE0 la piscine.",
                en: "If you heat water to 100\xB0, it <b>boils</b>.<br>If I have time, I <b>go</b> to the pool.",
                uk: "\u042F\u043A\u0449\u043E \u043D\u0430\u0433\u0440\u0456\u0442\u0438 \u0432\u043E\u0434\u0443 \u0434\u043E 100\xB0, \u0432\u043E\u043D\u0430 <b>\u043A\u0438\u043F\u0438\u0442\u044C</b>.<br>\u042F\u043A\u0449\u043E \u043C\u0430\u044E \u0447\u0430\u0441, \u044F <b>\u0445\u043E\u0434\u0436\u0443</b> \u0432 \u0431\u0430\u0441\u0435\u0439\u043D."
              },
              {
                fr: "Tu peux ajouter \xAB \xE0 chaque fois \xBB, \xAB toujours \xBB. Remplace \xAB si \xBB par \xAB quand \xBB : le sens ne change pas.",
                en: "You can add \u201Cevery time\u201D, \u201Calways\u201D. Swap \u201Csi\u201D for \u201Cquand\u201D: the meaning doesn't change.",
                uk: "\u041C\u043E\u0436\u043D\u0430 \u0434\u043E\u0434\u0430\u0442\u0438 \xAB\u0449\u043E\u0440\u0430\u0437\u0443\xBB, \xAB\u0437\u0430\u0432\u0436\u0434\u0438\xBB. \u0417\u0430\u043C\u0456\u043D\u0438 \xABsi\xBB \u043D\u0430 \xABquand\xBB \u2014 \u0441\u0435\u043D\u0441 \u043D\u0435 \u0437\u043C\u0456\u043D\u0438\u0442\u044C\u0441\u044F."
              }
            ],
            [
              "{imp\xE9ratif:end}",
              {
                fr: "Tu <b>demandes \xE0 quelqu'un d'agir</b> : conseil, ordre, invitation. Il y a forc\xE9ment un \xAB tu \xBB ou un \xAB vous \xBB en face.",
                en: "You <b>ask someone to act</b>: advice, order, invitation. There is necessarily a \u201Ctu\u201D or \u201Cvous\u201D facing you.",
                uk: "\u0422\u0438 <b>\u043F\u0440\u043E\u0441\u0438\u0448 \u043A\u043E\u0433\u043E\u0441\u044C \u0434\u0456\u044F\u0442\u0438</b>: \u043F\u043E\u0440\u0430\u0434\u0430, \u043D\u0430\u043A\u0430\u0437, \u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044F. \u041E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u043E \u0454 \u0441\u043F\u0456\u0432\u0440\u043E\u0437\u043C\u043E\u0432\u043D\u0438\u043A."
              },
              {
                fr: "Si tu as le temps, <b>appelle</b>-moi !<br>Si vous \xEAtes perdu, <b>demandez</b> \xE0 un passant.",
                en: "If you have time, <b>call</b> me!<br>If you're lost, <b>ask</b> a passer-by.",
                uk: "\u042F\u043A\u0449\u043E \u043C\u0430\u0454\u0448 \u0447\u0430\u0441, <b>\u043F\u043E\u0434\u0437\u0432\u043E\u043D\u0438</b> \u043C\u0435\u043D\u0456!<br>\u042F\u043A\u0449\u043E \u0437\u0430\u0431\u043B\u0443\u043A\u0430\u043B\u0438, <b>\u0437\u0430\u043F\u0438\u0442\u0430\u0439\u0442\u0435</b> \u043F\u0435\u0440\u0435\u0445\u043E\u0436\u043E\u0433\u043E."
              },
              {
                fr: "La phrase se termine souvent par \xAB ! \xBB. Tu ne d\xE9cris rien : tu donnes une instruction.",
                en: "The sentence often ends in \u201C!\u201D. You describe nothing: you give an instruction.",
                uk: "\u0420\u0435\u0447\u0435\u043D\u043D\u044F \u0447\u0430\u0441\u0442\u043E \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0454\u0442\u044C\u0441\u044F \xAB!\xBB. \u0422\u0438 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u043E\u043F\u0438\u0441\u0443\u0454\u0448 \u2014 \u0442\u0438 \u0434\u0430\u0454\u0448 \u0432\u043A\u0430\u0437\u0456\u0432\u043A\u0443."
              }
            ]
          ],
          note: {
            fr: "Le temps apr\xE8s \xAB si \xBB ne bouge pas : c'est toujours le pr\xE9sent. Ce qui change, c'est ce que tu veux FAIRE avec la phrase \u2014 pr\xE9dire, constater ou demander.",
            en: "The tense after \u201Csi\u201D never moves: always the present. What changes is what you want to DO with the sentence \u2014 predict, state, or ask.",
            uk: "\u0427\u0430\u0441 \u043F\u0456\u0441\u043B\u044F \xABsi\xBB \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u2014 \u0437\u0430\u0432\u0436\u0434\u0438 pr\xE9sent. \u0417\u043C\u0456\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u0442\u0435, \u0429\u041E \u0442\u0438 \u0445\u043E\u0447\u0435\u0448 \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0440\u0435\u0447\u0435\u043D\u043D\u044F\u043C."
          }
        },
        {
          kind: "rule",
          title: { fr: "La r\xE8gle d'or", en: "The golden rule", uk: "\u0417\u043E\u043B\u043E\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E" },
          body: {
            fr: "Jamais de futur ni de conditionnel juste apr\xE8s \xAB si \xBB hypoth\xE9tique. \u2717 Si je serai\u2026 \u2717 Si j'aurais\u2026 \u2713 Si je suis\u2026 \u2713 Si j'avais\u2026",
            en: "Never a future or a conditional right after hypothetical \u201Csi\u201D. \u2717 Si je serai\u2026 \u2717 Si j'aurais\u2026 \u2713 Si je suis\u2026 \u2713 Si j'avais\u2026",
            uk: "\u041D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u0432\u0436\u0438\u0432\u0430\u0439\u0442\u0435 futur \u0447\u0438 conditionnel \u043E\u0434\u0440\u0430\u0437\u0443 \u043F\u0456\u0441\u043B\u044F \u0433\u0456\u043F\u043E\u0442\u0435\u0442\u0438\u0447\u043D\u043E\u0433\u043E \xABsi\xBB."
          }
        },
        {
          kind: "rule",
          title: { fr: "Le pi\xE8ge voisin : quand, d\xE8s que\u2026", en: "The neighbouring trap: quand, d\xE8s que\u2026", uk: "\u0421\u0443\u0441\u0456\u0434\u043D\u044F \u043F\u0430\u0441\u0442\u043A\u0430: quand, d\xE8s que\u2026" },
          body: {
            fr: "Apr\xE8s quand, lorsque, d\xE8s que, une fois que, pendant que et j'esp\xE8re que, le fran\xE7ais met le FUTUR \u2014 contrairement \xE0 l'anglais et \xE0 \xAB si \xBB. Quand j'aurai le temps, je te rappellerai.",
            en: "After quand, lorsque, d\xE8s que, une fois que, pendant que and j'esp\xE8re que, French uses the FUTURE \u2014 unlike English and unlike \u201Csi\u201D. Quand j'aurai le temps, je te rappellerai.",
            uk: "\u041F\u0456\u0441\u043B\u044F quand, lorsque, d\xE8s que, une fois que, pendant que \u0442\u0430 j'esp\xE8re que \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u044C\u043A\u0430 \u0432\u0436\u0438\u0432\u0430\u0454 \u041C\u0410\u0419\u0411\u0423\u0422\u041D\u0406\u0419 \u0447\u0430\u0441 \u2014 \u043D\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u0443 \u0432\u0456\u0434 \xABsi\xBB."
          }
        },
        {
          kind: "list",
          title: { fr: "Variantes utiles", en: "Useful variants", uk: "\u041A\u043E\u0440\u0438\u0441\u043D\u0456 \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0438" },
          items: [
            { fr: "\xAB M\xEAme si \xBB suit exactement les m\xEAmes r\xE8gles : M\xEAme si j'avais le temps, je ne viendrais pas.", en: "\u201CM\xEAme si\u201D follows exactly the same rules.", uk: "\xABM\xEAme si\xBB \u043F\u0456\u0434\u043F\u043E\u0440\u044F\u0434\u043A\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u0442\u0438\u043C \u0441\u0430\u043C\u0438\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C." },
            { fr: "M\xE9lange possible entre II et III : Si j'avais r\xE9vis\xE9 (pass\xE9), je serais plus tranquille aujourd'hui (pr\xE9sent).", en: "II and III can be mixed: Si j'avais r\xE9vis\xE9, je serais plus tranquille aujourd'hui.", uk: "\u0422\u0438\u043F\u0438 II \u0456 III \u043C\u043E\u0436\u043D\u0430 \u0437\u043C\u0456\u0448\u0443\u0432\u0430\u0442\u0438." },
            { fr: "\xAB Si \xBB peut aussi introduire une question indirecte \u2014 ce n'est plus une hypoth\xE8se : Il demande si tu viens.", en: "\u201CSi\u201D can also introduce an indirect question \u2014 that's not a hypothesis: Il demande si tu viens.", uk: "\xABSi\xBB \u0442\u0430\u043A\u043E\u0436 \u0432\u0432\u043E\u0434\u0438\u0442\u044C \u043D\u0435\u043F\u0440\u044F\u043C\u0435 \u043F\u0438\u0442\u0430\u043D\u043D\u044F \u2014 \u0446\u0435 \u0432\u0436\u0435 \u043D\u0435 \u0433\u0456\u043F\u043E\u0442\u0435\u0437\u0430." }
          ]
        }
      ],
      pitfalls: [
        {
          bad: "Si je serai riche, j'ach\xE8terais une maison.",
          good: "Si j'\xE9tais riche, j'ach\xE8terais une maison.",
          why: { fr: "Apr\xE8s \xAB si \xBB : imparfait, pas futur. Le conditionnel va dans l'AUTRE proposition.", en: "After \u201Csi\u201D: imparfait, not future. The conditional goes in the OTHER clause.", uk: "\u041F\u0456\u0441\u043B\u044F \xABsi\xBB \u2014 imparfait, \u043D\u0435 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454. \u0423\u043C\u043E\u0432\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 \u2014 \u0432 \u0406\u041D\u0428\u0406\u0419 \u0447\u0430\u0441\u0442\u0438\u043D\u0456." }
        },
        {
          bad: "si il pleut",
          good: "s'il pleut",
          why: { fr: "\xAB si \xBB s'\xE9lide devant il / ils seulement. \xAB si elle \xBB, \xAB si on \xBB restent entiers.", en: "\u201Csi\u201D elides only before il / ils. \u201Csi elle\u201D, \u201Csi on\u201D stay whole.", uk: "\xABsi\xBB \u0441\u043A\u043E\u0440\u043E\u0447\u0443\u0454\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u043F\u0435\u0440\u0435\u0434 il / ils." }
        },
        {
          bad: "Quand j'ai le temps, je te rappellerai.",
          good: "Quand j'aurai le temps, je te rappellerai.",
          why: { fr: "Apr\xE8s \xAB quand \xBB qui regarde vers l'avenir, le futur est obligatoire en fran\xE7ais.", en: "After forward-looking \u201Cquand\u201D, French requires the future.", uk: "\u041F\u0456\u0441\u043B\u044F \xABquand\xBB, \u0449\u043E \u0434\u0438\u0432\u0438\u0442\u044C\u0441\u044F \u0432 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454, \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u044C\u043A\u0430 \u0432\u0438\u043C\u0430\u0433\u0430\u0454 futur." }
        }
      ],
      examples: [
        { fr: "Si tu {cherch:stem}{es:end} un studio bien desservi, regarde du c\xF4t\xE9 de la banlieue.", en: "If you're looking for a well-connected studio, try the suburbs.", uk: "\u042F\u043A\u0449\u043E \u0448\u0443\u043A\u0430\u0454\u0448 \u0441\u0442\u0443\u0434\u0456\u044E \u0437 \u0433\u0430\u0440\u043D\u0438\u043C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043E\u043C, \u043F\u043E\u0434\u0438\u0432\u0438\u0441\u044C \u0443 \u043F\u0435\u0440\u0435\u0434\u043C\u0456\u0441\u0442\u0456." },
        { fr: "Si nous {av:stem}{ions:end} un balcon, on {d\xEEner:stem}{ait:end} dehors tous les soirs.", en: "If we had a balcony, we'd eat outside every evening.", uk: "\u042F\u043A\u0431\u0438 \u043C\u0438 \u043C\u0430\u043B\u0438 \u0431\u0430\u043B\u043A\u043E\u043D, \u043C\u0438 \u0431 \u0432\u0435\u0447\u0435\u0440\u044F\u043B\u0438 \u043D\u0430\u0434\u0432\u043E\u0440\u0456 \u0449\u043E\u0432\u0435\u0447\u043E\u0440\u0430." },
        { fr: "Si j'{avais:aux} {lu:part} le devis, je n'{aurais:aux} jamais {sign\xE9:part}.", en: "If I had read the quote, I would never have signed.", uk: "\u042F\u043A\u0431\u0438 \u044F \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0432 \u043A\u043E\u0448\u0442\u043E\u0440\u0438\u0441, \u044F \u0431 \u043D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u043F\u0456\u0434\u043F\u0438\u0441\u0430\u0432." }
      ],
      related: [
        { id: "conditionnel-present", why: { fr: "C'est le r\xE9sultat du type II.", en: "It's the type II result.", uk: "\u0426\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0442\u0438\u043F\u0443 II." } },
        { id: "conditionnel-passe", why: { fr: "C'est le r\xE9sultat du type III.", en: "It's the type III result.", uk: "\u0426\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0442\u0438\u043F\u0443 III." } },
        { id: "plus-que-parfait", why: { fr: "C'est la condition du type III.", en: "It's the type III condition.", uk: "\u0426\u0435 \u0443\u043C\u043E\u0432\u0430 \u0442\u0438\u043F\u0443 III." } }
      ]
    },
    // ========== DISCOURS RAPPORTÉ (PRÉSENT) ==========
    {
      id: "discours-rapporte",
      name: "Le discours rapport\xE9 au pr\xE9sent",
      section: "structures",
      badge: "essentiel",
      tagline: {
        fr: "Verbe introducteur au pr\xE9sent : les temps ne bougent pas. Seules la personne et la ponctuation changent.",
        en: "Reporting verb in the present: the tenses don't move. Only person and punctuation change.",
        uk: "\u0412\u0432\u0456\u0434\u043D\u0435 \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u043E \u0432 \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u044C\u043E\u043C\u0443: \u0447\u0430\u0441\u0438 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u044E\u0442\u044C\u0441\u044F. \u0417\u043C\u0456\u043D\u044E\u044E\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u043E\u0441\u043E\u0431\u0430 \u0442\u0430 \u043F\u0443\u043D\u043A\u0442\u0443\u0430\u0446\u0456\u044F."
      },
      blocks: [
        {
          kind: "table",
          title: { fr: "Les six transformations", en: "The six transformations", uk: "\u0428\u0456\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u0435\u043D\u044C" },
          head: [{ fr: "Discours direct", en: "Direct speech", uk: "\u041F\u0440\u044F\u043C\u0430 \u043C\u043E\u0432\u0430" }, { fr: "Mot de liaison", en: "Linking word", uk: "\u0421\u043F\u043E\u043B\u0443\u0447\u043D\u0435 \u0441\u043B\u043E\u0432\u043E" }, { fr: "Discours rapport\xE9", en: "Reported speech", uk: "\u041D\u0435\u043F\u0440\u044F\u043C\u0430 \u043C\u043E\u0432\u0430" }],
          rows: [
            [{ fr: "Affirmation<br><em>\xAB Je pars demain. \xBB</em>", en: "Statement<br><em>\u201CI'm leaving tomorrow.\u201D</em>", uk: "\u0422\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F<br><em>\xAB\u042F \u0457\u0434\u0443 \u0437\u0430\u0432\u0442\u0440\u0430.\xBB</em>" }, "{que:end}", { fr: "Il dit <b>qu'</b>il part demain.", en: "He says <b>qu'</b> (that) he's leaving tomorrow.", uk: "\u0412\u0456\u043D \u043A\u0430\u0436\u0435, <b>qu'</b> (\u0449\u043E) \u0432\u0456\u043D \u0457\u0434\u0435 \u0437\u0430\u0432\u0442\u0440\u0430." }],
            [{ fr: "Question ferm\xE9e (oui / non)<br><em>\xAB Tu viens ? \xBB</em>", en: "Yes / no question<br><em>\u201CAre you coming?\u201D</em>", uk: "\u0417\u0430\u043A\u0440\u0438\u0442\u0435 \u043F\u0438\u0442\u0430\u043D\u043D\u044F (\u0442\u0430\u043A / \u043D\u0456)<br><em>\xAB\u0422\u0438 \u043F\u0440\u0438\u0439\u0434\u0435\u0448?\xBB</em>" }, "{si:end}", { fr: "Il demande <b>si</b> je viens.", en: "He asks <b>si</b> (whether) I'm coming.", uk: "\u0412\u0456\u043D \u043F\u0438\u0442\u0430\u0454, <b>si</b> (\u0447\u0438) \u044F \u043F\u0440\u0438\u0439\u0434\u0443." }],
            [{ fr: "<em>\xAB Qu'est-ce que tu fais ? \xBB</em>", en: "<em>\u201CWhat are you doing?\u201D</em>", uk: "<em>\xAB\u0429\u043E \u0442\u0438 \u0440\u043E\u0431\u0438\u0448?\xBB</em>" }, "{ce que:end}", { fr: "Il demande <b>ce que</b> je fais.", en: "He asks <b>ce que</b> (what) I'm doing.", uk: "\u0412\u0456\u043D \u043F\u0438\u0442\u0430\u0454, <b>ce que</b> (\u0449\u043E) \u044F \u0440\u043E\u0431\u043B\u044E." }],
            [{ fr: "<em>\xAB Qu'est-ce qui se passe ? \xBB</em>", en: "<em>\u201CWhat's going on?\u201D</em>", uk: "<em>\xAB\u0429\u043E \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F?\xBB</em>" }, "{ce qui:end}", { fr: "Il demande <b>ce qui</b> se passe.", en: "He asks <b>ce qui</b> (what) is going on.", uk: "\u0412\u0456\u043D \u043F\u0438\u0442\u0430\u0454, <b>ce qui</b> (\u0449\u043E) \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F." }],
            [{ fr: "Mot interrogatif<br><em>\xAB O\xF9 habites-tu ? \xBB</em>", en: "Question word<br><em>\u201CWhere do you live?\u201D</em>", uk: "\u041F\u0438\u0442\u0430\u043B\u044C\u043D\u0435 \u0441\u043B\u043E\u0432\u043E<br><em>\xAB\u0414\u0435 \u0442\u0438 \u0436\u0438\u0432\u0435\u0448?\xBB</em>" }, "{o\xF9 / quand / combien / pourquoi:end}", { fr: "Il demande <b>o\xF9</b> j'habite.", en: "He asks <b>o\xF9</b> (where) I live.", uk: "\u0412\u0456\u043D \u043F\u0438\u0442\u0430\u0454, <b>o\xF9</b> (\u0434\u0435) \u044F \u0436\u0438\u0432\u0443." }],
            [{ fr: "Imp\xE9ratif<br><em>\xAB Viens ! \xBB</em>", en: "Imperative<br><em>\u201CCome!\u201D</em>", uk: "\u041D\u0430\u043A\u0430\u0437\u043E\u0432\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431<br><em>\xAB\u041F\u0440\u0438\u0439\u0434\u0438!\xBB</em>" }, "{de + infinitif:end}", { fr: "Il me dit <b>de venir</b>.", en: "He tells me <b>de venir</b> (to come).", uk: "\u0412\u0456\u043D \u043A\u0430\u0436\u0435 \u043C\u0435\u043D\u0456 <b>de venir</b> (\u043F\u0440\u0438\u0439\u0442\u0438)." }],
            [{ fr: "Imp\xE9ratif n\xE9gatif<br><em>\xAB Ne pars pas ! \xBB</em>", en: "Negative imperative<br><em>\u201CDon't leave!\u201D</em>", uk: "\u0417\u0430\u043F\u0435\u0440\u0435\u0447\u043D\u0438\u0439 \u043D\u0430\u043A\u0430\u0437<br><em>\xAB\u041D\u0435 \u0439\u0434\u0438!\xBB</em>" }, "{de ne pas + infinitif:end}", { fr: "Il me dit <b>de ne pas partir</b>.", en: "He tells me <b>de ne pas partir</b> (not to leave).", uk: "\u0412\u0456\u043D \u043A\u0430\u0436\u0435 \u043C\u0435\u043D\u0456 <b>de ne pas partir</b> (\u043D\u0435 \u0439\u0442\u0438)." }]
          ]
        },
        {
          kind: "rule",
          title: { fr: "R\xE9p\xE9tez le mot de liaison", en: "Repeat the linker", uk: "\u041F\u043E\u0432\u0442\u043E\u0440\u044E\u0439\u0442\u0435 \u0441\u043F\u043E\u043B\u0443\u0447\u043D\u0438\u043A" },
          body: {
            fr: "Chaque proposition rapport\xE9e reprend son \xAB que \xBB : Il dit qu'il est fatigu\xE9 et qu'il va se coucher.",
            en: "Every reported clause repeats its \u201Cque\u201D: Il dit qu'il est fatigu\xE9 et qu'il va se coucher.",
            uk: "\u041A\u043E\u0436\u043D\u0430 \u043F\u0456\u0434\u0440\u044F\u0434\u043D\u0430 \u0447\u0430\u0441\u0442\u0438\u043D\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u044E\u0454 \u0441\u0432\u043E\u0454 \xABque\xBB."
          }
        },
        {
          kind: "list",
          title: { fr: "Verbes introducteurs", en: "Reporting verbs", uk: "\u0412\u0432\u0456\u0434\u043D\u0456 \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u0430" },
          items: [
            { fr: "Neutres : dire, demander, r\xE9pondre, ajouter, expliquer, raconter", en: "Neutral: dire, demander, r\xE9pondre, ajouter, expliquer, raconter", uk: "\u041D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u0456: dire, demander, r\xE9pondre, ajouter, expliquer, raconter" },
            { fr: "Plus forts : affirmer, d\xE9clarer, promettre, avouer, pr\xE9tendre", en: "Stronger: affirmer, d\xE9clarer, promettre, avouer, pr\xE9tendre", uk: "\u0421\u0438\u043B\u044C\u043D\u0456\u0448\u0456: affirmer, d\xE9clarer, promettre, avouer, pr\xE9tendre" },
            { fr: "Pour un ordre : demander de, ordonner de, conseiller de, interdire de", en: "For an order: demander de, ordonner de, conseiller de, interdire de", uk: "\u0414\u043B\u044F \u043D\u0430\u043A\u0430\u0437\u0443: demander de, ordonner de, conseiller de, interdire de" }
          ]
        }
      ],
      pitfalls: [
        {
          bad: "Laurence demande si tu as vu le film.",
          good: "Laurence demande si j'ai vu le film.",
          why: { fr: "C'est MOI qu'on interroge : \xAB tu \xBB devient \xAB je \xBB. C'est l'erreur n\xB01 du discours rapport\xE9.", en: "I'm the one being asked: \u201Ctu\u201D becomes \u201Cje\u201D. This is the number-one reported-speech mistake.", uk: "\u041F\u0438\u0442\u0430\u044E\u0442\u044C \u041C\u0415\u041D\u0415: \xABtu\xBB \u0441\u0442\u0430\u0454 \xABje\xBB. \u0426\u0435 \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u21161." }
        },
        {
          bad: "Il demande o\xF9 j'habite ?",
          good: "Il demande o\xF9 j'habite.",
          why: { fr: "Une interrogative indirecte n'est plus une question : ni point d'interrogation, ni inversion, ni \xAB est-ce que \xBB.", en: "An indirect question is no longer a question: no question mark, no inversion, no \u201Cest-ce que\u201D.", uk: "\u041D\u0435\u043F\u0440\u044F\u043C\u0435 \u043F\u0438\u0442\u0430\u043D\u043D\u044F \u0432\u0436\u0435 \u043D\u0435 \u043F\u0438\u0442\u0430\u043D\u043D\u044F: \u043D\u0456 \u0437\u043D\u0430\u043A\u0430 \u043F\u0438\u0442\u0430\u043D\u043D\u044F, \u043D\u0456 \u0456\u043D\u0432\u0435\u0440\u0441\u0456\u0457." }
        },
        {
          bad: "Il dit que c'est mon appartement.",
          good: "Il dit que c'est son appartement.",
          why: { fr: "Les possessifs suivent la personne : mon \u2192 son, ma \u2192 sa, mes \u2192 ses.", en: "Possessives follow the person: mon \u2192 son, ma \u2192 sa, mes \u2192 ses.", uk: "\u041F\u0440\u0438\u0441\u0432\u0456\u0439\u043D\u0456 \u0437\u043C\u0456\u043D\u044E\u044E\u0442\u044C\u0441\u044F \u0440\u0430\u0437\u043E\u043C \u0437 \u043E\u0441\u043E\u0431\u043E\u044E." }
        }
      ],
      examples: [
        { fr: "Le propri\xE9taire dit {que:end} le loyer {comprend:stem} les charges.", en: "The landlord says the rent includes the utilities.", uk: "\u0412\u043B\u0430\u0441\u043D\u0438\u043A \u043A\u0430\u0436\u0435, \u0449\u043E \u043E\u0440\u0435\u043D\u0434\u043D\u0430 \u043F\u043B\u0430\u0442\u0430 \u0432\u043A\u043B\u044E\u0447\u0430\u0454 \u043A\u043E\u043C\u0443\u043D\u0430\u043B\u044C\u043D\u0456." },
        { fr: "Elle me demande {si:end} j'{ai:aux} {visit\xE9:part} l'appartement.", en: "She asks me whether I've viewed the flat.", uk: "\u0412\u043E\u043D\u0430 \u043F\u0438\u0442\u0430\u0454 \u043C\u0435\u043D\u0435, \u0447\u0438 \u043E\u0433\u043B\u044F\u043D\u0443\u0432 \u044F \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443." },
        { fr: "L'artisan me dit {de:end} {rappeler:inf} lundi.", en: "The tradesman tells me to call back on Monday.", uk: "\u041C\u0430\u0439\u0441\u0442\u0435\u0440 \u043A\u0430\u0436\u0435 \u043C\u0435\u043D\u0456 \u043F\u0435\u0440\u0435\u0434\u0437\u0432\u043E\u043D\u0438\u0442\u0438 \u0432 \u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A." }
      ],
      related: [
        { id: "concordance-temps", why: { fr: "La m\xEAme chose, mais avec un verbe introducteur au pass\xE9.", en: "The same thing, but with a past reporting verb.", uk: "\u0422\u0435 \u0441\u0430\u043C\u0435, \u0430\u043B\u0435 \u0437 \u0432\u0432\u0456\u0434\u043D\u0438\u043C \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u043E\u043C \u0443 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443." } },
        { id: "imperatif", why: { fr: "L'imp\xE9ratif rapport\xE9 devient \xAB de + infinitif \xBB.", en: "A reported imperative becomes \u201Cde + infinitive\u201D.", uk: "\u041D\u0430\u043A\u0430\u0437\u043E\u0432\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 \u0443 \u043D\u0435\u043F\u0440\u044F\u043C\u0456\u0439 \u043C\u043E\u0432\u0456 \u0441\u0442\u0430\u0454 \xABde + \u0456\u043D\u0444\u0456\u043D\u0456\u0442\u0438\u0432\xBB." } }
      ]
    },
    // ========== CONCORDANCE DES TEMPS ==========
    {
      id: "concordance-temps",
      name: "La concordance des temps",
      section: "structures",
      badge: "essentiel",
      tagline: {
        fr: "Verbe introducteur au pass\xE9 : tous les temps reculent d'un cran, et les marqueurs de temps aussi.",
        en: "Past reporting verb: every tense steps back one notch, and so do the time markers.",
        uk: "\u0412\u0432\u0456\u0434\u043D\u0435 \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u043E \u0432 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443: \u0443\u0441\u0456 \u0447\u0430\u0441\u0438 \u0437\u0441\u0443\u0432\u0430\u044E\u0442\u044C\u0441\u044F \u043D\u0430 \u043A\u0440\u043E\u043A \u043D\u0430\u0437\u0430\u0434, \u0456 \u043C\u0430\u0440\u043A\u0435\u0440\u0438 \u0447\u0430\u0441\u0443 \u0442\u0435\u0436."
      },
      blocks: [
        {
          kind: "table",
          title: { fr: "Le recul des temps", en: "The tense shift", uk: "\u0417\u0441\u0443\u0432 \u0447\u0430\u0441\u0456\u0432" },
          head: [{ fr: "Discours direct", en: "Direct speech", uk: "\u041F\u0440\u044F\u043C\u0430 \u043C\u043E\u0432\u0430" }, "\u2192", { fr: "Discours rapport\xE9 au pass\xE9", en: "Reported speech (past)", uk: "\u041D\u0435\u043F\u0440\u044F\u043C\u0430 \u043C\u043E\u0432\u0430 \u0432 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443" }],
          rows: [
            ["{pr\xE9sent:end}", "\u2192", { fr: "{imparfait:end} \u2014 \xAB Je suis fatigu\xE9 \xBB \u2192 il a dit qu'il <b>\xE9tait</b> fatigu\xE9.", en: "{imparfait:end} \u2014 \u201CI'm tired\u201D \u2192 he said he <b>\xE9tait</b> tired.", uk: "{imparfait:end} \u2014 \xAB\u042F \u0432\u0442\u043E\u043C\u043B\u0435\u043D\u0438\u0439\xBB \u2192 \u0432\u0456\u043D \u0441\u043A\u0430\u0437\u0430\u0432, \u0449\u043E \u0432\u0456\u043D <b>\xE9tait</b> \u0432\u0442\u043E\u043C\u043B\u0435\u043D\u0438\u0439." }],
            ["{pass\xE9 compos\xE9:end}", "\u2192", { fr: "{plus-que-parfait:end} \u2014 \xAB J'ai fini \xBB \u2192 il a dit qu'il <b>avait fini</b>.", en: "{plus-que-parfait:end} \u2014 \u201CI've finished\u201D \u2192 he said he <b>avait fini</b>.", uk: "{plus-que-parfait:end} \u2014 \xAB\u042F \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0432\xBB \u2192 \u0432\u0456\u043D \u0441\u043A\u0430\u0437\u0430\u0432, \u0449\u043E \u0432\u0456\u043D <b>avait fini</b>." }],
            ["{futur simple:end}", "\u2192", { fr: "{conditionnel pr\xE9sent:end} \u2014 \xAB Je viendrai \xBB \u2192 il a dit qu'il <b>viendrait</b>.", en: "{conditionnel pr\xE9sent:end} \u2014 \u201CI'll come\u201D \u2192 he said he <b>viendrait</b>.", uk: "{conditionnel pr\xE9sent:end} \u2014 \xAB\u042F \u043F\u0440\u0438\u0439\u0434\u0443\xBB \u2192 \u0432\u0456\u043D \u0441\u043A\u0430\u0437\u0430\u0432, \u0449\u043E \u0432\u0456\u043D <b>viendrait</b>." }],
            ["{futur proche:end}", "\u2192", { fr: "{aller \xE0 l'imparfait + infinitif:end} \u2014 \xAB Je vais partir \xBB \u2192 il a dit qu'il <b>allait partir</b>.", en: "{aller \xE0 l'imparfait + infinitif:end} \u2014 \u201CI'm going to leave\u201D \u2192 he said he <b>allait partir</b>.", uk: "{aller \xE0 l'imparfait + infinitif:end} \u2014 \xAB\u042F \u0437\u0431\u0438\u0440\u0430\u044E\u0441\u044F \u043F\u0456\u0442\u0438\xBB \u2192 \u0432\u0456\u043D \u0441\u043A\u0430\u0437\u0430\u0432, \u0449\u043E \u0432\u0456\u043D <b>allait partir</b>." }],
            ["{imparfait:end}", "\u2192", { fr: "{imparfait:end} \u2014 ne change pas.", en: "{imparfait:end} \u2014 no change.", uk: "{imparfait:end} \u2014 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0454\u0442\u044C\u0441\u044F." }],
            ["{plus-que-parfait:end}", "\u2192", { fr: "{plus-que-parfait:end} \u2014 ne change pas.", en: "{plus-que-parfait:end} \u2014 no change.", uk: "{plus-que-parfait:end} \u2014 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0454\u0442\u044C\u0441\u044F." }],
            ["{conditionnel:end}", "\u2192", { fr: "{conditionnel:end} \u2014 ne change pas.", en: "{conditionnel:end} \u2014 no change.", uk: "{conditionnel:end} \u2014 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0454\u0442\u044C\u0441\u044F." }],
            ["{imp\xE9ratif:end}", "\u2192", { fr: "{de + infinitif:end} \u2014 \xAB Viens ! \xBB \u2192 il m'a dit <b>de venir</b>.", en: "{de + infinitif:end} \u2014 \u201CCome!\u201D \u2192 he told me <b>de venir</b>.", uk: "{de + infinitif:end} \u2014 \xAB\u041F\u0440\u0438\u0439\u0434\u0438!\xBB \u2192 \u0432\u0456\u043D \u0441\u043A\u0430\u0437\u0430\u0432 \u043C\u0435\u043D\u0456 <b>de venir</b>." }]
          ],
          note: {
            fr: "Trois temps ne bougent jamais : imparfait, plus-que-parfait, conditionnel. Ils sont d\xE9j\xE0 \xAB au fond \xBB.",
            en: "Three tenses never move: imparfait, pluperfect, conditional. They're already \u201Cat the bottom\u201D.",
            uk: "\u0422\u0440\u0438 \u0447\u0430\u0441\u0438 \u043D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u0437\u0441\u0443\u0432\u0430\u044E\u0442\u044C\u0441\u044F: imparfait, plus-que-parfait, conditionnel."
          }
        },
        {
          kind: "table",
          title: { fr: "Les marqueurs de temps changent aussi", en: "Time markers shift too", uk: "\u041C\u0430\u0440\u043A\u0435\u0440\u0438 \u0447\u0430\u0441\u0443 \u0442\u0435\u0436 \u0437\u043C\u0456\u043D\u044E\u044E\u0442\u044C\u0441\u044F" },
          head: [{ fr: "Direct", en: "Direct", uk: "\u041F\u0440\u044F\u043C\u0430 \u043C\u043E\u0432\u0430" }, { fr: "\u2192 Rapport\xE9", en: "\u2192 Reported", uk: "\u2192 \u041D\u0435\u043F\u0440\u044F\u043C\u0430 \u043C\u043E\u0432\u0430" }, { fr: "Direct", en: "Direct", uk: "\u041F\u0440\u044F\u043C\u0430 \u043C\u043E\u0432\u0430" }, { fr: "\u2192 Rapport\xE9", en: "\u2192 Reported", uk: "\u2192 \u041D\u0435\u043F\u0440\u044F\u043C\u0430 \u043C\u043E\u0432\u0430" }],
          rows: [
            ["aujourd'hui", "ce jour-l\xE0", "hier", "la veille"],
            ["demain", "le lendemain", "apr\xE8s-demain", "le surlendemain"],
            ["maintenant", "\xE0 ce moment-l\xE0", "ici", "l\xE0"],
            ["la semaine prochaine", "la semaine suivante", "la semaine derni\xE8re", "la semaine pr\xE9c\xE9dente"],
            ["il y a deux jours", "deux jours plus t\xF4t", "dans deux jours", "deux jours plus tard"]
          ]
        },
        {
          kind: "rule",
          title: { fr: "L'exemple complet", en: "The full example", uk: "\u041F\u043E\u0432\u043D\u0438\u0439 \u043F\u0440\u0438\u043A\u043B\u0430\u0434" },
          body: {
            fr: "\xAB Hier j'ai visit\xE9 un appartement, et demain je signerai le bail. \xBB \u2192 Il m'a dit que la veille il avait visit\xE9 un appartement et que le lendemain il signerait le bail. Trois changements en m\xEAme temps : temps, personne, marqueur.",
            en: "\u201CYesterday I viewed a flat, and tomorrow I'll sign the lease.\u201D \u2192 Il m'a dit que la veille il avait visit\xE9 un appartement et que le lendemain il signerait le bail. Three changes at once: tense, person, marker.",
            uk: "\u0422\u0440\u0438 \u0437\u043C\u0456\u043D\u0438 \u043E\u0434\u043D\u043E\u0447\u0430\u0441\u043D\u043E: \u0447\u0430\u0441, \u043E\u0441\u043E\u0431\u0430, \u043C\u0430\u0440\u043A\u0435\u0440."
          }
        }
      ],
      pitfalls: [
        {
          bad: "Il a dit qu'il venait demain.",
          good: "Il a dit qu'il viendrait le lendemain.",
          why: { fr: "Le futur devient CONDITIONNEL, pas imparfait \u2014 et \xAB demain \xBB devient \xAB le lendemain \xBB.", en: "The future becomes the CONDITIONAL, not the imparfait \u2014 and \u201Cdemain\u201D becomes \u201Cle lendemain\u201D.", uk: "\u041C\u0430\u0439\u0431\u0443\u0442\u043D\u0454 \u0441\u0442\u0430\u0454 \u0423\u041C\u041E\u0412\u041D\u0418\u041C, \u043D\u0435 imparfait." }
        },
        {
          bad: "Il dit qu'il \xE9tait fatigu\xE9.",
          good: "Il dit qu'il est fatigu\xE9.",
          why: { fr: "Le recul ne s'applique QUE si le verbe introducteur est au pass\xE9. \xAB il dit \xBB est au pr\xE9sent.", en: "The shift applies ONLY if the reporting verb is in the past. \u201Cil dit\u201D is present.", uk: "\u0417\u0441\u0443\u0432 \u0434\u0456\u0454 \u041B\u0418\u0428\u0415 \u044F\u043A\u0449\u043E \u0432\u0432\u0456\u0434\u043D\u0435 \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u043E \u0432 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443." }
        }
      ],
      examples: [
        { fr: "Il a expliqu\xE9 qu'il {av:stem}{ait:end} {abattu:part} le mur la semaine pr\xE9c\xE9dente.", en: "He explained that he had knocked the wall down the week before.", uk: "\u0412\u0456\u043D \u043F\u043E\u044F\u0441\u043D\u0438\u0432, \u0449\u043E \u0437\u043D\u0456\u0441 \u0441\u0442\u0456\u043D\u0443 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E \u0442\u0438\u0436\u043D\u044F." },
        { fr: "Elle a r\xE9pondu qu'elle {all:stem}{ait:end} {rappeler:inf} l'artisan.", en: "She replied that she was going to call the tradesman back.", uk: "\u0412\u043E\u043D\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u043B\u0430, \u0449\u043E \u0437\u0431\u0438\u0440\u0430\u043B\u0430\u0441\u044F \u043F\u0435\u0440\u0435\u0434\u0437\u0432\u043E\u043D\u0438\u0442\u0438 \u043C\u0430\u0439\u0441\u0442\u0440\u043E\u0432\u0456." },
        { fr: "Ils ont promis qu'ils {finir:stem}{aient:end} les travaux avant l'hiver.", en: "They promised they would finish the work before winter.", uk: "\u0412\u043E\u043D\u0438 \u043F\u043E\u043E\u0431\u0456\u0446\u044F\u043B\u0438, \u0449\u043E \u0437\u0430\u043A\u0456\u043D\u0447\u0430\u0442\u044C \u0440\u043E\u0431\u043E\u0442\u0438 \u0434\u043E \u0437\u0438\u043C\u0438." }
      ],
      related: [
        { id: "discours-rapporte", why: { fr: "La version simple, quand rien ne recule.", en: "The simple version, when nothing shifts.", uk: "\u041F\u0440\u043E\u0441\u0442\u0430 \u0432\u0435\u0440\u0441\u0456\u044F, \u043A\u043E\u043B\u0438 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u0441\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F." } },
        { id: "plus-que-parfait", why: { fr: "C'est le temps d'arriv\xE9e du pass\xE9 compos\xE9.", en: "It's where the pass\xE9 compos\xE9 lands.", uk: "\u0421\u044E\u0434\u0438 \xAB\u043F\u0440\u0438\u0437\u0435\u043C\u043B\u044F\u0454\u0442\u044C\u0441\u044F\xBB pass\xE9 compos\xE9." } },
        { id: "conditionnel-present", why: { fr: "C'est le temps d'arriv\xE9e du futur simple.", en: "It's where the futur simple lands.", uk: "\u0421\u044E\u0434\u0438 \xAB\u043F\u0440\u0438\u0437\u0435\u043C\u043B\u044F\u0454\u0442\u044C\u0441\u044F\xBB futur simple." } }
      ]
    },
    // ========== RESTRICTION ==========
    {
      id: "restriction",
      name: "La restriction",
      section: "structures",
      badge: "essentiel",
      tagline: {
        fr: "Dire \xAB seulement \xBB de quatre fa\xE7ons \u2014 dont une qui ressemble \xE0 une n\xE9gation sans en \xEAtre une.",
        en: "Four ways to say \u201Conly\u201D \u2014 one of which looks like a negation but isn't.",
        uk: "\u0427\u043E\u0442\u0438\u0440\u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0438 \u0441\u043A\u0430\u0437\u0430\u0442\u0438 \xAB\u043B\u0438\u0448\u0435\xBB \u2014 \u043E\u0434\u0438\u043D \u0456\u0437 \u043D\u0438\u0445 \u0441\u0445\u043E\u0436\u0438\u0439 \u043D\u0430 \u0437\u0430\u043F\u0435\u0440\u0435\u0447\u0435\u043D\u043D\u044F, \u0430\u043B\u0435 \u043D\u0438\u043C \u043D\u0435 \u0454."
      },
      blocks: [
        {
          kind: "table",
          title: { fr: "Les quatre structures", en: "The four structures", uk: "\u0427\u043E\u0442\u0438\u0440\u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438" },
          head: [{ fr: "Structure", en: "Structure", uk: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430" }, { fr: "Nature", en: "Nature", uk: "\u0422\u0438\u043F" }, { fr: "Exemple", en: "Example", uk: "\u041F\u0440\u0438\u043A\u043B\u0430\u0434" }],
          rows: [
            ["{ne \u2026 que:end}", { fr: "locution restrictive \u2014 porte sur ce qui suit <b>que</b>", en: "restrictive phrase \u2014 it restricts what follows <b>que</b>", uk: "\u043E\u0431\u043C\u0435\u0436\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u0439 \u0437\u0432\u043E\u0440\u043E\u0442 \u2014 \u0441\u0442\u043E\u0441\u0443\u0454\u0442\u044C\u0441\u044F \u0442\u043E\u0433\u043E, \u0449\u043E \u0439\u0434\u0435 \u043F\u0456\u0441\u043B\u044F <b>que</b>" }, { fr: "Je <b>ne</b> bois <b>que</b> de l'eau.", en: "Je <b>ne</b> bois <b>que</b> de l'eau. \u2014 I drink only water.", uk: "Je <b>ne</b> bois <b>que</b> de l'eau. \u2014 \u042F \u043F'\u044E \u043B\u0438\u0448\u0435 \u0432\u043E\u0434\u0443." }],
            ["{seulement:end}", { fr: "adverbe, placement souple", en: "adverb, flexible position", uk: "\u043F\u0440\u0438\u0441\u043B\u0456\u0432\u043D\u0438\u043A, \u0432\u0456\u043B\u044C\u043D\u0435 \u043C\u0456\u0441\u0446\u0435" }, { fr: "Je bois <b>seulement</b> de l'eau.", en: "I drink <b>seulement</b> (only) water.", uk: "\u042F \u043F'\u044E <b>seulement</b> (\u043B\u0438\u0448\u0435) \u0432\u043E\u0434\u0443." }],
            ["{seul(e)(s):end}", { fr: "adjectif \u2014 il s'accorde", en: "adjective \u2014 it agrees", uk: "\u043F\u0440\u0438\u043A\u043C\u0435\u0442\u043D\u0438\u043A \u2014 \u0443\u0437\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u044C\u0441\u044F" }, { fr: "<b>Seul</b> Paul est venu. / Elle est la <b>seule</b> \xE0 savoir.", en: "<b>Seul</b> (only) Paul came. / She's the <b>seule</b> (only one) who knows.", uk: "<b>Seul</b> (\u043B\u0438\u0448\u0435) \u041F\u043E\u043B\u044C \u043F\u0440\u0438\u0439\u0448\u043E\u0432. / \u0412\u043E\u043D\u0430 <b>seule</b> (\u0454\u0434\u0438\u043D\u0430), \u0445\u0442\u043E \u0437\u043D\u0430\u0454." }],
            ["{ne \u2026 pas que:end}", { fr: "\xAB pas seulement \xBB", en: "\u201Cnot only\u201D", uk: "\xAB\u043D\u0435 \u0442\u0456\u043B\u044C\u043A\u0438\xBB" }, { fr: "Il <b>n'</b>y a <b>pas que</b> le travail dans la vie.", en: "Il <b>n'</b>y a <b>pas que</b> le travail dans la vie. \u2014 There's more to life than work.", uk: "Il <b>n'</b>y a <b>pas que</b> le travail dans la vie. \u2014 \u0423 \u0436\u0438\u0442\u0442\u0456 \u0454 \u043D\u0435 \u043B\u0438\u0448\u0435 \u0440\u043E\u0431\u043E\u0442\u0430." }]
          ]
        },
        {
          kind: "rule",
          title: { fr: "O\xF9 placer \xAB que \xBB ?", en: "Where to put \u201Cque\u201D?", uk: "\u041A\u0443\u0434\u0438 \u0441\u0442\u0430\u0432\u0438\u0442\u0438 \xABque\xBB?" },
          body: {
            fr: "\xAB que \xBB se met juste devant l'\xE9l\xE9ment restreint. Temps simple : Il ne mange qu'une pomme. Temps compos\xE9 : Il n'a mang\xE9 qu'une pomme \u2014 \xAB que \xBB passe APR\xC8S le participe. Avec un infinitif : Il ne veut que dormir.",
            en: "\u201Cque\u201D goes right before the restricted element. Simple tense: Il ne mange qu'une pomme. Compound: Il n'a mang\xE9 qu'une pomme \u2014 \u201Cque\u201D comes AFTER the participle. With an infinitive: Il ne veut que dormir.",
            uk: "\xABque\xBB \u0441\u0442\u0430\u0432\u0438\u0442\u044C\u0441\u044F \u0431\u0435\u0437\u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E \u043F\u0435\u0440\u0435\u0434 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u0438\u043C \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C."
          }
        },
        {
          kind: "rule",
          title: { fr: "Le point qui rapporte des points", en: "The point that earns marks", uk: "\u041F\u0443\u043D\u043A\u0442, \u0449\u043E \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442\u044C \u0431\u0430\u043B\u0438" },
          body: {
            fr: "\xAB ne\u2026 que \xBB n'est PAS une n\xE9gation. Les articles ne changent donc pas : Je ne bois que DU caf\xE9. Comparez avec la vraie n\xE9gation : Je ne bois PAS DE caf\xE9.",
            en: "\u201Cne\u2026 que\u201D is NOT a negation. So the articles stay: Je ne bois que DU caf\xE9. Compare the real negation: Je ne bois PAS DE caf\xE9.",
            uk: "\xABne\u2026 que\xBB \u2014 \u041D\u0415 \u0437\u0430\u043F\u0435\u0440\u0435\u0447\u0435\u043D\u043D\u044F. \u0422\u043E\u043C\u0443 \u0430\u0440\u0442\u0438\u043A\u043B\u0456 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u044E\u0442\u044C\u0441\u044F."
          }
        },
        {
          kind: "rule",
          title: { fr: "Le faux ami : n'avoir qu'\xE0", en: "The false friend: n'avoir qu'\xE0", uk: "\u041E\u043C\u0430\u043D\u043B\u0438\u0432\u0438\u0439 \u0434\u0440\u0443\u0433: n'avoir qu'\xE0" },
          body: {
            fr: "\xAB n'avoir qu'\xE0 + infinitif \xBB n'exprime pas la restriction mais le conseil ou le reproche : Tu n'as qu'\xE0 lui demander. = Il suffit que tu lui demandes.",
            en: "\u201Cn'avoir qu'\xE0 + infinitive\u201D expresses advice or reproach, not restriction: Tu n'as qu'\xE0 lui demander. = You just have to ask him.",
            uk: "\xABn'avoir qu'\xE0 + \u0456\u043D\u0444\u0456\u043D\u0456\u0442\u0438\u0432\xBB \u2014 \u0446\u0435 \u043F\u043E\u0440\u0430\u0434\u0430 \u0430\u0431\u043E \u0434\u043E\u043A\u0456\u0440, \u0430 \u043D\u0435 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F."
          }
        }
      ],
      pitfalls: [
        {
          bad: "Je ne bois que d'eau.",
          good: "Je ne bois que de l'eau.",
          why: { fr: "Ce n'est pas une n\xE9gation : le partitif \xAB de l' \xBB reste entier.", en: "It's not a negation: the partitive \u201Cde l'\u201D stays whole.", uk: "\u0426\u0435 \u043D\u0435 \u0437\u0430\u043F\u0435\u0440\u0435\u0447\u0435\u043D\u043D\u044F: \u043F\u0430\u0440\u0442\u0438\u0442\u0438\u0432\u043D\u0438\u0439 \u0430\u0440\u0442\u0438\u043A\u043B\u044C \u043B\u0438\u0448\u0430\u0454\u0442\u044C\u0441\u044F." }
        },
        {
          bad: "Il n'a qu'mang\xE9 une pomme.",
          good: "Il n'a mang\xE9 qu'une pomme.",
          why: { fr: "Aux temps compos\xE9s, \xAB que \xBB se place apr\xE8s le participe pass\xE9, devant l'\xE9l\xE9ment restreint.", en: "In compound tenses, \u201Cque\u201D goes after the past participle, before the restricted element.", uk: "\u0423 \u0441\u043A\u043B\u0430\u0434\u043D\u0438\u0445 \u0447\u0430\u0441\u0430\u0445 \xABque\xBB \u0441\u0442\u043E\u0457\u0442\u044C \u043F\u0456\u0441\u043B\u044F \u0434\u0456\u0454\u043F\u0440\u0438\u043A\u043C\u0435\u0442\u043D\u0438\u043A\u0430." }
        },
        {
          bad: "Seul Marie est venue.",
          good: "Seule Marie est venue.",
          why: { fr: "\xAB seul \xBB est un adjectif : il s'accorde avec le nom qu'il d\xE9termine.", en: "\u201Cseul\u201D is an adjective: it agrees with its noun.", uk: "\xABseul\xBB \u2014 \u043F\u0440\u0438\u043A\u043C\u0435\u0442\u043D\u0438\u043A: \u0443\u0437\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u044C\u0441\u044F \u0437 \u0456\u043C\u0435\u043D\u043D\u0438\u043A\u043E\u043C." }
        }
      ],
      examples: [
        { fr: "Ce cin\xE9ma {ne:pron} passe {que:end} des films en v.o.", en: "This cinema only shows films in the original version.", uk: "\u0426\u0435\u0439 \u043A\u0456\u043D\u043E\u0442\u0435\u0430\u0442\u0440 \u043F\u043E\u043A\u0430\u0437\u0443\u0454 \u043B\u0438\u0448\u0435 \u0444\u0456\u043B\u044C\u043C\u0438 \u043C\u043E\u0432\u043E\u044E \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u0443." },
        { fr: "Nous {n':pron}avons {visit\xE9:part} {que:end} deux appartements cette semaine.", en: "We only viewed two flats this week.", uk: "\u0426\u044C\u043E\u0433\u043E \u0442\u0438\u0436\u043D\u044F \u043C\u0438 \u043E\u0433\u043B\u044F\u043D\u0443\u043B\u0438 \u043B\u0438\u0448\u0435 \u0434\u0432\u0456 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0438." },
        { fr: "Tu {n':pron}as {qu':end}\xE0 demander un devis avant de d\xE9cider.", en: "You just have to ask for a quote before deciding.", uk: "\u0422\u043E\u0431\u0456 \u0434\u043E\u0441\u0442\u0430\u0442\u043D\u044C\u043E \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u043A\u043E\u0448\u0442\u043E\u0440\u0438\u0441 \u043F\u0435\u0440\u0435\u0434 \u0440\u0456\u0448\u0435\u043D\u043D\u044F\u043C." }
      ],
      related: [
        { id: "passe-compose", why: { fr: "Le placement de \xAB que \xBB se joue autour du participe pass\xE9.", en: "Where \u201Cque\u201D goes depends on the past participle.", uk: "\u041C\u0456\u0441\u0446\u0435 \xABque\xBB \u0437\u0430\u043B\u0435\u0436\u0438\u0442\u044C \u0432\u0456\u0434 \u0434\u0456\u0454\u043F\u0440\u0438\u043A\u043C\u0435\u0442\u043D\u0438\u043A\u0430." } }
      ]
    },
    // ========== CAUSE & CONSÉQUENCE ==========
    {
      id: "cause-consequence",
      name: "La cause et la cons\xE9quence",
      section: "connecteurs",
      badge: "essentiel",
      tagline: {
        fr: "Deux questions : pourquoi ? et alors ? Le choix du connecteur d\xE9pend de ce qui suit (nom ou phrase) et du registre.",
        en: "Two questions: why? and so what? The connector depends on what follows (noun or clause) and on register.",
        uk: "\u0414\u0432\u0430 \u043F\u0438\u0442\u0430\u043D\u043D\u044F: \u0447\u043E\u043C\u0443? \u0456 \u0442\u043E \u0439 \u0449\u043E? \u0412\u0438\u0431\u0456\u0440 \u0441\u043F\u043E\u043B\u0443\u0447\u043D\u0438\u043A\u0430 \u0437\u0430\u043B\u0435\u0436\u0438\u0442\u044C \u0432\u0456\u0434 \u0442\u043E\u0433\u043E, \u0449\u043E \u0439\u0434\u0435 \u0434\u0430\u043B\u0456, \u0456 \u0432\u0456\u0434 \u0440\u0435\u0433\u0456\u0441\u0442\u0440\u0443."
      },
      blocks: [
        {
          kind: "table",
          title: { fr: "La CAUSE \u2014 pourquoi ?", en: "CAUSE \u2014 why?", uk: "\u041F\u0420\u0418\u0427\u0418\u041D\u0410 \u2014 \u0447\u043E\u043C\u0443?" },
          head: [{ fr: "Connecteur", en: "Connector", uk: "\u0421\u043F\u043E\u043B\u0443\u0447\u043D\u0438\u043A" }, { fr: "Suivi de", en: "Followed by", uk: "\u041F\u0456\u0441\u043B\u044F \u043D\u044C\u043E\u0433\u043E" }, { fr: "Nuance", en: "Nuance", uk: "\u041D\u044E\u0430\u043D\u0441" }, { fr: "Exemple", en: "Example", uk: "\u041F\u0440\u0438\u043A\u043B\u0430\u0434" }],
          rows: [
            ["{parce que:end}", { fr: "proposition", en: "clause", uk: "\u043F\u0456\u0434\u0440\u044F\u0434\u043D\u0435 \u0440\u0435\u0447\u0435\u043D\u043D\u044F" }, { fr: "neutre, r\xE9pond \xE0 \xAB pourquoi ? \xBB", en: "neutral, answers \u201Cwhy?\u201D", uk: "\u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u0435, \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u043D\u0430 \xAB\u0447\u043E\u043C\u0443?\xBB" }, { fr: "Je suis en retard <b>parce qu'</b>il y a une gr\xE8ve.", en: "I'm late <b>parce qu'</b> (because) there's a strike.", uk: "\u042F \u0437\u0430\u043F\u0456\u0437\u043D\u044E\u044E\u0441\u044F, <b>parce qu'</b> (\u0431\u043E) \u0442\u0440\u0438\u0432\u0430\u0454 \u0441\u0442\u0440\u0430\u0439\u043A." }],
            ["{car:end}", { fr: "proposition", en: "clause", uk: "\u043F\u0456\u0434\u0440\u044F\u0434\u043D\u0435 \u0440\u0435\u0447\u0435\u043D\u043D\u044F" }, { fr: "\xE9crit ; relie deux propositions, ne commence pas la phrase", en: "written; links two clauses, never starts the sentence", uk: "\u043F\u0438\u0441\u044C\u043C\u043E\u0432\u0435; \u0437'\u0454\u0434\u043D\u0443\u0454 \u0434\u0432\u0456 \u0447\u0430\u0441\u0442\u0438\u043D\u0438, \u043D\u0435 \u043F\u043E\u0447\u0438\u043D\u0430\u0454 \u0440\u0435\u0447\u0435\u043D\u043D\u044F" }, { fr: "Il est rest\xE9, <b>car</b> il pleuvait.", en: "He stayed, <b>car</b> (because) it was raining.", uk: "\u0412\u0456\u043D \u0437\u0430\u043B\u0438\u0448\u0438\u0432\u0441\u044F, <b>car</b> (\u0431\u043E) \u0439\u0448\u043E\u0432 \u0434\u043E\u0449." }],
            ["{comme:end}", { fr: "proposition", en: "clause", uk: "\u043F\u0456\u0434\u0440\u044F\u0434\u043D\u0435 \u0440\u0435\u0447\u0435\u043D\u043D\u044F" }, { fr: "toujours en t\xEAte de phrase", en: "always at the start of the sentence", uk: "\u0437\u0430\u0432\u0436\u0434\u0438 \u043D\u0430 \u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u0440\u0435\u0447\u0435\u043D\u043D\u044F" }, { fr: "<b>Comme</b> il pleuvait, il est rest\xE9.", en: "<b>Comme</b> (since) it was raining, he stayed.", uk: "<b>Comme</b> (\u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438) \u0439\u0448\u043E\u0432 \u0434\u043E\u0449, \u0432\u0456\u043D \u0437\u0430\u043B\u0438\u0448\u0438\u0432\u0441\u044F." }],
            ["{puisque:end}", { fr: "proposition", en: "clause", uk: "\u043F\u0456\u0434\u0440\u044F\u0434\u043D\u0435 \u0440\u0435\u0447\u0435\u043D\u043D\u044F" }, { fr: "cause connue de tous, \xE9vidente", en: "cause known to all, obvious", uk: "\u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u0456\u0434\u043E\u043C\u0430 \u0432\u0441\u0456\u043C, \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u0430" }, { fr: "<b>Puisque</b> tu es l\xE0, aide-moi.", en: "<b>Puisque</b> (since) you're here, help me.", uk: "<b>Puisque</b> (\u0440\u0430\u0437 \u0443\u0436\u0435) \u0442\u0438 \u0442\u0443\u0442, \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0438 \u043C\u0435\u043D\u0456." }],
            ["{\xE9tant donn\xE9 que:end}", { fr: "proposition", en: "clause", uk: "\u043F\u0456\u0434\u0440\u044F\u0434\u043D\u0435 \u0440\u0435\u0447\u0435\u043D\u043D\u044F" }, { fr: "formel, \xE9crit", en: "formal, written", uk: "\u0444\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0435, \u043F\u0438\u0441\u044C\u043C\u043E\u0432\u0435" }, { fr: "<b>\xC9tant donn\xE9 qu'</b>il n'y a plus de place\u2026", en: "<b>\xC9tant donn\xE9 qu'</b> (given that) there's no room left\u2026", uk: "<b>\xC9tant donn\xE9 qu'</b> (\u0437 \u043E\u0433\u043B\u044F\u0434\u0443 \u043D\u0430 \u0442\u0435, \u0449\u043E) \u043C\u0456\u0441\u0446\u044C \u0431\u0456\u043B\u044C\u0448\u0435 \u043D\u0435\u043C\u0430\u0454\u2026" }],
            ["{vu que:end}", { fr: "proposition", en: "clause", uk: "\u043F\u0456\u0434\u0440\u044F\u0434\u043D\u0435 \u0440\u0435\u0447\u0435\u043D\u043D\u044F" }, { fr: "oral, familier", en: "spoken, informal", uk: "\u0443\u0441\u043D\u0435, \u0440\u043E\u0437\u043C\u043E\u0432\u043D\u0435" }, { fr: "<b>Vu qu'</b>il pleuvait, on est rest\xE9s.", en: "<b>Vu qu'</b> (seeing as) it was raining, we stayed.", uk: "<b>Vu qu'</b> (\u0440\u0430\u0437) \u0439\u0448\u043E\u0432 \u0434\u043E\u0449, \u043C\u0438 \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u0438\u0441\u044F." }],
            ["{\xE0 cause de:end}", { fr: "<b>nom</b>", en: "<b>noun</b>", uk: "<b>\u0456\u043C\u0435\u043D\u043D\u0438\u043A</b>" }, { fr: "r\xE9sultat n\xE9gatif", en: "negative result", uk: "\u043D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442" }, { fr: "Il est arriv\xE9 en retard <b>\xE0 cause du</b> trafic.", en: "He arrived late <b>\xE0 cause du</b> (because of) traffic.", uk: "\u0412\u0456\u043D \u043F\u0440\u0438\u0457\u0445\u0430\u0432 \u043F\u0456\u0437\u043D\u043E <b>\xE0 cause du</b> (\u0447\u0435\u0440\u0435\u0437) \u0437\u0430\u0442\u043E\u0440\u0438." }],
            ["{gr\xE2ce \xE0:end}", { fr: "<b>nom</b>", en: "<b>noun</b>", uk: "<b>\u0456\u043C\u0435\u043D\u043D\u0438\u043A</b>" }, { fr: "r\xE9sultat positif", en: "positive result", uk: "\u043F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442" }, { fr: "J'ai r\xE9ussi <b>gr\xE2ce \xE0</b> ma prof.", en: "I passed <b>gr\xE2ce \xE0</b> (thanks to) my teacher.", uk: "\u042F \u0441\u043A\u043B\u0430\u0432 <b>gr\xE2ce \xE0</b> (\u0437\u0430\u0432\u0434\u044F\u043A\u0438) \u043C\u043E\u0457\u0439 \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u0447\u0446\u0456." }],
            ["{en raison de:end}", { fr: "<b>nom</b>", en: "<b>noun</b>", uk: "<b>\u0456\u043C\u0435\u043D\u043D\u0438\u043A</b>" }, { fr: "neutre, formel / administratif", en: "neutral, formal / official", uk: "\u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u0435, \u0444\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0435 / \u043E\u0444\u0456\u0446\u0456\u0439\u043D\u0435" }, { fr: "Ferm\xE9 <b>en raison des</b> travaux.", en: "Closed <b>en raison des</b> (due to) the works.", uk: "\u0417\u0430\u0447\u0438\u043D\u0435\u043D\u043E <b>en raison des</b> (\u0447\u0435\u0440\u0435\u0437) \u0440\u0435\u043C\u043E\u043D\u0442\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438." }],
            ["{faute de:end}", { fr: "<b>nom</b>", en: "<b>noun</b>", uk: "<b>\u0456\u043C\u0435\u043D\u043D\u0438\u043A</b>" }, { fr: "par manque de", en: "for lack of", uk: "\u0447\u0435\u0440\u0435\u0437 \u0431\u0440\u0430\u043A" }, { fr: "<b>Faute de</b> temps, il a abandonn\xE9.", en: "<b>Faute de</b> (for lack of) time, he gave up.", uk: "<b>Faute de</b> (\u0447\u0435\u0440\u0435\u0437 \u0431\u0440\u0430\u043A) \u0447\u0430\u0441\u0443 \u0432\u0456\u043D \u0437\u0434\u0430\u0432\u0441\u044F." }]
          ]
        },
        {
          kind: "table",
          title: { fr: "La CONS\xC9QUENCE \u2014 et alors ?", en: "CONSEQUENCE \u2014 so what?", uk: "\u041D\u0410\u0421\u041B\u0406\u0414\u041E\u041A \u2014 \u0442\u043E \u0439 \u0449\u043E?" },
          head: [{ fr: "Connecteur", en: "Connector", uk: "\u0421\u043F\u043E\u043B\u0443\u0447\u043D\u0438\u043A" }, { fr: "Registre", en: "Register", uk: "\u0420\u0435\u0433\u0456\u0441\u0442\u0440" }, { fr: "Exemple", en: "Example", uk: "\u041F\u0440\u0438\u043A\u043B\u0430\u0434" }],
          rows: [
            ["{donc:end}", { fr: "neutre", en: "neutral", uk: "\u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u0435" }, { fr: "Il pleuvait, <b>donc</b> je suis rest\xE9.", en: "It was raining, <b>donc</b> (so) I stayed in.", uk: "\u0419\u0448\u043E\u0432 \u0434\u043E\u0449, <b>donc</b> (\u0442\u043E\u0436) \u044F \u0437\u0430\u043B\u0438\u0448\u0438\u0432\u0441\u044F \u0432\u0434\u043E\u043C\u0430." }],
            ["{alors:end}", { fr: "oral", en: "spoken", uk: "\u0443\u0441\u043D\u0435" }, { fr: "Il pleuvait, <b>alors</b> je suis rest\xE9.", en: "It was raining, <b>alors</b> (so) I stayed in.", uk: "\u0419\u0448\u043E\u0432 \u0434\u043E\u0449, <b>alors</b> (\u0442\u043E\u0436) \u044F \u0437\u0430\u043B\u0438\u0448\u0438\u0432\u0441\u044F \u0432\u0434\u043E\u043C\u0430." }],
            ["{du coup:end}", { fr: "oral, familier", en: "spoken, informal", uk: "\u0443\u0441\u043D\u0435, \u0440\u043E\u0437\u043C\u043E\u0432\u043D\u0435" }, { fr: "Il pleuvait, <b>du coup</b> je suis rest\xE9.", en: "It was raining, <b>du coup</b> (so) I stayed in.", uk: "\u0419\u0448\u043E\u0432 \u0434\u043E\u0449, <b>du coup</b> (\u0442\u043E\u043C\u0443) \u044F \u0437\u0430\u043B\u0438\u0448\u0438\u0432\u0441\u044F \u0432\u0434\u043E\u043C\u0430." }],
            ["{par cons\xE9quent:end}", { fr: "formel, \xE9crit", en: "formal, written", uk: "\u0444\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0435, \u043F\u0438\u0441\u044C\u043C\u043E\u0432\u0435" }, { fr: "Les prix montent ; <b>par cons\xE9quent</b>, la demande baisse.", en: "Prices are rising; <b>par cons\xE9quent</b> (consequently), demand is falling.", uk: "\u0426\u0456\u043D\u0438 \u0437\u0440\u043E\u0441\u0442\u0430\u044E\u0442\u044C; <b>par cons\xE9quent</b> (\u043E\u0442\u0436\u0435), \u043F\u043E\u043F\u0438\u0442 \u043F\u0430\u0434\u0430\u0454." }],
            ["{c'est pourquoi:end}", { fr: "neutre / \xE9crit", en: "neutral / written", uk: "\u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u0435 / \u043F\u0438\u0441\u044C\u043C\u043E\u0432\u0435" }, { fr: "Il n'avait pas r\xE9vis\xE9, <b>c'est pourquoi</b> il a \xE9chou\xE9.", en: "He hadn't revised, <b>c'est pourquoi</b> (that's why) he failed.", uk: "\u0412\u0456\u043D \u043D\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0432 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B, <b>c'est pourquoi</b> (\u0442\u043E\u043C\u0443) \u043F\u0440\u043E\u0432\u0430\u043B\u0438\u0432\u0441\u044F." }],
            ["{ce qui fait que:end}", { fr: "oral", en: "spoken", uk: "\u0443\u0441\u043D\u0435" }, { fr: "Il a plu, <b>ce qui fait que</b> tout est mouill\xE9.", en: "It rained, <b>ce qui fait que</b> (so) everything is wet.", uk: "\u041F\u0440\u043E\u0439\u0448\u043E\u0432 \u0434\u043E\u0449, <b>ce qui fait que</b> (\u0442\u043E\u043C\u0443) \u0432\u0441\u0435 \u043C\u043E\u043A\u0440\u0435." }],
            ["{si bien que:end}", { fr: "\xE9crit", en: "written", uk: "\u043F\u0438\u0441\u044C\u043C\u043E\u0432\u0435" }, { fr: "Il a couru, <b>si bien qu'</b>il est arriv\xE9 \xE0 l'heure.", en: "He ran, <b>si bien qu'</b> (so that) he arrived on time.", uk: "\u0412\u0456\u043D \u0431\u0456\u0433, <b>si bien qu'</b> (\u0442\u043E\u0436) \u043F\u0440\u0438\u0431\u0443\u0432 \u0432\u0447\u0430\u0441\u043D\u043E." }],
            ["{si / tellement + adj. + que:end}", { fr: "intensit\xE9", en: "intensity", uk: "\u0456\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u0456\u0441\u0442\u044C" }, { fr: "Il \xE9tait <b>si</b> fatigu\xE9 <b>qu'</b>il s'est endormi.", en: "He was <b>si</b> (so) tired <b>qu'</b> (that) he fell asleep.", uk: "\u0412\u0456\u043D \u0431\u0443\u0432 <b>si</b> (\u0442\u0430\u043A\u0438\u0439) \u0432\u0442\u043E\u043C\u043B\u0435\u043D\u0438\u0439, <b>qu'</b> (\u0449\u043E) \u0437\u0430\u0441\u043D\u0443\u0432." }],
            ["{tellement / tant de + nom + que:end}", { fr: "intensit\xE9", en: "intensity", uk: "\u0456\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u0456\u0441\u0442\u044C" }, { fr: "Il y avait <b>tant de</b> monde <b>que</b> je suis parti.", en: "There were <b>tant de</b> (so many) people <b>que</b> (that) I left.", uk: "\u0411\u0443\u043B\u043E <b>tant de</b> (\u0441\u0442\u0456\u043B\u044C\u043A\u0438) \u043B\u044E\u0434\u0435\u0439, <b>que</b> (\u0449\u043E) \u044F \u043F\u0456\u0448\u043E\u0432." }]
          ]
        },
        {
          kind: "list",
          title: { fr: "Avec un verbe ou un nom", en: "With a verb or a noun", uk: "\u0417 \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u043E\u043C \u0430\u0431\u043E \u0456\u043C\u0435\u043D\u043D\u0438\u043A\u043E\u043C" },
          items: [
            { fr: "entra\xEEner \xB7 provoquer \xB7 causer \u2014 La gr\xE8ve a provoqu\xE9 des retards.", en: "entra\xEEner \xB7 provoquer \xB7 causer \u2014 La gr\xE8ve a provoqu\xE9 des retards.", uk: "entra\xEEner \xB7 provoquer \xB7 causer" },
            { fr: "avoir pour cons\xE9quence \u2014 Cela a eu pour cons\xE9quence une hausse des prix.", en: "avoir pour cons\xE9quence \u2014 Cela a eu pour cons\xE9quence une hausse des prix.", uk: "avoir pour cons\xE9quence" },
            { fr: "\xEAtre \xE0 l'origine de \u2014 Tinguely est \xE0 l'origine du Cyclop.", en: "\xEAtre \xE0 l'origine de \u2014 Tinguely est \xE0 l'origine du Cyclop.", uk: "\xEAtre \xE0 l'origine de" },
            { fr: "s'expliquer par \xB7 r\xE9sulter de \u2014 Ce succ\xE8s s'explique par le bouche-\xE0-oreille.", en: "s'expliquer par \xB7 r\xE9sulter de \u2014 Ce succ\xE8s s'explique par le bouche-\xE0-oreille.", uk: "s'expliquer par \xB7 r\xE9sulter de" }
          ]
        }
      ],
      pitfalls: [
        {
          bad: "\xE0 cause de il pleuvait",
          good: "\xE0 cause de la pluie / parce qu'il pleuvait",
          why: { fr: "\xAB \xE0 cause de \xBB est suivi d'un NOM ; pour une phrase, il faut \xAB parce que \xBB.", en: "\u201C\xE0 cause de\u201D takes a NOUN; for a clause you need \u201Cparce que\u201D.", uk: "\xAB\xE0 cause de\xBB \u0432\u0438\u043C\u0430\u0433\u0430\u0454 \u0406\u041C\u0415\u041D\u041D\u0418\u041A\u0410; \u0434\u043B\u044F \u0440\u0435\u0447\u0435\u043D\u043D\u044F \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0435 \xABparce que\xBB." }
        },
        {
          bad: "gr\xE2ce \xE0 l'accident",
          good: "\xE0 cause de l'accident",
          why: { fr: "\xAB gr\xE2ce \xE0 \xBB ne s'emploie que pour un r\xE9sultat positif.", en: "\u201Cgr\xE2ce \xE0\u201D is only for a positive outcome.", uk: "\xABgr\xE2ce \xE0\xBB \u0432\u0436\u0438\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u0434\u043B\u044F \u043F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0443." }
        },
        {
          bad: "\xE0 cause de le trafic",
          good: "\xE0 cause du trafic",
          why: { fr: "Contractions obligatoires : de + le = du, de + les = des ; \xE0 + le = au, \xE0 + les = aux.", en: "Contractions are compulsory: de + le = du, de + les = des; \xE0 + le = au, \xE0 + les = aux.", uk: "\u041E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0456 \u0437\u043B\u0438\u0442\u0442\u044F \u0430\u0440\u0442\u0438\u043A\u043B\u0456\u0432." }
        },
        {
          bad: "Car il pleuvait, il est rest\xE9.",
          good: "Comme il pleuvait, il est rest\xE9.",
          why: { fr: "\xAB car \xBB relie deux propositions et ne peut pas ouvrir la phrase ; \xAB comme \xBB l'ouvre toujours.", en: "\u201Ccar\u201D links two clauses and can't open the sentence; \u201Ccomme\u201D always opens it.", uk: "\xABcar\xBB \u0437'\u0454\u0434\u043D\u0443\u0454 \u0434\u0432\u0456 \u0447\u0430\u0441\u0442\u0438\u043D\u0438 \u0439 \u043D\u0435 \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0454 \u0440\u0435\u0447\u0435\u043D\u043D\u044F; \xABcomme\xBB \u2014 \u0437\u0430\u0432\u0436\u0434\u0438 \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0454." }
        }
      ],
      examples: [
        { fr: "{Comme:end} le quartier est tr\xE8s bien desservi, les loyers y sont \xE9lev\xE9s.", en: "Since the area is very well served by transport, rents there are high.", uk: "\u041E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0440\u0430\u0439\u043E\u043D \u0434\u043E\u0431\u0440\u0435 \u0441\u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0439, \u043E\u0440\u0435\u043D\u0434\u0430 \u0442\u0430\u043C \u0432\u0438\u0441\u043E\u043A\u0430." },
        { fr: "Le chantier a pris du retard {\xE0 cause des:end} intemp\xE9ries, {c'est pourquoi:end} le devis a augment\xE9.", en: "The building site fell behind because of bad weather, which is why the quote went up.", uk: "\u0411\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E \u0437\u0430\u0442\u0440\u0438\u043C\u0430\u043B\u043E\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u043D\u0435\u0433\u043E\u0434\u0443, \u0442\u043E\u043C\u0443 \u043A\u043E\u0448\u0442\u043E\u0440\u0438\u0441 \u0437\u0440\u0456\u0441." },
        { fr: "L'\u0153uvre \xE9tait {tellement:end} saisissante {que:end} je suis rest\xE9 une heure devant.", en: "The work was so striking that I stayed in front of it for an hour.", uk: "\u0422\u0432\u0456\u0440 \u0431\u0443\u0432 \u043D\u0430\u0441\u0442\u0456\u043B\u044C\u043A\u0438 \u0432\u0440\u0430\u0436\u0430\u044E\u0447\u0438\u043C, \u0449\u043E \u044F \u043F\u0440\u043E\u0441\u0442\u043E\u044F\u0432 \u043F\u0435\u0440\u0435\u0434 \u043D\u0438\u043C \u0433\u043E\u0434\u0438\u043D\u0443." }
      ],
      related: [
        { id: "gerondif", why: { fr: "Le g\xE9rondif exprime aussi la cause : il s'est bless\xE9 en tombant.", en: "The g\xE9rondif also expresses cause: il s'est bless\xE9 en tombant.", uk: "G\xE9rondif \u0442\u0430\u043A\u043E\u0436 \u0432\u0438\u0440\u0430\u0436\u0430\u0454 \u043F\u0440\u0438\u0447\u0438\u043D\u0443." } }
      ]
    }
  ];

  // ../content/src/contrasts.ts
  var CONTRASTS = [
    {
      key: "imparfait|passe-compose",
      headline: {
        fr: "La vid\xE9o (imparfait) contre la photo (pass\xE9 compos\xE9) \u2014 LE contraste \xE0 ma\xEEtriser.",
        en: "The video (imparfait) versus the photo (pass\xE9 compos\xE9) \u2014 THE contrast to master.",
        uk: "\u0412\u0456\u0434\u0435\u043E (imparfait) \u043F\u0440\u043E\u0442\u0438 \u0444\u043E\u0442\u043E (pass\xE9 compos\xE9) \u2014 \u0413\u041E\u041B\u041E\u0412\u041D\u0418\u0419 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442."
      },
      rows: [
        {
          a: {
            fr: "Quand j'{\xE9t:stem}{ais:end} \xE9tudiant, je {mange:stem}{ais:end} souvent des pizzas.",
            en: "When I was a student, I often ate pizza. (habit \u2014 no start, no end)",
            uk: "\u041A\u043E\u043B\u0438 \u044F \u0431\u0443\u0432 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u043C, \u044F \u0447\u0430\u0441\u0442\u043E \u0457\u0432 \u043F\u0456\u0446\u0443. (\u0437\u0432\u0438\u0447\u043A\u0430 \u2014 \u0431\u0435\u0437 \u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u0439 \u043A\u0456\u043D\u0446\u044F)"
          },
          b: {
            fr: "Hier, j'{ai:aux} {mang\xE9:part} une pizza.",
            en: "Yesterday I ate a pizza. (one finished event)",
            uk: "\u0423\u0447\u043E\u0440\u0430 \u044F \u0437'\u0457\u0432 \u043F\u0456\u0446\u0443. (\u043E\u0434\u043D\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u043F\u043E\u0434\u0456\u044F)"
          },
          point: {
            fr: "Habitude r\xE9p\xE9t\xE9e \u2192 imparfait \xB7 \xE9v\xE9nement unique et fini \u2192 pass\xE9 compos\xE9.",
            en: "Repeated habit \u2192 imparfait \xB7 single finished event \u2192 pass\xE9 compos\xE9.",
            uk: "\u041F\u043E\u0432\u0442\u043E\u0440\u044E\u0432\u0430\u043D\u0430 \u0437\u0432\u0438\u0447\u043A\u0430 \u2192 imparfait \xB7 \u043E\u0434\u0438\u043D\u0438\u0447\u043D\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u043F\u043E\u0434\u0456\u044F \u2192 pass\xE9 compos\xE9."
          }
        },
        {
          a: {
            fr: "Il {pleuv:stem}{ait:end} et les rues {\xE9t:stem}{aient:end} vides.",
            en: "It was raining and the streets were empty. (setting the scene)",
            uk: "\u0406\u0448\u043E\u0432 \u0434\u043E\u0449, \u0456 \u0432\u0443\u043B\u0438\u0446\u0456 \u0431\u0443\u043B\u0438 \u043F\u043E\u0440\u043E\u0436\u043D\u0456. (\u043E\u043F\u0438\u0441 \u0441\u0446\u0435\u043D\u0438)"
          },
          b: {
            fr: "Soudain, quelqu'un {a:aux} {frapp\xE9:part} \xE0 la porte.",
            en: "Suddenly, someone knocked at the door. (the event)",
            uk: "\u0420\u0430\u043F\u0442\u043E\u043C \u0445\u0442\u043E\u0441\u044C \u043F\u043E\u0441\u0442\u0443\u043A\u0430\u0432 \u0443 \u0434\u0432\u0435\u0440\u0456. (\u043F\u043E\u0434\u0456\u044F)"
          },
          point: {
            fr: "Le d\xE9cor de l'histoire \u2192 imparfait \xB7 ce qui arrive \u2192 pass\xE9 compos\xE9.",
            en: "The story's background \u2192 imparfait \xB7 what happens \u2192 pass\xE9 compos\xE9.",
            uk: "\u0422\u043B\u043E \u0456\u0441\u0442\u043E\u0440\u0456\u0457 \u2192 imparfait \xB7 \u0442\u0435, \u0449\u043E \u0441\u0442\u0430\u0454\u0442\u044C\u0441\u044F \u2192 pass\xE9 compos\xE9."
          }
        },
        {
          a: {
            fr: "Je {dorm:stem}{ais:end} tranquillement\u2026",
            en: "I was sleeping peacefully\u2026 (action in progress)",
            uk: "\u042F \u0441\u043F\u043E\u043A\u0456\u0439\u043D\u043E \u0441\u043F\u0430\u0432\u2026 (\u0434\u0456\u044F \u0442\u0440\u0438\u0432\u0430\u0454)"
          },
          b: {
            fr: "\u2026quand le t\xE9l\xE9phone {a:aux} {sonn\xE9:part}.",
            en: "\u2026when the phone rang. (interruption)",
            uk: "\u2026\u043A\u043E\u043B\u0438 \u0437\u0430\u0434\u0437\u0432\u043E\u043D\u0438\u0432 \u0442\u0435\u043B\u0435\u0444\u043E\u043D. (\u043F\u0435\u0440\u0435\u0440\u0438\u0432\u0430\u043D\u043D\u044F)"
          },
          point: {
            fr: "La phrase type du DELF : imparfait (en cours) + \xAB quand \xBB + pass\xE9 compos\xE9 (interruption).",
            en: "The classic DELF sentence: imparfait (in progress) + \u201Cquand\u201D + pass\xE9 compos\xE9 (interruption).",
            uk: "\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0435 \u0440\u0435\u0447\u0435\u043D\u043D\u044F DELF: imparfait (\u0442\u0440\u0438\u0432\u0430\u0454) + \xABquand\xBB + pass\xE9 compos\xE9 (\u043F\u0435\u0440\u0435\u0440\u0438\u0432\u0430\u043D\u043D\u044F)."
          }
        }
      ]
    },
    {
      key: "futur-proche|futur-simple",
      headline: {
        fr: "D\xE9cid\xE9 et proche (futur proche) contre lointain et r\xEAv\xE9 (futur simple).",
        en: "Decided and near (futur proche) versus distant and dreamed (futur simple).",
        uk: "\u0412\u0438\u0440\u0456\u0448\u0435\u043D\u0435 \u0439 \u0431\u043B\u0438\u0437\u044C\u043A\u0435 (futur proche) \u043F\u0440\u043E\u0442\u0438 \u0434\u0430\u043B\u0435\u043A\u043E\u0433\u043E \u0439 \u043E\u043C\u0440\u0456\u044F\u043D\u043E\u0433\u043E (futur simple)."
      },
      rows: [
        {
          a: {
            fr: "Je {vais:aux} {d\xE9m\xE9nager:inf} le mois prochain.",
            en: "I'm moving next month. (decided, organized)",
            uk: "\u042F \u043F\u0435\u0440\u0435\u0457\u0436\u0434\u0436\u0430\u044E \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u043C\u0456\u0441\u044F\u0446\u044F. (\u0432\u0438\u0440\u0456\u0448\u0435\u043D\u043E, \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u043E\u0432\u0430\u043D\u043E)"
          },
          b: {
            fr: "Un jour, je {d\xE9m\xE9nager:inf}{ai:end} \xE0 la campagne.",
            en: "One day I will move to the countryside. (a dream)",
            uk: "\u041A\u043E\u043B\u0438\u0441\u044C \u044F \u043F\u0435\u0440\u0435\u0457\u0434\u0443 \u0432 \u0441\u0435\u043B\u043E. (\u043C\u0440\u0456\u044F)"
          },
          point: {
            fr: "Plan concret \u2192 futur proche \xB7 projet vague / lointain \u2192 futur simple.",
            en: "Concrete plan \u2192 futur proche \xB7 vague / distant project \u2192 futur simple.",
            uk: "\u041A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0438\u0439 \u043F\u043B\u0430\u043D \u2192 futur proche \xB7 \u0442\u0443\u043C\u0430\u043D\u043D\u0438\u0439 / \u0434\u0430\u043B\u0435\u043A\u0438\u0439 \u043F\u0440\u043E\u0454\u043A\u0442 \u2192 futur simple."
          }
        },
        {
          a: {
            fr: "Regarde le ciel : il {va:aux} {pleuvoir:inf} !",
            en: "Look at the sky: it's going to rain! (evidence now)",
            uk: "\u041F\u043E\u0434\u0438\u0432\u0438\u0441\u044C \u043D\u0430 \u043D\u0435\u0431\u043E: \u0437\u0430\u0440\u0430\u0437 \u043F\u0456\u0434\u0435 \u0434\u043E\u0449! (\u0434\u043E\u043A\u0430\u0437\u0438 \u0437\u0430\u0440\u0430\u0437)"
          },
          b: {
            fr: "Selon la m\xE9t\xE9o, il {pleuvr:inf}{a:end} demain.",
            en: "According to the forecast, it will rain tomorrow. (formal prediction)",
            uk: "\u0417\u0430 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u043E\u043C, \u0437\u0430\u0432\u0442\u0440\u0430 \u0439\u0442\u0438\u043C\u0435 \u0434\u043E\u0449. (\u043E\u0444\u0456\u0446\u0456\u0439\u043D\u0438\u0439 \u043F\u0440\u043E\u0433\u043D\u043E\u0437)"
          },
          point: {
            fr: "Signes visibles maintenant \u2192 futur proche \xB7 pr\xE9vision officielle \u2192 futur simple.",
            en: "Visible signs now \u2192 futur proche \xB7 official forecast \u2192 futur simple.",
            uk: "\u0412\u0438\u0434\u0438\u043C\u0456 \u043E\u0437\u043D\u0430\u043A\u0438 \u0437\u0430\u0440\u0430\u0437 \u2192 futur proche \xB7 \u043E\u0444\u0456\u0446\u0456\u0439\u043D\u0438\u0439 \u043F\u0440\u043E\u0433\u043D\u043E\u0437 \u2192 futur simple."
          }
        }
      ]
    },
    {
      key: "passe-compose|passe-recent",
      headline: {
        fr: "Il y a 5 minutes (pass\xE9 r\xE9cent) contre hier (pass\xE9 compos\xE9).",
        en: "5 minutes ago (pass\xE9 r\xE9cent) versus yesterday (pass\xE9 compos\xE9).",
        uk: "5 \u0445\u0432\u0438\u043B\u0438\u043D \u0442\u043E\u043C\u0443 (pass\xE9 r\xE9cent) \u043F\u0440\u043E\u0442\u0438 \u0432\u0447\u043E\u0440\u0430 (pass\xE9 compos\xE9)."
      },
      rows: [
        {
          a: {
            fr: "J'{ai:aux} {d\xE9jeun\xE9:part} \xE0 midi avec un coll\xE8gue.",
            en: "I had lunch at noon with a colleague. (completed, situated in time)",
            uk: "\u042F \u043F\u043E\u043E\u0431\u0456\u0434\u0430\u0432 \u043E\u043F\u0456\u0432\u0434\u043D\u0456 \u0437 \u043A\u043E\u043B\u0435\u0433\u043E\u044E. (\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E, \u0437 \u0447\u0430\u0441\u043E\u0432\u043E\u044E \u043F\u0440\u0438\u0432'\u044F\u0437\u043A\u043E\u044E)"
          },
          b: {
            fr: "Non merci, je {viens:aux} {de:aux} {d\xE9jeuner:inf}.",
            en: "No thanks, I just had lunch. (moments ago)",
            uk: "\u041D\u0456, \u0434\u044F\u043A\u0443\u044E, \u044F \u0449\u043E\u0439\u043D\u043E \u043F\u043E\u043E\u0431\u0456\u0434\u0430\u0432. (\u043C\u0438\u0442\u044C \u0442\u043E\u043C\u0443)"
          },
          point: {
            fr: "Action tr\xE8s fra\xEEche (\xE0 l'instant) \u2192 pass\xE9 r\xE9cent \xB7 action pass\xE9e situ\xE9e \u2192 pass\xE9 compos\xE9.",
            en: "Very fresh action (just now) \u2192 pass\xE9 r\xE9cent \xB7 situated past action \u2192 pass\xE9 compos\xE9.",
            uk: "\u0429\u043E\u0439\u043D\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u0434\u0456\u044F \u2192 pass\xE9 r\xE9cent \xB7 \u0434\u0456\u044F \u0432 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443 \u0437 \u043F\u0440\u0438\u0432'\u044F\u0437\u043A\u043E\u044E \u2192 pass\xE9 compos\xE9."
          }
        }
      ]
    },
    {
      key: "conditionnel-present|futur-simple",
      headline: {
        fr: "Une lettre change tout : je voudrai (futur) contre je voudrais (poli).",
        en: "One letter changes everything: je voudrai (future) versus je voudrais (polite).",
        uk: "\u041E\u0434\u043D\u0430 \u043B\u0456\u0442\u0435\u0440\u0430 \u0437\u043C\u0456\u043D\u044E\u0454 \u0432\u0441\u0435: je voudrai (\u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454) \u043F\u0440\u043E\u0442\u0438 je voudrais (\u0432\u0432\u0456\u0447\u043B\u0438\u0432\u043E)."
      },
      rows: [
        {
          a: {
            fr: "Je {voudr:inf}{ais:end} un caf\xE9, s'il vous pla\xEEt.",
            en: "I would like a coffee, please. (polite request, now)",
            uk: "\u042F \u0445\u043E\u0442\u0456\u0432 \u0431\u0438 \u043A\u0430\u0432\u0443, \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430. (\u0432\u0432\u0456\u0447\u043B\u0438\u0432\u0435 \u043F\u0440\u043E\u0445\u0430\u043D\u043D\u044F, \u0437\u0430\u0440\u0430\u0437)"
          },
          b: {
            fr: "Plus tard, je {voudr:inf}{ai:end} peut-\xEAtre un dessert.",
            en: "Later, I will perhaps want a dessert. (future fact)",
            uk: "\u041F\u0456\u0437\u043D\u0456\u0448\u0435 \u044F, \u043C\u043E\u0436\u043B\u0438\u0432\u043E, \u0437\u0430\u0445\u043E\u0447\u0443 \u0434\u0435\u0441\u0435\u0440\u0442. (\u0444\u0430\u043A\u0442 \u0443 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044C\u043E\u043C\u0443)"
          },
          point: {
            fr: "M\xEAme radical (voudr-) : -ais = politesse \xB7 -ai = futur. Le -s change le sens !",
            en: "Same stem (voudr-): -ais = politeness \xB7 -ai = future. The -s changes the meaning!",
            uk: "\u0422\u0430 \u0441\u0430\u043C\u0430 \u043E\u0441\u043D\u043E\u0432\u0430 (voudr-): -ais = \u0432\u0432\u0456\u0447\u043B\u0438\u0432\u0456\u0441\u0442\u044C \xB7 -ai = \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454. \u041B\u0456\u0442\u0435\u0440\u0430 -s \u0437\u043C\u0456\u043D\u044E\u0454 \u0437\u043C\u0456\u0441\u0442!"
          }
        }
      ]
    },
    {
      key: "futur-proche|passe-recent",
      headline: {
        fr: "Le miroir parfait autour de MAINTENANT : venir de \u2190 \xB7 \u2192 aller.",
        en: "The perfect mirror around NOW: venir de \u2190 \xB7 \u2192 aller.",
        uk: "\u0406\u0434\u0435\u0430\u043B\u044C\u043D\u0435 \u0434\u0437\u0435\u0440\u043A\u0430\u043B\u043E \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u0417\u0410\u0420\u0410\u0417: venir de \u2190 \xB7 \u2192 aller."
      },
      rows: [
        {
          a: {
            fr: "Je {vais:aux} {manger:inf}. (dans un instant)",
            en: "I'm going to eat. (in a moment)",
            uk: "\u042F \u0437\u0431\u0438\u0440\u0430\u044E\u0441\u044F \u0457\u0441\u0442\u0438. (\u0437\u0430 \u043C\u0438\u0442\u044C)"
          },
          b: {
            fr: "Je {viens:aux} {de:aux} {manger:inf}. (il y a un instant)",
            en: "I just ate. (a moment ago)",
            uk: "\u042F \u0449\u043E\u0439\u043D\u043E \u043F\u043E\u0457\u0432. (\u043C\u0438\u0442\u044C \u0442\u043E\u043C\u0443)"
          },
          point: {
            fr: "M\xEAme structure : verbe au pr\xE9sent + infinitif. Seul le verbe change : aller (futur) / venir de (pass\xE9).",
            en: "Same structure: present-tense verb + infinitive. Only the verb changes: aller (future) / venir de (past).",
            uk: "\u041E\u0434\u043D\u0430\u043A\u043E\u0432\u0430 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430: \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u043E \u0432 \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u044C\u043E\u043C\u0443 + \u0456\u043D\u0444\u0456\u043D\u0456\u0442\u0438\u0432. \u0417\u043C\u0456\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u043E: aller (\u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454) / venir de (\u043C\u0438\u043D\u0443\u043B\u0435)."
          }
        }
      ]
    },
    {
      key: "imperatif|present",
      headline: {
        fr: "Enlevez le sujet et le pr\xE9sent devient un ordre.",
        en: "Remove the subject and the present becomes an order.",
        uk: "\u041F\u0440\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u043F\u0456\u0434\u043C\u0435\u0442 \u2014 \u0456 \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0456\u0439 \u0447\u0430\u0441 \u0441\u0442\u0430\u0454 \u043D\u0430\u043A\u0430\u0437\u043E\u043C."
      },
      rows: [
        {
          a: {
            fr: "{Parle:stem} plus fort !",
            en: "Speak louder! (order \u2014 note: no -s)",
            uk: "\u0413\u043E\u0432\u043E\u0440\u0438 \u0433\u043E\u043B\u043E\u0441\u043D\u0456\u0448\u0435! (\u043D\u0430\u043A\u0430\u0437 \u2014 \u0431\u0435\u0437 -s)"
          },
          b: {
            fr: "Tu {parl:stem}{es:end} tr\xE8s doucement.",
            en: "You speak very quietly. (statement)",
            uk: "\u0422\u0438 \u0433\u043E\u0432\u043E\u0440\u0438\u0448 \u0434\u0443\u0436\u0435 \u0442\u0438\u0445\u043E. (\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F)"
          },
          point: {
            fr: "tu parles \u2192 Parle ! : sujet supprim\xE9, et le -s tombe pour les verbes en -er.",
            en: "tu parles \u2192 Parle!: subject removed, and the -s drops for -er verbs.",
            uk: "tu parles \u2192 Parle!: \u043F\u0456\u0434\u043C\u0435\u0442 \u043F\u0440\u0438\u0431\u0440\u0430\u043D\u043E, \u0430 -s \u0437\u043D\u0438\u043A\u0430\u0454 \u0432 \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u0430\u0445 \u043D\u0430 -er."
          }
        }
      ]
    },
    {
      key: "imparfait|present",
      headline: {
        fr: "Le pr\xE9sent fabrique l'imparfait : prenez \xAB nous \xBB, enlevez -ons.",
        en: "The present builds the imparfait: take \u201Cnous\u201D, drop -ons.",
        uk: "\u0422\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0456\u0439 \u0447\u0430\u0441 \u0443\u0442\u0432\u043E\u0440\u044E\u0454 imparfait: \u0431\u0435\u0440\u0435\u043C\u043E \xABnous\xBB, \u0432\u0456\u0434\u043A\u0438\u0434\u0430\u0454\u043C\u043E -ons."
      },
      rows: [
        {
          a: {
            fr: "Avant, je {buv:stem}{ais:end} beaucoup de caf\xE9.",
            en: "Before, I drank a lot of coffee. (imparfait)",
            uk: "\u0420\u0430\u043D\u0456\u0448\u0435 \u044F \u043F\u0438\u0432 \u0431\u0430\u0433\u0430\u0442\u043E \u043A\u0430\u0432\u0438. (imparfait)"
          },
          b: {
            fr: "Nous {buv:stem}{ons:end} un caf\xE9 ensemble.",
            en: "We are drinking a coffee together. (present \u2014 the stem donor!)",
            uk: "\u041C\u0438 \u043F'\u0454\u043C\u043E \u043A\u0430\u0432\u0443 \u0440\u0430\u0437\u043E\u043C. (\u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0456\u0439 \u2014 \u0434\u043E\u043D\u043E\u0440 \u043E\u0441\u043D\u043E\u0432\u0438!)"
          },
          point: {
            fr: "boire : nous buvons \u2192 buv- \u2192 je buvais. \xC7a marche pour tous les verbes sauf \xEAtre.",
            en: "boire: nous buvons \u2192 buv- \u2192 je buvais. Works for every verb except \xEAtre.",
            uk: "boire: nous buvons \u2192 buv- \u2192 je buvais. \u041F\u0440\u0430\u0446\u044E\u0454 \u0434\u043B\u044F \u0432\u0441\u0456\u0445 \u0434\u0456\u0454\u0441\u043B\u0456\u0432, \u043A\u0440\u0456\u043C \xEAtre."
          }
        }
      ]
    }
  ];

  // ../content/src/ui.ts
  var ROLE_LABELS = {
    aux: { fr: "auxiliaire / semi-auxiliaire", en: "auxiliary", uk: "\u0434\u043E\u043F\u043E\u043C\u0456\u0436\u043D\u0435 \u0434\u0456\u0454\u0441\u043B\u043E\u0432\u043E" },
    stem: { fr: "radical", en: "stem", uk: "\u043E\u0441\u043D\u043E\u0432\u0430" },
    end: { fr: "terminaison", en: "ending", uk: "\u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F" },
    part: { fr: "participe pass\xE9", en: "past participle", uk: "\u0434\u0456\u0454\u043F\u0440\u0438\u043A\u043C\u0435\u0442\u043D\u0438\u043A \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u0447\u0430\u0441\u0443" },
    inf: { fr: "infinitif", en: "infinitive", uk: "\u0456\u043D\u0444\u0456\u043D\u0456\u0442\u0438\u0432" },
    pron: { fr: "pronom r\xE9fl\xE9chi", en: "reflexive pronoun", uk: "\u0437\u0432\u043E\u0440\u043E\u0442\u043D\u0438\u0439 \u0437\u0430\u0439\u043C\u0435\u043D\u043D\u0438\u043A" }
  };

  // ../content/src/visuals.ts
  var VISUALS = {
    // ---------------- TEMPS ----------------
    present: [
      {
        kind: "assembly",
        anchor: "formation",
        caption: {
          fr: "Le pr\xE9sent : on part de l'infinitif, on coupe, on recolle.",
          en: "The present: start from the infinitive, cut, re-attach.",
          uk: "\u0422\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0456\u0439 \u0447\u0430\u0441: \u0431\u0435\u0440\u0435\u043C\u043E \u0456\u043D\u0444\u0456\u043D\u0456\u0442\u0438\u0432, \u0432\u0456\u0434\u0440\u0456\u0437\u0430\u0454\u043C\u043E, \u043F\u0440\u0438\u043A\u043B\u0435\u044E\u0454\u043C\u043E."
        },
        parts: [
          { text: "parl", role: "stem", label: "radical" },
          { text: "ons", role: "end", label: "terminaison" }
        ],
        result: "nous parlons"
      },
      {
        kind: "timeline",
        anchor: "usage",
        marks: [
          { type: "point", at: 0, label: "maintenant", tone: "now" },
          { type: "span", at: -0.75, to: 0.75, label: "habitudes, v\xE9rit\xE9s g\xE9n\xE9rales", tone: "accent", below: true }
        ]
      }
    ],
    "passe-compose": [
      {
        kind: "assembly",
        anchor: "formation",
        caption: {
          fr: "Deux morceaux : l'auxiliaire porte la personne, le participe porte le sens.",
          en: "Two pieces: the auxiliary carries the person, the participle carries the meaning.",
          uk: "\u0414\u0432\u0456 \u0447\u0430\u0441\u0442\u0438\u043D\u0438: \u0434\u043E\u043F\u043E\u043C\u0456\u0436\u043D\u0435 \u043D\u0435\u0441\u0435 \u043E\u0441\u043E\u0431\u0443, \u0434\u0456\u0454\u043F\u0440\u0438\u043A\u043C\u0435\u0442\u043D\u0438\u043A \u2014 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F."
        },
        parts: [
          { text: "j'ai", role: "aux", label: "auxiliaire" },
          { text: "mang\xE9", role: "part", label: "participe pass\xE9" }
        ],
        result: "j'ai mang\xE9"
      },
      {
        kind: "timeline",
        anchor: "usage",
        marks: [
          { type: "point", at: -0.5, label: "une action finie", tone: "past" },
          { type: "point", at: 0, label: "maintenant", tone: "now" }
        ]
      }
    ],
    imparfait: [
      {
        kind: "assembly",
        anchor: "formation",
        caption: {
          fr: "Le radical vient toujours de la forme \xAB nous \xBB du pr\xE9sent.",
          en: "The stem always comes from the present \u201Cnous\u201D form.",
          uk: "\u041E\u0441\u043D\u043E\u0432\u0430 \u0437\u0430\u0432\u0436\u0434\u0438 \u0431\u0435\u0440\u0435\u0442\u044C\u0441\u044F \u0437 \u0444\u043E\u0440\u043C\u0438 \xABnous\xBB \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u044C\u043E\u0433\u043E \u0447\u0430\u0441\u0443."
        },
        sources: [{ label: "nous parlons", text: "parl", role: "stem" }],
        parts: [
          { text: "parl", role: "stem", label: "radical de \xAB nous \xBB" },
          { text: "ais", role: "end", label: "terminaison" }
        ],
        result: "je parlais"
      },
      {
        kind: "timeline",
        anchor: "usage",
        caption: {
          fr: "L'imparfait, c'est la vid\xE9o ; le pass\xE9 compos\xE9, c'est la photo.",
          en: "The imparfait is the video; the pass\xE9 compos\xE9 is the snapshot.",
          uk: "Imparfait \u2014 \u0446\u0435 \u0432\u0456\u0434\u0435\u043E; pass\xE9 compos\xE9 \u2014 \u0446\u0435 \u0444\u043E\u0442\u043E."
        },
        marks: [
          { type: "span", at: -0.9, to: -0.2, label: "d\xE9cor, habitude (vid\xE9o)", tone: "past" },
          { type: "point", at: -0.55, label: "l'\xE9v\xE9nement (photo)", tone: "warn", below: true },
          { type: "point", at: 0, label: "maintenant", tone: "now" }
        ]
      }
    ],
    "futur-proche": [
      {
        kind: "assembly",
        anchor: "formation",
        caption: {
          fr: "Comme l'anglais \xAB going to \xBB : ALLER conjugu\xE9 + l'infinitif intact.",
          en: "Like English \u201Cgoing to\u201D: ALLER conjugated + the bare infinitive.",
          uk: "\u042F\u043A \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0435 \xABgoing to\xBB: ALLER + \u0456\u043D\u0444\u0456\u043D\u0456\u0442\u0438\u0432."
        },
        parts: [
          { text: "je vais", role: "aux", label: "aller au pr\xE9sent" },
          { text: "partir", role: "inf", label: "infinitif" }
        ],
        result: "je vais partir"
      },
      {
        kind: "timeline",
        anchor: "usage",
        marks: [
          { type: "point", at: 0, label: "maintenant", tone: "now" },
          { type: "arrow", at: 0.1, to: 0.4, label: "tout de suite, c'est d\xE9cid\xE9", tone: "future" }
        ]
      }
    ],
    imperatif: [
      {
        kind: "assembly",
        anchor: "formation",
        caption: {
          fr: "On prend le pr\xE9sent et on enl\xE8ve le sujet. Pour les verbes en -er, le \xAB s \xBB de \xAB tu \xBB dispara\xEEt.",
          en: "Take the present and drop the subject. For -er verbs, the \u201Cs\u201D of \u201Ctu\u201D disappears.",
          uk: "\u0411\u0435\u0440\u0435\u043C\u043E \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0456\u0439 \u0447\u0430\u0441 \u0456 \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u0454\u043C\u043E \u043F\u0456\u0434\u043C\u0435\u0442."
        },
        sources: [{ label: "tu parles", text: "tu", role: "pron" }],
        parts: [{ text: "parle", role: "stem", label: "sans sujet, sans -s" }],
        result: "Parle !"
      }
    ],
    "futur-simple": [
      {
        kind: "assembly",
        anchor: "formation",
        caption: {
          fr: "L'infinitif entier sert de radical. Les terminaisons sont celles de \xAB avoir \xBB.",
          en: "The whole infinitive is the stem. The endings are those of \u201Cavoir\u201D.",
          uk: "\u0423\u0432\u0435\u0441\u044C \u0456\u043D\u0444\u0456\u043D\u0456\u0442\u0438\u0432 \u0454 \u043E\u0441\u043D\u043E\u0432\u043E\u044E. \u0417\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F \u2014 \u0432\u0456\u0434 \xABavoir\xBB."
        },
        parts: [
          { text: "parler", role: "stem", label: "infinitif = radical" },
          { text: "ai", role: "end", label: "terminaison (avoir)" }
        ],
        result: "je parlerai"
      },
      {
        kind: "timeline",
        anchor: "usage",
        marks: [
          { type: "point", at: 0, label: "maintenant", tone: "now" },
          { type: "point", at: 0.7, label: "un projet, une pr\xE9diction", tone: "future" }
        ]
      }
    ],
    "passe-recent": [
      {
        kind: "assembly",
        anchor: "formation",
        parts: [
          { text: "je viens", role: "aux", label: "venir au pr\xE9sent" },
          { text: "de", role: "pron" },
          { text: "manger", role: "inf", label: "infinitif" }
        ],
        result: "je viens de manger"
      },
      {
        kind: "timeline",
        anchor: "usage",
        marks: [
          { type: "arrow", at: -0.3, to: -0.05, label: "il y a une minute", tone: "past" },
          { type: "point", at: 0, label: "maintenant", tone: "now" }
        ]
      }
    ],
    "conditionnel-present": [
      {
        kind: "assembly",
        anchor: "formation",
        caption: {
          fr: "Le conditionnel est un hybride : il emprunte le radical au futur et les terminaisons \xE0 l'imparfait.",
          en: "The conditional is a hybrid: stem borrowed from the future, endings from the imparfait.",
          uk: "\u0423\u043C\u043E\u0432\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 \u2014 \u0433\u0456\u0431\u0440\u0438\u0434: \u043E\u0441\u043D\u043E\u0432\u0430 \u0432\u0456\u0434 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044C\u043E\u0433\u043E, \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F \u0432\u0456\u0434 imparfait."
        },
        sources: [
          { label: "du FUTUR", text: "parler-", role: "stem" },
          { label: "de l'IMPARFAIT", text: "-ais", role: "end" }
        ],
        parts: [
          { text: "parler", role: "stem", label: "radical du futur" },
          { text: "ais", role: "end", label: "terminaison d'imparfait" }
        ],
        result: "je parlerais"
      },
      {
        kind: "slots",
        anchor: "formation",
        caption: {
          fr: "Le -r- est le seul signe qui s\xE9pare l'imparfait du conditionnel. Ne le perdez pas.",
          en: "The -r- is the only sign separating imparfait from conditional. Don't lose it.",
          uk: "-r- \u2014 \u0454\u0434\u0438\u043D\u0430 \u043E\u0437\u043D\u0430\u043A\u0430, \u0449\u043E \u0432\u0456\u0434\u0440\u0456\u0437\u043D\u044F\u0454 imparfait \u0432\u0456\u0434 \u0443\u043C\u043E\u0432\u043D\u043E\u0433\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u0443."
        },
        rows: [
          {
            label: "imparfait",
            cells: [
              { text: "je voul", role: "stem" },
              { text: "ais", role: "end" }
            ],
            note: "je voulais = ce que je voulais avant"
          },
          {
            label: "conditionnel",
            cells: [
              { text: "je voud", role: "stem" },
              { text: "r", role: "inf" },
              { text: "ais", role: "end" }
            ],
            note: "je voudrais = poliment, maintenant"
          }
        ]
      }
    ],
    "conditionnel-passe": [
      {
        kind: "assembly",
        anchor: "formation",
        caption: {
          fr: "L'auxiliaire passe au conditionnel, le participe ne bouge pas.",
          en: "The auxiliary goes into the conditional, the participle doesn't move.",
          uk: "\u0414\u043E\u043F\u043E\u043C\u0456\u0436\u043D\u0435 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442\u044C \u0432 \u0443\u043C\u043E\u0432\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431, \u0434\u0456\u0454\u043F\u0440\u0438\u043A\u043C\u0435\u0442\u043D\u0438\u043A \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0454\u0442\u044C\u0441\u044F."
        },
        sources: [{ label: "j'ai d\xFB \u2192 ", text: "aurais", role: "aux" }],
        parts: [
          { text: "j'aurais", role: "aux", label: "avoir au conditionnel" },
          { text: "d\xFB", role: "part", label: "participe pass\xE9" }
        ],
        result: "j'aurais d\xFB"
      },
      {
        kind: "timeline",
        anchor: "usage",
        caption: {
          fr: "Ce qui aurait pu arriver \u2014 et qui n'est pas arriv\xE9.",
          en: "What could have happened \u2014 and didn't.",
          uk: "\u0422\u0435, \u0449\u043E \u043C\u043E\u0433\u043B\u043E \u0441\u0442\u0430\u0442\u0438\u0441\u044F \u2014 \u0456 \u043D\u0435 \u0441\u0442\u0430\u043B\u043E\u0441\u044F."
        },
        marks: [
          { type: "point", at: -0.55, label: "le moment o\xF9 c'\xE9tait possible", tone: "past" },
          { type: "span", at: -0.55, to: 0, label: "le regret dure jusqu'\xE0 maintenant", tone: "warn", below: true },
          { type: "point", at: 0, label: "maintenant", tone: "now" }
        ]
      }
    ],
    "plus-que-parfait": [
      {
        kind: "assembly",
        anchor: "formation",
        caption: {
          fr: "Pass\xE9 compos\xE9 avec l'auxiliaire \xE0 l'imparfait. Rien d'autre ne change.",
          en: "Pass\xE9 compos\xE9 with the auxiliary in the imparfait. Nothing else changes.",
          uk: "Pass\xE9 compos\xE9 \u0437 \u0434\u043E\u043F\u043E\u043C\u0456\u0436\u043D\u0438\u043C \u0432 imparfait. \u0411\u0456\u043B\u044C\u0448\u0435 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0454\u0442\u044C\u0441\u044F."
        },
        sources: [{ label: "j'ai fini \u2192 ", text: "avais", role: "aux" }],
        parts: [
          { text: "j'avais", role: "aux", label: "avoir \xE0 l'imparfait" },
          { text: "fini", role: "part", label: "participe pass\xE9" }
        ],
        result: "j'avais fini"
      },
      {
        kind: "timeline",
        anchor: "usage",
        caption: {
          fr: "Le pass\xE9 du pass\xE9 : la premi\xE8re action des deux.",
          en: "The past of the past: the first of the two actions.",
          uk: "\u041C\u0438\u043D\u0443\u043B\u0435 \u0432 \u043C\u0438\u043D\u0443\u043B\u043E\u043C\u0443: \u043F\u0435\u0440\u0448\u0430 \u0437 \u0434\u0432\u043E\u0445 \u0434\u0456\u0439."
        },
        marks: [
          { type: "point", at: -0.8, label: "il \xE9tait d\xE9j\xE0 parti", tone: "accent" },
          { type: "point", at: -0.35, label: "je suis arriv\xE9", tone: "past", below: true },
          { type: "point", at: 0, label: "maintenant", tone: "now" }
        ]
      }
    ],
    gerondif: [
      {
        kind: "assembly",
        anchor: "formation",
        caption: {
          fr: "Radical de \xAB nous \xBB, terminaison -ant, et \xAB en \xBB devant. Trois exceptions : \xE9tant, ayant, sachant.",
          en: "The \u201Cnous\u201D stem, the -ant ending, and \u201Cen\u201D in front. Three exceptions: \xE9tant, ayant, sachant.",
          uk: "\u041E\u0441\u043D\u043E\u0432\u0430 \xABnous\xBB, \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F -ant \u0456 \xABen\xBB \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u0443."
        },
        sources: [{ label: "nous mangeons", text: "mange", role: "stem" }],
        parts: [
          { text: "en", role: "pron" },
          { text: "mange", role: "stem", label: "radical de \xAB nous \xBB" },
          { text: "ant", role: "end", label: "terminaison" }
        ],
        result: "en mangeant"
      },
      {
        kind: "slots",
        anchor: "formation",
        caption: {
          fr: "La r\xE8gle absolue : un seul sujet pour les deux verbes.",
          en: "The absolute rule: one subject for both verbs.",
          uk: "\u0410\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E: \u043E\u0434\u0438\u043D \u0441\u0443\u0431'\u0454\u043A\u0442 \u0434\u043B\u044F \u043E\u0431\u043E\u0445 \u0434\u0456\u0454\u0441\u043B\u0456\u0432."
        },
        rows: [
          {
            label: "\u2713",
            cells: [
              { text: "En arrivant,", role: "stem" },
              { text: "j'", role: "pron" },
              { text: "ai vu ma m\xE8re." }
            ],
            note: "c'est JE qui arrive et JE qui vois"
          },
          {
            label: "\u2717",
            bad: true,
            cells: [
              { text: "En arrivant,", role: "stem" },
              { text: "ma m\xE8re", role: "pron" },
              { text: "m'a ouvert." }
            ],
            note: "ce n'est pas la m\xE8re qui arrive"
          }
        ]
      }
    ],
    // ---------------- STRUCTURES ----------------
    // Les schémas s'insèrent APRÈS le bloc de règle qu'ils illustrent (afterBlock).
    // Rien qui redise simplement un tableau : chaque schéma montre ce que le tableau ne peut pas montrer.
    "si-clauses": [
      {
        kind: "pairs",
        afterBlock: 0,
        caption: {
          fr: "Le tableau donne les exemples ; ce sch\xE9ma donne le squelette : trois couples soud\xE9s, rien \xE0 choisir une fois le premier temps identifi\xE9.",
          en: "The table gives the examples; this gives the skeleton: three welded couples, nothing left to choose once the first tense is identified.",
          uk: "\u0422\u0430\u0431\u043B\u0438\u0446\u044F \u0434\u0430\u0454 \u043F\u0440\u0438\u043A\u043B\u0430\u0434\u0438; \u0446\u044F \u0441\u0445\u0435\u043C\u0430 \u2014 \u043A\u0430\u0440\u043A\u0430\u0441: \u0442\u0440\u0438 \u0437\u0432\u0430\u0440\u0435\u043D\u0456 \u043F\u0430\u0440\u0438."
        },
        leftLabel: "Si + \u2026",
        rightLabel: "\u2192 r\xE9sultat",
        rows: [
          { tag: "I", left: "pr\xE9sent", right: "futur simple", tone: "good", note: "c'est possible" },
          { tag: "II", left: "imparfait", right: "conditionnel pr\xE9sent", tone: "accent", note: "c'est imaginaire" },
          { tag: "III", left: "plus-que-parfait", right: "conditionnel pass\xE9", tone: "warn", note: "c'est trop tard" }
        ]
      },
      {
        kind: "slots",
        afterBlock: 2,
        caption: {
          fr: "La r\xE8gle d'or en image : le conditionnel est expuls\xE9 de la moiti\xE9 gauche.",
          en: "The golden rule as a picture: the conditional is expelled from the left half.",
          uk: "\u0417\u043E\u043B\u043E\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u0432 \u043E\u0431\u0440\u0430\u0437\u0456: \u0443\u043C\u043E\u0432\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 \u0432\u0438\u0433\u0430\u043D\u044F\u0454\u0442\u044C\u0441\u044F \u0437 \u043B\u0456\u0432\u043E\u0457 \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0438."
        },
        rows: [
          {
            label: "\u2717",
            bad: true,
            cells: [
              { text: "Si je serais riche,", role: "end" },
              { text: "j'ach\xE8terais une maison." }
            ]
          },
          {
            label: "\u2713",
            cells: [
              { text: "Si j'\xE9tais riche,", role: "stem" },
              { text: "j'ach\xE8terais", role: "end" },
              { text: "une maison." }
            ],
            note: "l'imparfait \xE0 gauche, le conditionnel \xE0 droite"
          }
        ]
      }
    ],
    "discours-rapporte": [
      {
        kind: "slots",
        afterBlock: 0,
        caption: {
          fr: "Le tableau donne les mots de liaison ; il ne montre pas l'erreur n\xB01, qui est de garder la personne d'origine. Demande-toi toujours QUI parle \xE0 QUI.",
          en: "The table gives the linkers; it can't show mistake number one \u2014 keeping the original person. Always ask WHO is speaking to WHOM.",
          uk: "\u0422\u0430\u0431\u043B\u0438\u0446\u044F \u0434\u0430\u0454 \u0441\u043F\u043E\u043B\u0443\u0447\u043D\u0438\u043A\u0438; \u0432\u043E\u043D\u0430 \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u0443\u0454 \u043F\u043E\u043C\u0438\u043B\u043A\u0443 \u21161 \u2014 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0432\u0438\u0445\u0456\u0434\u043D\u043E\u0457 \u043E\u0441\u043E\u0431\u0438."
        },
        rows: [
          {
            label: "\u2717",
            bad: true,
            cells: [
              { text: "Laurence demande si" },
              { text: "tu as", role: "end" },
              { text: "vu le film." }
            ]
          },
          {
            label: "\u2713",
            cells: [
              { text: "Laurence demande si" },
              { text: "j'ai", role: "stem" },
              { text: "vu le film." }
            ],
            note: "c'est moi qu'on interroge : tu \u2192 je"
          }
        ]
      }
    ],
    "concordance-temps": [
      {
        kind: "slots",
        afterBlock: 2,
        caption: {
          fr: "Les tableaux listent les changements un par un ; ici on les voit tomber ensemble. Marqueur en orange, personne en bleu, temps en violet \u2014 les trois bougent dans la m\xEAme phrase.",
          en: "The tables list the changes one by one; here you see them fall together. Marker in orange, person in blue, tense in purple \u2014 all three move in the same sentence.",
          uk: "\u0422\u0430\u0431\u043B\u0438\u0446\u0456 \u043F\u0435\u0440\u0435\u043B\u0456\u0447\u0443\u044E\u0442\u044C \u0437\u043C\u0456\u043D\u0438 \u043F\u043E \u043E\u0434\u043D\u0456\u0439; \u0442\u0443\u0442 \u0432\u0438\u0434\u043D\u043E, \u0449\u043E \u0432\u043E\u043D\u0438 \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u044E\u0442\u044C\u0441\u044F \u0440\u0430\u0437\u043E\u043C."
        },
        rows: [
          {
            label: "direct",
            cells: [
              { text: "Hier", role: "end" },
              { text: "j'", role: "aux" },
              { text: "ai visit\xE9", role: "part" },
              { text: "un appartement." }
            ],
            note: "marqueur \xB7 personne \xB7 temps"
          },
          {
            label: "rapport\xE9",
            cells: [
              { text: "la veille", role: "end" },
              { text: "il", role: "aux" },
              { text: "avait visit\xE9", role: "part" },
              { text: "un appartement." }
            ],
            note: "les trois changent en m\xEAme temps"
          }
        ]
      }
    ],
    restriction: [
      {
        kind: "slots",
        afterBlock: 1,
        caption: {
          fr: "La r\xE8gle dit o\xF9 va \xAB que \xBB ; le sch\xE9ma le montre sauter par-dessus le participe.",
          en: "The rule says where \u201Cque\u201D goes; the diagram shows it hopping over the participle.",
          uk: "\u041F\u0440\u0430\u0432\u0438\u043B\u043E \u043A\u0430\u0436\u0435, \u0434\u0435 \u0441\u0442\u043E\u0457\u0442\u044C \xABque\xBB; \u0441\u0445\u0435\u043C\u0430 \u043F\u043E\u043A\u0430\u0437\u0443\u0454, \u044F\u043A \u0432\u043E\u043D\u043E \u043F\u0435\u0440\u0435\u0441\u0442\u0440\u0438\u0431\u0443\u0454 \u0434\u0456\u0454\u043F\u0440\u0438\u043A\u043C\u0435\u0442\u043D\u0438\u043A."
        },
        rows: [
          {
            label: "simple",
            cells: [
              { text: "Il", role: "pron" },
              { text: "ne", role: "end" },
              { text: "mange" },
              { text: "qu'", role: "end" },
              { text: "une pomme.", role: "stem" }
            ]
          },
          {
            label: "compos\xE9",
            cells: [
              { text: "Il", role: "pron" },
              { text: "n'", role: "end" },
              { text: "a", role: "aux" },
              { text: "mang\xE9", role: "part" },
              { text: "qu'", role: "end" },
              { text: "une pomme.", role: "stem" }
            ],
            note: "\xAB que \xBB passe APR\xC8S le participe"
          }
        ]
      },
      {
        kind: "slots",
        afterBlock: 2,
        caption: {
          fr: "Les deux phrases c\xF4te \xE0 c\xF4te : c'est l'article qui trahit la diff\xE9rence.",
          en: "The two sentences side by side: the article is what gives the difference away.",
          uk: "\u0414\u0432\u0430 \u0440\u0435\u0447\u0435\u043D\u043D\u044F \u043F\u043E\u0440\u0443\u0447: \u0441\u0430\u043C\u0435 \u0430\u0440\u0442\u0438\u043A\u043B\u044C \u0432\u0438\u0434\u0430\u0454 \u0440\u0456\u0437\u043D\u0438\u0446\u044E."
        },
        rows: [
          {
            label: "n\xE9gation",
            cells: [
              { text: "Je ne bois" },
              { text: "pas", role: "end" },
              { text: "de", role: "inf" },
              { text: "caf\xE9." }
            ],
            note: "la vraie n\xE9gation \xE9crase l'article"
          },
          {
            label: "restriction",
            cells: [
              { text: "Je ne bois" },
              { text: "que", role: "end" },
              { text: "du", role: "stem" },
              { text: "caf\xE9." }
            ],
            note: "le partitif reste entier"
          }
        ]
      }
    ],
    "cause-consequence": [
      {
        kind: "axis",
        afterBlock: 0,
        caption: {
          fr: "La colonne \xAB nuance \xBB dit n\xE9gatif ou positif ; l'axe montre qu'il s'agit d'une gradation, avec un connecteur neutre au milieu.",
          en: "The \u201Cnuance\u201D column says negative or positive; the axis shows it's a gradient, with a neutral connector in the middle.",
          uk: "\u041A\u043E\u043B\u043E\u043D\u043A\u0430 \xAB\u043D\u044E\u0430\u043D\u0441\xBB \u043A\u0430\u0436\u0435 \u043D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u0447\u0438 \u043F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u0438\u0439; \u0432\u0456\u0441\u044C \u043F\u043E\u043A\u0430\u0437\u0443\u0454 \u0433\u0440\u0430\u0434\u0430\u0446\u0456\u044E."
        },
        leftLabel: "r\xE9sultat n\xE9gatif",
        rightLabel: "r\xE9sultat positif",
        marks: [
          { at: 0.05, label: "\xE0 cause de", tone: "warn" },
          { at: 0.5, label: "en raison de", tone: "accent" },
          { at: 0.95, label: "gr\xE2ce \xE0", tone: "good" }
        ]
      },
      {
        kind: "axis",
        afterBlock: 1,
        caption: {
          fr: "M\xEAme sens pour tous : seul le registre les s\xE9pare. Le tableau les \xE9tiquette un par un, l'axe les met en ordre \u2014 utile quand il faut choisir entre deux voisins.",
          en: "Same meaning for all: only register separates them. The table labels them one by one, the axis ranks them \u2014 useful when choosing between two neighbours.",
          uk: "\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u043E\u0434\u043D\u0430\u043A\u043E\u0432\u0435: \u0440\u043E\u0437\u0440\u0456\u0437\u043D\u044F\u0454 \u043B\u0438\u0448\u0435 \u0440\u0435\u0433\u0456\u0441\u0442\u0440. \u0412\u0456\u0441\u044C \u0432\u0438\u0448\u0438\u043A\u043E\u0432\u0443\u0454 \u0457\u0445 \u0443 \u043F\u043E\u0440\u044F\u0434\u043A\u0443."
        },
        leftLabel: "oral, familier",
        rightLabel: "\xE9crit, formel",
        marks: [
          { at: 0.04, label: "du coup", tone: "warn" },
          { at: 0.26, label: "alors", tone: "warn" },
          { at: 0.5, label: "donc", tone: "accent" },
          { at: 0.74, label: "c'est pourquoi", tone: "good" },
          { at: 0.97, label: "par cons\xE9quent", tone: "good" }
        ]
      }
    ]
  };

  // ../content/src/index.ts
  var ID_ALIASES = {
    "conditionnel-politesse": "conditionnel-present"
  };

  // src/main.ts
  var state = {
    view: "overview",
    compareA: "passe-compose",
    compareB: "imparfait"
  };
  var ROLES = ["aux", "stem", "end", "part", "inf", "pron"];
  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function marked(src) {
    let out = "";
    let last = 0;
    const re = /\{([^:{}]+):(aux|stem|end|part|inf|pron)\}/g;
    let m;
    while ((m = re.exec(src)) !== null) {
      out += esc(src.slice(last, m.index));
      out += `<span class="role role-${m[2]}">${esc(m[1])}</span>`;
      last = m.index + m[0].length;
    }
    out += esc(src.slice(last));
    return out;
  }
  function tri(t, frHtml = false) {
    const fr = frHtml ? marked(t.fr) : esc(t.fr);
    return `<span class="fr">${fr}</span><span class="tr tr-en">${esc(t.en)}</span><span class="tr tr-uk">${esc(t.uk)}</span>`;
  }
  function resolve(id) {
    return ID_ALIASES[id] ?? id;
  }
  function tenseById(id) {
    const t = TENSES.find((x) => x.id === resolve(id));
    if (!t) throw new Error(`Unknown tense: ${id}`);
    return t;
  }
  function structureById(id) {
    return STRUCTURES.find((x) => x.id === resolve(id));
  }
  function nameById(id) {
    const s = structureById(id);
    if (s) return s.name;
    const t = TENSES.find((x) => x.id === resolve(id));
    return t ? t.name : id;
  }
  function viewOf(id) {
    const s = structureById(id);
    if (s) return s.section === "connecteurs" ? "connecteurs" : "structures";
    return "cards";
  }
  function legendHtml() {
    const items = ROLES.map(
      (r) => `<span class="legend-item"><span class="legend-dot role-${r}"></span>${tri(
        ROLE_LABELS[r]
      )}</span>`
    ).join("");
    return `<div class="legend" aria-label="Code couleur">${items}</div>`;
  }
  function badgeHtml(t) {
    return t.badge === "essentiel" ? `<span class="badge badge-core">\u2605 essentiel</span>` : `<span class="badge badge-soft">\u25D0 \xE0 reconna\xEEtre</span>`;
  }
  function exampleHtml(ex, tenseId, i, open = false) {
    const note = ex.note ? `<div class="ex-note">\u{1F4A1} ${tri(ex.note)}</div>` : "";
    return `
  <li class="example ${open ? "revealed" : ""}" data-ex="${tenseId}-${i}">
    <button class="reveal-btn" type="button" aria-expanded="${open}">
      <span class="when-hidden">\u{1F441} Montrer</span><span class="when-shown">Cacher</span>
    </button>
    <div class="ex-body">
      <div class="ex-fr">${marked(ex.fr)}</div>
      <div class="ex-tr tr tr-en">${esc(ex.en)}</div>
      <div class="ex-tr tr tr-uk">${esc(ex.uk)}</div>
      ${note}
    </div>
  </li>`;
  }
  function tenseCardHtml(t) {
    const usage = t.usage.map((u) => `<li>${tri(u)}</li>`).join("");
    const tables = t.tables.map((tb) => {
      const rows = tb.rows.map(
        (r) => `<tr><td class="pronoun">${esc(r.pronoun)}</td><td class="form">${marked(
          r.form
        )}</td></tr>`
      ).join("");
      const foot = tb.footnote ? `<p class="table-foot">${tri(tb.footnote)}</p>` : "";
      return `<div class="conj">
        <p class="conj-title">${tri(tb.title)}</p>
        <table><tbody>${rows}</tbody></table>${foot}
      </div>`;
    }).join("");
    const extra = t.extra ? `<details class="extra">
        <summary>${tri(t.extra.title)}</summary>
        <table class="extra-table"><tbody>${t.extra.rows.map(
      (r) => `<tr><td class="pronoun">${esc(r.pronoun)}</td><td>${marked(
        r.form
      )}</td></tr>`
    ).join("")}</tbody></table>
        ${t.extra.footnote ? `<p class="table-foot">${tri(t.extra.footnote)}</p>` : ""}
      </details>` : "";
    const formulaNotes = t.formulaNotes.map((n) => `<li>${tri(n)}</li>`).join("");
    const examples = t.examples.map((ex, i) => exampleHtml(ex, t.id, i)).join("");
    const related = t.related.map(
      (r) => `<li><button class="link-btn" data-goto="${r.id}">${esc(
        nameById(r.id)
      )}</button> \u2014 ${tri(r.why)}</li>`
    ).join("");
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
      <h3>\u{1F9E0} Astuce m\xE9mo</h3>
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
  function timelineSvg() {
    const W2 = 960;
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
<svg class="timeline" viewBox="0 0 ${W2} 372" role="img" aria-label="Frise chronologique des temps">
  <!-- zones -->
  <rect x="20" y="30" width="${CX - 30}" height="250" class="zone zone-past" rx="10"/>
  <rect x="${CX + 10}" y="30" width="${W2 - CX - 30}" height="250" class="zone zone-future" rx="10"/>
  <text x="40" y="56" class="zone-label">LE PASS\xC9</text>
  <text x="${W2 - 40}" y="56" class="zone-label" text-anchor="end">LE FUTUR</text>

  <!-- axis -->
  <line x1="40" y1="${AXIS_Y}" x2="${W2 - 48}" y2="${AXIS_Y}" class="axis"/>
  <polygon points="${W2 - 48},${AXIS_Y - 6} ${W2 - 34},${AXIS_Y} ${W2 - 48},${AXIS_Y + 6}" class="axis-head"/>

  <!-- NOW line / pr\xE9sent -->
  <g class="tl-item" data-goto="present" tabindex="0" role="button" aria-label="Le pr\xE9sent">
    <line x1="${CX}" y1="60" x2="${CX}" y2="292" class="now-line"/>
    <circle cx="${CX}" cy="${AXIS_Y}" r="9" class="now-dot"/>
    <circle cx="${CX}" cy="${AXIS_Y}" r="9" class="now-pulse"/>
    <text x="${CX}" y="320" text-anchor="middle" class="tl-label now-label">MAINTENANT \u2014 le pr\xE9sent</text>
  </g>

  <!-- imparfait: background wave -->
  <g class="tl-item" data-goto="imparfait" tabindex="0" role="button" aria-label="L'imparfait">
    <path d="${wave}" class="mark-wave"/>
    <text x="70" y="100" class="tl-label">l'imparfait <tspan class="tl-hint">\u2014 le d\xE9cor, les habitudes</tspan></text>
  </g>

  <!-- pass\xE9 compos\xE9: events -->
  <g class="tl-item" data-goto="passe-compose" tabindex="0" role="button" aria-label="Le pass\xE9 compos\xE9">
    <line x1="150" y1="152" x2="150" y2="168" class="mark-tick"/>
    <line x1="235" y1="152" x2="235" y2="168" class="mark-tick"/>
    <line x1="320" y1="152" x2="320" y2="168" class="mark-tick"/>
    <circle cx="150" cy="160" r="7" class="mark-dot"/>
    <circle cx="235" cy="160" r="7" class="mark-dot"/>
    <circle cx="320" cy="160" r="7" class="mark-dot"/>
    <text x="70" y="192" class="tl-label">le pass\xE9 compos\xE9 <tspan class="tl-hint">\u2014 les \xE9v\xE9nements finis</tspan></text>
  </g>

  <!-- pass\xE9 r\xE9cent: arrow into now -->
  <g class="tl-item" data-goto="passe-recent" tabindex="0" role="button" aria-label="Le pass\xE9 r\xE9cent">
    <line x1="384" y1="222" x2="458" y2="222" class="mark-arrow"/>
    <polygon points="458,216 470,222 458,228" class="mark-arrow-head"/>
    <text x="466" y="210" text-anchor="end" class="tl-label">le pass\xE9 r\xE9cent <tspan class="tl-hint">\u2014 je viens de\u2026</tspan></text>
  </g>

  <!-- futur proche: arrow out of now -->
  <g class="tl-item" data-goto="futur-proche" tabindex="0" role="button" aria-label="Le futur proche">
    <line x1="502" y1="222" x2="576" y2="222" class="mark-arrow"/>
    <polygon points="576,216 588,222 576,228" class="mark-arrow-head"/>
    <text x="502" y="210" class="tl-label">le futur proche <tspan class="tl-hint">\u2014 je vais\u2026</tspan></text>
  </g>

  <!-- futur simple: distant dots -->
  <g class="tl-item" data-goto="futur-simple" tabindex="0" role="button" aria-label="Le futur simple">
    <circle cx="700" cy="160" r="7" class="mark-dot mark-dot-hollow"/>
    <circle cx="800" cy="160" r="7" class="mark-dot mark-dot-hollow"/>
    <circle cx="875" cy="160" r="7" class="mark-dot mark-dot-hollow"/>
    <text x="640" y="192" class="tl-label">le futur simple <tspan class="tl-hint">\u2014 un jour, plus tard\u2026</tspan></text>
  </g>

  <!-- modes strip -->
  <g class="modes">
    <text x="40" y="352" class="modes-label">Hors du temps (les modes) :</text>
    <g class="tl-item" data-goto="imperatif" tabindex="0" role="button" aria-label="L'imp\xE9ratif">
      <rect x="270" y="336" width="150" height="26" rx="13" class="mode-chip"/>
      <text x="345" y="353" text-anchor="middle" class="mode-text">l'imp\xE9ratif \u2014 Fais !</text>
    </g>
    <g class="tl-item" data-goto="conditionnel-politesse" tabindex="0" role="button" aria-label="Le conditionnel de politesse">
      <rect x="440" y="336" width="230" height="26" rx="13" class="mode-chip"/>
      <text x="555" y="353" text-anchor="middle" class="mode-text">le conditionnel \u2014 je voudrais\u2026</text>
    </g>
  </g>
</svg>`;
  }
  function hubSvg() {
    const nodes = [
      { id: "imparfait", x: 130, y: 84, label: "imparfait", recipe: "\xAB nous \xBB sans -ons + -ais" },
      { id: "passe-compose", x: 130, y: 208, label: "pass\xE9 compos\xE9", recipe: "avoir / \xEAtre + participe" },
      { id: "passe-recent", x: 240, y: 322, label: "pass\xE9 r\xE9cent", recipe: "venir + de + infinitif" },
      { id: "futur-proche", x: 660, y: 322, label: "futur proche", recipe: "aller + infinitif" },
      { id: "imperatif", x: 770, y: 84, label: "imp\xE9ratif", recipe: "pr\xE9sent sans sujet" }
    ];
    const hub = { x: 450, y: 195 };
    const spokes = nodes.map((n) => {
      const dx = n.x - hub.x;
      const dy = n.y - hub.y;
      const len = Math.hypot(dx, dy);
      const sx = hub.x + dx / len * 66;
      const sy = hub.y + dy / len * 40;
      const ex = n.x - dx / len * 78;
      const ey = n.y - dy / len * 30;
      const mx = (sx + ex) / 2;
      const my = (sy + ey) / 2;
      return `
      <g class="spoke">
        <line x1="${sx.toFixed(1)}" y1="${sy.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" class="spoke-line"/>
        <rect x="${mx - 92}" y="${my - 12}" width="184" height="22" rx="11" class="recipe-bg"/>
        <text x="${mx}" y="${my + 3}" text-anchor="middle" class="recipe">${esc(n.recipe)}</text>
      </g>`;
    }).join("");
    const nodeEls = nodes.map(
      (n) => `
    <g class="tl-item hub-node" data-goto="${n.id}" tabindex="0" role="button" aria-label="${esc(n.label)}">
      <rect x="${n.x - 78}" y="${n.y - 20}" width="156" height="40" rx="20" class="node-bg"/>
      <text x="${n.x}" y="${n.y + 5}" text-anchor="middle" class="node-text">${esc(n.label)}</text>
    </g>`
    ).join("");
    return `
<svg class="hub" viewBox="0 0 900 420" role="img" aria-label="Le pr\xE9sent construit les autres temps">
  ${spokes}
  ${nodeEls}
  <g class="tl-item hub-center" data-goto="present" tabindex="0" role="button" aria-label="Le pr\xE9sent">
    <circle cx="${hub.x}" cy="${hub.y}" r="56" class="hub-bg"/>
    <text x="${hub.x}" y="${hub.y - 2}" text-anchor="middle" class="hub-text">LE</text>
    <text x="${hub.x}" y="${hub.y + 18}" text-anchor="middle" class="hub-text">PR\xC9SENT</text>
  </g>
  <!-- side chain: infinitif \u2192 futur simple \u2192 conditionnel -->
  <g class="chain">
    <text x="450" y="392" text-anchor="middle" class="chain-text">
      Et \xE0 part : <tspan class="chain-strong">infinitif</tspan> + avoir \u2192
      <tspan class="chain-link" data-goto="futur-simple">futur simple</tspan>
      \u2192 m\xEAme radical + -ais \u2192
      <tspan class="chain-link" data-goto="conditionnel-politesse">conditionnel</tspan>
    </text>
  </g>
</svg>`;
  }
  function overviewHtml() {
    return `
  <section class="panel">
    <h2 class="panel-title">La frise du temps</h2>
    <p class="panel-sub">${tri({
      fr: "O\xF9 \xAB vit \xBB chaque temps ? Cliquez sur un temps pour ouvrir sa fiche.",
      en: "Where does each tense \u201Clive\u201D? Click a tense to open its card.",
      uk: "\u0414\u0435 \xAB\u0436\u0438\u0432\u0435\xBB \u043A\u043E\u0436\u0435\u043D \u0447\u0430\u0441? \u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043D\u0430 \u0447\u0430\u0441, \u0449\u043E\u0431 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0439\u043E\u0433\u043E \u043A\u0430\u0440\u0442\u043A\u0443."
    })}</p>
    ${timelineSvg()}
  </section>

  <section class="panel">
    <h2 class="panel-title">Tout part du pr\xE9sent</h2>
    <p class="panel-sub">${tri({
      fr: "Apprenez bien le pr\xE9sent : les autres temps sont des recettes \xE0 partir de lui.",
      en: "Learn the present well: the other tenses are recipes built from it.",
      uk: "\u0414\u043E\u0431\u0440\u0435 \u0432\u0438\u0432\u0447\u0456\u0442\u044C \u0442\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0456\u0439 \u0447\u0430\u0441: \u0456\u043D\u0448\u0456 \u0447\u0430\u0441\u0438 \u2014 \u0446\u0435 \u0440\u0435\u0446\u0435\u043F\u0442\u0438 \u043D\u0430 \u0439\u043E\u0433\u043E \u043E\u0441\u043D\u043E\u0432\u0456."
    })}</p>
    ${hubSvg()}
  </section>`;
  }
  function cardsHtml() {
    const chips = TENSES.map(
      (t) => `<button class="chip" data-goto="${t.id}">${esc(
        t.name.replace(/^(Le |L'|La )/, "")
      )}</button>`
    ).join("");
    return `
  <div class="toc">${chips}</div>
  ${legendHtml()}
  <div class="cards">${TENSES.map(tenseCardHtml).join("")}</div>`;
  }
  function compareColumn(t) {
    const usage = t.usage.map((u) => `<li>${tri(u)}</li>`).join("");
    const tb = t.tables[0];
    const rows = tb.rows.map(
      (r) => `<tr><td class="pronoun">${esc(r.pronoun)}</td><td class="form">${marked(
        r.form
      )}</td></tr>`
    ).join("");
    return `
  <div class="cmp-col">
    <h3 class="cmp-name">${esc(t.name)} ${badgeHtml(t)}</h3>
    <p class="formula">${marked(t.formula)}</p>
    <h4>Quand ?</h4>
    <ul class="usage">${usage}</ul>
    <h4>${tri(tb.title)}</h4>
    <table class="cmp-table"><tbody>${rows}</tbody></table>
    <p class="cmp-more"><button class="link-btn" data-goto="${t.id}">Voir la fiche compl\xE8te \u2192</button></p>
  </div>`;
  }
  function compareHtml() {
    const opts = (sel) => TENSES.map(
      (t) => `<option value="${t.id}" ${t.id === sel ? "selected" : ""}>${esc(
        t.name
      )}</option>`
    ).join("");
    const a = tenseById(state.compareA);
    const b = tenseById(state.compareB);
    const key = [a.id, b.id].sort().join("|");
    const contrast = CONTRASTS.find((c) => c.key === key);
    const aIsFirst = a.id.localeCompare(b.id) <= 0;
    const cell = (t, ex) => `
        <div class="face-cell">
          <div class="face-tense">${esc(t.name)}</div>
          <div class="face-fr">${marked(ex.fr)}</div>
          <div class="tr tr-en">${esc(ex.en)}</div>
          <div class="tr tr-uk">${esc(ex.uk)}</div>
        </div>`;
    const faceRows = contrast ? contrast.rows.map(
      (r) => `
      <div class="face-row">
        ${aIsFirst ? cell(a, r.a) + cell(b, r.b) : cell(a, r.b) + cell(b, r.a)}
        <div class="face-point">\u2192 ${tri(r.point)}</div>
      </div>`
    ).join("") : "";
    const faceSection = contrast ? `<section class="panel face">
        <h3 class="panel-title">Face \xE0 face</h3>
        <p class="panel-sub">${tri(contrast.headline)}</p>
        ${faceRows}
      </section>` : `<p class="no-contrast">${tri({
      fr: "Pas de duel pr\xE9par\xE9 pour cette paire \u2014 mais comparez la formation et l'usage ci-dessus ! Paires recommand\xE9es : pass\xE9 compos\xE9 \u2194 imparfait, futur proche \u2194 futur simple.",
      en: "No prepared duel for this pair \u2014 but compare the formation and usage above! Recommended pairs: pass\xE9 compos\xE9 \u2194 imparfait, futur proche \u2194 futur simple.",
      uk: "\u0414\u043B\u044F \u0446\u0456\u0454\u0457 \u043F\u0430\u0440\u0438 \u043D\u0435\u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0434\u0443\u0435\u043B\u044E \u2014 \u0430\u043B\u0435 \u043F\u043E\u0440\u0456\u0432\u043D\u044F\u0439\u0442\u0435 \u0443\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0442\u0430 \u0432\u0436\u0438\u0442\u043E\u043A \u0432\u0438\u0449\u0435! \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u0456 \u043F\u0430\u0440\u0438: pass\xE9 compos\xE9 \u2194 imparfait, futur proche \u2194 futur simple."
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
  function render() {
    const main = document.getElementById("main");
    document.querySelectorAll(".nav-btn").forEach((b) => b.classList.toggle("active", b.dataset.view === state.view));
    if (state.view === "overview") main.innerHTML = overviewHtml();
    else if (state.view === "cards") main.innerHTML = cardsHtml();
    else if (state.view === "structures") main.innerHTML = sectionHtml("structures");
    else if (state.view === "connecteurs") main.innerHTML = sectionHtml("connecteurs");
    else main.innerHTML = compareHtml();
    if (state.view === "compare") {
      document.getElementById("cmp-a").addEventListener(
        "change",
        (e) => {
          state.compareA = e.target.value;
          render();
        }
      );
      document.getElementById("cmp-b").addEventListener(
        "change",
        (e) => {
          state.compareB = e.target.value;
          render();
        }
      );
    }
  }
  function goToTense(rawId) {
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
      void el.offsetWidth;
      el.classList.add("flash");
    }
  }
  function init() {
    document.querySelectorAll(".nav-btn").forEach(
      (b) => b.addEventListener("click", () => {
        state.view = b.dataset.view;
        render();
        window.scrollTo({ top: 0 });
      })
    );
    const btnEn = document.getElementById("toggle-en");
    const btnUk = document.getElementById("toggle-uk");
    btnEn.addEventListener("click", () => {
      document.body.classList.toggle("show-en");
      btnEn.classList.toggle("active");
    });
    btnUk.addEventListener("click", () => {
      document.body.classList.toggle("show-uk");
      btnUk.classList.toggle("active");
    });
    document.body.addEventListener("click", (e) => {
      const target = e.target;
      const goto = target.closest("[data-goto]");
      if (goto) {
        goToTense(goto.dataset.goto);
        return;
      }
      const revealAll = target.closest(".reveal-all");
      if (revealAll) {
        const card = document.getElementById(`card-${revealAll.dataset.card}`);
        const examples = card.querySelectorAll(".example");
        const anyHidden = Array.from(examples).some(
          (x) => !x.classList.contains("revealed")
        );
        examples.forEach((x) => x.classList.toggle("revealed", anyHidden));
        revealAll.textContent = anyHidden ? "Tout cacher" : "Tout montrer";
        return;
      }
      const ex = target.closest(".example");
      if (ex && (target.closest(".reveal-btn") || !ex.classList.contains("revealed"))) {
        ex.classList.toggle("revealed");
        return;
      }
    });
    document.body.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const goto = e.target.closest?.("[data-goto]");
      if (goto) {
        e.preventDefault();
        goToTense(goto.dataset.goto);
      }
    });
    render();
    const openHash = () => {
      const m = /^#card-(.+)$/.exec(location.hash);
      if (m) goToTense(m[1]);
    };
    window.addEventListener("hashchange", openHash);
    openHash();
  }
  document.addEventListener("DOMContentLoaded", init);
  function rich(src) {
    return marked(src).replace(/&lt;br\s*\/?&gt;/g, "<br>").replace(/&lt;(\/?)(b|em|strong|small)&gt;/g, "<$1$2>");
  }
  function cellHtml(c) {
    if (typeof c === "string") return rich(c);
    return `<span class="fr">${rich(c.fr)}</span><span class="tr tr-en">${rich(c.en)}</span><span class="tr tr-uk">${rich(c.uk)}</span>`;
  }
  function blockHtml(b) {
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
    const rows = b.rows.map((r) => `<tr>${r.map((c) => `<td>${cellHtml(c)}</td>`).join("")}</tr>`).join("");
    const note = b.note ? `<p class="table-foot">${tri(b.note)}</p>` : "";
    return `<div class="blk">
    <p class="conj-title">${tri(b.title)}</p>
    <div class="grid-table-wrap">
      <table class="grid-table"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>
    </div>${note}
  </div>`;
  }
  function structureCardHtml(s) {
    const vis = VISUALS[s.id] ?? [];
    const blocks = s.blocks.map(
      (b, i) => blockHtml(b) + vis.filter((v) => v.afterBlock === i).map(visualHtml).join("")
    ).join("") + vis.filter((v) => v.afterBlock === void 0 || v.afterBlock >= s.blocks.length).map(visualHtml).join("");
    const pitfalls = s.pitfalls.map(
      (p) => `<li class="pitfall">
        <div class="pf-pair">
          <span class="pf-bad">${esc(p.bad)}</span>
          <span class="pf-arrow">\u2192</span>
          <span class="pf-good">${esc(p.good)}</span>
        </div>
        <div class="pf-why">${tri(p.why)}</div>
      </li>`
    ).join("");
    const examples = s.examples.map((ex, i) => exampleHtml(ex, s.id, i)).join("");
    const related = s.related.map(
      (r) => `<li><button class="link-btn" data-goto="${r.id}">${esc(
        nameById(r.id)
      )}</button> \u2014 ${tri(r.why)}</li>`
    ).join("");
    return `
  <article class="card" id="card-${s.id}" data-structure="${s.id}">
    <header class="card-head">
      <h2>${esc(s.name)}</h2>
      ${s.badge === "essentiel" ? `<span class="badge badge-core">\u2605 essentiel</span>` : `<span class="badge badge-soft">\u25D0 \xE0 reconna\xEEtre</span>`}
    </header>
    <p class="tagline">${tri(s.tagline)}</p>

    ${blocks}

    <section class="pitfalls">
      <h3>\u26A0 Pi\xE8ges \xE0 \xE9viter</h3>
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
  function sectionHtml(section) {
    const list = STRUCTURES.filter((s) => s.section === section);
    const chips = list.map((s) => `<button class="chip" data-goto="${s.id}">${esc(s.name.replace(/^(Le |L\'|La |Les )/, ""))}</button>`).join("");
    const intro = section === "structures" ? "Les constructions qui organisent la phrase : hypoth\xE8se, discours rapport\xE9, restriction." : "Les mots qui articulent le raisonnement : pourquoi, et donc.";
    return `
  <div class="toc">${chips}</div>
  <p class="panel-sub section-intro">${esc(intro)}</p>
  ${legendHtml()}
  <div class="cards">${list.map(structureCardHtml).join("")}</div>`;
  }
  var TONE = {
    past: "var(--role-end)",
    now: "var(--ink-2)",
    future: "var(--role-stem)",
    accent: "var(--accent)",
    warn: "var(--role-inf)",
    good: "var(--role-stem)"
  };
  function tone(t) {
    return TONE[t ?? "accent"] ?? TONE.accent;
  }
  function partHtml(p, extra = "") {
    const cls = p.role ? ` role-${p.role}` : "";
    return `<span class="blk${cls}${extra}">${esc(p.text)}</span>`;
  }
  function capHtml(v) {
    return v.caption ? `<p class="dg-cap">${tri(v.caption)}</p>` : "";
  }
  function assemblyHtml(v) {
    const src = v.sources?.length ? `<div class="dg-src">${v.sources.map(
      (s) => `<span class="dg-src-i"><span class="dg-src-l">${esc(s.label)}</span><span class="blk ghost${s.role ? ` role-${s.role}` : ""}">${esc(s.text)}</span></span>`
    ).join("")}<span class="dg-src-arrow">\u2193</span></div>` : "";
    const parts = v.parts.map(
      (p) => `<span class="dg-unit">${partHtml(p)}${p.label ? `<span class="dg-lab">${esc(p.label)}</span>` : ""}</span>`
    ).join(`<span class="dg-op">+</span>`);
    const res = v.result ? `<span class="dg-op">=</span><span class="dg-unit"><span class="blk res">${esc(
      v.result
    )}</span></span>` : "";
    return `<figure class="dg dg-assembly">${src}<div class="dg-row">${parts}${res}</div>${capHtml(
      v
    )}</figure>`;
  }
  function slotsHtml(v) {
    const rows = v.rows.map(
      (r) => `<div class="dg-slot ${r.bad ? "is-bad" : ""}">
        ${r.label ? `<span class="dg-slot-l">${esc(r.label)}</span>` : ""}
        <span class="dg-slot-c">${r.cells.map((c) => partHtml(c)).join("")}</span>
        ${r.note ? `<span class="dg-note">${esc(r.note)}</span>` : ""}
      </div>`
    ).join("");
    return `<figure class="dg dg-slots">${rows}${capHtml(v)}</figure>`;
  }
  function flowHtml(v) {
    const rows = v.rows.map(
      (r) => `<div class="dg-flow-r ${r.same ? "is-same" : ""}">
        <span class="dg-f-a">${esc(r.from)}</span>
        <span class="dg-f-arrow" style="--c:${r.same ? "var(--muted)" : tone(r.tone)}">
          ${r.edge ? `<span class="dg-edge">${esc(r.edge)}</span>` : ""}
        </span>
        <span class="dg-f-b" style="--c:${r.same ? "var(--muted)" : tone(r.tone)}">${esc(
        r.to
      )}</span>
      </div>`
    ).join("");
    return `<figure class="dg dg-flow">
    <div class="dg-flow-h"><span>${esc(v.fromLabel)}</span><span>${esc(v.toLabel)}</span></div>
    ${rows}${capHtml(v)}
  </figure>`;
  }
  function pairsHtml(v) {
    const rows = v.rows.map(
      (r) => `<div class="dg-pair" style="--c:${tone(r.tone)}">
        <span class="dg-tag">${esc(r.tag)}</span>
        <span class="dg-p-a">${esc(r.left)}</span>
        <span class="dg-p-arrow"></span>
        <span class="dg-p-b">${esc(r.right)}</span>
        ${r.note ? `<span class="dg-note">${esc(r.note)}</span>` : ""}
      </div>`
    ).join("");
    return `<figure class="dg dg-pairs">
    <div class="dg-pair-h"><span></span><span>${esc(v.leftLabel)}</span><span></span><span>${esc(
      v.rightLabel
    )}</span></div>
    ${rows}${capHtml(v)}
  </figure>`;
  }
  var W = 720;
  var X0 = 62;
  var X1 = 658;
  function tx(at) {
    return X0 + (at + 1) / 2 * (X1 - X0);
  }
  function timelineSvgFor(v) {
    const AY = 66;
    const mid = tx(0);
    const parts = [];
    parts.push(
      `<rect x="${X0}" y="${AY - 13}" width="${mid - X0}" height="26" fill="var(--zone-past)" rx="4"/>`,
      `<rect x="${mid}" y="${AY - 13}" width="${X1 - mid}" height="26" fill="var(--zone-future)" rx="4"/>`,
      `<line x1="${X0}" y1="${AY}" x2="${X1}" y2="${AY}" stroke="var(--hairline)" stroke-width="2"/>`,
      `<line x1="${mid}" y1="${AY - 20}" x2="${mid}" y2="${AY + 20}" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="3 3"/>`,
      `<text x="${X0 - 4}" y="${AY + 4}" class="dg-end" text-anchor="end">pass\xE9</text>`,
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
          `<line x1="${x}" y1="${AY + (m.below ? 8 : -8)}" x2="${lx}" y2="${ly + (m.below ? -10 : 8)}" stroke="${c}" stroke-width="1" opacity="0.45"/>`
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
  var axisSeq = 0;
  function axisSvgFor(v) {
    const AY = 62;
    const gid = `axg${++axisSeq}`;
    const parts = [
      `<defs><linearGradient id="${gid}" x1="0" x2="1">
      <stop offset="0" stop-color="var(--role-inf)" stop-opacity="0.8"/>
      <stop offset="0.5" stop-color="var(--accent)" stop-opacity="0.8"/>
      <stop offset="1" stop-color="var(--role-stem)" stop-opacity="0.8"/>
    </linearGradient></defs>`,
      `<line x1="${X0}" y1="${AY}" x2="${X1}" y2="${AY}" stroke="var(--hairline)" stroke-width="8" stroke-linecap="round"/>`,
      `<line x1="${X0}" y1="${AY}" x2="${X1}" y2="${AY}" stroke="url(#${gid})" stroke-width="5" stroke-linecap="round"/>`,
      `<text x="${X0}" y="${AY + 26}" class="dg-end" text-anchor="start">${esc(v.leftLabel)}</text>`,
      `<text x="${X1}" y="${AY + 26}" class="dg-end" text-anchor="end">${esc(v.rightLabel)}</text>`
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
      v.leftLabel + " \u2192 " + v.rightLabel
    )}">${parts.join("")}</svg>${capHtml(v)}
  </figure>`;
  }
  function visualHtml(v) {
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
  function visualsAt(id, anchor) {
    const list = (VISUALS[id] ?? []).filter((v) => (v.anchor ?? "formation") === anchor);
    return list.length ? list.map(visualHtml).join("") : "";
  }
})();
