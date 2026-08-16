// ============================================================
// Structures & connecteurs — l'extension B1
// IDs are stable: the exercises app references them via drill.ruleId.
// ============================================================

import type { Structure } from "./types";

export const STRUCTURES: Structure[] = [
  // ========== SI ==========
  {
    id: "si-clauses",
    name: "Les trois « si »",
    section: "structures",
    badge: "essentiel",
    tagline: {
      fr: "Trois systèmes, trois couples de temps. Une fois le couple identifié, il n'y a plus de choix à faire.",
      en: "Three systems, three tense pairs. Once you've identified the pair, there's no choice left to make.",
      uk: "Три системи, три пари часів. Щойно визначили пару — вибору більше немає.",
    },
    blocks: [
      {
        kind: "table",
        title: { fr: "Les trois systèmes", en: "The three systems", uk: "Три системи" },
        head: [{ fr: "Type", en: "Type", uk: "Тип" }, "Si + …", { fr: "→ résultat", en: "→ result", uk: "→ результат" }, { fr: "Exemple", en: "Example", uk: "Приклад" }],
        rows: [
          [
            { fr: "I — réel<br><em>c'est possible</em>", en: "I — real<br><em>it's possible</em>", uk: "I — реальне<br><em>це можливо</em>" },
            "si + {présent:end}",
            "{futur simple:end}<br>ou {présent:end}<br>ou {impératif:end}",
            { fr: "S'il pleut, je <b>resterai</b> chez moi.<br>Si tu chauffes l'eau, elle <b>bout</b>.<br>Si tu as le temps, <b>appelle</b>-moi !", en: "If it rains, I <b>will stay</b> home.<br>If you heat water, it <b>boils</b>.<br>If you have time, <b>call</b> me!", uk: "Якщо йтиме дощ, я <b>залишуся</b> вдома.<br>Якщо нагріваєш воду, вона <b>кипить</b>.<br>Якщо маєш час, <b>подзвони</b> мені!" },
          ],
          [
            { fr: "II — irréel du présent<br><em>c'est imaginaire</em>", en: "II — unreal present<br><em>it's imaginary</em>", uk: "II — нереальне теперішнє<br><em>це уявне</em>" },
            "si + {imparfait:end}",
            "{conditionnel présent:end}",
            { fr: "Si j'<b>étais</b> américain, je <b>serais</b> une star.<br>Si j'<b>avais</b> de l'argent, j'<b>achèterais</b> un trois-pièces.", en: "If I <b>were</b> American, I <b>would be</b> a star.<br>If I <b>had</b> money, I <b>would buy</b> a three-room flat.", uk: "Якби я <b>був</b> американцем, я <b>був би</b> зіркою.<br>Якби я <b>мав</b> гроші, я <b>купив би</b> трикімнатну квартиру." },
          ],
          [
            { fr: "III — irréel du passé<br><em>c'est trop tard</em>", en: "III — unreal past<br><em>it's too late</em>", uk: "III — нереальне минуле<br><em>уже запізно</em>" },
            "si + {plus-que-parfait:end}",
            "{conditionnel passé:end}",
            { fr: "Si j'<b>avais su</b>, je <b>serais venu</b>.<br>Si tu <b>avais révisé</b>, tu <b>aurais réussi</b>.", en: "If I <b>had known</b>, I <b>would have come</b>.<br>If you <b>had revised</b>, you <b>would have passed</b>.", uk: "Якби я <b>знав</b>, я <b>прийшов би</b>.<br>Якби ти <b>повторив</b>, ти <b>склав би</b>." },
          ],
        ],
        note: {
          fr: "Le type II parle du présent ou du futur, malgré l'imparfait. Le type III parle d'un passé qu'on ne peut plus changer.",
          en: "Type II talks about the present or future, despite the imparfait. Type III is about a past you can no longer change.",
          uk: "Тип II говорить про теперішнє чи майбутнє, попри imparfait. Тип III — про минуле, яке вже не змінити.",
        },
      },
      {
        kind: "table",
        title: {
          fr: "Le type I de près : trois résultats, trois intentions",
          en: "Type I up close: three results, three intentions",
          uk: "Тип I зблизька: три результати, три наміри",
        },
        head: [
          { fr: "Résultat", en: "Result", uk: "Результат" },
          { fr: "Ce que tu fais", en: "What you're doing", uk: "Що ти робиш" },
          { fr: "Exemple", en: "Example", uk: "Приклад" },
          { fr: "Comment le reconnaître", en: "How to recognise it", uk: "Як розпізнати" },
        ],
        rows: [
          [
            "{futur simple:end}",
            {
              fr: "Tu <b>prédis</b> ce qui arrivera si la condition se réalise. Une seule fois, dans l'avenir.",
              en: "You <b>predict</b> what will happen if the condition is met. Once, in the future.",
              uk: "Ти <b>передбачаєш</b>, що станеться, якщо умова справдиться. Один раз, у майбутньому.",
            },
            {
              fr: "S'il pleut demain, je <b>resterai</b> chez moi.",
              en: "If it rains tomorrow, I <b>will stay</b> home.",
              uk: "Якщо завтра піде дощ, я <b>залишуся</b> вдома.",
            },
            {
              fr: "Tu peux ajouter « demain », « la semaine prochaine ». C'est un événement unique et futur.",
              en: "You can add “tomorrow”, “next week”. It's a single future event.",
              uk: "Можна додати «завтра», «наступного тижня». Це одинична майбутня подія.",
            },
          ],
          [
            "{présent:end}",
            {
              fr: "Tu énonces une <b>loi générale</b> ou une <b>habitude</b> : c'est vrai à chaque fois, pas seulement demain.",
              en: "You state a <b>general law</b> or a <b>habit</b>: true every time, not just tomorrow.",
              uk: "Ти констатуєш <b>загальний закон</b> або <b>звичку</b>: це справджується щоразу.",
            },
            {
              fr: "Si tu chauffes l'eau à 100°, elle <b>bout</b>.<br>Si j'ai le temps, je <b>vais</b> à la piscine.",
              en: "If you heat water to 100°, it <b>boils</b>.<br>If I have time, I <b>go</b> to the pool.",
              uk: "Якщо нагріти воду до 100°, вона <b>кипить</b>.<br>Якщо маю час, я <b>ходжу</b> в басейн.",
            },
            {
              fr: "Tu peux ajouter « à chaque fois », « toujours ». Remplace « si » par « quand » : le sens ne change pas.",
              en: "You can add “every time”, “always”. Swap “si” for “quand”: the meaning doesn't change.",
              uk: "Можна додати «щоразу», «завжди». Заміни «si» на «quand» — сенс не зміниться.",
            },
          ],
          [
            "{impératif:end}",
            {
              fr: "Tu <b>demandes à quelqu'un d'agir</b> : conseil, ordre, invitation. Il y a forcément un « tu » ou un « vous » en face.",
              en: "You <b>ask someone to act</b>: advice, order, invitation. There is necessarily a “tu” or “vous” facing you.",
              uk: "Ти <b>просиш когось діяти</b>: порада, наказ, запрошення. Обов'язково є співрозмовник.",
            },
            {
              fr: "Si tu as le temps, <b>appelle</b>-moi !<br>Si vous êtes perdu, <b>demandez</b> à un passant.",
              en: "If you have time, <b>call</b> me!<br>If you're lost, <b>ask</b> a passer-by.",
              uk: "Якщо маєш час, <b>подзвони</b> мені!<br>Якщо заблукали, <b>запитайте</b> перехожого.",
            },
            {
              fr: "La phrase se termine souvent par « ! ». Tu ne décris rien : tu donnes une instruction.",
              en: "The sentence often ends in “!”. You describe nothing: you give an instruction.",
              uk: "Речення часто закінчується «!». Ти нічого не описуєш — ти даєш вказівку.",
            },
          ],
        ],
        note: {
          fr: "Le temps après « si » ne bouge pas : c'est toujours le présent. Ce qui change, c'est ce que tu veux FAIRE avec la phrase — prédire, constater ou demander.",
          en: "The tense after “si” never moves: always the present. What changes is what you want to DO with the sentence — predict, state, or ask.",
          uk: "Час після «si» не змінюється — завжди présent. Змінюється те, ЩО ти хочеш зробити реченням.",
        },
      },
      {
        kind: "rule",
        title: { fr: "La règle d'or", en: "The golden rule", uk: "Золоте правило" },
        body: {
          fr: "Jamais de futur ni de conditionnel juste après « si » hypothétique. ✗ Si je serai… ✗ Si j'aurais… ✓ Si je suis… ✓ Si j'avais…",
          en: "Never a future or a conditional right after hypothetical “si”. ✗ Si je serai… ✗ Si j'aurais… ✓ Si je suis… ✓ Si j'avais…",
          uk: "Ніколи не вживайте futur чи conditionnel одразу після гіпотетичного «si».",
        },
      },
      {
        kind: "rule",
        title: { fr: "Le piège voisin : quand, dès que…", en: "The neighbouring trap: quand, dès que…", uk: "Сусідня пастка: quand, dès que…" },
        body: {
          fr: "Après quand, lorsque, dès que, une fois que, pendant que et j'espère que, le français met le FUTUR — contrairement à l'anglais et à « si ». Quand j'aurai le temps, je te rappellerai.",
          en: "After quand, lorsque, dès que, une fois que, pendant que and j'espère que, French uses the FUTURE — unlike English and unlike “si”. Quand j'aurai le temps, je te rappellerai.",
          uk: "Після quand, lorsque, dès que, une fois que, pendant que та j'espère que французька вживає МАЙБУТНІЙ час — на відміну від «si».",
        },
      },
      {
        kind: "list",
        title: { fr: "Variantes utiles", en: "Useful variants", uk: "Корисні варіанти" },
        items: [
          { fr: "« Même si » suit exactement les mêmes règles : Même si j'avais le temps, je ne viendrais pas.", en: "“Même si” follows exactly the same rules.", uk: "«Même si» підпорядковується тим самим правилам." },
          { fr: "Mélange possible entre II et III : Si j'avais révisé (passé), je serais plus tranquille aujourd'hui (présent).", en: "II and III can be mixed: Si j'avais révisé, je serais plus tranquille aujourd'hui.", uk: "Типи II і III можна змішувати." },
          { fr: "« Si » peut aussi introduire une question indirecte — ce n'est plus une hypothèse : Il demande si tu viens.", en: "“Si” can also introduce an indirect question — that's not a hypothesis: Il demande si tu viens.", uk: "«Si» також вводить непряме питання — це вже не гіпотеза." },
        ],
      },
    ],
    pitfalls: [
      {
        bad: "Si je serai riche, j'achèterais une maison.",
        good: "Si j'étais riche, j'achèterais une maison.",
        why: { fr: "Après « si » : imparfait, pas futur. Le conditionnel va dans l'AUTRE proposition.", en: "After “si”: imparfait, not future. The conditional goes in the OTHER clause.", uk: "Після «si» — imparfait, не майбутнє. Умовний спосіб — в ІНШІЙ частині." },
      },
      {
        bad: "si il pleut",
        good: "s'il pleut",
        why: { fr: "« si » s'élide devant il / ils seulement. « si elle », « si on » restent entiers.", en: "“si” elides only before il / ils. “si elle”, “si on” stay whole.", uk: "«si» скорочується лише перед il / ils." },
      },
      {
        bad: "Quand j'ai le temps, je te rappellerai.",
        good: "Quand j'aurai le temps, je te rappellerai.",
        why: { fr: "Après « quand » qui regarde vers l'avenir, le futur est obligatoire en français.", en: "After forward-looking “quand”, French requires the future.", uk: "Після «quand», що дивиться в майбутнє, французька вимагає futur." },
      },
    ],
    examples: [
      { fr: "Si tu {cherch:stem}{es:end} un studio bien desservi, regarde du côté de la banlieue.", en: "If you're looking for a well-connected studio, try the suburbs.", uk: "Якщо шукаєш студію з гарним транспортом, подивись у передмісті." },
      { fr: "Si nous {av:stem}{ions:end} un balcon, on {dîner:stem}{ait:end} dehors tous les soirs.", en: "If we had a balcony, we'd eat outside every evening.", uk: "Якби ми мали балкон, ми б вечеряли надворі щовечора." },
      { fr: "Si j'{avais:aux} {lu:part} le devis, je n'{aurais:aux} jamais {signé:part}.", en: "If I had read the quote, I would never have signed.", uk: "Якби я прочитав кошторис, я б ніколи не підписав." },
    ],
    related: [
      { id: "conditionnel-present", why: { fr: "C'est le résultat du type II.", en: "It's the type II result.", uk: "Це результат типу II." } },
      { id: "conditionnel-passe", why: { fr: "C'est le résultat du type III.", en: "It's the type III result.", uk: "Це результат типу III." } },
      { id: "plus-que-parfait", why: { fr: "C'est la condition du type III.", en: "It's the type III condition.", uk: "Це умова типу III." } },
    ],
  },

  // ========== DISCOURS RAPPORTÉ (PRÉSENT) ==========
  {
    id: "discours-rapporte",
    name: "Le discours rapporté au présent",
    section: "structures",
    badge: "essentiel",
    tagline: {
      fr: "Verbe introducteur au présent : les temps ne bougent pas. Seules la personne et la ponctuation changent.",
      en: "Reporting verb in the present: the tenses don't move. Only person and punctuation change.",
      uk: "Ввідне дієслово в теперішньому: часи не змінюються. Змінюються лише особа та пунктуація.",
    },
    blocks: [
      {
        kind: "table",
        title: { fr: "Les six transformations", en: "The six transformations", uk: "Шість перетворень" },
        head: [{ fr: "Discours direct", en: "Direct speech", uk: "Пряма мова" }, { fr: "Mot de liaison", en: "Linking word", uk: "Сполучне слово" }, { fr: "Discours rapporté", en: "Reported speech", uk: "Непряма мова" }],
        rows: [
          [{ fr: "Affirmation<br><em>« Je pars demain. »</em>", en: "Statement<br><em>“I'm leaving tomorrow.”</em>", uk: "Твердження<br><em>«Я їду завтра.»</em>" }, "{que:end}", { fr: "Il dit <b>qu'</b>il part demain.", en: "He says <b>qu'</b> (that) he's leaving tomorrow.", uk: "Він каже, <b>qu'</b> (що) він їде завтра." }],
          [{ fr: "Question fermée (oui / non)<br><em>« Tu viens ? »</em>", en: "Yes / no question<br><em>“Are you coming?”</em>", uk: "Закрите питання (так / ні)<br><em>«Ти прийдеш?»</em>" }, "{si:end}", { fr: "Il demande <b>si</b> je viens.", en: "He asks <b>si</b> (whether) I'm coming.", uk: "Він питає, <b>si</b> (чи) я прийду." }],
          [{ fr: "<em>« Qu'est-ce que tu fais ? »</em>", en: "<em>“What are you doing?”</em>", uk: "<em>«Що ти робиш?»</em>" }, "{ce que:end}", { fr: "Il demande <b>ce que</b> je fais.", en: "He asks <b>ce que</b> (what) I'm doing.", uk: "Він питає, <b>ce que</b> (що) я роблю." }],
          [{ fr: "<em>« Qu'est-ce qui se passe ? »</em>", en: "<em>“What's going on?”</em>", uk: "<em>«Що відбувається?»</em>" }, "{ce qui:end}", { fr: "Il demande <b>ce qui</b> se passe.", en: "He asks <b>ce qui</b> (what) is going on.", uk: "Він питає, <b>ce qui</b> (що) відбувається." }],
          [{ fr: "Mot interrogatif<br><em>« Où habites-tu ? »</em>", en: "Question word<br><em>“Where do you live?”</em>", uk: "Питальне слово<br><em>«Де ти живеш?»</em>" }, "{où / quand / combien / pourquoi:end}", { fr: "Il demande <b>où</b> j'habite.", en: "He asks <b>où</b> (where) I live.", uk: "Він питає, <b>où</b> (де) я живу." }],
          [{ fr: "Impératif<br><em>« Viens ! »</em>", en: "Imperative<br><em>“Come!”</em>", uk: "Наказовий спосіб<br><em>«Прийди!»</em>" }, "{de + infinitif:end}", { fr: "Il me dit <b>de venir</b>.", en: "He tells me <b>de venir</b> (to come).", uk: "Він каже мені <b>de venir</b> (прийти)." }],
          [{ fr: "Impératif négatif<br><em>« Ne pars pas ! »</em>", en: "Negative imperative<br><em>“Don't leave!”</em>", uk: "Заперечний наказ<br><em>«Не йди!»</em>" }, "{de ne pas + infinitif:end}", { fr: "Il me dit <b>de ne pas partir</b>.", en: "He tells me <b>de ne pas partir</b> (not to leave).", uk: "Він каже мені <b>de ne pas partir</b> (не йти)." }],
        ],
      },
      {
        kind: "rule",
        title: { fr: "Répétez le mot de liaison", en: "Repeat the linker", uk: "Повторюйте сполучник" },
        body: {
          fr: "Chaque proposition rapportée reprend son « que » : Il dit qu'il est fatigué et qu'il va se coucher.",
          en: "Every reported clause repeats its “que”: Il dit qu'il est fatigué et qu'il va se coucher.",
          uk: "Кожна підрядна частина повторює своє «que».",
        },
      },
      {
        kind: "list",
        title: { fr: "Verbes introducteurs", en: "Reporting verbs", uk: "Ввідні дієслова" },
        items: [
          { fr: "Neutres : dire, demander, répondre, ajouter, expliquer, raconter", en: "Neutral: dire, demander, répondre, ajouter, expliquer, raconter", uk: "Нейтральні: dire, demander, répondre, ajouter, expliquer, raconter" },
          { fr: "Plus forts : affirmer, déclarer, promettre, avouer, prétendre", en: "Stronger: affirmer, déclarer, promettre, avouer, prétendre", uk: "Сильніші: affirmer, déclarer, promettre, avouer, prétendre" },
          { fr: "Pour un ordre : demander de, ordonner de, conseiller de, interdire de", en: "For an order: demander de, ordonner de, conseiller de, interdire de", uk: "Для наказу: demander de, ordonner de, conseiller de, interdire de" },
        ],
      },
    ],
    pitfalls: [
      {
        bad: "Laurence demande si tu as vu le film.",
        good: "Laurence demande si j'ai vu le film.",
        why: { fr: "C'est MOI qu'on interroge : « tu » devient « je ». C'est l'erreur n°1 du discours rapporté.", en: "I'm the one being asked: “tu” becomes “je”. This is the number-one reported-speech mistake.", uk: "Питають МЕНЕ: «tu» стає «je». Це помилка №1." },
      },
      {
        bad: "Il demande où j'habite ?",
        good: "Il demande où j'habite.",
        why: { fr: "Une interrogative indirecte n'est plus une question : ni point d'interrogation, ni inversion, ni « est-ce que ».", en: "An indirect question is no longer a question: no question mark, no inversion, no “est-ce que”.", uk: "Непряме питання вже не питання: ні знака питання, ні інверсії." },
      },
      {
        bad: "Il dit que c'est mon appartement.",
        good: "Il dit que c'est son appartement.",
        why: { fr: "Les possessifs suivent la personne : mon → son, ma → sa, mes → ses.", en: "Possessives follow the person: mon → son, ma → sa, mes → ses.", uk: "Присвійні змінюються разом з особою." },
      },
    ],
    examples: [
      { fr: "Le propriétaire dit {que:end} le loyer {comprend:stem} les charges.", en: "The landlord says the rent includes the utilities.", uk: "Власник каже, що орендна плата включає комунальні." },
      { fr: "Elle me demande {si:end} j'{ai:aux} {visité:part} l'appartement.", en: "She asks me whether I've viewed the flat.", uk: "Вона питає мене, чи оглянув я квартиру." },
      { fr: "L'artisan me dit {de:end} {rappeler:inf} lundi.", en: "The tradesman tells me to call back on Monday.", uk: "Майстер каже мені передзвонити в понеділок." },
    ],
    related: [
      { id: "concordance-temps", why: { fr: "La même chose, mais avec un verbe introducteur au passé.", en: "The same thing, but with a past reporting verb.", uk: "Те саме, але з ввідним дієсловом у минулому." } },
      { id: "imperatif", why: { fr: "L'impératif rapporté devient « de + infinitif ».", en: "A reported imperative becomes “de + infinitive”.", uk: "Наказовий спосіб у непрямій мові стає «de + інфінітив»." } },
    ],
  },

  // ========== CONCORDANCE DES TEMPS ==========
  {
    id: "concordance-temps",
    name: "La concordance des temps",
    section: "structures",
    badge: "essentiel",
    tagline: {
      fr: "Verbe introducteur au passé : tous les temps reculent d'un cran, et les marqueurs de temps aussi.",
      en: "Past reporting verb: every tense steps back one notch, and so do the time markers.",
      uk: "Ввідне дієслово в минулому: усі часи зсуваються на крок назад, і маркери часу теж.",
    },
    blocks: [
      {
        kind: "table",
        title: { fr: "Le recul des temps", en: "The tense shift", uk: "Зсув часів" },
        head: [{ fr: "Discours direct", en: "Direct speech", uk: "Пряма мова" }, "→", { fr: "Discours rapporté au passé", en: "Reported speech (past)", uk: "Непряма мова в минулому" }],
        rows: [
          ["{présent:end}", "→", { fr: "{imparfait:end} — « Je suis fatigué » → il a dit qu'il <b>était</b> fatigué.", en: "{imparfait:end} — “I'm tired” → he said he <b>était</b> tired.", uk: "{imparfait:end} — «Я втомлений» → він сказав, що він <b>était</b> втомлений." }],
          ["{passé composé:end}", "→", { fr: "{plus-que-parfait:end} — « J'ai fini » → il a dit qu'il <b>avait fini</b>.", en: "{plus-que-parfait:end} — “I've finished” → he said he <b>avait fini</b>.", uk: "{plus-que-parfait:end} — «Я закінчив» → він сказав, що він <b>avait fini</b>." }],
          ["{futur simple:end}", "→", { fr: "{conditionnel présent:end} — « Je viendrai » → il a dit qu'il <b>viendrait</b>.", en: "{conditionnel présent:end} — “I'll come” → he said he <b>viendrait</b>.", uk: "{conditionnel présent:end} — «Я прийду» → він сказав, що він <b>viendrait</b>." }],
          ["{futur proche:end}", "→", { fr: "{aller à l'imparfait + infinitif:end} — « Je vais partir » → il a dit qu'il <b>allait partir</b>.", en: "{aller à l'imparfait + infinitif:end} — “I'm going to leave” → he said he <b>allait partir</b>.", uk: "{aller à l'imparfait + infinitif:end} — «Я збираюся піти» → він сказав, що він <b>allait partir</b>." }],
          ["{imparfait:end}", "→", { fr: "{imparfait:end} — ne change pas.", en: "{imparfait:end} — no change.", uk: "{imparfait:end} — не змінюється." }],
          ["{plus-que-parfait:end}", "→", { fr: "{plus-que-parfait:end} — ne change pas.", en: "{plus-que-parfait:end} — no change.", uk: "{plus-que-parfait:end} — не змінюється." }],
          ["{conditionnel:end}", "→", { fr: "{conditionnel:end} — ne change pas.", en: "{conditionnel:end} — no change.", uk: "{conditionnel:end} — не змінюється." }],
          ["{impératif:end}", "→", { fr: "{de + infinitif:end} — « Viens ! » → il m'a dit <b>de venir</b>.", en: "{de + infinitif:end} — “Come!” → he told me <b>de venir</b>.", uk: "{de + infinitif:end} — «Прийди!» → він сказав мені <b>de venir</b>." }],
        ],
        note: {
          fr: "Trois temps ne bougent jamais : imparfait, plus-que-parfait, conditionnel. Ils sont déjà « au fond ».",
          en: "Three tenses never move: imparfait, pluperfect, conditional. They're already “at the bottom”.",
          uk: "Три часи ніколи не зсуваються: imparfait, plus-que-parfait, conditionnel.",
        },
      },
      {
        kind: "table",
        title: { fr: "Les marqueurs de temps changent aussi", en: "Time markers shift too", uk: "Маркери часу теж змінюються" },
        head: [{ fr: "Direct", en: "Direct", uk: "Пряма мова" }, { fr: "→ Rapporté", en: "→ Reported", uk: "→ Непряма мова" }, { fr: "Direct", en: "Direct", uk: "Пряма мова" }, { fr: "→ Rapporté", en: "→ Reported", uk: "→ Непряма мова" }],
        rows: [
          ["aujourd'hui", "ce jour-là", "hier", "la veille"],
          ["demain", "le lendemain", "après-demain", "le surlendemain"],
          ["maintenant", "à ce moment-là", "ici", "là"],
          ["la semaine prochaine", "la semaine suivante", "la semaine dernière", "la semaine précédente"],
          ["il y a deux jours", "deux jours plus tôt", "dans deux jours", "deux jours plus tard"],
        ],
      },
      {
        kind: "rule",
        title: { fr: "L'exemple complet", en: "The full example", uk: "Повний приклад" },
        body: {
          fr: "« Hier j'ai visité un appartement, et demain je signerai le bail. » → Il m'a dit que la veille il avait visité un appartement et que le lendemain il signerait le bail. Trois changements en même temps : temps, personne, marqueur.",
          en: "“Yesterday I viewed a flat, and tomorrow I'll sign the lease.” → Il m'a dit que la veille il avait visité un appartement et que le lendemain il signerait le bail. Three changes at once: tense, person, marker.",
          uk: "Три зміни одночасно: час, особа, маркер.",
        },
      },
    ],
    pitfalls: [
      {
        bad: "Il a dit qu'il venait demain.",
        good: "Il a dit qu'il viendrait le lendemain.",
        why: { fr: "Le futur devient CONDITIONNEL, pas imparfait — et « demain » devient « le lendemain ».", en: "The future becomes the CONDITIONAL, not the imparfait — and “demain” becomes “le lendemain”.", uk: "Майбутнє стає УМОВНИМ, не imparfait." },
      },
      {
        bad: "Il dit qu'il était fatigué.",
        good: "Il dit qu'il est fatigué.",
        why: { fr: "Le recul ne s'applique QUE si le verbe introducteur est au passé. « il dit » est au présent.", en: "The shift applies ONLY if the reporting verb is in the past. “il dit” is present.", uk: "Зсув діє ЛИШЕ якщо ввідне дієслово в минулому." },
      },
    ],
    examples: [
      { fr: "Il a expliqué qu'il {av:stem}{ait:end} {abattu:part} le mur la semaine précédente.", en: "He explained that he had knocked the wall down the week before.", uk: "Він пояснив, що зніс стіну попереднього тижня." },
      { fr: "Elle a répondu qu'elle {all:stem}{ait:end} {rappeler:inf} l'artisan.", en: "She replied that she was going to call the tradesman back.", uk: "Вона відповіла, що збиралася передзвонити майстрові." },
      { fr: "Ils ont promis qu'ils {finir:stem}{aient:end} les travaux avant l'hiver.", en: "They promised they would finish the work before winter.", uk: "Вони пообіцяли, що закінчать роботи до зими." },
    ],
    related: [
      { id: "discours-rapporte", why: { fr: "La version simple, quand rien ne recule.", en: "The simple version, when nothing shifts.", uk: "Проста версія, коли нічого не зсувається." } },
      { id: "plus-que-parfait", why: { fr: "C'est le temps d'arrivée du passé composé.", en: "It's where the passé composé lands.", uk: "Сюди «приземляється» passé composé." } },
      { id: "conditionnel-present", why: { fr: "C'est le temps d'arrivée du futur simple.", en: "It's where the futur simple lands.", uk: "Сюди «приземляється» futur simple." } },
    ],
  },

  // ========== RESTRICTION ==========
  {
    id: "restriction",
    name: "La restriction",
    section: "structures",
    badge: "essentiel",
    tagline: {
      fr: "Dire « seulement » de quatre façons — dont une qui ressemble à une négation sans en être une.",
      en: "Four ways to say “only” — one of which looks like a negation but isn't.",
      uk: "Чотири способи сказати «лише» — один із них схожий на заперечення, але ним не є.",
    },
    blocks: [
      {
        kind: "table",
        title: { fr: "Les quatre structures", en: "The four structures", uk: "Чотири структури" },
        head: [{ fr: "Structure", en: "Structure", uk: "Структура" }, { fr: "Nature", en: "Nature", uk: "Тип" }, { fr: "Exemple", en: "Example", uk: "Приклад" }],
        rows: [
          ["{ne … que:end}", { fr: "locution restrictive — porte sur ce qui suit <b>que</b>", en: "restrictive phrase — it restricts what follows <b>que</b>", uk: "обмежувальний зворот — стосується того, що йде після <b>que</b>" }, { fr: "Je <b>ne</b> bois <b>que</b> de l'eau.", en: "Je <b>ne</b> bois <b>que</b> de l'eau. — I drink only water.", uk: "Je <b>ne</b> bois <b>que</b> de l'eau. — Я п'ю лише воду." }],
          ["{seulement:end}", { fr: "adverbe, placement souple", en: "adverb, flexible position", uk: "прислівник, вільне місце" }, { fr: "Je bois <b>seulement</b> de l'eau.", en: "I drink <b>seulement</b> (only) water.", uk: "Я п'ю <b>seulement</b> (лише) воду." }],
          ["{seul(e)(s):end}", { fr: "adjectif — il s'accorde", en: "adjective — it agrees", uk: "прикметник — узгоджується" }, { fr: "<b>Seul</b> Paul est venu. / Elle est la <b>seule</b> à savoir.", en: "<b>Seul</b> (only) Paul came. / She's the <b>seule</b> (only one) who knows.", uk: "<b>Seul</b> (лише) Поль прийшов. / Вона <b>seule</b> (єдина), хто знає." }],
          ["{ne … pas que:end}", { fr: "« pas seulement »", en: "“not only”", uk: "«не тільки»" }, { fr: "Il <b>n'</b>y a <b>pas que</b> le travail dans la vie.", en: "Il <b>n'</b>y a <b>pas que</b> le travail dans la vie. — There's more to life than work.", uk: "Il <b>n'</b>y a <b>pas que</b> le travail dans la vie. — У житті є не лише робота." }],
        ],
      },
      {
        kind: "rule",
        title: { fr: "Où placer « que » ?", en: "Where to put “que”?", uk: "Куди ставити «que»?" },
        body: {
          fr: "« que » se met juste devant l'élément restreint. Temps simple : Il ne mange qu'une pomme. Temps composé : Il n'a mangé qu'une pomme — « que » passe APRÈS le participe. Avec un infinitif : Il ne veut que dormir.",
          en: "“que” goes right before the restricted element. Simple tense: Il ne mange qu'une pomme. Compound: Il n'a mangé qu'une pomme — “que” comes AFTER the participle. With an infinitive: Il ne veut que dormir.",
          uk: "«que» ставиться безпосередньо перед обмеженим елементом.",
        },
      },
      {
        kind: "rule",
        title: { fr: "Le point qui rapporte des points", en: "The point that earns marks", uk: "Пункт, що приносить бали" },
        body: {
          fr: "« ne… que » n'est PAS une négation. Les articles ne changent donc pas : Je ne bois que DU café. Comparez avec la vraie négation : Je ne bois PAS DE café.",
          en: "“ne… que” is NOT a negation. So the articles stay: Je ne bois que DU café. Compare the real negation: Je ne bois PAS DE café.",
          uk: "«ne… que» — НЕ заперечення. Тому артиклі не змінюються.",
        },
      },
      {
        kind: "rule",
        title: { fr: "Le faux ami : n'avoir qu'à", en: "The false friend: n'avoir qu'à", uk: "Оманливий друг: n'avoir qu'à" },
        body: {
          fr: "« n'avoir qu'à + infinitif » n'exprime pas la restriction mais le conseil ou le reproche : Tu n'as qu'à lui demander. = Il suffit que tu lui demandes.",
          en: "“n'avoir qu'à + infinitive” expresses advice or reproach, not restriction: Tu n'as qu'à lui demander. = You just have to ask him.",
          uk: "«n'avoir qu'à + інфінітив» — це порада або докір, а не обмеження.",
        },
      },
    ],
    pitfalls: [
      {
        bad: "Je ne bois que d'eau.",
        good: "Je ne bois que de l'eau.",
        why: { fr: "Ce n'est pas une négation : le partitif « de l' » reste entier.", en: "It's not a negation: the partitive “de l'” stays whole.", uk: "Це не заперечення: партитивний артикль лишається." },
      },
      {
        bad: "Il n'a qu'mangé une pomme.",
        good: "Il n'a mangé qu'une pomme.",
        why: { fr: "Aux temps composés, « que » se place après le participe passé, devant l'élément restreint.", en: "In compound tenses, “que” goes after the past participle, before the restricted element.", uk: "У складних часах «que» стоїть після дієприкметника." },
      },
      {
        bad: "Seul Marie est venue.",
        good: "Seule Marie est venue.",
        why: { fr: "« seul » est un adjectif : il s'accorde avec le nom qu'il détermine.", en: "“seul” is an adjective: it agrees with its noun.", uk: "«seul» — прикметник: узгоджується з іменником." },
      },
    ],
    examples: [
      { fr: "Ce cinéma {ne:pron} passe {que:end} des films en v.o.", en: "This cinema only shows films in the original version.", uk: "Цей кінотеатр показує лише фільми мовою оригіналу." },
      { fr: "Nous {n':pron}avons {visité:part} {que:end} deux appartements cette semaine.", en: "We only viewed two flats this week.", uk: "Цього тижня ми оглянули лише дві квартири." },
      { fr: "Tu {n':pron}as {qu':end}à demander un devis avant de décider.", en: "You just have to ask for a quote before deciding.", uk: "Тобі достатньо попросити кошторис перед рішенням." },
    ],
    related: [
      { id: "passe-compose", why: { fr: "Le placement de « que » se joue autour du participe passé.", en: "Where “que” goes depends on the past participle.", uk: "Місце «que» залежить від дієприкметника." } },
    ],
  },

  // ========== CAUSE & CONSÉQUENCE ==========
  {
    id: "cause-consequence",
    name: "La cause et la conséquence",
    section: "connecteurs",
    badge: "essentiel",
    tagline: {
      fr: "Deux questions : pourquoi ? et alors ? Le choix du connecteur dépend de ce qui suit (nom ou phrase) et du registre.",
      en: "Two questions: why? and so what? The connector depends on what follows (noun or clause) and on register.",
      uk: "Два питання: чому? і то й що? Вибір сполучника залежить від того, що йде далі, і від регістру.",
    },
    blocks: [
      {
        kind: "table",
        title: { fr: "La CAUSE — pourquoi ?", en: "CAUSE — why?", uk: "ПРИЧИНА — чому?" },
        head: [{ fr: "Connecteur", en: "Connector", uk: "Сполучник" }, { fr: "Suivi de", en: "Followed by", uk: "Після нього" }, { fr: "Nuance", en: "Nuance", uk: "Нюанс" }, { fr: "Exemple", en: "Example", uk: "Приклад" }],
        rows: [
          ["{parce que:end}", { fr: "proposition", en: "clause", uk: "підрядне речення" }, { fr: "neutre, répond à « pourquoi ? »", en: "neutral, answers “why?”", uk: "нейтральне, відповідає на «чому?»" }, { fr: "Je suis en retard <b>parce qu'</b>il y a une grève.", en: "I'm late <b>parce qu'</b> (because) there's a strike.", uk: "Я запізнююся, <b>parce qu'</b> (бо) триває страйк." }],
          ["{car:end}", { fr: "proposition", en: "clause", uk: "підрядне речення" }, { fr: "écrit ; relie deux propositions, ne commence pas la phrase", en: "written; links two clauses, never starts the sentence", uk: "письмове; з'єднує дві частини, не починає речення" }, { fr: "Il est resté, <b>car</b> il pleuvait.", en: "He stayed, <b>car</b> (because) it was raining.", uk: "Він залишився, <b>car</b> (бо) йшов дощ." }],
          ["{comme:end}", { fr: "proposition", en: "clause", uk: "підрядне речення" }, { fr: "toujours en tête de phrase", en: "always at the start of the sentence", uk: "завжди на початку речення" }, { fr: "<b>Comme</b> il pleuvait, il est resté.", en: "<b>Comme</b> (since) it was raining, he stayed.", uk: "<b>Comme</b> (оскільки) йшов дощ, він залишився." }],
          ["{puisque:end}", { fr: "proposition", en: "clause", uk: "підрядне речення" }, { fr: "cause connue de tous, évidente", en: "cause known to all, obvious", uk: "причина відома всім, очевидна" }, { fr: "<b>Puisque</b> tu es là, aide-moi.", en: "<b>Puisque</b> (since) you're here, help me.", uk: "<b>Puisque</b> (раз уже) ти тут, допоможи мені." }],
          ["{étant donné que:end}", { fr: "proposition", en: "clause", uk: "підрядне речення" }, { fr: "formel, écrit", en: "formal, written", uk: "формальне, письмове" }, { fr: "<b>Étant donné qu'</b>il n'y a plus de place…", en: "<b>Étant donné qu'</b> (given that) there's no room left…", uk: "<b>Étant donné qu'</b> (з огляду на те, що) місць більше немає…" }],
          ["{vu que:end}", { fr: "proposition", en: "clause", uk: "підрядне речення" }, { fr: "oral, familier", en: "spoken, informal", uk: "усне, розмовне" }, { fr: "<b>Vu qu'</b>il pleuvait, on est restés.", en: "<b>Vu qu'</b> (seeing as) it was raining, we stayed.", uk: "<b>Vu qu'</b> (раз) йшов дощ, ми залишилися." }],
          ["{à cause de:end}", { fr: "<b>nom</b>", en: "<b>noun</b>", uk: "<b>іменник</b>" }, { fr: "résultat négatif", en: "negative result", uk: "негативний результат" }, { fr: "Il est arrivé en retard <b>à cause du</b> trafic.", en: "He arrived late <b>à cause du</b> (because of) traffic.", uk: "Він приїхав пізно <b>à cause du</b> (через) затори." }],
          ["{grâce à:end}", { fr: "<b>nom</b>", en: "<b>noun</b>", uk: "<b>іменник</b>" }, { fr: "résultat positif", en: "positive result", uk: "позитивний результат" }, { fr: "J'ai réussi <b>grâce à</b> ma prof.", en: "I passed <b>grâce à</b> (thanks to) my teacher.", uk: "Я склав <b>grâce à</b> (завдяки) моїй викладачці." }],
          ["{en raison de:end}", { fr: "<b>nom</b>", en: "<b>noun</b>", uk: "<b>іменник</b>" }, { fr: "neutre, formel / administratif", en: "neutral, formal / official", uk: "нейтральне, формальне / офіційне" }, { fr: "Fermé <b>en raison des</b> travaux.", en: "Closed <b>en raison des</b> (due to) the works.", uk: "Зачинено <b>en raison des</b> (через) ремонтні роботи." }],
          ["{faute de:end}", { fr: "<b>nom</b>", en: "<b>noun</b>", uk: "<b>іменник</b>" }, { fr: "par manque de", en: "for lack of", uk: "через брак" }, { fr: "<b>Faute de</b> temps, il a abandonné.", en: "<b>Faute de</b> (for lack of) time, he gave up.", uk: "<b>Faute de</b> (через брак) часу він здався." }],
        ],
      },
      {
        kind: "table",
        title: { fr: "La CONSÉQUENCE — et alors ?", en: "CONSEQUENCE — so what?", uk: "НАСЛІДОК — то й що?" },
        head: [{ fr: "Connecteur", en: "Connector", uk: "Сполучник" }, { fr: "Registre", en: "Register", uk: "Регістр" }, { fr: "Exemple", en: "Example", uk: "Приклад" }],
        rows: [
          ["{donc:end}", { fr: "neutre", en: "neutral", uk: "нейтральне" }, { fr: "Il pleuvait, <b>donc</b> je suis resté.", en: "It was raining, <b>donc</b> (so) I stayed in.", uk: "Йшов дощ, <b>donc</b> (тож) я залишився вдома." }],
          ["{alors:end}", { fr: "oral", en: "spoken", uk: "усне" }, { fr: "Il pleuvait, <b>alors</b> je suis resté.", en: "It was raining, <b>alors</b> (so) I stayed in.", uk: "Йшов дощ, <b>alors</b> (тож) я залишився вдома." }],
          ["{du coup:end}", { fr: "oral, familier", en: "spoken, informal", uk: "усне, розмовне" }, { fr: "Il pleuvait, <b>du coup</b> je suis resté.", en: "It was raining, <b>du coup</b> (so) I stayed in.", uk: "Йшов дощ, <b>du coup</b> (тому) я залишився вдома." }],
          ["{par conséquent:end}", { fr: "formel, écrit", en: "formal, written", uk: "формальне, письмове" }, { fr: "Les prix montent ; <b>par conséquent</b>, la demande baisse.", en: "Prices are rising; <b>par conséquent</b> (consequently), demand is falling.", uk: "Ціни зростають; <b>par conséquent</b> (отже), попит падає." }],
          ["{c'est pourquoi:end}", { fr: "neutre / écrit", en: "neutral / written", uk: "нейтральне / письмове" }, { fr: "Il n'avait pas révisé, <b>c'est pourquoi</b> il a échoué.", en: "He hadn't revised, <b>c'est pourquoi</b> (that's why) he failed.", uk: "Він не повторив матеріал, <b>c'est pourquoi</b> (тому) провалився." }],
          ["{ce qui fait que:end}", { fr: "oral", en: "spoken", uk: "усне" }, { fr: "Il a plu, <b>ce qui fait que</b> tout est mouillé.", en: "It rained, <b>ce qui fait que</b> (so) everything is wet.", uk: "Пройшов дощ, <b>ce qui fait que</b> (тому) все мокре." }],
          ["{si bien que:end}", { fr: "écrit", en: "written", uk: "письмове" }, { fr: "Il a couru, <b>si bien qu'</b>il est arrivé à l'heure.", en: "He ran, <b>si bien qu'</b> (so that) he arrived on time.", uk: "Він біг, <b>si bien qu'</b> (тож) прибув вчасно." }],
          ["{si / tellement + adj. + que:end}", { fr: "intensité", en: "intensity", uk: "інтенсивність" }, { fr: "Il était <b>si</b> fatigué <b>qu'</b>il s'est endormi.", en: "He was <b>si</b> (so) tired <b>qu'</b> (that) he fell asleep.", uk: "Він був <b>si</b> (такий) втомлений, <b>qu'</b> (що) заснув." }],
          ["{tellement / tant de + nom + que:end}", { fr: "intensité", en: "intensity", uk: "інтенсивність" }, { fr: "Il y avait <b>tant de</b> monde <b>que</b> je suis parti.", en: "There were <b>tant de</b> (so many) people <b>que</b> (that) I left.", uk: "Було <b>tant de</b> (стільки) людей, <b>que</b> (що) я пішов." }],
        ],
      },
      {
        kind: "list",
        title: { fr: "Avec un verbe ou un nom", en: "With a verb or a noun", uk: "З дієсловом або іменником" },
        items: [
          { fr: "entraîner · provoquer · causer — La grève a provoqué des retards.", en: "entraîner · provoquer · causer — La grève a provoqué des retards.", uk: "entraîner · provoquer · causer" },
          { fr: "avoir pour conséquence — Cela a eu pour conséquence une hausse des prix.", en: "avoir pour conséquence — Cela a eu pour conséquence une hausse des prix.", uk: "avoir pour conséquence" },
          { fr: "être à l'origine de — Tinguely est à l'origine du Cyclop.", en: "être à l'origine de — Tinguely est à l'origine du Cyclop.", uk: "être à l'origine de" },
          { fr: "s'expliquer par · résulter de — Ce succès s'explique par le bouche-à-oreille.", en: "s'expliquer par · résulter de — Ce succès s'explique par le bouche-à-oreille.", uk: "s'expliquer par · résulter de" },
        ],
      },
    ],
    pitfalls: [
      {
        bad: "à cause de il pleuvait",
        good: "à cause de la pluie / parce qu'il pleuvait",
        why: { fr: "« à cause de » est suivi d'un NOM ; pour une phrase, il faut « parce que ».", en: "“à cause de” takes a NOUN; for a clause you need “parce que”.", uk: "«à cause de» вимагає ІМЕННИКА; для речення потрібне «parce que»." },
      },
      {
        bad: "grâce à l'accident",
        good: "à cause de l'accident",
        why: { fr: "« grâce à » ne s'emploie que pour un résultat positif.", en: "“grâce à” is only for a positive outcome.", uk: "«grâce à» вживається лише для позитивного результату." },
      },
      {
        bad: "à cause de le trafic",
        good: "à cause du trafic",
        why: { fr: "Contractions obligatoires : de + le = du, de + les = des ; à + le = au, à + les = aux.", en: "Contractions are compulsory: de + le = du, de + les = des; à + le = au, à + les = aux.", uk: "Обов'язкові злиття артиклів." },
      },
      {
        bad: "Car il pleuvait, il est resté.",
        good: "Comme il pleuvait, il est resté.",
        why: { fr: "« car » relie deux propositions et ne peut pas ouvrir la phrase ; « comme » l'ouvre toujours.", en: "“car” links two clauses and can't open the sentence; “comme” always opens it.", uk: "«car» з'єднує дві частини й не відкриває речення; «comme» — завжди відкриває." },
      },
    ],
    examples: [
      { fr: "{Comme:end} le quartier est très bien desservi, les loyers y sont élevés.", en: "Since the area is very well served by transport, rents there are high.", uk: "Оскільки район добре сполучений, оренда там висока." },
      { fr: "Le chantier a pris du retard {à cause des:end} intempéries, {c'est pourquoi:end} le devis a augmenté.", en: "The building site fell behind because of bad weather, which is why the quote went up.", uk: "Будівництво затрималося через негоду, тому кошторис зріс." },
      { fr: "L'œuvre était {tellement:end} saisissante {que:end} je suis resté une heure devant.", en: "The work was so striking that I stayed in front of it for an hour.", uk: "Твір був настільки вражаючим, що я простояв перед ним годину." },
    ],
    related: [
      { id: "gerondif", why: { fr: "Le gérondif exprime aussi la cause : il s'est blessé en tombant.", en: "The gérondif also expresses cause: il s'est blessé en tombant.", uk: "Gérondif також виражає причину." } },
    ],
  },
];
