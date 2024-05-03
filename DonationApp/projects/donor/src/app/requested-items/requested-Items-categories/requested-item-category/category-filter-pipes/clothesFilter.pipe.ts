import { Pipe, PipeTransform } from '@angular/core';
import {RequestedItem} from "../../super/RequestedItem.model";
import {Clothes} from "../../categories/clothes.model";


@Pipe({
  name: 'clothesFilter',
  pure: false
})
export class ClothesFilterPipe implements PipeTransform {
  transform(requestedItems: RequestedItem[], age: string, gender: string, season: string): RequestedItem[] {
    if (!requestedItems) {
      return [];
    }

    return requestedItems.filter((item) =>
      item instanceof Clothes &&
      (age === '' || item.age === age) &&
      (gender === '' || item.gender === gender) &&
      (season === '' || item.season === season)
    );
  }
}
