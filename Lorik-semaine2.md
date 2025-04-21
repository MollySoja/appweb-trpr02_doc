---
title: "Lorik – Semaine 2"
---

# Revue de code – Lorik (Semaine 2)

## Mise en place du routeur

Lorik s'est chargé de :

- La configuration du routeur dans le fichier `routes.ts` et son intégration dans le fichier `index.ts`.

## Gestion du backend

Il a également :

- Analysé, compris et m’a expliqué clairement le fonctionnement du système backend.
- Réussi à intégrer le backend dans ses composants de la semaine 2 (`CharacterCreationForm` et `ScoreboardList`).
  Grâce à cela, j’ai moi-même pu l’utiliser facilement dans mon composant `InCombatEnemy`.

## Contribution au frontend

En plus de la gestion du backend, Lorik a :

- Créé le composant `CharacterCreationForm`, qui permet de générer un objet de type `Player`. Le joueur peut y choisir un nom et sélectionner un vaisseau parmi ceux disponibles dans la base de données (via le backend). Cet objet est ensuite transmis aux composants de la vue `Mission` via `router.push()`. Le style a également été mis en place, avec l’aide de ChatGPT pour définir un thème visuel cohérent pour le reste du jeu. Le composant est fonctionnel et quasiment terminé.
- Créé le composant `ScoreboardList`, qui affiche une liste de joueurs fictifs avec leurs scores (crédits). Il est prévu qu’il affiche également le score réel du joueur après une partie, probablement transmis via la méthode `router.push()`.

## Conclusion

Les avancées réalisées cette semaine sont significatives. Le jeu devrait être fonctionnel très prochainement. Il ne restera alors plus qu'à effectuer les tests.
