import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', {static: true}) ingredientName: ElementRef
  @ViewChild('amountInput', {static: true}) ingredientAmount: ElementRef

  @Output() newIngredient = new EventEmitter<Ingredient>()

  onAddIngredient() {
    console.log('onAddIngredient')
    const ingredient = new Ingredient(this.ingredientName.nativeElement.value, parseInt(this.ingredientAmount.nativeElement.value));
    console.log('ingredient name: ' + ingredient.name + ', ingredient amount: ' + ingredient.amount + ', type: ' + typeof ingredient.amount)
    this.newIngredient.emit(ingredient)
  }
}
