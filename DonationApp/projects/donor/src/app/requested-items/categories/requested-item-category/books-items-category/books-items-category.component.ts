import {Component, Input} from '@angular/core';
import {RequestedItem} from "../../super/RequestedItem.model";

@Component({
  selector: 'app-books-items-category',
  templateUrl: './books-items-category.component.html',
  styleUrl: './books-items-category.component.css'
})
export class BooksItemsCategoryComponent {

 @Input() requestedItemsCategory : RequestedItem [] ;
  searchQuery1: string = '';
  searchQuery2: string = '';
  searchQuery3: string = '';
}
