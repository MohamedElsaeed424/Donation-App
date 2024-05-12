import { Component } from '@angular/core';
import {Donor, DonorTypeString} from "../Donor.model";
import {DonorsPendingRequestService} from "./DonorsPendingRequest.service";
import {RegisteredDonorService} from "../registered-donors/RegisteredDonor.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-donorss-pending-requests',
  templateUrl: './donors-pending-requests.component.html',
  styleUrl: './donors-pending-requests.component.css'
})
export class DonorsPendingRequestsComponent {
  Donors : Donor[]

  constructor(private DonorsPendingRequests : DonorsPendingRequestService ,
              private RegisteredDonors: RegisteredDonorService,
              private toaster: ToastrService) {
  }

  ngOnInit(){
    this.Donors = this.DonorsPendingRequests.getDonors()
  }

  acceptDonor(Donor :Donor , i:number){
    const donor = this.DonorsPendingRequests.getDonors()[i]
    this.toaster.success(donor.name + 'has been successfully accepted')
    this.DonorsPendingRequests.deleteDonor(i) ;
    this.RegisteredDonors.addDonor(Donor) ;
  }

  rejectDonor(i:number){
    const donor = this.DonorsPendingRequests.getDonors()[i]
    this.toaster.success(donor.name + 'has been rejected')
    this.DonorsPendingRequests.deleteDonor(i) ;
  }

  protected readonly DonorTypeString = DonorTypeString;
}
