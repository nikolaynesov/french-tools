# Projet DELF B2

Trois applications sur **une seule banque de contenu**. La banque est la source de vérité ; les apps ne sont que des vues.

```
french/
├── content/            ← la banque partagée. Tout le contenu vit ici.
│   ├── raw/            ← JSON éditable à la main (drills-*.json, vocab.json)
│   └── src/            ← modules TypeScript importés par les trois apps
│       ├── types.ts        Role, I18n, Example, Tense, Structure, Drill, VocabItem
│       ├── tenses.ts       11 temps  (ids stables)
│       ├── structures.ts   5 structures et connecteurs (ids stables)
│       ├── contrasts.ts    face-à-face pour la vue « Comparer »
│       ├── visuals.ts      les schémas — 1 à 3 par règle
│       ├── drills.ts       170 exercices   ← AUTO-GÉNÉRÉ depuis raw/
│       ├── vocab.ts        198 mots        ← AUTO-GÉNÉRÉ depuis raw/
│       └── index.ts        point d'entrée + ID_ALIASES
├── reference-app/      ← les règles.       « Grammaire française A2 → B1 »
├── exercises-app/      ← la pratique.      séries de 10 items
├── vocab-app/          ← le lexique.       Leitner FR ↔ УКР
└── tools/generate.mjs  ← raw/*.json → content/src/{drills,vocab}.ts
```

## Commandes

```bash
npm run build      # génère la banque puis construit les trois apps
npm run generate   # seulement raw/*.json → src/*.ts (valide au passage)
npm run check      # tsc --noEmit sur les trois apps
```

Chaque app produit `dist/app.js` **et** `dist/standalone.html` — un fichier unique, autonome,
ouvrable n'importe où (téléphone, clé USB, pièce jointe).

## Ce qui relie les trois apps

- **Les ids sont stables.** `drill.ruleId` pointe vers un `Tense.id` ou un `Structure.id`.
  Dans l'app d'exercices, « Voir la règle » ouvre directement `reference-app#card-<id>`.
- **`ID_ALIASES`** garde les anciens liens vivants : `conditionnel-politesse` → `conditionnel-present`
  (l'ancienne fiche A2 est devenue le conditionnel présent complet).
- **Le code couleur de la morphologie est commun** : auxiliaire, radical, terminaison,
  participe passé, infinitif, pronom. Même balisage `{texte:rôle}` partout.

## Pourquoi trois apps et pas une

La référence est une consultation de trente secondes en plein cours ; les exercices sont
une session de quinze minutes avec score et état ; le vocabulaire suit un tout autre
rythme (répétition espacée) et un tout autre modèle de données. Les fusionner rendrait
la consultation lente et enfouirait la pratique. Elles partagent le contenu, pas l'interface.

## Les schémas

Les schémas sont **complémentaires, jamais un remplacement**. Les règles gardent la première
place ; chaque schéma s'insère juste après ce qu'il illustre — l'assemblage sous la formule
dans « Formation », la frise sous les emplois, le spectre de registre sous le tableau des
connecteurs. Aucun bloc « Le schéma » séparé, et aucun diagramme qui redit simplement un
tableau : si l'information est déjà dans une colonne, le schéma est supprimé.

Cinq formes, choisies pour ce qu'elles savent montrer — aucune n'est décorative.

| Forme | Ce qu'elle rend visible | Où |
|---|---|---|
| `assembly` | la formation comme des blocs qui s'emboîtent | tous les temps |
| `timeline` | la position sur l'axe passé ← maintenant → futur | temps |
| `pairs` | des couples fixes condition → résultat | les trois « si » |
| `axis` | une gradation qu'un tableau ne peut pas montrer : oral ↔ écrit, négatif ↔ positif | connecteurs |
| `slots` | la position d'un mot dans la phrase, et le ✓ contre le ✗ | restriction, gérondif, si, discours rapporté, concordance |

Placement : `anchor: "usage" | "formation"` pour les temps, `afterBlock: n` pour les structures.

Les formes à boîtes sont en HTML/CSS (pas de texte qui déborde, responsive, imprimable) ;
`timeline` et `axis` sont en SVG inline, où la géométrie porte le sens. Aucune couleur nouvelle :
les schémas réutilisent le code couleur de la morphologie, et les variables CSS assurent le mode sombre.

## Principes de conception

- **Dix items par série, jamais plus.** Contrainte tirée de l'historique : les longues
  batteries d'exercices ne sont jamais terminées. Une série doit être finissable.
- **Les exercices visent les erreurs réelles**, relevées sur le board Miro des cours :
  accord et personne (`vous serons`), élision (`je irais`), radicaux inventés,
  décalage de personne au discours rapporté, connecteurs de cause jamais travaillés.
- **Les tableaux sont trilingues.** Une cellule est soit une forme française nue — jamais
  traduite, c'est l'objet d'étude — soit un bloc `{fr, en, uk}` affiché sous le français
  quand un bouton EN/УКР est actif. Les exemples et les nuances sont traduits ; les
  connecteurs et les marqueurs de temps ne le sont pas.
- **Pas de `localStorage`.** La progression reste en mémoire et s'exporte en JSON
  (`⤓ Exporter ma progression`), ce qui la rend portable entre appareils et compatible
  avec l'ouverture du fichier `standalone.html` n'importe où.

## Contenu

| Banque | Volume | Source |
|---|---|---|
| Temps | 11 fiches | dont conditionnel présent / passé, plus-que-parfait, gérondif (extension B1) |
| Structures | 4 fiches | les 3 « si », discours rapporté, concordance des temps, restriction |
| Connecteurs | 1 fiche | cause et conséquence |
| Schémas | 29 diagrammes | placés dans la section qu'ils illustrent, cinq formes |
| Exercices | 170 items | 4 formats × 3 niveaux, chacun relié à sa règle |
| Vocabulaire | 198 mots | extraits des frames Miro de juin–juillet, FR / УКР / EN |

Tout le contenu généré a été relu par une passe de vérification adverse : 51 corrections
appliquées (3 erreurs franches, 17 variantes de réponse manquantes, 5 items ambigus,
26 retouches). Un harnais (`exercises-app/harness.mjs`) rejoue les 218 chaînes de réponse
contre le correcteur de l'app pour garantir qu'aucune bonne réponse n'est refusée.

## Note

`tenses-app/` est l'ancienne app A2 ; elle est remplacée par `reference-app/`,
qui reprend ses données et ses ids. Elle peut être supprimée.

## Hébergement & CI/CD

Le dépôt : `github.com/nikolaynesov/french-tools`. Chaque push sur `main` déclenche
`.github/workflows/deploy.yml` : installation, `npm run build` (génération de la banque
puis les trois apps), `npm run check`, le harnais des 218 clés de réponse, puis
déploiement sur **GitHub Pages** (la page d'accueil racine `index.html` relie les trois apps).

## Progression — stockée dans un fichier

Bouton « 🗂 Connecter un fichier de progression » (exercices et vocabulaire) :
chaque réponse est auto-écrite dans un `.json` sur le disque via la **File System
Access API** (Chrome/Edge ; ailleurs l'export manuel reste). Le lien vers le fichier
survit aux visites (IndexedDB) — au retour, un clic sur « Reconnecter » suffit.
Le fichier contient aussi les préférences (niveau d'aide, difficulté, langue).
Implémentation partagée : `content/src/filestore.ts`.
