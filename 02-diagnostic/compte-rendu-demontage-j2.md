---
title: Compte-rendu démontage J2 — Weber Genesis E-310 2007
date: 2026-06-08
tags: [weber, phoenix-weber, diagnostic, démontage]
---

# Compte-rendu — Premier démontage complet (07/06/2026)

18 photos analysées (IMG_3978→IMG_3995) + croisement avec liste pièces initiale.

---

## 1. Résumé exécutif

| Zone | État | Décision |
|------|------|----------|
| Plancher meuble 67756 | ⛔ Perforé 60-70% | **Remplacer** (artisan inox) |
| Firebox (cuve) | ✅ Confirmée non perforée — très sale | **Nettoyage profond** (Décap'Four + culottage) |
| Brûleurs ×3 | 🟡 Inox sain, extrémités oxydées | **Remplacer préventif** (kit 67722) |
| Grilles fonte ×3 | ⛔ Émail HS, rouille | **Remplacer** (7528 inox recommandé) |
| Rails support brûleurs | 🟡 Galvanisation épuisée, oxydation blanche | **Remplacer** (ref 88210) |
| Module allumage | 🟡 Boîtier OK, support rouillé | **Tester** — ref 67726 si HS |
| Crossover tubes ×3 | 🟢 Usure superficielle | **Garder** après nettoyage |
| Bac graisse principal | 🟡 Encrassé, non perforé | **Nettoyer ou remplacer** |
| Lèchefrite alu | ⛔ Saturée | **Remplacer** (consommable 6415) |
| Capot émaillé | 🟢 Dépôts calcaires seulement | **Nettoyer** |
| Châssis/chariot | 🟡 Rouille base et soudures | **Décaper + peinture HT** |
| Panneau commandes | 🟢 Structurel OK | **Nettoyer** |

---

## 2. Détail par pièce

### 2.1 Plancher de meuble — 67756 (⛔ critique sécurité)

**Photo : IMG_3982**

État catastrophique : perforation massive sur 60-70% de la surface centrale. Métal friable. Trous traversants de 10-20 cm². Seule la périphérie subsiste.

→ Plan maintenu : artisan inox local. Cotes : **66.7 × 50.8 × 3.8 cm**, inox 1.5-2mm.
→ Relever le pattern de visserie (trous de fixation) avant de démonter complètement.

### 2.2 Firebox (cuve de cuisson)

**Photos : IMG_3980, IMG_3994 — vérification physique 08/06/2026**

- **Structure : SAINE** — aucune perforation après inspection en plein jour ✅
- Lumière dans IMG_3980 = reflet/résidu, pas trou traversant
- Date de fabrication : **29/11/2007** (marquage `11-29-07-1`)
- État : très encrassée — graisse carbonisée épaisse, rouille superficielle

**→ PAS de remplacement cookbox** (~€80-120 économisés)
**→ Nettoyage profond** : protocole Décap'Four + culottage obligatoire (§4)

### 2.3 Brûleurs ×3 — réf 67722

**Photo : IMG_3981**

Corps inox 304 intact, terne. Rouille orangée aux extrémités venturi et zones de sertissage. Injecteurs laiton ×3 présents, vissés dans le manifold (propane, orifice ~0.46mm).

Diagnostic : fonctionnels a priori mais 19 ans d'usure → **remplacement préventif recommandé**.
Kit : **67722** (GFTIME Amazon ~€40) ou OEM ~€100.

Tâche avant démontage définitif : vérifier les orifices de flamme (trous non bouchés) à la lumière.

### 2.4 Rails / supports brûleurs — réf 88210

**Photo : IMG_3993**

2 rails en U, profil estampé, ~35-40cm. Galvanisation épuisée, oxydation blanche généralisée (non perforant mais structurellement affaibli). Pattes de fixation percées ×4 (~6mm).

→ **Pièce à ajouter à la liste J0** — non identifiée initialement.
→ Réf Weber : **88210** "Burner Tube Hardware" — kit visserie + clips + supports pour brûleurs Genesis 300 série 2007. Confirmé compatible 3741001.
→ Prix : ~€12-15 (bar-b-que.com, Amazon.fr)

> Note : si les rails U sont intégrés au cookbox (non démontables), ils partiront avec la firebox si remplacement. À confirmer au démontage suivant.

### 2.5 Module allumage — réf 67726

**Photos : IMG_3988, IMG_3989**

Boîtier plastique noir intact. 7 sorties câbles (pictogrammes flamme jaune). Numéro partiel visible : **`...5148630`** → correspond probablement au **Weber 65948** (igniter module Genesis 300 series 2007-2009).

Support métal de fixation : très rouillé.

→ Tester l'étincelle avant de commander. Si HS : **67726** (Esprit Barbecue, seul revendeur EU confirmé pour le boîtier métal 2007).

### 2.6 Visserie générale

**Photos : IMG_3978, IMG_3981, IMG_3988**

| Zone | Type visible | Taille approx |
|------|-------------|---------------|
| Montants châssis | Boulon CHC hexagonal | M8 ou M10 |
| Panneau latéral | Vis cruciforme tête plate | M4-M5 |
| Injecteurs laiton | Filetage gaz | M6 gaz |
| Support brûleurs | Vis Phillips tête ronde | M5 |

→ Réf kit visserie global : **81803** "Small hardware pack" (Weber OEM)
→ Réf visserie brûleurs : **88210** (inclut clips + screws burner tubes)

---

## 3. Point spécifique : pièce support côté droit de la cuve

La question portait sur "la pièce rouillée de support des brûleurs à droite de la cuve".

**Identification** : Sur le Genesis E-310 à commandes latérales, le côté droit (opposé aux robinets) comporte un **rail/bracket de guidage des extrémités des tubes brûleurs**. C'est une tôle estampée maintenant l'extrémité droite des 3 tubes dans leur position horizontale.

**Références à vérifier dans cet ordre** :
1. **88210** — kit hardware brûleurs (inclut possiblement ce bracket selon contenu exact)
2. Si bracket séparé non inclus dans 88210 : consulter le schéma éclaté Weber officiel avec n° modèle 3741001 sur [weber.com/US/en/help/schematics](https://www.weber.com/US/en/help/schematics/) — chercher "Part 10 hardware" ou "cookbox bracket"
3. Fabricants tiers (QuliMetal, GFTIME) vendent parfois ce bracket séparément sous "right burner support bracket Genesis 300"

**Action requise** : commander le **88210** (~€12) — si ce bracket n'y est pas, demander spécifiquement la ref à Weber support (1-800-446-1071 ou contact-emea.weber.com).

---

## 4. Nettoyage de la cuve — protocole

> Applicable si la cuve n'est PAS perforée (à confirmer en étape suivante).

### Matériel
- Brosse inox à poils rigides
- Grattoir plastique large
- Spray dégraissant four : **Décap'Four** (NaOH) ou **Mr Muscle Grill & Oven**
- Bicarbonate de soude + vinaigre blanc (rouille superficielle)
- Papier absorbant épais
- Huile végétale neutre (tournesol, colza — **pas olive**)
- Gants nitrile épais

### Protocole

**Étape 1 — Dégraissage à froid**
1. Cuve froide, à l'extérieur ou zone ventilée
2. Gratter les résidus solides (calamine, graisse carbonisée) avec grattoir plastique
3. Spray Décap'Four généreusement sur toutes les parois intérieures
4. Laisser agir **20-30 min** (ne pas laisser sécher)
5. Brosse inox : frotter en mouvements circulaires
6. Rincer abondamment à l'eau claire
7. Sécher immédiatement (chiffon + chaleur douce)

**Étape 2 — Traitement rouille superficielle**
1. Zones de rouille légère : pâte bicarbonate + vinaigre blanc, laisser 15 min
2. Frotter brosse mi-dure
3. Rincer + sécher

**Étape 3 — Culottage (seasoning)**
> Obligatoire après nettoyage agressif pour re-créer la couche protectrice.
1. Appliquer fine couche d'huile végétale (chiffon) sur toutes les surfaces intérieures
2. Chauffer le BBQ à **250°C** couvercle fermé pendant **30 min**
3. Fumée = polymérisation de l'huile = couche protectrice (comme une poêle en fonte)
4. Laisser refroidir couvercle entrouvert

**À ne PAS faire** :
- ❌ Produits abrasifs (risque rayure émail)
- ❌ Eau de Javel (attaque le métal)
- ❌ Ranger humide (rouille garantie)
- ❌ Huile d'olive (rancit, goût résiduel)

---

## 5. Liste pièces mise à jour (delta J0 → J2)

### Ajouts post-démontage

| Pièce | Réf | Prix est. | Priorité |
|-------|-----|-----------|----------|
| Kit hardware brûleurs (support droit inclus ?) | **88210** | ~€12 | Haute |
| Kit visserie général | **81803** | ~€8 | Moyenne |
| Vérifier firebox si perforée | Part 10 cookbox | ~€80-120 | ⚠️ À confirmer |

### Point d'attention : firebox

Si la paroi gauche est effectivement perforée, le budget total augmente de ~€80-120 (cookbox). À trancher physiquement avant commande.

---

## 6. Prochaines actions

- [ ] Vérifier paroi gauche firebox en plein jour (lumière ou cigarette-paper test)
- [ ] Relever pattern visserie plancher 67756 avant dépose définitive
- [ ] Commander 88210 (hardware kit ~€12)
- [ ] Tester module allumage (9V pile + câbles)
- [ ] Démonter panneau commandes pour accès injecteurs (nettoyage orifice calibre 0.46mm)
