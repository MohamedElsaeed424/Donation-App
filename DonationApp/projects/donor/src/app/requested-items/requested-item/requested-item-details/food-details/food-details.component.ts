import { Component, Input } from '@angular/core';
import { Food } from "../../../requested-Items-categories/categories/food.model";
import { RequestedItem } from "../../../requested-Items-categories/super/RequestedItem.model";

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent {
  private _food: Food | null;

  @Input()
  set food(value: RequestedItem | null) {
    // Perform transformation if needed
    this._food = this.transformToFood(value);
  }

  get food(): Food | null {
    return this._food;
  }

  private transformToFood(value: RequestedItem | null): Food | null {
    // Perform transformation logic here
    // For example, check if the value is an instance of Food
    if (value instanceof Food) {
      return value; // No need for transformation, return as is
    }

    // Handle other cases or return null if transformation is not possible
    return null;
  }
}
