import { Pipe, PipeTransform } from '@angular/core';
import {Donor} from "./Donor.model";

@Pipe({
  name: 'donorFilterPipe'
})
export class DonorFilterPipePipe implements PipeTransform {

  transform(donors: Donor[], searchTerm: string): Donor[] {
    if (!donors || !searchTerm) {
      return donors;
    }
    return donors.filter(donor =>
      donor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}
