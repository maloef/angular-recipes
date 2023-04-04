import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() display = new EventEmitter<string>()

  onSelectShoppingList() {
    this.display.emit('shopping-list')
  }

  onSelectRecipes() {
    this.display.emit('recipes')
  }
}
