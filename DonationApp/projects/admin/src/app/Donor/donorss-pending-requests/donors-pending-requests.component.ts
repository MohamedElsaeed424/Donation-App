import { Component } from '@angular/core';
import {Donor, DonorTypeString} from "../Donor.model";
import {DonorsPendingRequestService} from "./DonorsPendingRequest.service";
import {RegisteredDonorService} from "../registered-donors/RegisteredDonor.service";

@Component({
  selector: 'app-donorss-pending-requests',
  templateUrl: './donors-pending-requests.component.html',
  styleUrl: './donors-pending-requests.component.css'
})
export class DonorsPendingRequestsComponent {
  Donors : Donor[]

  constructor(private DonorsPendingRequests : DonorsPendingRequestService ,private RegisteredDonors: RegisteredDonorService) {
  }

  ngOnInit(){
    this.Donors = this.DonorsPendingRequests.getDonors()
  }

  acceptDonor(Donor :Donor , i:number){
    this.DonorsPendingRequests.deleteDonor(i) ;
    this.RegisteredDonors.addDonor(Donor) ;
  }

  rejectDonor(i:number){
    this.DonorsPendingRequests.deleteDonor(i) ;
  }

  protected readonly DonorTypeString = DonorTypeString;
}
