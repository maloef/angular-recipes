import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients = this.shoppingListService.getIngredients()
  ingredientsChangedSubscription: Subscription

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    console.log("ShoppingListComponent ngOnInit")
    this.ingredientsChangedSubscription = this.shoppingListService.ingredientsChanged.subscribe((ingredientsChanged: Ingredient[]) => {this.ingredients = ingredientsChanged})
  }

  ngOnDestroy(): void {
    this.ingredientsChangedSubscription.unsubscribe()
  }

  addIngredient(newIngredient: Ingredient) {
    this.shoppingListService.addIngredient(newIngredient)
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index)
  }
}
