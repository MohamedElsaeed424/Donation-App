import { Pipe, PipeTransform } from '@angular/core';
import { RequestedItem } from '../super/RequestedItem.model';
import {Book} from "../categories-models/book.model"; // Assuming you have a RequestedItem model

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {
  transform(requestedItems: RequestedItem[], name: string, author: string, language: string): RequestedItem[] {
    if (!requestedItems) {
      return [];
    }

    return requestedItems.filter(requestedItem => {
      if (requestedItem instanceof Book) {
        return (
          (name ? requestedItem.name.toLowerCase().includes(name.toLowerCase()) : true) ||
          (author ? requestedItem.author.toLowerCase().includes(author.toLowerCase()) : true) ||
          (language ? requestedItem.language.toLowerCase().includes(language.toLowerCase()) : true)
        );
      }
      return false; // If requestedItem is not a Book, exclude it
    });
  }
}
