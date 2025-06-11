# 🏡 Projet 4 - Kasa : Application de location immobilière avec React

🎓 Réalisé dans le cadre de la formation **Développeur Web Fullstack MERN**  
📅 Projet : **Créez une application web de location immobilière avec React**

🔗 [🌐 Accéder à la version déployée](https://kasa-lemon-seven.vercel.app/)

---

## 🎯 Objectifs pédagogiques

- ✅ Configurer la **navigation entre les pages** de l'application avec **React Router**
- ✅ Développer l’**interface utilisateur** avec des **composants React**
- ✅ Mettre en œuvre des **animations CSS** (ex : menus déroulants Collapse)
- ✅ Styliser l’interface avec **Sass**

---

## 🖼️ Contexte du projet

Vous êtes **développeur front-end freelance** pour l’entreprise **Kasa**, spécialisée dans la location d’appartements entre particuliers.

Kasa souhaite **refondre son site** initialement développé en ASP.NET, avec une **nouvelle stack JavaScript moderne**. En attendant le recrutement d’un développeur back-end, un fichier JSON contenant les annonces vous a été fourni pour construire le front.

Vous devez réaliser une application **React complète** en vous basant sur les **maquettes Figma responsives** du designer, en respectant les **animations attendues**, les **contraintes fonctionnelles** et les **guidelines techniques de Kasa**.

---

## 🛠️ Stack technique

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/SASS-hotpink?style=for-the-badge&logo=sass&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-DD0031?style=for-the-badge&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
</p>

---

## ⚙️ Fonctionnalités développées

### 🔗 Routing React Router
- Page d’accueil (`/`)
- Page de détail logement (`/logement/:id`)
- Page À propos (`/a-propos`)
- Page 404 (`*`)

### 🧱 Composants réutilisables
- Header avec navigation active
- Footer avec logo
- Composant `Card` pour afficher les logements
- Composant `Collapse` avec animation CSS
- Composant `Gallery` (slider d'images avec boucle)
- Composant `Rating` (étoiles rouges dynamiques)

### 🎨 UI / UX
- Design fidèle aux maquettes **Figma**
- Interface **responsive mobile / tablette / desktop**
- **Animations CSS** fluides (ouverture/fermeture des menus déroulants)
- Accessibilité (structure sémantique)

---

## 📷 Fonctionnalités spécifiques (selon le brief)

### Galerie d’images (`Gallery`)
- Boucle d’images :  
  ↪️ Si l’utilisateur clique sur « Image suivante » à la fin → retour à la première  
  ↩️ Si l’utilisateur clique sur « Image précédente » au début → aller à la dernière  
- Si **une seule image** : pas de flèches ni de numérotation


### Menus déroulants (`Collapse`)
- Tous les menus sont **fermés par défaut**
- Un clic **ouvre ou ferme** le menu selon son état actuel
- **Animation fluide** pour l’ouverture/fermeture

### 📌 Remarques
Ce projet m’a permis de maîtriser les bases de React, de mettre en place un routing dynamique, de construire des interfaces modulaires en composants, et de travailler avec des animations CSS via Sass.
Un excellent projet pour apprendre à construire une SPA performante et responsive en React sans back-end.

