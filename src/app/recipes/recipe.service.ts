import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    // recpieSelected = new EventEmitter<Recipe>();
recipesChanged = new Subject<Recipe[]>();
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
    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(Ingredients: Ingredient[]) {
        this.slService.addIngredients(Ingredients);
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
