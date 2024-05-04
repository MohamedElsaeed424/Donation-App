import {Component, Input} from '@angular/core';
import { RequestedItem } from '../../super/RequestedItem.model';


@Component({
  selector: 'app-food-items-category',
  templateUrl: './food-items-category.component.html',
  styleUrl: './food-items-category.component.css'
})
export class FoodItemsCategoryComponent {
  @Input()  requestedItemsCategory : RequestedItem [] ;
  searchQuery1: string = '';
}
