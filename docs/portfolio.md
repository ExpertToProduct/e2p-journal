# PORTFOLIO — Vision d'ensemble projets
**v1 — 11/06/2026** · Mise à jour : fin de sprint + revue lundi 07h00 · Un projet = 4 lignes max

---

## 🎯 RADAR (top 3 cross-portefeuille)

1. **Grille tarifaire E2P** → désormais une offre à **2 produits** (DAF-Virtuel + AI-Finance), valeur reconstruction portefeuille **170-315K€** — débloque le pitch deck (Sprint 36 P1)
2. **Plan achats KALO** : MACHINE A LAVER 427K€ à commander avant septembre (urgence HAUTE W18v2)
3. **W21 engagements** : moteur prêt, bloqué sur fichier Excel à compléter (par moi)

---

## PÔLE 1 — PRODUIT E2P

### DAF-AI (moteur :8002)
- **Statut** : actif, sprints hebdo — HEAD ~976c154, selftests 10/10
- **Dernier événement** : Sprint 35 — W6/W7 ageing 45j FDM, couverture stock, roadmap achats, doctrine_achats.yaml
- **Prochaine action** : harmoniser méthode couverture stock (pondération CA vs valeur stock), W21 moteur → données réelles
- **En attente de** : fichier Excel engagements (moi)

### DAF-Virtuel (cockpit :8001)
- **Statut** : actif — HEAD 83aba97, auth Bearer en place
- **Dernier événement** : Sprint 35 — synthèse exec IA, commentaire gestion, export PDF COMEX, auth complète
- **Prochaine action** : voyant StatusBar rouge (healthcheck vs auth), affinage jauges PDF v2
- **En attente de** : rien

### DAF-Virtuel-React (front :5173)
- **Statut** : actif — HEAD 887f40c
- **Dernier événement** : Sprint 35 — dashboard COMEX (synthèse IA, target 87.3%, triptyque CA), login split-screen
- **Prochaine action** : bouton logout + bouton export PDF COMEX
- **En attente de** : rien

### AI-Finance (consolidation comptable :8000) ⚠️ 2e produit E2P
- **Statut** : en pause depuis fin mai (77 commits avr-mai 2026) — **audité 11/06 : note 6/10, valeur reconstruction 70-115K€**
- **Acquis** : moteur conso réel (éliminations, goodwill, minoritaires, EVCP, TFT IAS 7, preuve d'impôt), parser liasse, wizard onboarding, **packaging Electron/DMG + mode démo "Groupe REUNION"**
- **3 écarts vers vendable** : conversion devises (bloquant GCCOI/USD), automatiser les 124 cas conformité en selftests, hygiène repo (ChromaDB + .bak dans l'historique, patch_*.py en vrac, openai→Ollama à trancher)
- **Prochaine action** : décision de reprise — place dans l'offre E2P (produit 2) et créneau dans les sprints
- **En attente de** : arbitrage Jacques (priorité vs DAF-Virtuel)

### E2P Business (commercialisation) ⚠️ projet distinct du dev
- **Statut** : démarrage — c'est le goulot actuel
- **Dernier événement** : décision session 35 d'ouvrir le Sprint 36 sur la grille tarifaire
- **Prochaine action** : grille tarifaire (segments, paliers, local vs SaaS vs projet, ROI) → slide pitch deck
- **En attente de** : rien — comparables déjà collectés (Agicap 300-800€/m, Pennylane 50-500€/m, BI Sage 15-40K€)
- **Argument valeur (audits 11/06)** : DAF-Virtuel 100-200K€ + AI-Finance 70-115K€ = portefeuille 170-315K€ de valeur de reconstruction
- **Backlog** : pitch deck CTO (base Sprint 32, à actualiser **avec AI-Finance**), thème "light corporate" pour démo SaaS, mode démo AI-Finance "Groupe REUNION" réutilisable comme modèle pour DAF-Virtuel

---

## PÔLE 2 — DAF KALO / LAERANA (chantiers métier)

### Anomalies comptables 2026
- **Statut** : ouvert (pré-Sprint 35)
- **Dernier événement** : A6/A7/A8 définies ; 14 loyers BQ→401 sans 613x (~70K€) identifiés
- **Prochaine action** : ❓ traitement des loyers — écritures de reclassement à passer ou à demander au cabinet ?
- **En attente de** : ❓

### Pilotage achats & budget 2026
- **Statut** : actif, outillé (W18v2 + Pilotage_Budget_Famille_2026_Reforecast)
- **Dernier événement** : plan W18v2 — 1.31M€ d'achats restants identifiés, sous-achat -54% sur 5 mois
- **Prochaine action** : déclencher commandes MACHINE A LAVER 427K€ (avant sept) ; ❓ valider le reforecast avec la direction ?
- **En attente de** : ❓ délais fournisseurs ARKEMIX / transit

### Référentiel engagements (support W21)
- **Statut** : construit (25 lignes), à compléter
- **Prochaine action** : compléter le fichier Excel → alimenter W21
- **En attente de** : moi

### Conformité / réglementaire
- **Statut** : ❓ dormant ?
- **Dernier événement** : NC8 810 références classées (55 codes), fiche contrôle D3E pour le CAC
- **Prochaine action** : ❓ retour CAC sur D3E ? mise à jour NC8 nouveaux produits 2026 ?
- **En attente de** : ❓

---

## CONVENTIONS DU FICHIER

- Mise à jour : **fin de chaque sprint** (avec le `git status`) + relecture **lundi 07h00**
- Un projet = statut / dernier événement / prochaine action / en attente de — jamais plus
- Le détail vit ailleurs : PROMPT_REPRISE_* pour le dev, fichiers Excel pour le métier
- ❓ = état incertain, à clarifier à la prochaine revue
- Versionné git, pas de .bak
