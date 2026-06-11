/* ============================================================
   PHOENIX WEBER — i18n dictionary
   Languages: fr (default), en, nl, de
   Usage: const t = PHOENIX_T[lang];  t['nav.home']
   ============================================================ */

const PHOENIX_T = {

  /* ──────────────────────────────────────────────────────────
     FRANÇAIS (langue de référence)
  ────────────────────────────────────────────────────────── */
  fr: {
    ariaLang: 'fr',

    /* navigation */
    'nav.home':       'Accueil',
    'nav.diagnostic': 'Diagnostic',
    'nav.eclate':     'Éclaté',
    'nav.commandes':  'Commandes',
    'nav.faq':        'FAQ',
    'nav.journal':    'Journal',
    'nav.resultat':   'Résultat',
    'nav.etapes':     'Étapes',
    'nav.schematics': 'Schémas',

    /* page meta */
    'page.title': 'Phoenix Weber — Restauration Genesis E-310 (2007)',

    /* hero */
    'hero.kicker':        'Projet de restauration · 01',
    'hero.h1.line1':      'Renaître',
    'hero.h1.line2':      'des cendres',
    'hero.sub':           'Weber Genesis E-310 &nbsp;·&nbsp; millésime 2007',
    'hero.lede':          'Récupéré gratuitement le 5 juin 2026 en débarrassant une maison. Couvert de suie et de rouille, mais une fonte solide dessous. Objectif&nbsp;: le démonter, diagnostiquer chaque pièce, le remettre à neuf — et tout documenter ici.',
    'hero.status.label':  'Statut',
    'hero.status.received':'Reçu le',
    'hero.status.progress':'Avancement',
    'hero.status.pill':   'Diagnostic terminé',
    'hero.status.val':    '05.06.2026 — gratuit',
    'hero.status.adv':    'Identifié · pièces listées',

    /* diagnostic */
    'diag.kicker':         'Diagnostic · 02',
    'diag.h2':             'Identification &amp; pièces',
    'diag.lede':           'Modèle verrouillé à 100&nbsp;%. La cuve est saine — mais un point de sécurité bloque tout rallumage tant qu\'il n\'est pas traité.',
    'diag.critical.title': 'Point critique — sécurité',
    'diag.critical.h4':    'Plancher de meuble percé par la rouille',
    'diag.critical.p':     'Le bac de fond / plancher du meuble <span class="ref-inline">(réf 67756)</span> est percé de part en part par la corrosion. C\'est lui qui loge et maintient la bouteille de propane&nbsp;: <b>ne pas rallumer l\'appareil</b> avant son remplacement. Première pièce à commander, non négociable.',

    /* parts */
    'part.floor.h4':      'Bac de fond / plancher',
    'part.floor.p':       'Percé par la rouille, maintient la bouteille de propane. Remplacement impératif avant tout allumage.',
    'part.floor.pill':    'Critique',
    'part.flavorizer.h4': 'Barres Flavorizer ×&nbsp;5',
    'part.flavorizer.p':  'Pièces d\'usure, rongées après ~18 ans. Longueur 62,2&nbsp;cm spécifique aux modèles à commandes latérales.',
    'part.grilles.h4':    'Grilles de cuisson',
    'part.grilles.p':     'Inox privilégié à la fonte standard pour la durabilité. Cotes à respecter à l\'identique.',
    'part.todo':          'À remplacer',
    'part.wait':          'À tester',

    'diag.salvage.inox': '<b>Inox 304 ou émaillé porcelaine&nbsp;?</b> Pour un BBQ utilisé en extérieur sous climat humide&nbsp;: choisir <b>systématiquement l\'inox 304</b> pour les flavorizer bars et les brûleurs. Les pièces émaillées noires tiennent 2–4&nbsp;ans avant écaillage + rouille. L\'inox 304 dure 8–15 ans sans entretien particulier. Surcoût marginal&nbsp;: +20 à +40&nbsp;% max. Les grilles de cuisson font exception — la fonte émaillée donne de meilleures marques de cuisson si entretenue (seasoning huile après chaque lavage).',

    /* exploded view */
    'eclate.kicker':       'Vue éclatée · 03',
    'eclate.h2':           'Démontage &amp; remontage',
    'eclate.lede':         'Vue éclatée interactive du Genesis E-310 (3741001). Survole une pièce pour sa référence Weber, son état et sa note de démontage. Les numéros donnent l\'ordre de dépose, du haut vers le bas.',
    'eclate.btn.explode':  'Éclater le barbecue',
    'eclate.btn.reassemble':'Réassembler',
    'eclate.hint':         'Cliquer sur une pièce pour la sélectionner',
    'eclate.legend.title': 'Légende',
    'eclate.legend.keep':  'Récupérable',
    'eclate.legend.replace':'À remplacer',
    'eclate.legend.crit':  'Critique',

    /* status text for JS */
    'status.crit':    'Critique — sécurité',
    'status.replace': 'À remplacer',
    'status.keep':    'Récupérable',

    /* parts data for exploded view */
    parts: {
      l1:  { name: 'Capot émaillé + thermomètre',    ref: 'Capot : pièce de série · Thermomètre RÉF 67762',             note: 'Récupérable : décapage, lustrage, peinture haute température. Vérifier le thermomètre de capot.' },
      l2:  { name: 'Grilles de cuisson',             ref: 'RÉF 7524 (fonte émaillée) · alt. 7528 (inox)',               note: 'À remplacer — inox conseillé pour la durabilité. Respecter les cotes d\'origine.' },
      l3:  { name: 'Grille de maintien au chaud',    ref: 'Référence à confirmer (parts finder Weber)',                  note: 'À vérifier / remplacer. Se clipse à l\'arrière, au-dessus des grilles principales.' },
      l4:  { name: 'Barres Flavorizer ×5',           ref: 'RÉF 7540 (émaillé) · 7539 (inox) — 62,2 cm',                note: 'À remplacer — pièces d\'usure. Version « commandes latérales » (longueur spécifique).' },
      l5:  { name: 'Brûleurs ×3 (tubes)',            ref: 'RÉF 67722 · alt. 67820 (inox)',                              note: 'À vérifier / remplacer. Configuration commandes latérales, 3 × 14 000 Btu/h.' },
      l6:  { name: 'Cuve (firebox)',                 ref: 'Pièce de série — non remplacée',                             note: 'Récupérable : structurellement saine. Décalaminage complet + brossage avant remontage.' },
      l7:  { name: 'Allumeur + manifold LP',         ref: 'Allumeur RÉF 67726 · Manifold LP RÉF 67708',                note: 'Allumeur hors service, manifold très rouillé. Remplacer les deux. Boîtier métal spécifique 2007.' },
      l8:  { name: 'Plancher de meuble',             ref: 'RÉF 67756 — pièce critique',                                 note: 'Percé par la rouille sur 60-70 % de la surface. Ne pas allumer avant remplacement.' },
      l9:  { name: 'Rails support brûleurs',         ref: 'Kit hardware RÉF 88210',                                     note: 'Galvanisation épuisée, oxydation blanche. Remplacement inclus dans le kit hardware brûleurs.' },
      l10: { name: 'Tablettes latérales',            ref: 'Weber 67853 (acier inox)',                                   note: 'Récupérables après nettoyage. Retirer le film plastique protecteur avant remontage.' },
      l11: { name: 'Bac de récupération graisse',    ref: 'RÉF 6415 (barquette) · 67767/67758 (bac)',                  note: 'Nettoyer ou remplacer selon l\'état. Vider à chaque session.' },
      l12: { name: 'Châssis + roulettes',            ref: 'Roulettes RÉF 70359/70360',                                  note: 'Châssis récupérable. Nettoyer, huiler les articulations. Vérifier le blocage des roulettes.' }
    },

    /* orders / commandes */
    'cmd.kicker': 'Commandes · 04',
    'cmd.h2':     'Sourcing pièces',
    'cmd.lede':   'Toutes les pièces identifiées avec leur source EU privilégiée. Préférence inox 304 sur émaillé pour les pièces d\'usure.',

    /* FAQ */
    'faq.kicker': 'Questions fréquentes · 06',
    'faq.h2':     'FAQ — Weber Genesis',
    'faq.lede':   'Ce qu\'on apprend en cherchant des pièces. Chaque question a coûté du temps — autant le documenter.',

    /* journal */
    'journal.kicker':      'Journal de travaux · 05',
    'journal.h2':          'Carnet de bord',
    'journal.lede':        'Chaque étape, datée. Du jour de la récupération à la première flamme.',
    'journal.entry1.date': '05 juin 2026 — Jour 0',
    'journal.entry1.h4':   'Lancement · Identification · Diagnostic',
    'journal.entry2.date': '07 juin 2026 — Jour 2',
    'journal.entry2.h4':   'Premier démontage · Étendue des dégâts',
    'journal.entry3.date': '08 juin 2026 — Jour 3',
    'journal.entry3.h4':   'Sourcing pièces · Firebox confirmée saine',
    'journal.next.date':   'Prochaine étape',
    'journal.next.h4':     'Commande des pièces · Nettoyage cuve',
    'journal.note':        'Repo <b style="color:var(--accent)">Fguarien / phoenix-weber</b> complet et synchronisé — photos, diagnostic, liste de pièces et manuels. Une entrée s\'ajoute à chaque session de travail.',

    /* result */
    'result.kicker':      'Résultat final · 06',
    'result.h2':          'Avant / Après',
    'result.lede':        'La comparaison qui justifie tout le chantier. À venir une fois la première cuisson faite.',
    'result.target.tag':  'Objectif · catalogue',
    'result.target.kicker':'À quoi il ressemblera',
    'result.target.h3':   'La silhouette d\'usine à retrouver',
    'result.target.p':    'Photo catalogue Weber du Genesis&nbsp;E-310 sorti d\'usine&nbsp;: capot fermé net, meuble deux portes, brûleur latéral à droite, commandes sur le côté. C\'est la cible du chantier — capot et tablettes décapés/repolis, grilles inox neuves, plancher remplacé.',
    'result.ba.before':   '<b>Avant</b> — 05.06.2026',
    'result.ba.after':    '<b>Après</b> — à venir',
    'result.ba.label':    'Restauré &amp; allumé',
    'result.empty':       'Résultat final à publier dès la restauration terminée — première flamme comprise.',

    /* compatibility section */
    'compat.kicker': 'Compatibilité des pièces · 05',
    'compat.h2':     'Guide d\'identification des modèles',
    'compat.lede':   'La différence entre un E-310 à commandes latérales et frontales détermine 80 % des références. Ne commander qu\'avec le numéro de modèle complet.',

    /* footer */
    'foot.sig': 'Phoenix Weber · journal de restauration · 2026',

    /* etapes.html */
    'etapes.kicker':       'Carnet de chantier',
    'etapes.h1':           'Étapes de restauration',
    'etapes.lede':         'Chaque intervention documentée — décision, options chiffrées, mesures, résultat. Dans l\'ordre chronologique du chantier.',
    'etapes.step1.status': 'En cours — décision pending',
    'etapes.step1.title':  'Plancher de meuble',
    'etapes.step1.ref':    'Réf Weber 67756 · Cabinet Bottom · Genesis E-310 2007 (3741001)',
    'etapes.step2.title':  'Manifold propane',
    'etapes.step3.title':  'Nettoyage firebox',
    'etapes.pending':      'Pending',

    /* schematics page */
    'schematics.kicker':   'Schémas · Weber',
    'schematics.h1':       'Weber Genesis E-310 LP',
    'schematics.sub':      '3741001 · Commandes latérales · 2007',
    'schematics.intro':    'Liste complète des pièces du Weber Genesis E-310 LP à commandes latérales (modèle 3741001, 2007). Le schéma de référence utilisé est le <b>3741053</b> (Genesis E-310 LP 2008 Export) — les pièces sont identiques au 3741001 de 2007.',
    'schematics.ref.note': 'Schéma de référence : 3741053 (Genesis E-310 LP 2008 Export) — pièces identiques au 3741001 (2007)',
    'schematics.filter.placeholder': 'Filtrer par référence ou désignation…',
    'schematics.col.num':    '#',
    'schematics.col.ref':    'Réf. Weber',
    'schematics.col.name':   'Désignation',
    'schematics.col.cat':    'Catégorie',
    'schematics.col.eu':     'EU disponible',
    'schematics.col.notes':  'Notes',
    'schematics.sourcing.h2':'Fournisseurs EU',
    'schematics.sourcing.lede':'Sources testées pour livraison en France / Belgique / EU.',

    langNames: { fr: 'FR', en: 'EN', nl: 'NL', de: 'DE' }
  },

  /* ──────────────────────────────────────────────────────────
     ENGLISH
  ────────────────────────────────────────────────────────── */
  en: {
    ariaLang: 'en',

    'nav.home':       'Home',
    'nav.diagnostic': 'Diagnosis',
    'nav.eclate':     'Exploded',
    'nav.commandes':  'Parts',
    'nav.faq':        'FAQ',
    'nav.journal':    'Logbook',
    'nav.resultat':   'Result',
    'nav.etapes':     'Steps',
    'nav.schematics': 'Schematics',

    'page.title': 'Phoenix Weber — Genesis E-310 Restoration (2007)',

    'hero.kicker':        'Restoration Project · 01',
    'hero.h1.line1':      'Rise',
    'hero.h1.line2':      'from the ashes',
    'hero.sub':           'Weber Genesis E-310 &nbsp;·&nbsp; vintage 2007',
    'hero.lede':          'Picked up for free on June 5, 2026 while clearing out a house. Covered in soot and rust, but solid cast iron underneath. Goal: disassemble it, diagnose each part, restore it — and document everything here.',
    'hero.status.label':  'Status',
    'hero.status.received':'Received on',
    'hero.status.progress':'Progress',
    'hero.status.pill':   'Diagnosis complete',
    'hero.status.val':    '05.06.2026 — free',
    'hero.status.adv':    'Identified · parts listed',

    'diag.kicker':         'Diagnosis · 02',
    'diag.h2':             'Identification &amp; parts',
    'diag.lede':           'Model identified at 100%. The firebox is sound — but a safety issue prevents any use until resolved.',
    'diag.critical.title': 'Critical point — safety',
    'diag.critical.h4':    'Cabinet floor pierced by rust',
    'diag.critical.p':     'The cabinet bottom / floor panel <span class="ref-inline">(ref 67756)</span> is perforated all the way through by corrosion. It holds the propane bottle in place: <b>do not light the appliance</b> before replacing it. First part to order — non-negotiable.',

    'part.floor.h4':      'Cabinet bottom / floor',
    'part.floor.p':       'Perforated by rust, holds the propane bottle. Replacement mandatory before any ignition.',
    'part.floor.pill':    'Critical',
    'part.flavorizer.h4': 'Flavorizer Bars ×&nbsp;5',
    'part.flavorizer.p':  'Wear parts, corroded after ~18 years. Length 62.2&nbsp;cm specific to side-control models.',
    'part.grilles.h4':    'Cooking grates',
    'part.grilles.p':     'Stainless steel preferred over standard cast iron for durability. Dimensions must match exactly.',
    'part.todo':          'To replace',
    'part.wait':          'To test',

    'diag.salvage.inox': '<b>304 stainless or porcelain enamel?</b> For a BBQ used outdoors in a humid climate: always choose <b>304 stainless steel</b> for flavorizer bars and burners. Porcelain-enamelled parts last 2–4 years before chipping and rusting. 304 stainless lasts 8–15 years with minimal maintenance. Marginal extra cost: +20 to +40% max. Cooking grates are an exception — enamelled cast iron gives better sear marks if maintained (oil seasoning after each wash).',

    'eclate.kicker':       'Exploded View · 03',
    'eclate.h2':           'Disassembly &amp; reassembly',
    'eclate.lede':         'Interactive exploded view of the Genesis E-310 (3741001). Hover a part to see its Weber reference, condition, and disassembly note. Numbers show removal order, top to bottom.',
    'eclate.btn.explode':  'Explode the grill',
    'eclate.btn.reassemble':'Reassemble',
    'eclate.hint':         'Click a part to select it',
    'eclate.legend.title': 'Legend',
    'eclate.legend.keep':  'Salvageable',
    'eclate.legend.replace':'To replace',
    'eclate.legend.crit':  'Critical',

    'status.crit':    'Critical — safety',
    'status.replace': 'To replace',
    'status.keep':    'Salvageable',

    parts: {
      l1:  { name: 'Enamelled lid + thermometer',  ref: 'Lid: stock part · Thermometer REF 67762',                   note: 'Salvageable: strip, polish, high-temp paint. Check lid thermometer.' },
      l2:  { name: 'Cooking grates',               ref: 'REF 7524 (enamelled cast iron) · alt. 7528 (stainless)',    note: 'To replace — stainless recommended for durability. Match original dimensions.' },
      l3:  { name: 'Warming rack',                 ref: 'Reference to confirm (Weber parts finder)',                  note: 'To check / replace. Clips to rear, above main grates.' },
      l4:  { name: 'Flavorizer bars ×5',           ref: 'REF 7540 (enamelled) · 7539 (stainless) — 62.2 cm',        note: 'To replace — wear parts. Side-control version (specific length).' },
      l5:  { name: 'Burners ×3 (tubes)',           ref: 'REF 67722 · alt. 67820 (stainless)',                        note: 'To check / replace. Side-control configuration, 3 × 14,000 Btu/h.' },
      l6:  { name: 'Firebox (cookbox)',             ref: 'Stock part — not replaced',                                 note: 'Salvageable: structurally sound. Full decarbonising + brushing before reassembly.' },
      l7:  { name: 'Igniter + LP manifold',        ref: 'Igniter REF 67726 · LP Manifold REF 67708',                note: 'Igniter dead, manifold heavily rusted. Replace both. Metal housing specific to 2007.' },
      l8:  { name: 'Cabinet floor panel',          ref: 'REF 67756 — critical part',                                 note: 'Perforated by rust over 60–70% of surface. Do not light before replacement.' },
      l9:  { name: 'Burner support rails',         ref: 'Hardware kit REF 88210',                                    note: 'Galvanisation depleted, white oxidation. Replacement included in burner hardware kit.' },
      l10: { name: 'Side tables',                  ref: 'Weber 67853 (stainless)',                                   note: 'Salvageable after cleaning. Remove protective plastic film before reassembly.' },
      l11: { name: 'Grease catch pan',             ref: 'REF 6415 (drip pan) · 67767/67758 (catch tray)',           note: 'Clean or replace depending on condition. Empty after each session.' },
      l12: { name: 'Frame + casters',              ref: 'Casters REF 70359/70360',                                   note: 'Frame salvageable. Clean, oil joints. Check caster locks.' }
    },

    'cmd.kicker': 'Parts Order · 04',
    'cmd.h2':     'Parts Sourcing',
    'cmd.lede':   'All identified parts with their preferred EU source. 304 stainless preferred over enamel for wear parts.',

    'faq.kicker': 'Frequently Asked Questions · 06',
    'faq.h2':     'FAQ — Weber Genesis',
    'faq.lede':   'What you learn while searching for parts. Each question cost time — might as well document it.',

    'journal.kicker':      'Work Journal · 05',
    'journal.h2':          'Logbook',
    'journal.lede':        'Every step, dated. From pickup day to the first flame.',
    'journal.entry1.date': 'June 05, 2026 — Day 0',
    'journal.entry1.h4':   'Launch · Identification · Diagnosis',
    'journal.entry2.date': 'June 07, 2026 — Day 2',
    'journal.entry2.h4':   'First disassembly · Extent of damage',
    'journal.entry3.date': 'June 08, 2026 — Day 3',
    'journal.entry3.h4':   'Parts sourcing · Firebox confirmed sound',
    'journal.next.date':   'Next step',
    'journal.next.h4':     'Parts order · Firebox cleaning',
    'journal.note':        'Repo <b style="color:var(--accent)">Fguarien / phoenix-weber</b> complete and synced — photos, diagnosis, parts list and manuals. An entry is added at each work session.',

    'result.kicker':      'Final Result · 06',
    'result.h2':          'Before / After',
    'result.lede':        'The comparison that justifies the whole project. Coming once the first cook is done.',
    'result.target.tag':  'Goal · catalogue',
    'result.target.kicker':'What it will look like',
    'result.target.h3':   'The factory silhouette to restore',
    'result.target.p':    'Weber catalogue photo of the factory Genesis&nbsp;E-310: clean closed lid, two-door cabinet, side burner on the right, controls on the side. This is the project target — lid and side tables stripped/repolished, new stainless grates, floor replaced.',
    'result.ba.before':   '<b>Before</b> — 05.06.2026',
    'result.ba.after':    '<b>After</b> — coming soon',
    'result.ba.label':    'Restored &amp; lit',
    'result.empty':       'Final result to be published once restoration is complete — first flame included.',

    'compat.kicker': 'Parts Compatibility · 05',
    'compat.h2':     'Model Identification Guide',
    'compat.lede':   'The difference between side-control and front-control E-310 determines 80% of part numbers. Only order with the complete model number.',

    'foot.sig': 'Phoenix Weber · restoration journal · 2026',

    'etapes.kicker':       'Workshop logbook',
    'etapes.h1':           'Restoration Steps',
    'etapes.lede':         'Each intervention documented — decision, priced options, measurements, result. In chronological order of the project.',
    'etapes.step1.status': 'In progress — decision pending',
    'etapes.step1.title':  'Cabinet floor',
    'etapes.step1.ref':    'Weber Ref 67756 · Cabinet Bottom · Genesis E-310 2007 (3741001)',
    'etapes.step2.title':  'Propane manifold',
    'etapes.step3.title':  'Firebox cleaning',
    'etapes.pending':      'Pending',

    'schematics.kicker':   'Schematics · Weber',
    'schematics.h1':       'Weber Genesis E-310 LP',
    'schematics.sub':      '3741001 · Side controls · 2007',
    'schematics.intro':    'Complete parts list for the Weber Genesis E-310 LP with side controls (model 3741001, 2007). The reference schematic used is <b>3741053</b> (Genesis E-310 LP 2008 Export) — parts are identical to the 2007 3741001.',
    'schematics.ref.note': 'Reference schematic: 3741053 (Genesis E-310 LP 2008 Export) — identical parts to 3741001 (2007)',
    'schematics.filter.placeholder': 'Filter by reference or name…',
    'schematics.col.num':    '#',
    'schematics.col.ref':    'Weber Ref.',
    'schematics.col.name':   'Description',
    'schematics.col.cat':    'Category',
    'schematics.col.eu':     'EU available',
    'schematics.col.notes':  'Notes',
    'schematics.sourcing.h2':'EU Suppliers',
    'schematics.sourcing.lede':'Tested sources for delivery to France / Belgium / EU.',

    langNames: { fr: 'FR', en: 'EN', nl: 'NL', de: 'DE' }
  },

  /* ──────────────────────────────────────────────────────────
     NEDERLANDS
  ────────────────────────────────────────────────────────── */
  nl: {
    ariaLang: 'nl',

    'nav.home':       'Startpagina',
    'nav.diagnostic': 'Diagnose',
    'nav.eclate':     'Ontploft',
    'nav.commandes':  'Onderdelen',
    'nav.faq':        'FAQ',
    'nav.journal':    'Logboek',
    'nav.resultat':   'Resultaat',
    'nav.etapes':     'Stappen',
    'nav.schematics': 'Schema\'s',

    'page.title': 'Phoenix Weber — Genesis E-310 Restauratie (2007)',

    'hero.kicker':        'Restauratieproject · 01',
    'hero.h1.line1':      'Herrijs',
    'hero.h1.line2':      'uit de as',
    'hero.sub':           'Weber Genesis E-310 &nbsp;·&nbsp; bouwjaar 2007',
    'hero.lede':          'Gratis meegenomen op 5 juni 2026 bij het leegmaken van een woning. Bedekt met roet en roest, maar degelijk gietijzer eronder. Doel: demonteren, elk onderdeel diagnosticeren, opknappen — en alles hier documenteren.',
    'hero.status.label':  'Status',
    'hero.status.received':'Ontvangen op',
    'hero.status.progress':'Voortgang',
    'hero.status.pill':   'Diagnose voltooid',
    'hero.status.val':    '05.06.2026 — gratis',
    'hero.status.adv':    'Geïdentificeerd · onderdelen genoteerd',

    'diag.kicker':         'Diagnose · 02',
    'diag.h2':             'Identificatie &amp; onderdelen',
    'diag.lede':           'Model 100% geïdentificeerd. De vuurkist is intact — maar een veiligheidsprobleem verhindert gebruik totdat het verholpen is.',
    'diag.critical.title': 'Kritisch punt — veiligheid',
    'diag.critical.h4':    'Kastbodem doorgevreten door roest',
    'diag.critical.p':     'De kastbodem / vloerplaat <span class="ref-inline">(ref 67756)</span> is volledig doorgevreten door corrosie. Dit onderdeel houdt de propaanfles op zijn plaats: <b>niet aansteken</b> voordat het vervangen is. Eerste te bestellen onderdeel — geen discussie.',

    'part.floor.h4':      'Kastbodem / vloerplaat',
    'part.floor.p':       'Doorgevreten door roest, houdt de propaanfles vast. Vervanging verplicht voor ingebruikname.',
    'part.floor.pill':    'Kritisch',
    'part.flavorizer.h4': 'Flavorizer Staven ×&nbsp;5',
    'part.flavorizer.p':  'Slijtageonderdelen, aangevreten na ~18 jaar. Lengte 62,2&nbsp;cm specifiek voor modellen met zijknoppen.',
    'part.grilles.h4':    'Kookroosters',
    'part.grilles.p':     'Roestvrij staal verkozen boven standaard gietijzer voor duurzaamheid. Afmetingen moeten exact overeenkomen.',
    'part.todo':          'Te vervangen',
    'part.wait':          'Te testen',

    'diag.salvage.inox': '<b>304 Inox of geëmailleerd porselein?</b> Voor een BBQ buiten in een vochtig klimaat: kies altijd <b>304 roestvrij staal</b> voor flavorizer staven en branders. Geëmailleerde onderdelen gaan 2–4 jaar mee voor schilfering en roest. 304 inox gaat 8–15 jaar mee met minimaal onderhoud. Kleine meerprijs: +20 tot +40% max. Kookroosters zijn een uitzondering — geëmailleerd gietijzer geeft betere grillstrepen als goed onderhouden (olie na elke wasbeurt).',

    'eclate.kicker':       'Explosietekening · 03',
    'eclate.h2':           'Demontage &amp; montage',
    'eclate.lede':         'Interactieve explosietekening van de Genesis E-310 (3741001). Beweeg over een onderdeel voor de Weber-referentie, staat en demontagenoot. Cijfers geven de volgorde van verwijdering, van boven naar beneden.',
    'eclate.btn.explode':  'Barbecue opblazen',
    'eclate.btn.reassemble':'Samenstellen',
    'eclate.hint':         'Klik op een onderdeel om het te selecteren',
    'eclate.legend.title': 'Legenda',
    'eclate.legend.keep':  'Te herstellen',
    'eclate.legend.replace':'Te vervangen',
    'eclate.legend.crit':  'Kritisch',

    'status.crit':    'Kritisch — veiligheid',
    'status.replace': 'Te vervangen',
    'status.keep':    'Te herstellen',

    parts: {
      l1:  { name: 'Geëmailleerde deksel + thermometer', ref: 'Deksel: serieonderdeel · Thermometer REF 67762',                    note: 'Herbruikbaar: afstropen, polijsten, hitteverf. Thermometer controleren.' },
      l2:  { name: 'Kookroosters',                       ref: 'REF 7524 (geëmailleerd gietijzer) · alt. 7528 (inox)',              note: 'Te vervangen — inox aanbevolen voor duurzaamheid. Originele maten aanhouden.' },
      l3:  { name: 'Warmhoudrrooster',                   ref: 'Referentie te bevestigen (Weber onderdelen zoeker)',                 note: 'Te controleren / vervangen. Klipt achteraan, boven de hoofdroosters.' },
      l4:  { name: 'Flavorizer staven ×5',               ref: 'REF 7540 (geëmailleerd) · 7539 (inox) — 62,2 cm',                  note: 'Te vervangen — slijtageonderdelen. Versie met zijknoppen (specifieke lengte).' },
      l5:  { name: 'Branders ×3 (buizen)',               ref: 'REF 67722 · alt. 67820 (inox)',                                     note: 'Te controleren / vervangen. Zijknoppenconfiguratie, 3 × 14.000 Btu/u.' },
      l6:  { name: 'Vuurkist (cookbox)',                 ref: 'Serieonderdeel — niet vervangen',                                   note: 'Herbruikbaar: structureel intact. Volledig ontkolen + borstelen voor hermontage.' },
      l7:  { name: 'Ontsteking + LP manifold',           ref: 'Ontsteking REF 67726 · LP Manifold REF 67708',                     note: 'Ontsteking defect, manifold sterk verroest. Beide vervangen. Metalen behuizing specifiek voor 2007.' },
      l8:  { name: 'Kastbodem plaat',                    ref: 'REF 67756 — kritisch onderdeel',                                   note: '60–70% van het oppervlak doorgevreten door roest. Niet aansteken voor vervanging.' },
      l9:  { name: 'Brandersteunrails',                  ref: 'Hardware kit REF 88210',                                            note: 'Verzinking uitgeput, witte oxidatie. Vervanging inbegrepen in branderharware kit.' },
      l10: { name: 'Zijplanken',                         ref: 'Weber 67853 (inox)',                                                note: 'Herbruikbaar na reiniging. Beschermende plastic folie verwijderen voor hermontage.' },
      l11: { name: 'Vetopvangbak',                       ref: 'REF 6415 (lekbak) · 67767/67758 (opvangbak)',                      note: 'Reinigen of vervangen afhankelijk van staat. Na elke sessie leegmaken.' },
      l12: { name: 'Frame + wielen',                     ref: 'Wielen REF 70359/70360',                                            note: 'Frame herbruikbaar. Reinigen, scharnieren oliën. Wielborglippem controleren.' }
    },

    'cmd.kicker': 'Onderdelen · 04',
    'cmd.h2':     'Onderdelen zoeken',
    'cmd.lede':   'Alle geïdentificeerde onderdelen met voorkeur EU-bron. 304 inox verkozen boven emaille voor slijtageonderdelen.',

    'faq.kicker': 'Veelgestelde vragen · 06',
    'faq.h2':     'FAQ — Weber Genesis',
    'faq.lede':   'Wat je leert bij het zoeken naar onderdelen. Elke vraag kostte tijd — het kan maar gedocumenteerd worden.',

    'journal.kicker':      'Werklogboek · 05',
    'journal.h2':          'Logboek',
    'journal.lede':        'Elke stap, gedateerd. Van de ophaaldag tot de eerste vlam.',
    'journal.entry1.date': '05 juni 2026 — Dag 0',
    'journal.entry1.h4':   'Start · Identificatie · Diagnose',
    'journal.entry2.date': '07 juni 2026 — Dag 2',
    'journal.entry2.h4':   'Eerste demontage · Omvang van de schade',
    'journal.entry3.date': '08 juni 2026 — Dag 3',
    'journal.entry3.h4':   'Onderdelen zoeken · Vuurkist bevestigd intact',
    'journal.next.date':   'Volgende stap',
    'journal.next.h4':     'Onderdelen bestellen · Vuurkist reinigen',
    'journal.note':        'Repo <b style="color:var(--accent)">Fguarien / phoenix-weber</b> volledig en gesynchroniseerd — foto\'s, diagnose, onderdelenlijst en handleidingen. Een invoer wordt toegevoegd bij elke werksessie.',

    'result.kicker':      'Eindresultaat · 06',
    'result.h2':          'Voor / Na',
    'result.lede':        'De vergelijking die het hele project rechtvaardigt. Komt zodra de eerste kook klaar is.',
    'result.target.tag':  'Doel · catalogus',
    'result.target.kicker':'Hoe het eruit zal zien',
    'result.target.h3':   'Het fabriekssilhouet om te herstellen',
    'result.target.p':    'Weber catalogusfoto van de fabrieks Genesis&nbsp;E-310: schone gesloten deksel, tweeluchts kast, zijbrander rechts, bedieningselementen opzij. Dit is het projectdoel — deksel en zijplanken gestript/herpglaasd, nieuwe inox roosters, bodem vervangen.',
    'result.ba.before':   '<b>Voor</b> — 05.06.2026',
    'result.ba.after':    '<b>Na</b> — binnenkort',
    'result.ba.label':    'Hersteld &amp; aangestoken',
    'result.empty':       'Eindresultaat te publiceren zodra de restauratie voltooid is — eerste vlam inbegrepen.',

    'compat.kicker': 'Onderdelencompatibiliteit · 05',
    'compat.h2':     'Modelidentificatiegids',
    'compat.lede':   'Het verschil tussen een E-310 met zij- of frontbediening bepaalt 80% van de referenties. Bestel alleen met het volledige modelnummer.',

    'foot.sig': 'Phoenix Weber · restauratiedagboek · 2026',

    'etapes.kicker':       'Werkplaatslogboek',
    'etapes.h1':           'Restauratiestappen',
    'etapes.lede':         'Elke ingreep gedocumenteerd — beslissing, geprijs opties, maten, resultaat. In chronologische volgorde van het project.',
    'etapes.step1.status': 'Bezig — beslissing in behandeling',
    'etapes.step1.title':  'Kastbodem',
    'etapes.step1.ref':    'Weber Ref 67756 · Cabinet Bottom · Genesis E-310 2007 (3741001)',
    'etapes.step2.title':  'Propaan manifold',
    'etapes.step3.title':  'Vuurkist reinigen',
    'etapes.pending':      'In behandeling',

    'schematics.kicker':   'Schema\'s · Weber',
    'schematics.h1':       'Weber Genesis E-310 LP',
    'schematics.sub':      '3741001 · Zijbediening · 2007',
    'schematics.intro':    'Volledige onderdelenlijst van de Weber Genesis E-310 LP met zijbediening (model 3741001, 2007). Het gebruikte referentieschema is <b>3741053</b> (Genesis E-310 LP 2008 Export) — onderdelen zijn identiek aan het 3741001 van 2007.',
    'schematics.ref.note': 'Referentieschema: 3741053 (Genesis E-310 LP 2008 Export) — identieke onderdelen als 3741001 (2007)',
    'schematics.filter.placeholder': 'Filteren op referentie of naam…',
    'schematics.col.num':    '#',
    'schematics.col.ref':    'Weber Ref.',
    'schematics.col.name':   'Omschrijving',
    'schematics.col.cat':    'Categorie',
    'schematics.col.eu':     'EU beschikbaar',
    'schematics.col.notes':  'Opmerkingen',
    'schematics.sourcing.h2':'EU Leveranciers',
    'schematics.sourcing.lede':'Geteste bronnen voor levering in Frankrijk / België / EU.',

    langNames: { fr: 'FR', en: 'EN', nl: 'NL', de: 'DE' }
  },

  /* ──────────────────────────────────────────────────────────
     DEUTSCH
  ────────────────────────────────────────────────────────── */
  de: {
    ariaLang: 'de',

    'nav.home':       'Startseite',
    'nav.diagnostic': 'Diagnose',
    'nav.eclate':     'Explosionsansicht',
    'nav.commandes':  'Teile',
    'nav.faq':        'FAQ',
    'nav.journal':    'Logbuch',
    'nav.resultat':   'Ergebnis',
    'nav.etapes':     'Schritte',
    'nav.schematics': 'Schaltplan',

    'page.title': 'Phoenix Weber — Genesis E-310 Restaurierung (2007)',

    'hero.kicker':        'Restaurierungsprojekt · 01',
    'hero.h1.line1':      'Auferstehen',
    'hero.h1.line2':      'aus der Asche',
    'hero.sub':           'Weber Genesis E-310 &nbsp;·&nbsp; Baujahr 2007',
    'hero.lede':          'Kostenlos abgeholt am 5. Juni 2026 beim Räumen eines Hauses. Mit Ruß und Rost bedeckt, aber massives Gusseisen darunter. Ziel: zerlegen, jedes Teil diagnostizieren, aufarbeiten — und alles hier dokumentieren.',
    'hero.status.label':  'Status',
    'hero.status.received':'Erhalten am',
    'hero.status.progress':'Fortschritt',
    'hero.status.pill':   'Diagnose abgeschlossen',
    'hero.status.val':    '05.06.2026 — kostenlos',
    'hero.status.adv':    'Identifiziert · Teile gelistet',

    'diag.kicker':         'Diagnose · 02',
    'diag.h2':             'Identifikation &amp; Teile',
    'diag.lede':           'Modell zu 100% identifiziert. Die Feuerkammer ist intakt — aber ein Sicherheitsproblem verhindert jede Nutzung bis zur Behebung.',
    'diag.critical.title': 'Kritischer Punkt — Sicherheit',
    'diag.critical.h4':    'Schrank-Boden von Rost durchgefressen',
    'diag.critical.p':     'Der Schrank-Boden / die Bodenplatte <span class="ref-inline">(Ref. 67756)</span> ist durch Korrosion vollständig durchgefressen. Er hält die Propanflasche an ihrem Platz: <b>Gerät nicht zünden</b> bevor er ersetzt wurde. Erstes zu bestellendes Teil — nicht verhandelbar.',

    'part.floor.h4':      'Kastboden / Bodenplatte',
    'part.floor.p':       'Von Rost durchgefressen, hält die Propanflasche. Ersatz zwingend vor dem ersten Zünden.',
    'part.floor.pill':    'Kritisch',
    'part.flavorizer.h4': 'Flavorizer-Stäbe ×&nbsp;5',
    'part.flavorizer.p':  'Verschleißteile, nach ~18 Jahren korrodiert. Länge 62,2&nbsp;cm spezifisch für Seitensteuerungsmodelle.',
    'part.grilles.h4':    'Kochroste',
    'part.grilles.p':     'Edelstahl bevorzugt gegenüber Standardgusseisen für Langlebigkeit. Maße müssen exakt übereinstimmen.',
    'part.todo':          'Zu ersetzen',
    'part.wait':          'Zu testen',

    'diag.salvage.inox': '<b>304 Edelstahl oder Porzellanemaille?</b> Für einen BBQ im Freien unter feuchtem Klima: immer <b>304 Edelstahl</b> für Flavorizer-Stäbe und Brenner wählen. Emaillierte Teile halten 2–4 Jahre bevor sie abplatzen und rosten. 304 Edelstahl hält 8–15 Jahre bei minimalem Pflegeaufwand. Geringer Mehrpreis: +20 bis +40% max. Kochroste sind eine Ausnahme — emailliertes Gusseisen gibt bessere Grillstreifen wenn gepflegt (Öl nach jedem Waschen).',

    'eclate.kicker':       'Explosionsansicht · 03',
    'eclate.h2':           'Demontage &amp; Montage',
    'eclate.lede':         'Interaktive Explosionsansicht des Genesis E-310 (3741001). Fahren Sie über ein Teil für seine Weber-Referenz, Zustand und Demontageanmerkung. Zahlen zeigen die Ausbauentfernung von oben nach unten.',
    'eclate.btn.explode':  'Grill auseinandernehmen',
    'eclate.btn.reassemble':'Zusammenbauen',
    'eclate.hint':         'Teil anklicken zum Auswählen',
    'eclate.legend.title': 'Legende',
    'eclate.legend.keep':  'Wiederverwendbar',
    'eclate.legend.replace':'Zu ersetzen',
    'eclate.legend.crit':  'Kritisch',

    'status.crit':    'Kritisch — Sicherheit',
    'status.replace': 'Zu ersetzen',
    'status.keep':    'Wiederverwendbar',

    parts: {
      l1:  { name: 'Emaillierter Deckel + Thermometer',  ref: 'Deckel: Serienteil · Thermometer REF 67762',                        note: 'Wiederverwendbar: abbeizen, polieren, Hochtemperaturlack. Deckelthermometer prüfen.' },
      l2:  { name: 'Kochroste',                          ref: 'REF 7524 (emailliertes Gusseisen) · alt. 7528 (Edelstahl)',          note: 'Zu ersetzen — Edelstahl für Langlebigkeit empfohlen. Originalmaße einhalten.' },
      l3:  { name: 'Warmhalterost',                      ref: 'Referenz zu bestätigen (Weber Teilesuche)',                          note: 'Zu prüfen / ersetzen. Klinkt hinten ein, über den Hauptrosten.' },
      l4:  { name: 'Flavorizer-Stäbe ×5',               ref: 'REF 7540 (emailliert) · 7539 (Edelstahl) — 62,2 cm',               note: 'Zu ersetzen — Verschleißteile. Seitensteuerungsversion (spezifische Länge).' },
      l5:  { name: 'Brenner ×3 (Rohre)',                 ref: 'REF 67722 · alt. 67820 (Edelstahl)',                                 note: 'Zu prüfen / ersetzen. Seitensteuerungskonfiguration, 3 × 14.000 Btu/h.' },
      l6:  { name: 'Feuerkammer (Cookbox)',              ref: 'Serienteil — nicht ersetzt',                                         note: 'Wiederverwendbar: strukturell intakt. Vollständige Entkoksung + Bürsten vor Wiedermontage.' },
      l7:  { name: 'Zünder + LP-Verteiler',             ref: 'Zünder REF 67726 · LP-Verteiler REF 67708',                         note: 'Zünder defekt, Verteiler stark verrostet. Beide ersetzen. Metallgehäuse spezifisch für 2007.' },
      l8:  { name: 'Schrankbodenplatte',                 ref: 'REF 67756 — kritisches Teil',                                       note: '60–70% der Fläche von Rost durchgefressen. Nicht zünden vor Ersatz.' },
      l9:  { name: 'Brennertrageschienen',               ref: 'Hardware-Kit REF 88210',                                             note: 'Verzinkung erschöpft, weiße Oxidation. Ersatz im Brenner-Hardware-Kit enthalten.' },
      l10: { name: 'Seitenablagen',                      ref: 'Weber 67853 (Edelstahl)',                                            note: 'Nach Reinigung wiederverwendbar. Schutzfolie vor Wiedermontage entfernen.' },
      l11: { name: 'Fettauffangwanne',                   ref: 'REF 6415 (Tropfschale) · 67767/67758 (Auffangwanne)',               note: 'Je nach Zustand reinigen oder ersetzen. Nach jeder Nutzung leeren.' },
      l12: { name: 'Rahmen + Rollen',                    ref: 'Rollen REF 70359/70360',                                             note: 'Rahmen wiederverwendbar. Reinigen, Gelenke ölen. Rollensperre prüfen.' }
    },

    'cmd.kicker': 'Teile · 04',
    'cmd.h2':     'Teile beschaffen',
    'cmd.lede':   'Alle identifizierten Teile mit bevorzugter EU-Quelle. 304 Edelstahl gegenüber Emaille für Verschleißteile bevorzugt.',

    'faq.kicker': 'Häufige Fragen · 06',
    'faq.h2':     'FAQ — Weber Genesis',
    'faq.lede':   'Was man beim Suchen nach Teilen lernt. Jede Frage kostete Zeit — also sollte es dokumentiert werden.',

    'journal.kicker':      'Arbeitsprotokoll · 05',
    'journal.h2':          'Logbuch',
    'journal.lede':        'Jeder Schritt, datiert. Vom Abholtag bis zur ersten Flamme.',
    'journal.entry1.date': '05. Juni 2026 — Tag 0',
    'journal.entry1.h4':   'Start · Identifikation · Diagnose',
    'journal.entry2.date': '07. Juni 2026 — Tag 2',
    'journal.entry2.h4':   'Erste Demontage · Schadensausmaß',
    'journal.entry3.date': '08. Juni 2026 — Tag 3',
    'journal.entry3.h4':   'Teile beschaffen · Feuerkammer bestätigt intakt',
    'journal.next.date':   'Nächster Schritt',
    'journal.next.h4':     'Teile bestellen · Feuerkammer reinigen',
    'journal.note':        'Repo <b style="color:var(--accent)">Fguarien / phoenix-weber</b> vollständig und synchronisiert — Fotos, Diagnose, Teileliste und Handbücher. Ein Eintrag wird bei jeder Arbeitssitzung hinzugefügt.',

    'result.kicker':      'Endergebnis · 06',
    'result.h2':          'Vorher / Nachher',
    'result.lede':        'Der Vergleich, der das gesamte Projekt rechtfertigt. Kommt sobald das erste Grillen erledigt ist.',
    'result.target.tag':  'Ziel · Katalog',
    'result.target.kicker':'So wird es aussehen',
    'result.target.h3':   'Die Werkssilhouette zum Wiederherstellen',
    'result.target.p':    'Weber-Katalogfoto des Werks-Genesis&nbsp;E-310: sauber geschlossener Deckel, Zweitürenschrank, Seitenenbrenner rechts, Bedienelemente seitlich. Dies ist das Projektziel — Deckel und Seitenablagen abgebeigt/poliert, neue Edelstahlroste, Boden ersetzt.',
    'result.ba.before':   '<b>Vorher</b> — 05.06.2026',
    'result.ba.after':    '<b>Nachher</b> — demnächst',
    'result.ba.label':    'Restauriert &amp; gezündet',
    'result.empty':       'Endergebnis wird veröffentlicht sobald die Restaurierung abgeschlossen ist — erste Flamme inklusive.',

    'compat.kicker': 'Teilekompatibilität · 05',
    'compat.h2':     'Modellidentifikationsführer',
    'compat.lede':   'Der Unterschied zwischen einem E-310 mit Seiten- oder Frontbedienung bestimmt 80% der Teilenummern. Nur mit vollständiger Modellnummer bestellen.',

    'foot.sig': 'Phoenix Weber · Restaurierungsjournal · 2026',

    'etapes.kicker':       'Werkstattprotokoll',
    'etapes.h1':           'Restaurierungsschritte',
    'etapes.lede':         'Jeder Eingriff dokumentiert — Entscheidung, bepreiste Optionen, Maße, Ergebnis. In chronologischer Reihenfolge des Projekts.',
    'etapes.step1.status': 'In Bearbeitung — Entscheidung ausstehend',
    'etapes.step1.title':  'Schrank-Boden',
    'etapes.step1.ref':    'Weber Ref 67756 · Cabinet Bottom · Genesis E-310 2007 (3741001)',
    'etapes.step2.title':  'Propan-Verteiler',
    'etapes.step3.title':  'Feuerkammer reinigen',
    'etapes.pending':      'Ausstehend',

    'schematics.kicker':   'Schaltplan · Weber',
    'schematics.h1':       'Weber Genesis E-310 LP',
    'schematics.sub':      '3741001 · Seitensteuerung · 2007',
    'schematics.intro':    'Vollständige Teileliste für den Weber Genesis E-310 LP mit Seitensteuerung (Modell 3741001, 2007). Der verwendete Referenzschaltplan ist <b>3741053</b> (Genesis E-310 LP 2008 Export) — Teile sind identisch mit dem 3741001 von 2007.',
    'schematics.ref.note': 'Referenzschaltplan: 3741053 (Genesis E-310 LP 2008 Export) — identische Teile wie 3741001 (2007)',
    'schematics.filter.placeholder': 'Nach Referenz oder Bezeichnung filtern…',
    'schematics.col.num':    '#',
    'schematics.col.ref':    'Weber Ref.',
    'schematics.col.name':   'Bezeichnung',
    'schematics.col.cat':    'Kategorie',
    'schematics.col.eu':     'EU verfügbar',
    'schematics.col.notes':  'Anmerkungen',
    'schematics.sourcing.h2':'EU-Lieferanten',
    'schematics.sourcing.lede':'Getestete Quellen für Lieferung nach Frankreich / Belgien / EU.',

    langNames: { fr: 'FR', en: 'EN', nl: 'NL', de: 'DE' }
  }
};

window.PHOENIX_T = PHOENIX_T;
