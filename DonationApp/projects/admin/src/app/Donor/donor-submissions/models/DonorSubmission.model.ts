import {Donor} from "../../Donor.model";
import {DonationItem} from "./DonationItem.model";

export class DonorSubmission {
  Donor :Donor
  DonationItem:DonationItem
  constructor(Donor:Donor,DonationItem:DonationItem) {
  this.Donor = Donor;
  this.DonationItem = DonationItem ;
  }
}
