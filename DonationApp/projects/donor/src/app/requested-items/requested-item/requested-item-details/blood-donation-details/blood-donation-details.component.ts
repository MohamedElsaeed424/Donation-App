import {Component, Input} from '@angular/core';
import {BloodDonation} from "../../../requested-Items-categories/categories/blood-donation.model";
import {RequestedItem} from "../../../requested-Items-categories/super/RequestedItem.model";

@Component({
  selector: 'app-blood-donation-details',
  templateUrl: './blood-donation-details.component.html',
  styleUrl: './blood-donation-details.component.css'
})
export class BloodDonationDetailsComponent {
  @Input() bloodDonation: BloodDonation;
}
