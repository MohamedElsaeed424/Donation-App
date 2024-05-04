import { Component, Input } from '@angular/core';
import { RequestedItem } from "../../../categories/super/RequestedItem.model";
import {BloodDonation} from "../../../categories/categories-models/blood-donation.model";

@Component({
  selector: 'app-blood-donation-details',
  templateUrl: './blood-donation-details.component.html',
  styleUrls: ['./blood-donation-details.component.css']
})
export class BloodDonationDetailsComponent {
  private _bloodDonation: BloodDonation | null;

  @Input()
  set bloodDonation(value: RequestedItem | null) {
    // Perform transformation if needed
    this._bloodDonation = this.transformToBloodDonation(value);
  }

  get bloodDonation(): BloodDonation | null {
    return this._bloodDonation;
  }

  private transformToBloodDonation(value: RequestedItem | null): BloodDonation | null {
    // Perform transformation logic here
    // For example, check if the value is an instance of BloodDonation
    if (value instanceof BloodDonation) {
      return value; // No need for transformation, return as is
    }

    // Handle other cases or return null if transformation is not possible
    return null;
  }
}
