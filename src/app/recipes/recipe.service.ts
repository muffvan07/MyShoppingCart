import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Barbeque Meat Loaf",
      "Chef's Special for the Month",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [
        new Ingredient("Meat", 1),
        new Ingredient("Sauce", 3),
        new Ingredient("Chilly Flakes", 10),
      ]
    ),
    new Recipe(
      "Another Test1 Recipe",
      "This is a Test",
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg",
      []
    ),
    new Recipe(
      "A Test Recipe",
      "This is a Test",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg",
      []
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
