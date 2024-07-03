import { Pipe, PipeTransform } from '@angular/core';
import { School } from "../categories-models/school.model";
import { RequestedItem } from "../super/RequestedItem.model";
import {filter} from "rxjs";
import {MedicalSupply} from "../categories-models/medical-supplies.model";

@Pipe({
  name: 'schoolSuppliesFilter',
  pure: false
})
export class SchoolSuppliesFilterPipe implements PipeTransform {
  transform(items: RequestedItem[], filterBooks: string, filterStationary: string): RequestedItem[] {
    if (!items) {
      return [];
    }
    const booksFilter = filterBooks.length > 0;
    // const booksFilter = filterBooks === 'true';
    // const booksFilter = filterBooks ? filterBooks.toLowerCase() : '';
    // const stationaryFilter = filterStationary ? filterStationary.toLowerCase() : '';
    const stationaryFilter = filterStationary.length > 0;
    // const stationaryFilter = filterStationary === 'true';

    return items.filter(item => {
      if (item instanceof School) {
        // const medicalSupply = item as MedicalSupply;
        // return (
        //   (!typeFilter || medicalSupply.type.toLowerCase().includes(typeFilter)) &&
        //   (!medicalUseFilter || medicalSupply.medicalUse.toLowerCase().includes(medicalUseFilter))
        // );
        let booksMatch = !booksFilter;
        let stationaryMatch = !stationaryFilter;

        if (booksFilter) {
          booksMatch = item.schoolBooks.some(book => book.title.toLowerCase().includes(filterBooks.toLowerCase()));
        }

        if (stationaryFilter) {
          stationaryMatch = item.stationaryItems.some(stationary => stationary.type.toLowerCase().includes(filterStationary.toLowerCase()));
        }
        console.log(booksMatch);
        console.log(stationaryMatch);
        return booksMatch || stationaryMatch;
      } else {
        return false; // Ignore items that are not of type School
      }
    });
  }
}
