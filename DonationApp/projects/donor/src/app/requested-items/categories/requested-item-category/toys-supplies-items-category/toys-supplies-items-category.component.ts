import {Component, Input} from '@angular/core';
import {RequestedItem} from "../../super/RequestedItem.model";

@Component({
  selector: 'app-toys-supplies-items-category',
  templateUrl: './toys-supplies-items-category.component.html',
  styleUrl: './toys-supplies-items-category.component.css'
})
export class ToysSuppliesItemsCategoryComponent {

  @Input()  requestedItemsCategory : RequestedItem [] ;
  searchQuery1: string = '';
  searchQuery2: string = '';
  searchQuery3: string = '';
}
