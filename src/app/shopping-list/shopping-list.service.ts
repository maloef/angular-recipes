import { Subject } from "rxjs";
import {Ingredient} from "../shared/ingredient.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Pears", 7)
  ]

  ingredientsChanged = new Subject<Ingredient[]>()
  startedEditing = new Subject<number>()

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

  getIngredient(index: number) {
    return this.ingredients[index]
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient
    this.update()
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1)
    this.update()
  }

  update() {
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
