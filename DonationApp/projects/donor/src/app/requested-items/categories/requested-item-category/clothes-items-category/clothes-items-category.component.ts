import {Component, Input} from '@angular/core';
import {RequestedItem} from "../../super/RequestedItem.model";


@Component({
  selector: 'app-clothes-items-category',
  templateUrl: './clothes-items-category.component.html',
  styleUrl: './clothes-items-category.component.css'
})
export class ClothesItemsCategoryComponent {
  @Input()  requestedItemsCategory : RequestedItem [] ;
  searchQuery1: string = '';
  searchQuery2: string = '';
  searchQuery3: string = '';

}
