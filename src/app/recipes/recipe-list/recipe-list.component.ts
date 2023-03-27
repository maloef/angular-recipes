import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Lasagne', 'Delicious Spinach Lasagne', 'https://minimalistbaker.com/wp-content/uploads/2021/08/Butternut-Squash-Lasagna-Vegan-GF-Optional-Fall-inspired-veggie-packed-incredibly-comforting-and-just-10-ingredients-required-minimalistbaker-recipe-plantbased-glutenfree-lasagna-squash-10.jpg')
  ]
  ngOnInit(): void {
  }

}
