import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  @Output()
  recipeWasSelected=new EventEmitter<Recipe>();

  recipes:Recipe[] =[
    new Recipe('A Test Recipe','A simple test recipe description','https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg'),
    new Recipe('Another Test Recipe','A simple test recipe description','https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg'),

  ]
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe)
  {
    this.recipeWasSelected.emit(recipe);
  }

}
