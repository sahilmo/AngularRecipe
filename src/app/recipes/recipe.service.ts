import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';


export class RecipeService {
    recpieSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
         'This is simply a test',
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
          , [
              new Ingredient('Meat', 1),
              new Ingredient('Ginger', 20 ),
          ]),
        new Recipe('Another Test Recipe',
         'This is simply a test',
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
          , [
            new Ingredient('Chicken', 1),
            new Ingredient('Onion', 20 ),
        ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
