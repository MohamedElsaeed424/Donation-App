import { Pipe, PipeTransform } from '@angular/core';
import {RequestedItem} from "./categories/super/RequestedItem.model";

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
