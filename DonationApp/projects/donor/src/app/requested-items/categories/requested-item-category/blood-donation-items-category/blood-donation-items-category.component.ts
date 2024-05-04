import {Component, Input} from '@angular/core';
import {RequestedItem} from "../../super/RequestedItem.model";


@Component({
  selector: 'app-blood-donation-items-category',
  templateUrl: './blood-donation-items-category.component.html',
  styleUrl: './blood-donation-items-category.component.css'
})
export class BloodDonationItemsCategoryComponent {
 @Input() requestedItemsCategory : RequestedItem [] ;
  searchQuery1: string = '';
  searchQuery2: string = '';
  searchQuery3: string = '';
}
