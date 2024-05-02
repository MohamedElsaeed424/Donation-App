import {Component, Input} from '@angular/core';
import {RequestedItem} from "../../../requested-Items-categories/super/RequestedItem.model";
import {Book} from "../../../requested-Items-categories/categories/book.model";

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrl: './books-details.component.css'
})
export class BooksDetailsComponent {
  @Input() book: Book;
}
