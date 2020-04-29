import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
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
      "Kheer (Rice Pudding)",
      "Awesome when Hot!",
      "https://www.cookwithmanali.com/wp-content/uploads/2017/06/Indian-Rice-Kheer-500x375.jpg",
      [
        new Ingredient("Coconut Milk", 2),
        new Ingredient("Raisins", 1),
        new Ingredient("Basmati Rice", 5),
        new Ingredient("Milk", 1),
        new Ingredient("Rose Water", 1),
        new Ingredient("Nuts", 1),
        new Ingredient("Cardomom", 1),
      ]
    ),
    new Recipe(
      "Chinese Chicken Fried Rice",
      "Chicken, rice, soy sauce and shredded egg stir fried together.",
      "https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Chicken-Fried-Rice-Best-of-Chinese-Cooking.JPG",
      [
        new Ingredient("Egg", 1),
        new Ingredient("Onion", 1),
        new Ingredient("White Rice", 5),
        new Ingredient("Soy Sauce", 2),
        new Ingredient("Mayonaise", 1),
      ]
    ),
    new Recipe(
      "World's Best Lasagna",
      "It takes a little work, but it is worth it.",
      "https://c4.wallpaperflare.com/wallpaper/127/626/498/food-lasagna-meal-wallpaper-preview.jpg",
      [
        new Ingredient("Garlic", 2),
        new Ingredient("Tomato Paste", 2),
        new Ingredient("White  Sugar", 5),
        new Ingredient("Lasagna Noodles", 12),
        new Ingredient("Cheese", 1),
      ]
    ),
    new Recipe(
      "Strawberry Mojito",
      "Special for Holiday and Events!",
      "https://www.simplyrecipes.com/wp-content/uploads/2019/07/Strawberry-Mojito-LEAD-1.jpg",
      [
        new Ingredient("Lime", 2),
        new Ingredient("Mint Leaves", 1),
        new Ingredient("Strawberries", 5),
        new Ingredient("White Rum", 1),
        new Ingredient("Club Soda", 1),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
