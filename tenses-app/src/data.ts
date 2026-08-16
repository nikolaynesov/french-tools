// ============================================================
// Les Temps du Français — A2 · données grammaticales
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
        id: "conditionnel-politesse",
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
        id: "conditionnel-politesse",
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
        id: "conditionnel-politesse",
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

  // ========== 8. CONDITIONNEL DE POLITESSE ==========
  {
    id: "conditionnel-politesse",
    name: "Le conditionnel de politesse",
    badge: "reconnaitre",
    tagline: {
      fr: "La politesse en français : demander sans ordonner. À l'A2, on apprend des formules fixes.",
      en: "Politeness in French: asking without ordering. At A2, you learn fixed phrases.",
      uk: "Ввічливість у французькій: просити, а не наказувати. На A2 вчимо сталі формули.",
    },
    usage: [
      {
        fr: "Commander poliment : « Je voudrais un café, s'il vous plaît. »",
        en: "Ordering politely: “I would like a coffee, please.”",
        uk: "Ввічливе замовлення: «Я хотів би каву, будь ласка».",
      },
      {
        fr: "Exprimer un souhait : « J'aimerais visiter le Japon. »",
        en: "Expressing a wish: “I would love to visit Japan.”",
        uk: "Висловити бажання: «Я хотів би відвідати Японію».",
      },
      {
        fr: "Demander un service : « Pourriez-vous répéter, s'il vous plaît ? »",
        en: "Asking a favour: “Could you repeat, please?”",
        uk: "Попросити про послугу: «Чи не могли б ви повторити, будь ласка?»",
      },
      {
        fr: "Donner un conseil : « Tu devrais te reposer. »",
        en: "Giving advice: “You should rest.”",
        uk: "Дати пораду: «Тобі варто відпочити».",
      },
    ],
    formula: "{radical du futur:inf} + {terminaisons de l'imparfait:end}",
    formulaNotes: [
      {
        fr: "À l'A2 : apprenez ces 6 formules par cœur, comme des mots.",
        en: "At A2: learn these 6 phrases by heart, like vocabulary.",
        uk: "На A2: вивчіть ці 6 формул напам'ять, як слова.",
      },
      {
        fr: "Le secret (pour plus tard) : radical du futur + -ais/-ait = tout le conditionnel.",
        en: "The secret (for later): future stem + -ais/-ait = the whole conditional.",
        uk: "Секрет (на потім): основа майбутнього + -ais/-ait = увесь умовний спосіб.",
      },
    ],
    tables: [
      {
        title: {
          fr: "Les 6 formules magiques",
          en: "The 6 magic phrases",
          uk: "6 чарівних формул",
        },
        rows: [
          { pronoun: "je", form: "{voudr:inf}{ais:end}  (vouloir → I'd like)" },
          { pronoun: "j'", form: "{aimer:inf}{ais:end}  (aimer → I'd love)" },
          { pronoun: "tu", form: "{devr:inf}{ais:end}  (devoir → you should)" },
          { pronoun: "vous", form: "{pourr:inf}{iez:end}-vous ?  (pouvoir → could you?)" },
          { pronoun: "on", form: "{pourr:inf}{ait:end}  (pouvoir → we could)" },
          { pronoun: "ça", form: "{ser:inf}{ait:end} bien  (être → it would be nice)" },
        ],
      },
    ],
    mnemo: {
      fr: "« Je veux » = 😠 un enfant. « Je voudrais » = 😊 un adulte poli. Le -S de politesse : voudrai (futur) → voudraiS (poli).",
      en: "“Je veux” = 😠 a child. “Je voudrais” = 😊 a polite adult. The politeness -S: voudrai (future) → voudraiS (polite).",
      uk: "«Je veux» = 😠 дитина. «Je voudrais» = 😊 ввічливий дорослий. Ввічливе -S: voudrai (майбутнє) → voudraiS (ввічливо).",
    },
    examples: [
      {
        fr: "Je {voudr:inf}{ais:end} une baguette, s'il vous plaît.",
        en: "I would like a baguette, please.",
        uk: "Я хотів би багет, будь ласка.",
      },
      {
        fr: "{Pourr:inf}{iez:end}-vous parler plus lentement ?",
        en: "Could you speak more slowly?",
        uk: "Чи не могли б ви говорити повільніше?",
      },
      {
        fr: "J'{aimer:inf}{ais:end} bien habiter près du parc.",
        en: "I would love to live near the park.",
        uk: "Я хотів би жити біля парку.",
      },
      {
        fr: "Tu {devr:inf}{ais:end} réviser le passé composé !",
        en: "You should review the passé composé!",
        uk: "Тобі варто повторити passé composé!",
      },
    ],
    related: [
      {
        id: "futur-simple",
        why: {
          fr: "Même radical que le futur : je voudrai (futur) vs je voudrais (conditionnel).",
          en: "Same stem as the future: je voudrai (future) vs je voudrais (conditional).",
          uk: "Та сама основа, що й у майбутнього: je voudrai (майбутнє) vs je voudrais (умовний).",
        },
      },
      {
        id: "imparfait",
        why: {
          fr: "Mêmes terminaisons que l'imparfait (-ais, -ait, -iez…).",
          en: "Same endings as the imparfait (-ais, -ait, -iez…).",
          uk: "Ті самі закінчення, що й в imparfait (-ais, -ait, -iez…).",
        },
      },
      {
        id: "imperatif",
        why: {
          fr: "L'alternative polie à l'impératif.",
          en: "The polite alternative to the imperative.",
          uk: "Ввічлива альтернатива наказовому способу.",
        },
      },
    ],
  },
];

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
    key: "conditionnel-politesse|futur-simple",
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

// ------------------------------------------------------------
// UI strings (French-first interface)
// ------------------------------------------------------------

export const ROLE_LABELS: Record<Role, I18n> = {
  aux: { fr: "auxiliaire / semi-auxiliaire", en: "auxiliary", uk: "допоміжне дієслово" },
  stem: { fr: "radical", en: "stem", uk: "основа" },
  end: { fr: "terminaison", en: "ending", uk: "закінчення" },
  part: { fr: "participe passé", en: "past participle", uk: "дієприкметник минулого часу" },
  inf: { fr: "infinitif", en: "infinitive", uk: "інфінітив" },
  pron: { fr: "pronom réfléchi", en: "reflexive pronoun", uk: "зворотний займенник" },
};
