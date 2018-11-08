import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipeReyhan.model';
import { RecipeReyhanService } from '../recipeReyhan.service';

@Component({
  selector: 'app-recipe-list-reyhan',
  templateUrl: './recipe-list-reyhan.component.html',
  styleUrls: ['./recipe-list-reyhan.component.css']
})
export class RecipeListReyhanComponent implements OnInit {

  // @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[];
  // property:class recipeReyhan

  constructor(private recipeReyhanService:RecipeReyhanService) { }

  ngOnInit() {
    this.recipes=this.recipeReyhanService.getRecipes();
  }

  // onRecipeSelected(recipeReyhan:Recipe){
  //   this.recipeWasSelected.emit(recipeReyhan);
  // }

}
