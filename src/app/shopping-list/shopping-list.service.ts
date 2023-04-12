import { Subject } from "rxjs";
import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter, Injectable} from "@angular/core";
@Injectable({providedIn: "root"})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Pears", 7)
  ]

  ingredientsChanged = new Subject<Ingredient[]>()

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.getIngredients())
  }

  addIngredient(newIngredient: Ingredient) {
    console.log('addIngredient, name=' + newIngredient.name + ', amount=' + newIngredient.amount)
    this.ingredients.push(newIngredient)
    this.ingredientsChanged.next(this.getIngredients())
  }

  getIngredients() {
    return this.ingredients.slice()
  }
}
