# Modifications à reporter sur menutest (« Le Menu »)

Ce fichier liste ce qui a été fait sur la vraie appli **moulesmile** et qui n'est **pas encore** dans **menutest**, la version à vendre.
Le jour où l'on prépare la vente, on reprend cette liste de haut en bas et on coche.

Règle : à chaque livraison sur moulesmile, ajouter une ligne ici (date, fichier, ce qui change, version).
Quand une ligne est reportée sur menutest, cocher la case et noter la date.

Dernière mise à jour : 12/11/2026 13:45

## À reporter — livraisons notées au fil de l'eau

| Fait | Date (moulesmile) | Fichiers | Modification | Attention pour la version à vendre |
|---|---|---|---|---|
| [x] reporté le 12/11/2026 (v.12/11/2026 10:46, version neutre : nom, logo, pied de page réglables dans la page, rubriques et pages selon la carte du restaurant, alerte page trop pleine) | 10/11/2026 16:20 | `carte-imprimable.html` (nouveau), `admin.html` | Page « Imprimer la carte » : carte A4 2 pages depuis la carte publiée, mentions obligatoires modifiables, export Excel. Section et lien ajoutés dans Admin → Actions. | Le fichier contient en dur le logo Moule & Smile, une copie de secours de la carte, le titre, le pied de page « SAS Smoke and Smile » et les clés Firebase de Moule & Smile : tout cela doit devenir neutre / paramétrable par restaurant. Les rubriques sont celles de Moule & Smile (page 1 / page 2). |
| [ ] | 12/11/2026 13:45 (fait d'abord sur menutest) | `carte-imprimable.html` | L'impression suit l'ordre exact des produits de l'admin (▲▼) ; un produit sans sous-catégorie reste à sa place au lieu de partir en bas ; seuls les formats d'un même produit qui se suivent sont regroupés. | À déposer aussi sur moulesmile si Thomas l'autorise (cocher ici une fois fait). |
| [ ] | 10/11/2026 16:45 | `admin.html` | Titres de catégories modifiables dans Réglages → « Ordre et titres des catégories » ; titres conservés à l'import Excel (sauf onglet « Catégories » dans le fichier). | Utile pour chaque nouveau restaurant. Ne **pas** reporter le passage automatique « Formules » → « Nos plats » (`migrerNosPlats`), propre à Moule & Smile. |
| [ ] | 10/11/2026 16:45 | `outils.html` | Tuile « Dossier administratif » : lien Google Drive enregistré en ligne (`config/carte_v2`, champ `lienAdministratif`), modifiable avec le mot de passe équipe. | Adapter les clés Firebase et l'adresse du compte équipe au projet du restaurant. Le lien est lisible par l'appli client : à terme, le ranger dans un document réservé à l'équipe. |
| [x] reporté le 12/11/2026 (règle « sauces non répétées » rendue générique : rubrique `sauces` + familles d'options nommées « sauce » ; guide `Guide_Carte_Imprimable.pdf`) | 10/11/2026 17:30 | `carte-imprimable.html`, `admin.html` (texte d'aide), guide PDF | Carte imprimable : suppléments payants des options (familles d'options de l'admin) imprimés sous chaque produit avec leur prix, choix à 0 € en « au choix », lignes « Supplément » dans l'export Excel, deux cases de réglage. | Rien de propre à Moule & Smile dans cette partie. La règle « sauces non répétées » s'appuie sur la catégorie `formules` et la rubrique « Nos sauces ». |
| [ ] | 10/11/2026 16:45 | `Guide_Admin_Carte_et_Outils.pdf` (nouveau) | Guide des trois nouveautés ci-dessus. | À reprendre sans le nom Moule & Smile. |

## Écarts plus anciens repérés par comparaison des deux dépôts (10/11/2026)

Repérés en comparant les fichiers, sans le détail de chaque livraison : à vérifier au moment du report.

| Fait | Fichier | moulesmile | menutest | Ce qui manque dans menutest |
|---|---|---|---|---|
| [ ] | `admin.html` | v.10/11/2026 16:45 | v.01/11/2026 19:10 | « CA du mois » dans Actions (en plus des lignes ci-dessus). |
| [ ] | `caisse.html` | v.02/11/2026 10:50 | v.01/11/2026 16:55 | Impression des tickets à l'avance avec enchaînement automatique (afterprint). |
| [ ] | `qrcodes.html` | v.02/11/2026 11:40 | v.21/10/2026 11:55 | Version plus récente côté moulesmile (impression des jetons). |
| [ ] | `index.html` | v.01/11/2026 18:20 | v.01/11/2026 16:55 | Version plus récente côté moulesmile. |
| [ ] | `sauvegarde.html` | présent | absent | Page de sauvegarde + sa tuile dans Outils. |
| [ ] | `restauration.html` | v.25/10/2026 13:00 | v.25/10/2026 12:35 | Version plus récente côté moulesmile. |

## Ce qui est déjà plus avancé dans menutest (à ne pas écraser)

- `import-carte.html` : v.01/11/2026 18:28 dans menutest, v.20/10/2026 18:45 dans moulesmile.
- Dossiers `haccp/`, `pointeuse/`, `planning/`, `etiquettes/`, `cartes/` : propres à menutest.
