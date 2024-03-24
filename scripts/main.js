import { recipes } from './data/recipes.js';

// Rcupération des recettes initiales
function getInitialRecipes() {
  return recipes;
}

function init() {
    getInitialRecipes();
    console.log("Liste de recettes", getInitialRecipes());
}

// Appel de la fonction d'initialisation
window.addEventListener('DOMContentLoaded', init);