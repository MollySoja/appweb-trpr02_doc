---
title: "Anthony semaine 2"
---

## Revue de code pour Anthony semaine 2

Durant cette **_deuxieme semaine_**, nous avons les deux énorméments progressé dans le travail pratique. Dans cette documentation, je vais me concentrer sur la vue (**mission**) parce que c'est principalement sur cette vue que Anthony a travaillé durant cette **_deuxieme semaine_**.

La vue mission est le regroupement des **_composants_** qui servent à mettre en place le coté gameplay du site. Cette vue contient quatres **_composants_** majeurs: le composant **_header_** et **_footer_** (comme dans tous les autres vues), et les composants propre à cette vue: **_InCombatPlayer_** et **_InCombatEnemy_**.

```html
<template>
  <header />
  <div class="container my-4">
    <InCombatPlayer v-if="player" :player="player" />
    <InCombatEnemy />
  </div>
  <footer />
</template>
```

## Deep dive dans le composant InCombatPlayer

Ce **_composant_** prend le player fournit du formulaire de creation de joueur et rentre ses données dans un [card bootstrap](https://getbootstrap.com/docs/4.0/components/card/). Voici les renseignements qu'il s'affiche dans un card.

- Le **_nom_** du joueur
- **L'expérience** du joueur (par defaut à "setter" a maître)
- Le **nombre de crédits** d'un joueur (par defaut a 0)
- Le **Nom de vaisseau** associé au joueur (provient d'une liste déroulante et le type **Ship** provient d'un api)
- Les **points de vies** du joueur (par défaut 100%)

## Deep dive dans le composant InCombatEnemy

Ce **_composant_** convertit les ennemis (fournit par **_l'api star wars_**) en type Player pour elle aussi transférer ses données dans un [card bootstrap](https://getbootstrap.com/docs/4.0/components/card/).

## La suite?

Bien évidement, la logique de gameplay n'a pas encore été installer par Anthony dans ce composant en raison de la longueur du processus, nous sommes entrain de brainstormer pour impliquer cette logique de combat entre le joueur et les ennemis. Il est donc normal que ces composants ne soit que du visuel pour le moment.

## Point positifs

- L'utilisation d'un **_switch case_** pour assigner un int a un string est brillante et efficace, je n'aurais pas fait autrement

```ts
const experienceLabel = (exp: string): string => {
  switch (exp) {
    case "1":
      return "Débutant";
    case "2":
      return "Confirmé";
    case "3":
      return "Expert";
    case "4":
      return "Maître";
    default:
      return "Inconnu";
  }
```

- L'utilisation d'un dto pour transferer un ennemi en Player est une bonne pratique de la programation orienté objet
- Le code est simple a suivre mais aussi très efficace, chaque ligne est pertinente et fait de manière la plus courte possible.

## Points négatifs

- On aurait pu appeler le **PlayerDTO** **EnnemyDTO** et créer un type ennemy pour différencier les deux car peut-être que dans le futur si l'on souhaite changer la logique du jeu, on aura a changer les attributs d'un ennemy sans avoir a changer ceux d'un player

- Je ne trouve rien d'autre de négatif à aborder dans cette revue! Excellent travail!
