import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Pears", 7)
  ]

  constructor() {
    console.log("ShoppingListComponent constructor")
  }

  ngOnInit() {
    console.log("ShoppingListComponent ngOnInit")
  }

  addIngredient(newIngredient: Ingredient) {
    console.log('addIngredient, name=' + newIngredient.name + ', amount=' + newIngredient.amount)
    this.ingredients.push(newIngredient)
  }
}
