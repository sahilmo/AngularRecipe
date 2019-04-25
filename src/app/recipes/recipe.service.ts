import {  Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    // recpieSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
            , [
                new Ingredient('Meat', 1),
                new Ingredient('Ginger', 20),
            ]),
        new Recipe('Another Test Recipe',
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
            , [
                new Ingredient('Chicken', 1),
                new Ingredient('Onion', 20),
            ])
    ];
    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(Ingredients: Ingredient[]) {
        this.slService.addIngredients(Ingredients);
     }
}
