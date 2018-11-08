import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipeReyhan.model';
import { RecipeReyhanService } from '../recipeReyhan.service';
@Component({
  selector: 'app-recipe-detail-reyhan',
  templateUrl: './recipe-detail-reyhan.component.html',
  styleUrls: ['./recipe-detail-reyhan.component.css']
})
export class RecipeDetailReyhanComponent implements OnInit {
  @Input() recipeReyhan:Recipe;
  constructor(private recipeReyhanService:RecipeReyhanService) { }

  ngOnInit() {
  }

  onAddShoppingList(){
    this.recipeReyhanService.addIngredientsShoppingList(this.recipeReyhan.ingredient);
  }
}
