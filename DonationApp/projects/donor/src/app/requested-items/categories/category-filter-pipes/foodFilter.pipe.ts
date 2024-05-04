import { Pipe, PipeTransform } from '@angular/core';
import {RequestedItem} from "../super/RequestedItem.model";
import {Food} from "../categories-models/food.model";


@Pipe({
  name: 'foodFilter',
  pure: false
})
export class FoodFilterPipe implements PipeTransform {
    transform(items: RequestedItem[], foodCategory: string): RequestedItem[] {
    if (!items) {
      return [];
    }
    const categoryFilter = foodCategory ? foodCategory.toLowerCase() : '';

    return items.filter(item => {
      if (!(item instanceof Food)) {
        return false;
      }
      return  !categoryFilter || item.foodCategory.toLowerCase() === categoryFilter;
    });
  }
}
