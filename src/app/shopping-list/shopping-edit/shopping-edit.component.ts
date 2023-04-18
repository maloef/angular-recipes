import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscription: Subscription
  editMode = false
  editedItemIndex: number
  editedItem: Ingredient

  @ViewChild('f') shoppingListForm : NgForm

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index
        this.editMode = true
        this.editedItem = this.shoppingListService.getIngredient(index)
        this.shoppingListForm.setValue({name: this.editedItem.name, amount: this.editedItem.amount })
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onSubmit(form: NgForm) {
    console.log('onAddIngredient, form value: ' + form.value)

    const ingredient = new Ingredient(form.value.name, parseInt(form.value.amount));
    console.log('ingredient name: ' + ingredient.name + ', ingredient amount: ' + ingredient.amount + ', type: ' + typeof ingredient.amount)

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient)
    } else {
      this.shoppingListService.addIngredient(ingredient)
    }
    this.shoppingListForm.reset()
    this.editMode = false
  }

  onClear() {
    this.shoppingListForm.reset()
    this.editMode = false
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.onClear()
  }
}
