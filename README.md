# Léman Renault Sport — Site web

Site officiel du club Léman Renault Sport. Design dark automotive, entièrement statique — 6 pages HTML/CSS/JS, aucune dépendance externe hormis Google Fonts.

**URL en ligne :** [lemanrenaultsport.github.io/website](https://lemanrenaultsport.github.io/website)

---

## Structure des fichiers

| Fichier | Page |
|---|---|
| `index.html` | Accueil |
| `calendrier.html` | Calendrier des événements |
| `notre-structure.html` | Le Club — bureau et valeurs |
| `nous-rejoindre.html` | Nous rejoindre |
| `partenaires.html` | Partenaires |
| `reglements.html` | Règlement intérieur |

---

## Mettre à jour le contenu

### Ajouter ou modifier un événement (`calendrier.html`)

Ouvrir `calendrier.html` dans un éditeur texte. Les événements sont générés par le script JavaScript en bas de page, à partir du tableau `DEFAULT`. Chaque entrée suit ce format :

```javascript
{ id:'e6', titre:'Nom de l\'événement', date:'2027-06-15', heure:'09h00',
  lieu:'Lieu de départ → destination', type:'balade', description:'Détails', places_max:null }
```

**Types disponibles :** `balade` · `circuit` · `rassemblement` · `soiree`

Modifier la date au format `AAAA-MM-JJ`. Mettre `places_max: null` s'il n'y a pas de limite de places.

---

### Modifier les partenaires (`partenaires.html`)

Ouvrir `partenaires.html`. Les partenaires sont dans le tableau JavaScript `DEFAULT` en bas de page :

```javascript
{ id:'p4', nom:'Nom du partenaire', categorie:'Catégorie',
  niveau:'officiel', description:'Description courte.', url:'https://...' }
```

**Niveaux :** `premium` (affichage grand format en haut) · `officiel` (grille standard)

---

### Modifier le bureau (`notre-structure.html`)

Ouvrir `notre-structure.html`. Chercher la section `<div class="bureau-grid">`. Chaque carte de membre suit ce modèle :

```html
<div class="bureau-card">
  <div class="bureau-body">
    <div class="bureau-role">Rôle</div>
    <h3>Prénom Nom</h3>
    <p>Description du rôle.</p>
    <a href="mailto:email@lemanrenaultsport.fr" class="bureau-contact">
      Contacter
    </a>
  </div>
</div>
```

---

### Modifier les textes de l'accueil (`index.html`)

Ouvrir `index.html` et utiliser la recherche (`Ctrl+F` / `Cmd+F`) pour localiser le texte à modifier. Les sections sont balisées avec des attributs `data-od-id` pour faciliter la navigation.

---

## Publier les modifications

Après chaque modification, pousser les changements sur GitHub :

```bash
git add .
git commit -m "Mise à jour : [décrire la modification]"
git push
```

GitHub Pages redéploie automatiquement en quelques secondes.

---

## Activer GitHub Pages (une seule fois)

1. Aller sur `github.com/lemanrenaultsport/website`
2. **Settings** → **Pages**
3. Source : **Deploy from a branch** → branche `main` → dossier `/ (root)`
4. Cliquer **Save**

Le site sera accessible à `https://lemanrenaultsport.github.io/website`.

---

## Contact technique

Pour toute question sur le code, contacter [enzo.gaggiotti@outlook.com](mailto:enzo.gaggiotti@outlook.com).

---

*Léman Renault Sport — Association loi 1901 · Thonon-les-Bains (74)*
