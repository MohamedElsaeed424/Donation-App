import {Component, Input} from '@angular/core';
import {RequestedItem} from "../../super/RequestedItem.model";

@Component({
  selector: 'app-medical-supplies-items-category',
  templateUrl: './medical-supplies-items-category.component.html',
  styleUrl: './medical-supplies-items-category.component.css'
})
export class MedicalSuppliesItemsCategoryComponent {
  @Input() requestedItemsCategory : RequestedItem [] ;
  searchQuery1: string = '';
  searchQuery2: string = '';

}
