import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";

@Injectable({providedIn: "root"})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Lasagne',
      'Delicious Spinach Lasagne',
      'https://minimalistbaker.com/wp-content/uploads/2021/08/Butternut-Squash-Lasagna-Vegan-GF-Optional-Fall-inspired-veggie-packed-incredibly-comforting-and-just-10-ingredients-required-minimalistbaker-recipe-plantbased-glutenfree-lasagna-squash-10.jpg',
      [
        new Ingredient('Pasta', 10),
        new Ingredient('Spinach', 5),
        new Ingredient('Tomatoes', 5)]),
    new Recipe('Rhabarberkuchen',
      'Saftiger feinherber Rhabarberkuchen',
      'https://www.gutekueche.ch/upload/rezept/6400/saftiger-rhabarberkuchen.jpg',
      [
        new Ingredient('Rhubarb', 10),
        new Ingredient('Sugar', 3),
        new Ingredient('Eggs', 7),
      ])
  ]

  recipeSelected = new EventEmitter<Recipe>()

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(id: number) {
    return this.recipes.at(id)
  }

}
