import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Donor, DonorTypeString} from "../models/Donor.model";
import {RegisteredDonorService} from "../Services/RegisteredDonor.service";

@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrl: './donor-details.component.css'
})
export class DonorDetailsComponent implements OnInit{
  id:number
  donor :Donor
  constructor(private route:ActivatedRoute,
              private registeredDonorService:RegisteredDonorService,) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.donor= this.registeredDonorService.getDonorByIndex(this.id) ;
    })
  }

  protected readonly DonorTypeString = DonorTypeString;
}
