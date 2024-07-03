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
  get isFilteredEmpty(): boolean {
    const filteredOrganizations = this.requestedItemsCategory.filter(org =>
      org.name.toLowerCase().includes(this.searchQuery1.toLowerCase()
        && this.searchQuery2.toLowerCase() && this.searchQuery3.toLowerCase())
    );
    return filteredOrganizations.length === 0;
  }
}
