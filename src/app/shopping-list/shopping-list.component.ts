import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients = this.shoppingListService.getIngredients()

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    console.log("ShoppingListComponent ngOnInit")
    this.shoppingListService.ingredientsChanged.subscribe((ingredientsChanged: Ingredient[]) => {this.ingredients = ingredientsChanged})
  }

  addIngredient(newIngredient: Ingredient) {
    this.shoppingListService.addIngredient(newIngredient)
  }
}
