import { Pipe, PipeTransform } from '@angular/core';
import { RequestedItem } from "../../super/RequestedItem.model";
import { Toy } from "../../categories/toy.model";

@Pipe({
  name: 'toyFilter',
  pure: false
})
export class ToyFilterPipe implements PipeTransform {
  transform(items: RequestedItem[], age: string, gender: string, category: string): RequestedItem[] {
    if (!items) {
      return [];
    }

    // Convert age, gender, and category to lowercase for case-insensitive comparison
    const ageFilter = age ? age.toLowerCase() : '';
    const genderFilter = gender ? gender.toLowerCase() : '';
    const categoryFilter = category ? category.toLowerCase() : '';

    return items.filter(item => {

      if (!(item instanceof Toy)) {
        return false;
      }

      const ageMatch = !ageFilter || item.age.toLowerCase() === ageFilter;

      const genderMatch = !genderFilter || item.gender.toLowerCase() === genderFilter;

      const categoryMatch = !categoryFilter || item.type.toLowerCase() === categoryFilter;

      return ageMatch || genderMatch || categoryMatch;
    });
  }
}

