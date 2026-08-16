// Auto-split from the original tenses-app data.ts — shared by all three apps.
import type { Tense } from "./types";

export type { Tense };

export const TENSES: Tense[] = [
  // ========== 1. PRÉSENT ==========
  {
    id: "present",
    name: "Le présent",
    badge: "essentiel",
    tagline: {
      fr: "Le temps de base : maintenant, les habitudes, les vérités générales. Tous les autres temps se construisent à partir de lui.",
      en: "The base tense: now, habits, general truths. All the other tenses are built from it.",
      uk: "Базовий час: зараз, звички, загальні істини. Усі інші часи будуються від нього.",
    },
    usage: [
      {
        fr: "Ce qui se passe maintenant : « Je travaille en ce moment. »",
        en: "What is happening now: “I am working right now.”",
        uk: "Те, що відбувається зараз: «Я працюю в цей момент».",
      },
      {
        fr: "Les habitudes : « Je prends le métro tous les jours. »",
        en: "Habits: “I take the metro every day.”",
        uk: "Звички: «Я їжджу на метро щодня».",
      },
      {
        fr: "Les vérités générales : « Paris est la capitale de la France. »",
        en: "General truths: “Paris is the capital of France.”",
        uk: "Загальні істини: «Париж — столиця Франції».",
      },
      {
        fr: "Avec « depuis » pour une action qui continue : « J'habite à Paris depuis deux ans. »",
        en: "With “depuis” for an action that continues: “I have lived in Paris for two years.” (French uses the present!)",
        uk: "З «depuis» для дії, що триває: «Я живу в Парижі вже два роки». (Французька вживає теперішній час!)",
      },
    ],
    formula: "sujet + {radical:stem} + {terminaison:end}",
    formulaNotes: [
      {
        fr: "Verbes en -er : radical = infinitif sans -er (parler → parl-).",
        en: "-er verbs: stem = infinitive without -er (parler → parl-).",
        uk: "Дієслова на -er: основа = інфінітив без -er (parler → parl-).",
      },
      {
        fr: "Prononciation : -e, -es, -e et -ent sont muets → 4 formes sur 6 se prononcent pareil !",
        en: "Pronunciation: -e, -es, -e and -ent are silent → 4 of the 6 forms sound the same!",
        uk: "Вимова: -e, -es, -e та -ent німі → 4 з 6 форм звучать однаково!",
      },
    ],
    tables: [
      {
        title: {
          fr: "Modèle : parler (verbes en -er, ~90 % des verbes)",
          en: "Model: parler (-er verbs, ~90% of all verbs)",
          uk: "Зразок: parler (дієслова на -er, ~90 % дієслів)",
        },
        rows: [
          { pronoun: "je", form: "{parl:stem}{e:end}" },
          { pronoun: "tu", form: "{parl:stem}{es:end}" },
          { pronoun: "il / elle / on", form: "{parl:stem}{e:end}" },
          { pronoun: "nous", form: "{parl:stem}{ons:end}" },
          { pronoun: "vous", form: "{parl:stem}{ez:end}" },
          { pronoun: "ils / elles", form: "{parl:stem}{ent:end}" },
        ],
      },
    ],
    extra: {
      title: {
        fr: "Les 4 irréguliers vitaux",
        en: "The 4 vital irregulars",
        uk: "4 життєво важливі неправильні дієслова",
      },
      rows: [
        { pronoun: "être", form: "suis · es · est · sommes · êtes · sont" },
        { pronoun: "avoir", form: "ai · as · a · avons · avez · ont" },
        { pronoun: "aller", form: "vais · vas · va · allons · allez · vont" },
        { pronoun: "faire", form: "fais · fais · fait · faisons · faites · font" },
      ],
      footnote: {
        fr: "À apprendre par cœur : ils servent aussi à construire les autres temps.",
        en: "Learn these by heart: they are also used to build the other tenses.",
        uk: "Вивчіть напам'ять: вони також потрібні для утворення інших часів.",
      },
    },
    mnemo: {
      fr: "Le présent est le HUB : nous → imparfait, aller → futur proche, venir → passé récent, avoir/être → passé composé.",
      en: "The present is the HUB: nous → imparfait, aller → futur proche, venir → passé récent, avoir/être → passé composé.",
      uk: "Теперішній час — це ЦЕНТР: nous → imparfait, aller → futur proche, venir → passé récent, avoir/être → passé composé.",
    },
    examples: [
      {
        fr: "J'{habit:stem}{e:end} à Paris depuis deux ans.",
        en: "I have lived in Paris for two years.",
        uk: "Я живу в Парижі вже два роки.",
        note: {
          fr: "depuis + présent (pas de passé !)",
          en: "depuis + present (not past!)",
          uk: "depuis + теперішній час (не минулий!)",
        },
      },
      {
        fr: "Elle {prend:stem} le métro à huit heures.",
        en: "She takes the metro at eight o'clock.",
        uk: "Вона їде на метро о восьмій годині.",
      },
      {
        fr: "Nous {parl:stem}{ons:end} anglais au bureau.",
        en: "We speak English at the office.",
        uk: "Ми розмовляємо англійською в офісі.",
      },
      {
        fr: "Qu'est-ce que tu {fais:stem} ce week-end ?",
        en: "What are you doing this weekend?",
        uk: "Що ти робиш на цих вихідних?",
        note: {
          fr: "Le présent peut parler du futur proche avec un mot de temps.",
          en: "The present can refer to the near future with a time word.",
          uk: "Теперішній час може означати близьке майбутнє зі словом часу.",
        },
      },
    ],
    related: [
      {
        id: "imparfait",
        why: {
          fr: "Le radical de l'imparfait = la forme « nous » du présent.",
          en: "The imparfait stem = the “nous” form of the present.",
          uk: "Основа imparfait = форма «nous» теперішнього часу.",
        },
      },
      {
        id: "imperatif",
        why: {
          fr: "L'impératif = le présent sans sujet (tu / nous / vous).",
          en: "The imperative = the present without a subject (tu / nous / vous).",
          uk: "Наказовий спосіб = теперішній час без підмета (tu / nous / vous).",
        },
      },
      {
        id: "futur-proche",
        why: {
          fr: "Futur proche = aller au présent + infinitif.",
          en: "Futur proche = aller in the present + infinitive.",
          uk: "Futur proche = aller у теперішньому часі + інфінітив.",
        },
      },
    ],
  },

  // ========== 2. PASSÉ COMPOSÉ ==========
  {
    id: "passe-compose",
    name: "Le passé composé",
    badge: "essentiel",
    tagline: {
      fr: "Le passé des actions terminées. C'est LE temps pour raconter ce qui s'est passé.",
      en: "The past of completed actions. THE tense for telling what happened.",
      uk: "Минулий час завершених дій. ГОЛОВНИЙ час, щоб розповісти, що сталося.",
    },
    usage: [
      {
        fr: "Une action finie, souvent datée : « Hier, j'ai visité le Louvre. »",
        en: "A finished action, often with a date: “Yesterday I visited the Louvre.”",
        uk: "Завершена дія, часто з датою: «Учора я відвідав Лувр».",
      },
      {
        fr: "Une suite d'actions : « Je me suis levé, j'ai pris un café et je suis parti. »",
        en: "A sequence of actions: “I got up, had a coffee and left.”",
        uk: "Послідовність дій: «Я встав, випив каву і пішов».",
      },
      {
        fr: "L'événement qui interrompt le décor : « Je dormais quand le téléphone a sonné. »",
        en: "The event that interrupts the background: “I was sleeping when the phone rang.”",
        uk: "Подія, що перериває тло: «Я спав, коли задзвонив телефон».",
      },
    ],
    formula: "sujet + {avoir / être au présent:aux} + {participe passé:part}",
    formulaNotes: [
      {
        fr: "Participe passé : -er → -é (mangé) · -ir → -i (fini) · -re → -u (vendu).",
        en: "Past participle: -er → -é (mangé) · -ir → -i (fini) · -re → -u (vendu).",
        uk: "Дієприкметник: -er → -é (mangé) · -ir → -i (fini) · -re → -u (vendu).",
      },
      {
        fr: "Avec être, le participe s'accorde : elle est allée, ils sont partis.",
        en: "With être, the participle agrees: elle est allée, ils sont partis.",
        uk: "З être дієприкметник узгоджується: elle est allée, ils sont partis.",
      },
    ],
    tables: [
      {
        title: {
          fr: "Avec avoir : manger",
          en: "With avoir: manger",
          uk: "З avoir: manger",
        },
        rows: [
          { pronoun: "j'", form: "{ai:aux} {mangé:part}" },
          { pronoun: "tu", form: "{as:aux} {mangé:part}" },
          { pronoun: "il / elle", form: "{a:aux} {mangé:part}" },
          { pronoun: "nous", form: "{avons:aux} {mangé:part}" },
          { pronoun: "vous", form: "{avez:aux} {mangé:part}" },
          { pronoun: "ils / elles", form: "{ont:aux} {mangé:part}" },
        ],
      },
      {
        title: {
          fr: "Avec être : aller (accord !)",
          en: "With être: aller (agreement!)",
          uk: "З être: aller (узгодження!)",
        },
        rows: [
          { pronoun: "je", form: "{suis:aux} {allé(e):part}" },
          { pronoun: "tu", form: "{es:aux} {allé(e):part}" },
          { pronoun: "elle", form: "{est:aux} {allée:part}" },
          { pronoun: "nous", form: "{sommes:aux} {allé(e)s:part}" },
          { pronoun: "vous", form: "{êtes:aux} {allé(e)(s):part}" },
          { pronoun: "elles", form: "{sont:aux} {allées:part}" },
        ],
      },
    ],
    extra: {
      title: {
        fr: "Qui prend être ? (la « maison d'être ») + participes irréguliers",
        en: "Which verbs take être? (the “house of être”) + irregular participles",
        uk: "Які дієслова беруть être? («дім être») + неправильні дієприкметники",
      },
      rows: [
        {
          pronoun: "être + mouvement",
          form: "aller · venir · arriver · partir · entrer · sortir · monter · descendre · rester · tomber · retourner · passer · naître · mourir",
        },
        {
          pronoun: "être + pronominaux",
          form: "se lever · se coucher · s'habiller · se réveiller…",
        },
        {
          pronoun: "participes irréguliers",
          form: "être → été · avoir → eu · faire → fait · prendre → pris · voir → vu · boire → bu · lire → lu · pouvoir → pu · vouloir → voulu · venir → venu · mettre → mis · dire → dit · écrire → écrit · ouvrir → ouvert",
        },
      ],
      footnote: {
        fr: "Tous les autres verbes prennent avoir (≈ 95 % des verbes).",
        en: "All other verbs take avoir (≈ 95% of verbs).",
        uk: "Усі інші дієслова беруть avoir (≈ 95 % дієслів).",
      },
    },
    mnemo: {
      fr: "Le passé composé = une PHOTO : clic ! L'action est capturée, finie. (L'imparfait, lui, c'est la vidéo.)",
      en: "The passé composé = a PHOTO: click! The action is captured, finished. (The imparfait is the video.)",
      uk: "Passé composé = ФОТО: клац! Дію зафіксовано, завершено. (А imparfait — це відео.)",
    },
    examples: [
      {
        fr: "Hier soir, nous {avons:aux} {mangé:part} au restaurant.",
        en: "Last night we ate at a restaurant.",
        uk: "Учора ввечері ми повечеряли в ресторані.",
      },
      {
        fr: "Elle {est:aux} {arrivée:part} à Paris en 2024.",
        en: "She arrived in Paris in 2024.",
        uk: "Вона приїхала до Парижа у 2024 році.",
        note: {
          fr: "arriver → être → accord : arrivée.",
          en: "arriver → être → agreement: arrivée.",
          uk: "arriver → être → узгодження: arrivée.",
        },
      },
      {
        fr: "J'{ai:aux} déjà {vu:part} ce film.",
        en: "I have already seen this film.",
        uk: "Я вже бачив цей фільм.",
        note: {
          fr: "« déjà » se place entre l'auxiliaire et le participe.",
          en: "“déjà” goes between the auxiliary and the participle.",
          uk: "«déjà» ставиться між допоміжним дієсловом і дієприкметником.",
        },
      },
      {
        fr: "Ils {se:pron} {sont:aux} {levés:part} très tôt ce matin.",
        en: "They got up very early this morning.",
        uk: "Вони встали дуже рано сьогодні вранці.",
        note: {
          fr: "Verbe pronominal → être.",
          en: "Reflexive verb → être.",
          uk: "Зворотне дієслово → être.",
        },
      },
    ],
    related: [
      {
        id: "imparfait",
        why: {
          fr: "Le duo du passé : passé composé = l'action (photo), imparfait = le décor (vidéo).",
          en: "The past-tense duo: passé composé = the action (photo), imparfait = the background (video).",
          uk: "Дует минулого: passé composé = дія (фото), imparfait = тло (відео).",
        },
      },
      {
        id: "present",
        why: {
          fr: "L'auxiliaire (avoir/être) se conjugue au présent.",
          en: "The auxiliary (avoir/être) is conjugated in the present.",
          uk: "Допоміжне дієслово (avoir/être) відмінюється в теперішньому часі.",
        },
      },
      {
        id: "passe-recent",
        why: {
          fr: "Action très récente ? « Je viens de manger » plutôt que « j'ai mangé il y a 5 minutes ».",
          en: "Very recent action? “Je viens de manger” rather than “j'ai mangé 5 minutes ago”.",
          uk: "Щойно завершена дія? «Je viens de manger», а не «j'ai mangé» 5 хвилин тому.",
        },
      },
    ],
  },

  // ========== 3. IMPARFAIT ==========
  {
    id: "imparfait",
    name: "L'imparfait",
    badge: "essentiel",
    tagline: {
      fr: "Le décor du passé : descriptions, habitudes, actions en cours. La caméra qui filme l'arrière-plan.",
      en: "The background of the past: descriptions, habits, ongoing actions. The camera filming the scene.",
      uk: "Тло минулого: описи, звички, тривалі дії. Камера, що знімає задній план.",
    },
    usage: [
      {
        fr: "Description dans le passé (météo, lieux, sentiments) : « Il faisait beau, j'étais content. »",
        en: "Description in the past (weather, places, feelings): “The weather was nice, I was happy.”",
        uk: "Опис у минулому (погода, місця, почуття): «Була гарна погода, я був задоволений».",
      },
      {
        fr: "Habitude passée : « Quand j'étais petit, je jouais au foot le dimanche. »",
        en: "Past habit: “When I was little, I played football on Sundays.”",
        uk: "Звичка в минулому: «Коли я був малим, я грав у футбол щонеділі».",
      },
      {
        fr: "Action en cours, interrompue par un événement : « Je dormais quand tu as appelé. »",
        en: "Ongoing action interrupted by an event: “I was sleeping when you called.”",
        uk: "Тривала дія, перервана подією: «Я спав, коли ти подзвонив».",
      },
    ],
    formula: "sujet + {radical de « nous » au présent:stem} + {-ais, -ais, -ait, -ions, -iez, -aient:end}",
    formulaNotes: [
      {
        fr: "Radical = la forme « nous » du présent sans -ons : nous faisons → fais- ; nous finissons → finiss-.",
        en: "Stem = the present “nous” form without -ons: nous faisons → fais-; nous finissons → finiss-.",
        uk: "Основа = форма «nous» теперішнього часу без -ons: nous faisons → fais-; nous finissons → finiss-.",
      },
      {
        fr: "Une seule exception dans toute la langue : être → ét- (j'étais).",
        en: "Only one exception in the whole language: être → ét- (j'étais).",
        uk: "Єдиний виняток у всій мові: être → ét- (j'étais).",
      },
      {
        fr: "Prononciation : -ais, -ait, -aient se prononcent tous « è ».",
        en: "Pronunciation: -ais, -ait, -aient are all pronounced “è”.",
        uk: "Вимова: -ais, -ait, -aient усі вимовляються як «е».",
      },
    ],
    tables: [
      {
        title: {
          fr: "Modèle : faire (nous faisons → fais-)",
          en: "Model: faire (nous faisons → fais-)",
          uk: "Зразок: faire (nous faisons → fais-)",
        },
        rows: [
          { pronoun: "je", form: "{fais:stem}{ais:end}" },
          { pronoun: "tu", form: "{fais:stem}{ais:end}" },
          { pronoun: "il / elle", form: "{fais:stem}{ait:end}" },
          { pronoun: "nous", form: "{fais:stem}{ions:end}" },
          { pronoun: "vous", form: "{fais:stem}{iez:end}" },
          { pronoun: "ils / elles", form: "{fais:stem}{aient:end}" },
        ],
        footnote: {
          fr: "être : j'étais, tu étais, il était, nous étions, vous étiez, ils étaient.",
          en: "être: j'étais, tu étais, il était, nous étions, vous étiez, ils étaient.",
          uk: "être: j'étais, tu étais, il était, nous étions, vous étiez, ils étaient.",
        },
      },
    ],
    mnemo: {
      fr: "L'imparfait = la VIDÉO qui tourne en fond. Mots-signaux : avant, quand j'étais…, tous les jours, pendant que, souvent, d'habitude.",
      en: "The imparfait = the VIDEO running in the background. Signal words: avant, quand j'étais…, tous les jours, pendant que, souvent, d'habitude.",
      uk: "Imparfait = ВІДЕО, що крутиться на тлі. Слова-сигнали: avant, quand j'étais…, tous les jours, pendant que, souvent, d'habitude.",
    },
    examples: [
      {
        fr: "Il {fais:stem}{ait:end} très froid ce matin.",
        en: "It was very cold this morning.",
        uk: "Сьогодні вранці було дуже холодно.",
      },
      {
        fr: "Avant, j'{habit:stem}{ais:end} à Kyiv.",
        en: "Before, I lived in Kyiv.",
        uk: "Раніше я жив у Києві.",
      },
      {
        fr: "Nous {regard:stem}{ions:end} la télé quand il {est:aux} {entré:part}.",
        en: "We were watching TV when he came in.",
        uk: "Ми дивилися телевізор, коли він увійшов.",
        note: {
          fr: "Imparfait (décor) + passé composé (événement).",
          en: "Imparfait (background) + passé composé (event).",
          uk: "Imparfait (тло) + passé composé (подія).",
        },
      },
      {
        fr: "Quand j'{ét:stem}{ais:end} étudiant, je {mange:stem}{ais:end} souvent des pâtes.",
        en: "When I was a student, I often ate pasta.",
        uk: "Коли я був студентом, я часто їв макарони.",
      },
    ],
    related: [
      {
        id: "passe-compose",
        why: {
          fr: "Le contraste n° 1 du DELF : décor (imparfait) vs action (passé composé).",
          en: "DELF contrast #1: background (imparfait) vs action (passé composé).",
          uk: "Контраст № 1 на DELF: тло (imparfait) проти дії (passé composé).",
        },
      },
      {
        id: "present",
        why: {
          fr: "Le radical vient de « nous » au présent.",
          en: "The stem comes from the present “nous” form.",
          uk: "Основа походить від форми «nous» теперішнього часу.",
        },
      },
      {
        id: "conditionnel-present",
        why: {
          fr: "Le conditionnel utilise les mêmes terminaisons (-ais, -ait…).",
          en: "The conditional uses the same endings (-ais, -ait…).",
          uk: "Умовний спосіб використовує ті самі закінчення (-ais, -ait…).",
        },
      },
    ],
  },

  // ========== 4. FUTUR PROCHE ==========
  {
    id: "futur-proche",
    name: "Le futur proche",
    badge: "essentiel",
    tagline: {
      fr: "Le futur de tous les jours : plans, intentions, ce qui va arriver. À l'oral, c'est lui qu'on utilise.",
      en: "The everyday future: plans, intentions, what is about to happen. In speech, this is the one you use.",
      uk: "Повсякденне майбутнє: плани, наміри, те, що от-от станеться. В усному мовленні вживають саме його.",
    },
    usage: [
      {
        fr: "Un plan décidé, proche : « Je vais partir dans cinq minutes. »",
        en: "A decided, near plan: “I'm going to leave in five minutes.”",
        uk: "Вирішений, близький план: «Я збираюся піти за п'ять хвилин».",
      },
      {
        fr: "Une intention : « On va déménager l'année prochaine. »",
        en: "An intention: “We're going to move next year.”",
        uk: "Намір: «Ми збираємося переїхати наступного року».",
      },
      {
        fr: "Une prédiction évidente : « Regarde les nuages ! Il va pleuvoir. »",
        en: "An obvious prediction: “Look at the clouds! It's going to rain.”",
        uk: "Очевидне передбачення: «Подивись на хмари! Зараз піде дощ».",
      },
    ],
    formula: "sujet + {aller au présent:aux} + {infinitif:inf}",
    formulaNotes: [
      {
        fr: "Exactement comme l'anglais « going to » : I am going to eat = je vais manger.",
        en: "Exactly like English “going to”: I am going to eat = je vais manger.",
        uk: "Точно як англійське «going to»: I am going to eat = je vais manger.",
      },
      {
        fr: "Négation autour de « aller » : Je ne vais pas venir.",
        en: "Negation goes around “aller”: Je ne vais pas venir.",
        uk: "Заперечення навколо «aller»: Je ne vais pas venir.",
      },
    ],
    tables: [
      {
        title: {
          fr: "Modèle : partir",
          en: "Model: partir",
          uk: "Зразок: partir",
        },
        rows: [
          { pronoun: "je", form: "{vais:aux} {partir:inf}" },
          { pronoun: "tu", form: "{vas:aux} {partir:inf}" },
          { pronoun: "il / elle", form: "{va:aux} {partir:inf}" },
          { pronoun: "nous", form: "{allons:aux} {partir:inf}" },
          { pronoun: "vous", form: "{allez:aux} {partir:inf}" },
          { pronoun: "ils / elles", form: "{vont:aux} {partir:inf}" },
        ],
      },
    ],
    mnemo: {
      fr: "ALLER + infinitif = « going to ». Si c'est décidé ou proche → futur proche. Si c'est un rêve lointain → futur simple.",
      en: "ALLER + infinitive = “going to”. Decided or near → futur proche. A distant dream → futur simple.",
      uk: "ALLER + інфінітив = «going to». Вирішено або близько → futur proche. Далека мрія → futur simple.",
    },
    examples: [
      {
        fr: "Je {vais:aux} {prendre:inf} un café. Tu en veux un ?",
        en: "I'm going to get a coffee. Do you want one?",
        uk: "Я збираюся взяти каву. Хочеш і собі?",
      },
      {
        fr: "Nous {allons:aux} {visiter:inf} Lyon ce week-end.",
        en: "We're going to visit Lyon this weekend.",
        uk: "Ми збираємося відвідати Ліон на вихідних.",
      },
      {
        fr: "Attention, tu {vas:aux} {tomber:inf} !",
        en: "Careful, you're going to fall!",
        uk: "Обережно, ти зараз впадеш!",
      },
      {
        fr: "Ils ne {vont:aux} pas {venir:inf} à la fête.",
        en: "They are not going to come to the party.",
        uk: "Вони не прийдуть на вечірку.",
        note: {
          fr: "ne + aller + pas + infinitif.",
          en: "ne + aller + pas + infinitive.",
          uk: "ne + aller + pas + інфінітив.",
        },
      },
    ],
    related: [
      {
        id: "futur-simple",
        why: {
          fr: "Futur proche = décidé/proche · futur simple = lointain/moins certain.",
          en: "Futur proche = decided/near · futur simple = distant/less certain.",
          uk: "Futur proche = вирішено/близько · futur simple = далеко/менш певно.",
        },
      },
      {
        id: "passe-recent",
        why: {
          fr: "Construction miroir : venir de + infinitif (passé) ↔ aller + infinitif (futur).",
          en: "Mirror construction: venir de + infinitive (past) ↔ aller + infinitive (future).",
          uk: "Дзеркальна конструкція: venir de + інфінітив (минуле) ↔ aller + інфінітив (майбутнє).",
        },
      },
      {
        id: "present",
        why: {
          fr: "« Aller » se conjugue au présent.",
          en: "“Aller” is conjugated in the present.",
          uk: "«Aller» відмінюється в теперішньому часі.",
        },
      },
    ],
  },

  // ========== 5. IMPÉRATIF ==========
  {
    id: "imperatif",
    name: "L'impératif",
    badge: "essentiel",
    tagline: {
      fr: "Ordres, conseils, instructions et invitations — sans sujet ! Seulement 3 formes : tu, nous, vous.",
      en: "Orders, advice, instructions and invitations — without a subject! Only 3 forms: tu, nous, vous.",
      uk: "Накази, поради, інструкції та запрошення — без підмета! Лише 3 форми: tu, nous, vous.",
    },
    usage: [
      {
        fr: "Les directions : « Tournez à gauche, prenez la deuxième rue. »",
        en: "Directions: “Turn left, take the second street.”",
        uk: "Напрямки: «Поверніть ліворуч, друга вулиця».",
      },
      {
        fr: "Les conseils : « Repose-toi ! Ne t'inquiète pas. »",
        en: "Advice: “Rest! Don't worry.”",
        uk: "Поради: «Відпочинь! Не хвилюйся».",
      },
      {
        fr: "Les instructions et recettes : « Ajoutez le sel, mélangez bien. »",
        en: "Instructions and recipes: “Add the salt, mix well.”",
        uk: "Інструкції та рецепти: «Додайте сіль, добре перемішайте».",
      },
      {
        fr: "Les invitations : « Allons-y ! Venez dîner chez nous ! »",
        en: "Invitations: “Let's go! Come have dinner at our place!”",
        uk: "Запрошення: «Ходімо! Приходьте до нас на вечерю!»",
      },
    ],
    formula: "{présent:stem} sans sujet (tu · nous · vous)",
    formulaNotes: [
      {
        fr: "Verbes en -er : le -s de « tu » disparaît → tu parles → Parle !",
        en: "-er verbs: the -s of the “tu” form disappears → tu parles → Parle!",
        uk: "Дієслова на -er: -s форми «tu» зникає → tu parles → Parle!",
      },
      {
        fr: "Pronominaux : le pronom passe après avec un trait d'union → Lève-toi ! (mais : Ne te lève pas.)",
        en: "Reflexives: the pronoun moves after the verb with a hyphen → Lève-toi! (but: Ne te lève pas.)",
        uk: "Зворотні: займенник іде після дієслова через дефіс → Lève-toi! (але: Ne te lève pas.)",
      },
    ],
    tables: [
      {
        title: {
          fr: "Modèle : parler / prendre",
          en: "Model: parler / prendre",
          uk: "Зразок: parler / prendre",
        },
        rows: [
          { pronoun: "(tu)", form: "{Parle:stem} ! · {Prends:stem} !" },
          { pronoun: "(nous)", form: "{Parlons:stem} ! · {Prenons:stem} !" },
          { pronoun: "(vous)", form: "{Parlez:stem} ! · {Prenez:stem} !" },
        ],
        footnote: {
          fr: "« nous » = suggestion (Let's…) : Allons-y !",
          en: "“nous” = suggestion (Let's…): Allons-y!",
          uk: "«nous» = пропозиція (Let's…): Allons-y!",
        },
      },
    ],
    extra: {
      title: {
        fr: "Les irréguliers de l'impératif",
        en: "Irregular imperatives",
        uk: "Неправильні форми наказового способу",
      },
      rows: [
        { pronoun: "être", form: "sois · soyons · soyez  (Sois sage !)" },
        { pronoun: "avoir", form: "aie · ayons · ayez  (N'aie pas peur !)" },
        { pronoun: "savoir", form: "sache · sachons · sachez" },
      ],
    },
    mnemo: {
      fr: "Impératif = présent MOINS le sujet (et moins le -s pour les verbes en -er, forme « tu »).",
      en: "Imperative = present MINUS the subject (and minus the -s for -er verbs, “tu” form).",
      uk: "Наказовий спосіб = теперішній час МІНУС підмет (і мінус -s для дієслів на -er у формі «tu»).",
    },
    examples: [
      {
        fr: "{Tournez:stem} à droite après la boulangerie.",
        en: "Turn right after the bakery.",
        uk: "Поверніть праворуч після пекарні.",
      },
      {
        fr: "{Écoute:stem} bien la question !",
        en: "Listen carefully to the question!",
        uk: "Уважно слухай запитання!",
        note: {
          fr: "écouter → tu écoutes → Écoute ! (sans -s)",
          en: "écouter → tu écoutes → Écoute! (no -s)",
          uk: "écouter → tu écoutes → Écoute! (без -s)",
        },
      },
      {
        fr: "{Allons:stem}-y, on est en retard !",
        en: "Let's go, we're late!",
        uk: "Ходімо, ми запізнюємось!",
      },
      {
        fr: "Ne {vous:pron} {inquiétez:stem} pas, tout va bien.",
        en: "Don't worry, everything is fine.",
        uk: "Не хвилюйтеся, все добре.",
      },
    ],
    related: [
      {
        id: "present",
        why: {
          fr: "Les formes viennent directement du présent.",
          en: "The forms come directly from the present.",
          uk: "Форми походять безпосередньо від теперішнього часу.",
        },
      },
      {
        id: "conditionnel-present",
        why: {
          fr: "Pour être plus poli qu'un ordre : « Pourriez-vous… ? » au lieu de « Faites… ! »",
          en: "To be more polite than an order: “Pourriez-vous…?” instead of “Faites…!”",
          uk: "Щоб бути ввічливішим за наказ: «Pourriez-vous…?» замість «Faites…!»",
        },
      },
    ],
  },

  // ========== 6. FUTUR SIMPLE ==========
  {
    id: "futur-simple",
    name: "Le futur simple",
    badge: "reconnaitre",
    tagline: {
      fr: "Le futur « officiel » : projets lointains, promesses, prévisions. À reconnaître à l'A2, à maîtriser au B1.",
      en: "The “official” future: distant plans, promises, forecasts. Recognize it at A2, master it at B1.",
      uk: "«Офіційне» майбутнє: далекі плани, обіцянки, прогнози. На A2 — впізнавати, на B1 — володіти.",
    },
    usage: [
      {
        fr: "Un futur lointain ou incertain : « Un jour, j'habiterai à la mer. »",
        en: "A distant or uncertain future: “One day I will live by the sea.”",
        uk: "Далеке або непевне майбутнє: «Колись я житиму біля моря».",
      },
      {
        fr: "Une promesse : « Je t'appellerai demain, promis. »",
        en: "A promise: “I'll call you tomorrow, promise.”",
        uk: "Обіцянка: «Я подзвоню тобі завтра, обіцяю».",
      },
      {
        fr: "Les prévisions (météo…) : « Demain, il pleuvra sur Paris. »",
        en: "Forecasts (weather…): “Tomorrow it will rain in Paris.”",
        uk: "Прогнози (погода…): «Завтра в Парижі йтиме дощ».",
      },
      {
        fr: "Après « si + présent » : « Si j'ai le temps, je viendrai. »",
        en: "After “si + present”: “If I have time, I will come.”",
        uk: "Після «si + теперішній час»: «Якщо матиму час, я прийду».",
      },
    ],
    formula: "sujet + {infinitif:inf} + {-ai, -as, -a, -ons, -ez, -ont:end}",
    formulaNotes: [
      {
        fr: "Les terminaisons = avoir au présent (ai, as, a, ons, ez, ont) !",
        en: "The endings = avoir in the present (ai, as, a, ons, ez, ont)!",
        uk: "Закінчення = avoir у теперішньому часі (ai, as, a, ons, ez, ont)!",
      },
      {
        fr: "Verbes en -re : on enlève le -e final → prendre → je prendrai.",
        en: "-re verbs: drop the final -e → prendre → je prendrai.",
        uk: "Дієслова на -re: відкидаємо кінцеве -e → prendre → je prendrai.",
      },
      {
        fr: "Le radical du futur contient toujours un R — c'est le son du futur : je parleRai.",
        en: "The future stem always contains an R — that's the sound of the future: je parleRai.",
        uk: "Основа майбутнього завжди містить R — це звук майбутнього: je parleRai.",
      },
    ],
    tables: [
      {
        title: {
          fr: "Modèle : parler",
          en: "Model: parler",
          uk: "Зразок: parler",
        },
        rows: [
          { pronoun: "je", form: "{parler:inf}{ai:end}" },
          { pronoun: "tu", form: "{parler:inf}{as:end}" },
          { pronoun: "il / elle", form: "{parler:inf}{a:end}" },
          { pronoun: "nous", form: "{parler:inf}{ons:end}" },
          { pronoun: "vous", form: "{parler:inf}{ez:end}" },
          { pronoun: "ils / elles", form: "{parler:inf}{ont:end}" },
        ],
      },
    ],
    extra: {
      title: {
        fr: "Radicaux irréguliers fréquents",
        en: "Common irregular stems",
        uk: "Часті неправильні основи",
      },
      rows: [
        { pronoun: "être → ser-", form: "je serai" },
        { pronoun: "avoir → aur-", form: "j'aurai" },
        { pronoun: "aller → ir-", form: "j'irai" },
        { pronoun: "faire → fer-", form: "je ferai" },
        { pronoun: "venir → viendr-", form: "je viendrai" },
        { pronoun: "pouvoir → pourr-", form: "je pourrai" },
        { pronoun: "voir → verr-", form: "je verrai" },
        { pronoun: "devoir → devr-", form: "je devrai" },
      ],
    },
    mnemo: {
      fr: "Infinitif + AVOIR : « je parler-AI » = j'ai à parler dans le futur. Et le R est toujours là : parleRai, seRai, iRai.",
      en: "Infinitive + AVOIR: “je parler-AI”. And the R is always there: parleRai, seRai, iRai.",
      uk: "Інфінітив + AVOIR: «je parler-AI». І R завжди на місці: parleRai, seRai, iRai.",
    },
    examples: [
      {
        fr: "Un jour, nous {achèter:inf}{ons:end} une maison en Provence.",
        en: "One day we will buy a house in Provence.",
        uk: "Колись ми купимо будинок у Провансі.",
      },
      {
        fr: "Je t'{appeller:inf}{ai:end} ce soir.",
        en: "I will call you tonight.",
        uk: "Я подзвоню тобі сьогодні ввечері.",
      },
      {
        fr: "Si tu étudies chaque jour, tu {réussir:inf}{as:end} le DELF.",
        en: "If you study every day, you will pass the DELF.",
        uk: "Якщо ти вчитимешся щодня, ти складеш DELF.",
        note: {
          fr: "si + présent → futur simple.",
          en: "si + present → futur simple.",
          uk: "si + теперішній час → futur simple.",
        },
      },
      {
        fr: "Demain, il {fer:inf}{a:end} beau sur toute la France.",
        en: "Tomorrow the weather will be nice all over France.",
        uk: "Завтра по всій Франції буде гарна погода.",
        note: {
          fr: "faire → radical irrégulier fer-.",
          en: "faire → irregular stem fer-.",
          uk: "faire → неправильна основа fer-.",
        },
      },
    ],
    related: [
      {
        id: "futur-proche",
        why: {
          fr: "À l'oral, le futur proche remplace souvent le futur simple.",
          en: "In speech, the futur proche often replaces the futur simple.",
          uk: "В усному мовленні futur proche часто замінює futur simple.",
        },
      },
      {
        id: "conditionnel-present",
        why: {
          fr: "Même radical ! futur + terminaisons de l'imparfait = conditionnel : je voudrai → je voudrais.",
          en: "Same stem! future + imparfait endings = conditional: je voudrai → je voudrais.",
          uk: "Та сама основа! майбутнє + закінчення imparfait = умовний спосіб: je voudrai → je voudrais.",
        },
      },
    ],
  },

  // ========== 7. PASSÉ RÉCENT ==========
  {
    id: "passe-recent",
    name: "Le passé récent",
    badge: "essentiel",
    tagline: {
      fr: "« Je viens de… » — une action terminée il y a quelques instants. Le miroir du futur proche.",
      en: "“Je viens de…” — an action finished moments ago. The mirror of the futur proche.",
      uk: "«Je viens de…» — дія, завершена мить тому. Дзеркало futur proche.",
    },
    usage: [
      {
        fr: "Une action tout juste finie : « Je viens de rentrer du travail. »",
        en: "An action that just finished: “I just got home from work.”",
        uk: "Щойно завершена дія: «Я щойно повернувся з роботи».",
      },
      {
        fr: "Refuser poliment : « — Tu veux déjeuner ? — Non merci, je viens de manger. »",
        en: "Declining politely: “— Want to have lunch? — No thanks, I just ate.”",
        uk: "Ввічлива відмова: «— Пообідаємо? — Ні, дякую, я щойно поїв».",
      },
      {
        fr: "Une nouvelle toute fraîche : « Le train vient de partir ! »",
        en: "Fresh news: “The train just left!”",
        uk: "Свіжа новина: «Потяг щойно поїхав!»",
      },
    ],
    formula: "sujet + {venir au présent:aux} + {de:aux} + {infinitif:inf}",
    formulaNotes: [
      {
        fr: "= anglais « to have just » : I just ate = je viens de manger.",
        en: "= English “to have just”: I just ate = je viens de manger.",
        uk: "= англійське «to have just»: I just ate = je viens de manger.",
      },
      {
        fr: "de + voyelle → d' : je viens d'arriver.",
        en: "de + vowel → d': je viens d'arriver.",
        uk: "de + голосна → d': je viens d'arriver.",
      },
    ],
    tables: [
      {
        title: {
          fr: "Modèle : finir",
          en: "Model: finir",
          uk: "Зразок: finir",
        },
        rows: [
          { pronoun: "je", form: "{viens:aux} {de:aux} {finir:inf}" },
          { pronoun: "tu", form: "{viens:aux} {de:aux} {finir:inf}" },
          { pronoun: "il / elle", form: "{vient:aux} {de:aux} {finir:inf}" },
          { pronoun: "nous", form: "{venons:aux} {de:aux} {finir:inf}" },
          { pronoun: "vous", form: "{venez:aux} {de:aux} {finir:inf}" },
          { pronoun: "ils / elles", form: "{viennent:aux} {de:aux} {finir:inf}" },
        ],
      },
    ],
    mnemo: {
      fr: "VENIR DE = « je viens (j'arrive) de cette action ». Miroir parfait : je viens de manger ← MAINTENANT → je vais manger.",
      en: "VENIR DE = “I'm coming from that action”. Perfect mirror: je viens de manger ← NOW → je vais manger.",
      uk: "VENIR DE = «я йду від цієї дії». Ідеальне дзеркало: je viens de manger ← ЗАРАЗ → je vais manger.",
    },
    examples: [
      {
        fr: "Je {viens:aux} {d':aux}{arriver:inf} au bureau.",
        en: "I just arrived at the office.",
        uk: "Я щойно прийшов в офіс.",
      },
      {
        fr: "Elle {vient:aux} {de:aux} {finir:inf} sa leçon de français.",
        en: "She just finished her French lesson.",
        uk: "Вона щойно закінчила урок французької.",
      },
      {
        fr: "Nous {venons:aux} {de:aux} {voir:inf} ce film.",
        en: "We just saw that film.",
        uk: "Ми щойно подивилися цей фільм.",
      },
      {
        fr: "Le bus {vient:aux} {de:aux} {passer:inf} — le prochain est dans dix minutes.",
        en: "The bus just went by — the next one is in ten minutes.",
        uk: "Автобус щойно проїхав — наступний за десять хвилин.",
      },
    ],
    related: [
      {
        id: "futur-proche",
        why: {
          fr: "Construction miroir : venir de + inf (juste avant) ↔ aller + inf (juste après).",
          en: "Mirror construction: venir de + inf (just before) ↔ aller + inf (just after).",
          uk: "Дзеркальна конструкція: venir de + інф (щойно) ↔ aller + інф (от-от).",
        },
      },
      {
        id: "passe-compose",
        why: {
          fr: "Il y a 5 minutes → passé récent · hier → passé composé.",
          en: "5 minutes ago → passé récent · yesterday → passé composé.",
          uk: "5 хвилин тому → passé récent · учора → passé composé.",
        },
      },
    ],
  },

  // ========== 8. CONDITIONNEL PRÉSENT ==========
  {
    id: "conditionnel-present",
    name: "Le conditionnel présent",
    badge: "essentiel",
    tagline: {
      fr: "Le temps du poli, du rêve et de l'hypothèse. Radical du futur + terminaisons de l'imparfait — le -r- est toujours là.",
      en: "The tense of politeness, dreams and hypothesis. Future stem + imparfait endings — the -r- is always there.",
      uk: "Час ввічливості, мрії та припущення. Основа майбутнього + закінчення imparfait — -r- завжди присутнє.",
    },
    usage: [
      {
        fr: "La politesse : « Je voudrais un renseignement. » / « Pourriez-vous m'aider ? »",
        en: "Politeness: “I'd like some information.” / “Could you help me?”",
        uk: "Ввічливість: «Я хотів би дізнатися». / «Чи не могли б ви допомогти?»",
      },
      {
        fr: "Le conseil : « Tu devrais voir ce film en v.o. »",
        en: "Advice: “You should see that film in the original version.”",
        uk: "Порада: «Тобі варто подивитися цей фільм мовою оригіналу».",
      },
      {
        fr: "Le souhait : « J'aimerais vivre à Lyon. » / « Je boirais bien un café. »",
        en: "A wish: “I'd love to live in Lyon.” / “I could go for a coffee.”",
        uk: "Бажання: «Я хотів би жити в Ліоні». / «Я б випив кави».",
      },
      {
        fr: "La suggestion : « On pourrait aller au ciné-club ? »",
        en: "A suggestion: “We could go to the film club?”",
        uk: "Пропозиція: «Може, підемо в кіноклуб?»",
      },
      {
        fr: "L'hypothèse, avec « si » + imparfait : « Si j'étais américain, je serais une star. »",
        en: "Hypothesis, with “si” + imparfait: “If I were American, I'd be a star.”",
        uk: "Припущення, із «si» + imparfait: «Якби я був американцем, я був би зіркою».",
      },
      {
        fr: "L'information non confirmée (presse) : « Il y aurait trois blessés. »",
        en: "Unconfirmed information (news): “There are reportedly three injured.”",
        uk: "Непідтверджена інформація (преса): «Повідомляють про трьох поранених».",
      },
      {
        fr: "Le futur dans le passé : « Il a dit qu'il viendrait. »",
        en: "The future in the past: “He said he would come.”",
        uk: "Майбутнє в минулому: «Він сказав, що прийде».",
      },
    ],
    formula: "{radical du FUTUR:stem} + {terminaisons de l'IMPARFAIT:end}",
    formulaNotes: [
      {
        fr: "Le -r- du radical est la signature du conditionnel. Sans -r-, c'est l'imparfait : je voulais ≠ je voudrais.",
        en: "The -r- in the stem is the conditional's signature. Without -r- it's the imparfait: je voulais ≠ je voudrais.",
        uk: "-r- в основі — підпис умовного способу. Без -r- це imparfait: je voulais ≠ je voudrais.",
      },
      {
        fr: "Verbes en -re : on enlève le e → prendre → je prendrais.",
        en: "-re verbs: drop the e → prendre → je prendrais.",
        uk: "Дієслова на -re: прибираємо e → prendre → je prendrais.",
      },
      {
        fr: "À l'oral, je parlerai (futur) et je parlerais (conditionnel) se ressemblent. À l'écrit, ne les confondez pas.",
        en: "Aloud, je parlerai (future) and je parlerais (conditional) sound alike. In writing, don't confuse them.",
        uk: "На слух je parlerai (майбутнє) і je parlerais (умовний) схожі. На письмі не плутайте.",
      },
    ],
    tables: [
      {
        title: { fr: "Modèle : parler", en: "Model: parler", uk: "Зразок: parler" },
        rows: [
          { pronoun: "je", form: "{parler:stem}{ais:end}" },
          { pronoun: "tu", form: "{parler:stem}{ais:end}" },
          { pronoun: "il / elle / on", form: "{parler:stem}{ait:end}" },
          { pronoun: "nous", form: "{parler:stem}{ions:end}" },
          { pronoun: "vous", form: "{parler:stem}{iez:end}" },
          { pronoun: "ils / elles", form: "{parler:stem}{aient:end}" },
        ],
        footnote: {
          fr: "Attention : nous → -IONS, vous → -IEZ. Jamais -ons ni -ez tout seuls.",
          en: "Careful: nous → -IONS, vous → -IEZ. Never bare -ons or -ez.",
          uk: "Увага: nous → -IONS, vous → -IEZ. Ніколи не просто -ons чи -ez.",
        },
      },
    ],
    extra: {
      title: {
        fr: "Les 18 radicaux irréguliers — à savoir par cœur",
        en: "The 18 irregular stems — learn by heart",
        uk: "18 неправильних основ — вивчити напам'ять",
      },
      rows: [
        { pronoun: "être", form: "{ser:stem}{ais:end} — je serais" },
        { pronoun: "avoir", form: "{aur:stem}{ais:end} — j'aurais" },
        { pronoun: "aller", form: "{ir:stem}{ais:end} — j'irais" },
        { pronoun: "faire", form: "{fer:stem}{ais:end} — je ferais" },
        { pronoun: "pouvoir", form: "{pourr:stem}{ais:end} — je pourrais" },
        { pronoun: "vouloir", form: "{voudr:stem}{ais:end} — je voudrais" },
        { pronoun: "devoir", form: "{devr:stem}{ais:end} — je devrais" },
        { pronoun: "savoir", form: "{saur:stem}{ais:end} — je saurais" },
        { pronoun: "voir", form: "{verr:stem}{ais:end} — je verrais" },
        { pronoun: "venir", form: "{viendr:stem}{ais:end} — je viendrais" },
        { pronoun: "tenir", form: "{tiendr:stem}{ais:end} — je tiendrais" },
        { pronoun: "envoyer", form: "{enverr:stem}{ais:end} — j'enverrais" },
        { pronoun: "recevoir", form: "{recevr:stem}{ais:end} — je recevrais" },
        { pronoun: "courir", form: "{courr:stem}{ais:end} — je courrais" },
        { pronoun: "mourir", form: "{mourr:stem}{ais:end} — je mourrais" },
        { pronoun: "valoir", form: "{vaudr:stem}{ait:end} — ça vaudrait" },
        { pronoun: "falloir", form: "{faudr:stem}{ait:end} — il faudrait" },
        { pronoun: "pleuvoir", form: "{pleuvr:stem}{ait:end} — il pleuvrait" },
      ],
      footnote: {
        fr: "Ce sont exactement les radicaux du futur simple. Apprenez-les une fois, servez-vous-en deux fois.",
        en: "These are exactly the futur simple stems. Learn them once, use them twice.",
        uk: "Це рівно ті самі основи, що й у futur simple. Вивчіть один раз — користуйтеся двічі.",
      },
    },
    mnemo: {
      fr: "FUTUR + IMPARFAIT = CONDITIONNEL. Le radical vient du futur (avec son -r-), la terminaison vient de l'imparfait.",
      en: "FUTURE + IMPARFAIT = CONDITIONAL. Stem from the future (with its -r-), ending from the imparfait.",
      uk: "МАЙБУТНЄ + IMPARFAIT = УМОВНИЙ. Основа від майбутнього (з -r-), закінчення від imparfait.",
    },
    examples: [
      {
        fr: "Je {voudr:stem}{ais:end} visiter cet appartement, s'il vous plaît.",
        en: "I would like to view this flat, please.",
        uk: "Я хотів би подивитися цю квартиру, будь ласка.",
      },
      {
        fr: "Vous {ser:stem}{iez:end} plus tranquille en banlieue.",
        en: "You would be quieter in the suburbs.",
        uk: "Вам було б спокійніше в передмісті.",
        note: {
          fr: "vous → -IEZ. « vous serons » est une faute très fréquente.",
          en: "vous → -IEZ. “vous serons” is a very common mistake.",
          uk: "vous → -IEZ. «vous serons» — дуже поширена помилка.",
        },
      },
      {
        fr: "Si j'avais le temps, j'{ir:stem}{ais:end} au cinéma ce soir.",
        en: "If I had time, I'd go to the cinema tonight.",
        uk: "Якби я мав час, я б пішов сьогодні в кіно.",
        note: {
          fr: "Élision obligatoire : j'irais, jamais « je irais ».",
          en: "Elision required: j'irais, never “je irais”.",
          uk: "Обов'язкова елізія: j'irais, ніколи «je irais».",
        },
      },
      {
        fr: "On {pourr:stem}{ait:end} repeindre le salon avant de pendre la crémaillère.",
        en: "We could repaint the living room before the housewarming.",
        uk: "Можна було б перефарбувати вітальню перед новосіллям.",
      },
    ],
    related: [
      {
        id: "futur-simple",
        why: {
          fr: "Même radical. Seule la terminaison change : je parlerai (futur) / je parlerais (conditionnel).",
          en: "Same stem. Only the ending changes: je parlerai (future) / je parlerais (conditional).",
          uk: "Та сама основа. Змінюється лише закінчення: je parlerai / je parlerais.",
        },
      },
      {
        id: "imparfait",
        why: {
          fr: "Mêmes terminaisons (-ais, -ait, -ions, -iez, -aient).",
          en: "Same endings (-ais, -ait, -ions, -iez, -aient).",
          uk: "Ті самі закінчення (-ais, -ait, -ions, -iez, -aient).",
        },
      },
      {
        id: "conditionnel-passe",
        why: {
          fr: "Le conditionnel passé, c'est celui-ci + un participe passé.",
          en: "The past conditional is this one plus a past participle.",
          uk: "Умовний минулий — це цей плюс дієприкметник.",
        },
      },
    ],
  },

  // ========== 9. CONDITIONNEL PASSÉ ==========
  {
    id: "conditionnel-passe",
    name: "Le conditionnel passé",
    badge: "essentiel",
    tagline: {
      fr: "Le temps du regret et du reproche : ce qui aurait pu arriver, mais n'est pas arrivé.",
      en: "The tense of regret and reproach: what could have happened, but didn't.",
      uk: "Час жалю й докору: те, що могло статися, але не сталося.",
    },
    usage: [
      {
        fr: "Le regret : « J'aurais aimé visiter Le Cyclop. » (mais je ne l'ai pas fait)",
        en: "Regret: “I would have liked to visit Le Cyclop.” (but I didn't)",
        uk: "Жаль: «Я хотів би відвідати Le Cyclop». (але не відвідав)",
      },
      {
        fr: "Le reproche : « Tu aurais dû me prévenir. » / « Vous auriez pu répondre. »",
        en: "Reproach: “You should have told me.” / “You could have answered.”",
        uk: "Докір: «Ти мав би мене попередити». / «Ви могли б відповісти».",
      },
      {
        fr: "L'action non réalisée, avec « si » + plus-que-parfait : « Si j'avais su, je serais venu. »",
        en: "An unrealised action, with “si” + pluperfect: “If I had known, I would have come.”",
        uk: "Нездійснена дія, із «si» + plus-que-parfait: «Якби я знав, я б прийшов».",
      },
      {
        fr: "L'information non confirmée au passé : « Le feu aurait détruit trois maisons. »",
        en: "Unconfirmed past information: “The fire reportedly destroyed three houses.”",
        uk: "Непідтверджена інформація про минуле: «Пожежа нібито знищила три будинки».",
      },
    ],
    formula: "{avoir / être au conditionnel présent:aux} + {participe passé:part}",
    formulaNotes: [
      {
        fr: "Les deux formules à connaître absolument : j'aurais dû + infinitif (moi) · tu aurais pu + infinitif (toi).",
        en: "The two must-know formulas: j'aurais dû + infinitive (me) · tu aurais pu + infinitive (you).",
        uk: "Дві обов'язкові формули: j'aurais dû + інфінітив (я) · tu aurais pu + інфінітив (ти).",
      },
      {
        fr: "Avec être : le participe s'accorde. Elle serait venue. Ils seraient partis.",
        en: "With être: the participle agrees. Elle serait venue. Ils seraient partis.",
        uk: "З être: дієприкметник узгоджується. Elle serait venue. Ils seraient partis.",
      },
      {
        fr: "Avec avoir : pas d'accord, sauf si le COD est placé avant. La lettre qu'il aurait écrite.",
        en: "With avoir: no agreement, unless the direct object comes first. La lettre qu'il aurait écrite.",
        uk: "З avoir: без узгодження, крім випадку, коли додаток стоїть попереду.",
      },
    ],
    tables: [
      {
        title: { fr: "Avec AVOIR : parler", en: "With AVOIR: parler", uk: "З AVOIR: parler" },
        rows: [
          { pronoun: "j'", form: "{aurais:aux} {parlé:part}" },
          { pronoun: "tu", form: "{aurais:aux} {parlé:part}" },
          { pronoun: "il / elle / on", form: "{aurait:aux} {parlé:part}" },
          { pronoun: "nous", form: "{aurions:aux} {parlé:part}" },
          { pronoun: "vous", form: "{auriez:aux} {parlé:part}" },
          { pronoun: "ils / elles", form: "{auraient:aux} {parlé:part}" },
        ],
      },
      {
        title: { fr: "Avec ÊTRE : partir", en: "With ÊTRE: partir", uk: "З ÊTRE: partir" },
        rows: [
          { pronoun: "je", form: "{serais:aux} {parti:part}{(e):end}" },
          { pronoun: "tu", form: "{serais:aux} {parti:part}{(e):end}" },
          { pronoun: "il / elle", form: "{serait:aux} {parti:part}{(e):end}" },
          { pronoun: "nous", form: "{serions:aux} {parti:part}{(e)s:end}" },
          { pronoun: "vous", form: "{seriez:aux} {parti:part}{(e)(s):end}" },
          { pronoun: "ils / elles", form: "{seraient:aux} {parti:part}{(e)s:end}" },
        ],
        footnote: {
          fr: "Les verbes pronominaux aussi : je me serais reposé(e), elle se serait installée.",
          en: "Reflexive verbs too: je me serais reposé(e), elle se serait installée.",
          uk: "Так само зворотні дієслова: je me serais reposé(e), elle se serait installée.",
        },
      },
    ],
    mnemo: {
      fr: "« J'aurais dû » = le temps des regrets. Si vous pensez « ah, si seulement… », c'est le conditionnel passé.",
      en: "“J'aurais dû” = the tense of regrets. If you're thinking “ah, if only…”, it's the past conditional.",
      uk: "«J'aurais dû» — час жалю. Якщо думаєте «ах, якби ж…», це conditionnel passé.",
    },
    examples: [
      {
        fr: "Tu {aurais:aux} {dû:part} lire le devis avant de signer.",
        en: "You should have read the quote before signing.",
        uk: "Тобі варто було прочитати кошторис перед підписанням.",
        note: {
          fr: "Participe irrégulier avec accent circonflexe : dû (jamais « devu »).",
          en: "Irregular participle with a circumflex: dû (never “devu”).",
          uk: "Неправильний дієприкметник із циркумфлексом: dû (ніколи «devu»).",
        },
      },
      {
        fr: "Si nous avions eu le budget, nous {aurions:aux} {abattu:part} ce mur.",
        en: "If we'd had the budget, we would have knocked down that wall.",
        uk: "Якби ми мали бюджет, ми б знесли цю стіну.",
      },
      {
        fr: "Elle {serait:aux} {venue:part} au vernissage, mais son train a été annulé.",
        en: "She would have come to the opening, but her train was cancelled.",
        uk: "Вона прийшла б на вернісаж, але її потяг скасували.",
        note: {
          fr: "Accord avec être : elle serait venuE.",
          en: "Agreement with être: elle serait venuE.",
          uk: "Узгодження з être: elle serait venuE.",
        },
      },
    ],
    related: [
      {
        id: "conditionnel-present",
        why: {
          fr: "L'auxiliaire est simplement au conditionnel présent.",
          en: "The auxiliary is simply in the present conditional.",
          uk: "Допоміжне дієслово просто в conditionnel présent.",
        },
      },
      {
        id: "plus-que-parfait",
        why: {
          fr: "Son partenaire obligatoire : si + plus-que-parfait → conditionnel passé.",
          en: "Its obligatory partner: si + pluperfect → past conditional.",
          uk: "Його обов'язковий партнер: si + plus-que-parfait → conditionnel passé.",
        },
      },
    ],
  },

  // ========== 10. PLUS-QUE-PARFAIT ==========
  {
    id: "plus-que-parfait",
    name: "Le plus-que-parfait",
    badge: "essentiel",
    tagline: {
      fr: "Le passé du passé : l'action déjà terminée quand une autre action passée a eu lieu.",
      en: "The past of the past: the action already finished when another past action happened.",
      uk: "Минуле в минулому: дія, вже завершена, коли сталася інша минула дія.",
    },
    usage: [
      {
        fr: "L'antériorité : « Quand je suis arrivé, il était déjà parti. »",
        en: "Anteriority: “When I arrived, he had already left.”",
        uk: "Передування: «Коли я прийшов, він уже пішов».",
      },
      {
        fr: "Le discours rapporté au passé : « Il a dit qu'il avait fini. »",
        en: "Reported speech in the past: “He said he had finished.”",
        uk: "Непряма мова в минулому: «Він сказав, що закінчив».",
      },
      {
        fr: "L'hypothèse irréelle du passé : « Si j'avais su, je serais venu. »",
        en: "Unreal past hypothesis: “If I had known, I would have come.”",
        uk: "Нереальне припущення про минуле: «Якби я знав, я б прийшов».",
      },
      {
        fr: "Le regret seul : « Ah, si j'avais su ! »",
        en: "Standalone regret: “Ah, if only I had known!”",
        uk: "Самостійний жаль: «Ах, якби ж я знав!»",
      },
    ],
    formula: "{avoir / être à l'IMPARFAIT:aux} + {participe passé:part}",
    formulaNotes: [
      {
        fr: "Même choix d'auxiliaire qu'au passé composé : les mêmes verbes prennent être.",
        en: "Same auxiliary choice as the passé composé: the same verbs take être.",
        uk: "Той самий вибір допоміжного, що й у passé composé.",
      },
      {
        fr: "Mêmes règles d'accord qu'au passé composé.",
        en: "Same agreement rules as the passé composé.",
        uk: "Ті самі правила узгодження, що й у passé composé.",
      },
    ],
    tables: [
      {
        title: { fr: "Avec AVOIR : finir", en: "With AVOIR: finir", uk: "З AVOIR: finir" },
        rows: [
          { pronoun: "j'", form: "{avais:aux} {fini:part}" },
          { pronoun: "tu", form: "{avais:aux} {fini:part}" },
          { pronoun: "il / elle / on", form: "{avait:aux} {fini:part}" },
          { pronoun: "nous", form: "{avions:aux} {fini:part}" },
          { pronoun: "vous", form: "{aviez:aux} {fini:part}" },
          { pronoun: "ils / elles", form: "{avaient:aux} {fini:part}" },
        ],
      },
      {
        title: { fr: "Avec ÊTRE : partir", en: "With ÊTRE: partir", uk: "З ÊTRE: partir" },
        rows: [
          { pronoun: "j'", form: "{étais:aux} {parti:part}{(e):end}" },
          { pronoun: "tu", form: "{étais:aux} {parti:part}{(e):end}" },
          { pronoun: "il / elle", form: "{était:aux} {parti:part}{(e):end}" },
          { pronoun: "nous", form: "{étions:aux} {parti:part}{(e)s:end}" },
          { pronoun: "vous", form: "{étiez:aux} {parti:part}{(e)(s):end}" },
          { pronoun: "ils / elles", form: "{étaient:aux} {parti:part}{(e)s:end}" },
        ],
      },
    ],
    mnemo: {
      fr: "Passé composé avec l'auxiliaire à l'imparfait. J'ai fini → j'avais fini. C'est tout.",
      en: "Passé composé with the auxiliary in the imparfait. J'ai fini → j'avais fini. That's it.",
      uk: "Passé composé з допоміжним в imparfait. J'ai fini → j'avais fini. Ось і все.",
    },
    examples: [
      {
        fr: "Quand nous avons emménagé, les anciens propriétaires {avaient:aux} déjà {repeint:part} la cuisine.",
        en: "When we moved in, the previous owners had already repainted the kitchen.",
        uk: "Коли ми заселилися, попередні власники вже перефарбували кухню.",
      },
      {
        fr: "Il m'a expliqué qu'il {avait:aux} {signé:part} le bail la veille.",
        en: "He explained to me that he had signed the lease the day before.",
        uk: "Він пояснив мені, що підписав договір напередодні.",
      },
      {
        fr: "Elle {était:aux} {sortie:part} quand le plombier est passé.",
        en: "She had gone out when the plumber came by.",
        uk: "Вона вже вийшла, коли прийшов сантехнік.",
      },
    ],
    related: [
      {
        id: "passe-compose",
        why: {
          fr: "Même construction : il suffit de mettre l'auxiliaire à l'imparfait.",
          en: "Same construction: just put the auxiliary in the imparfait.",
          uk: "Та сама конструкція: досить поставити допоміжне в imparfait.",
        },
      },
      {
        id: "conditionnel-passe",
        why: {
          fr: "Si + plus-que-parfait → conditionnel passé (l'irréel du passé).",
          en: "Si + pluperfect → past conditional (the unreal past).",
          uk: "Si + plus-que-parfait → conditionnel passé (нереальне минуле).",
        },
      },
    ],
  },

  // ========== 11. GÉRONDIF ==========
  {
    id: "gerondif",
    name: "Le gérondif",
    badge: "essentiel",
    tagline: {
      fr: "« en + -ant » : deux actions du même sujet en une seule phrase. Simultanéité, manière, moyen, condition, cause.",
      en: "“en + -ant”: two actions by the same subject in one sentence. Simultaneity, manner, means, condition, cause.",
      uk: "«en + -ant»: дві дії того самого суб'єкта в одному реченні.",
    },
    usage: [
      {
        fr: "La simultanéité : « Il lit en mangeant. »",
        en: "Simultaneity: “He reads while eating.”",
        uk: "Одночасність: «Він читає, їдучи».",
      },
      {
        fr: "La manière : « Il est parti en courant. »",
        en: "Manner: “He left running.”",
        uk: "Спосіб: «Він пішов бігом».",
      },
      {
        fr: "Le moyen : « Il a réussi en travaillant beaucoup. »",
        en: "Means: “He succeeded by working a lot.”",
        uk: "Засіб: «Він досяг успіху, багато працюючи».",
      },
      {
        fr: "La condition : « En révisant, tu réussiras. » (= si tu révises)",
        en: "Condition: “By revising, you'll succeed.” (= if you revise)",
        uk: "Умова: «Повторюючи, ти впораєшся». (= якщо повториш)",
      },
      {
        fr: "La cause : « Il s'est blessé en tombant. »",
        en: "Cause: “He hurt himself falling.”",
        uk: "Причина: «Він травмувався, впавши».",
      },
      {
        fr: "L'opposition, avec « tout » : « Tout en étant fatigué, il a continué. »",
        en: "Opposition, with “tout”: “Even while tired, he carried on.”",
        uk: "Протиставлення, з «tout»: «Хоч і втомлений, він продовжив».",
      },
    ],
    formula: "en + {radical de « nous » au présent:stem} + {ant:end}",
    formulaNotes: [
      {
        fr: "nous parlons → en parlant · nous finissons → en finissant · nous prenons → en prenant",
        en: "nous parlons → en parlant · nous finissons → en finissant · nous prenons → en prenant",
        uk: "nous parlons → en parlant · nous finissons → en finissant · nous prenons → en prenant",
      },
      {
        fr: "Trois exceptions seulement : être → en étant · avoir → en ayant · savoir → en sachant",
        en: "Only three exceptions: être → en étant · avoir → en ayant · savoir → en sachant",
        uk: "Лише три винятки: être → en étant · avoir → en ayant · savoir → en sachant",
      },
      {
        fr: "RÈGLE ABSOLUE : le gérondif a le même sujet que le verbe principal. ✗ En arrivant, ma mère m'a ouvert. ✓ En arrivant, j'ai vu ma mère.",
        en: "ABSOLUTE RULE: the gérondif shares the subject of the main verb. ✗ En arrivant, ma mère m'a ouvert. ✓ En arrivant, j'ai vu ma mère.",
        uk: "АБСОЛЮТНЕ ПРАВИЛО: gérondif має той самий суб'єкт, що й головне дієслово.",
      },
    ],
    tables: [
      {
        title: { fr: "Formation", en: "Formation", uk: "Утворення" },
        rows: [
          { pronoun: "parler", form: "nous {parl:stem}ons → en {parl:stem}{ant:end}" },
          { pronoun: "finir", form: "nous {finiss:stem}ons → en {finiss:stem}{ant:end}" },
          { pronoun: "prendre", form: "nous {pren:stem}ons → en {pren:stem}{ant:end}" },
          { pronoun: "faire", form: "nous {fais:stem}ons → en {fais:stem}{ant:end}" },
          { pronoun: "être ⚠", form: "en {ét:stem}{ant:end}" },
          { pronoun: "avoir ⚠", form: "en {ay:stem}{ant:end}" },
          { pronoun: "savoir ⚠", form: "en {sach:stem}{ant:end}" },
        ],
      },
    ],
    mnemo: {
      fr: "Prenez la forme « nous », coupez -ons, collez -ant, mettez « en » devant. Même sujet, toujours.",
      en: "Take the “nous” form, cut -ons, add -ant, put “en” in front. Same subject, always.",
      uk: "Візьміть форму «nous», відріжте -ons, додайте -ant, поставте «en». Той самий суб'єкт, завжди.",
    },
    examples: [
      {
        fr: "Gaston casse tout en {voul:stem}{ant:end} aider.",
        en: "Gaston breaks everything while trying to help.",
        uk: "Гастон усе ламає, намагаючись допомогти.",
      },
      {
        fr: "On apprend le français en {regard:stem}{ant:end} des films en v.o.",
        en: "You learn French by watching films in the original version.",
        uk: "Французьку вчать, дивлячись фільми мовою оригіналу.",
      },
      {
        fr: "En {sach:stem}{ant:end} cela, j'aurais choisi un autre appartement.",
        en: "Knowing that, I'd have chosen a different flat.",
        uk: "Знаючи це, я б обрав іншу квартиру.",
      },
    ],
    related: [
      {
        id: "present",
        why: {
          fr: "Le radical vient de la forme « nous » du présent.",
          en: "The stem comes from the present “nous” form.",
          uk: "Основа береться з форми «nous» теперішнього часу.",
        },
      },
    ],
  },
];
