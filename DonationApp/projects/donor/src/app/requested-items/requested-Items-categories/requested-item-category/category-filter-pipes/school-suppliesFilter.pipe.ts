import { Pipe, PipeTransform } from '@angular/core';
import { School } from "../../categories/school.model";
import { RequestedItem } from "../../super/RequestedItem.model";

@Pipe({
  name: 'schoolSuppliesFilter',
  pure: false
})
export class SchoolSuppliesFilterPipe implements PipeTransform {
  transform(items: RequestedItem[], filterBooks: string, filterStationary: string): RequestedItem[] {
    if (!items) {
      return [];
    }
    const booksFilter = filterBooks === 'true';
    const stationaryFilter = filterStationary === 'true';

    return items.filter(item => {
      if (item instanceof School) {
        let booksMatch = !booksFilter;
        let stationaryMatch = !stationaryFilter;

        if (booksFilter) {
          booksMatch = item.schoolBooks.some(book => book.title.toLowerCase().includes(filterBooks.toLowerCase()));
        }

        if (stationaryFilter) {
          stationaryMatch = item.stationaryItems.some(stationary => stationary.type.toLowerCase().includes(filterStationary.toLowerCase()));
        }

        return booksMatch || stationaryMatch;
      } else {
        return false; // Ignore items that are not of type School
      }
    });
  }
}
