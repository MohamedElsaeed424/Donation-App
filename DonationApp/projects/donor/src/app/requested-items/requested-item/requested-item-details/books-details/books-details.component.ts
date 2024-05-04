import { Component, Input } from '@angular/core';
import { RequestedItem } from "../../../categories/super/RequestedItem.model";
import {Book} from "../../../categories/categories-models/book.model";


@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent {
  private _book: Book | null;

  @Input()
  set book(value: RequestedItem | null) {
    // Perform transformation if needed
    this._book = this.transformToBook(value);
  }

  get book(): Book | null {
    return this._book;
  }

  private transformToBook(value: RequestedItem | null): Book | null {
    // Perform transformation logic here
    // For example, check if the value is an instance of Book
    if (value instanceof Book) {
      return value; // No need for transformation, return as is
    }

    // Handle other cases or return null if transformation is not possible
    return null;
  }
}
