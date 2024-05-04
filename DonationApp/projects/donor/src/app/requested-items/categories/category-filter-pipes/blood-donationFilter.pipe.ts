import { Pipe, PipeTransform } from '@angular/core';
import { RequestedItem } from "../super/RequestedItem.model";
import { BloodDonation } from "../categories-models/blood-donation.model";

@Pipe({
  name: 'bloodDonationFilter',
  pure: false
})
export class BloodDonationFilterPipe implements PipeTransform {
  transform(items: RequestedItem[], hospital : string , governorate:string,area:string): RequestedItem[] {
    if (!items ) {
      return [];
    }
    return items.filter(item => {
      if (item instanceof BloodDonation) {
        const bloodDonation = item as BloodDonation;
        return (
          (!hospital || bloodDonation.hospitalName.toLowerCase().includes(hospital)) &&
          (!governorate || bloodDonation.governorate.toLowerCase().includes(governorate)) &&
          (!area || bloodDonation.hospitalArea.toLowerCase().includes(area))
        );
      }else {
        return false;
      }
    });
  }
}
