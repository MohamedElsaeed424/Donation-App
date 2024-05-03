import { Pipe, PipeTransform } from '@angular/core';
import {RequestedItem} from "./requested-Items-categories/super/RequestedItem.model";
import {ItemCategory} from "./requested-Items-categories/categories/all-categories.enum";

@Pipe({
  name: 'categoryFilter',
  pure: false
})
export class CategoryFilterPipe implements PipeTransform {
  transform(requestedItems: RequestedItem[], category: string): RequestedItem[] {
    if (!requestedItems || !category) {
      return requestedItems;
    }
    return requestedItems.filter(item =>
      item.category.toLowerCase().includes(category.toLowerCase())
    );
  }
}
