import {Component, Input} from '@angular/core';
import {Food} from "../../../requested-Items-categories/categories/food.model";
import {RequestedItem} from "../../../requested-Items-categories/super/RequestedItem.model";

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.css'
})
export class FoodDetailsComponent {
  @Input() food : Food;
}
