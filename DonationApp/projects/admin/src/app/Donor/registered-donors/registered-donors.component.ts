import {Component, OnInit} from '@angular/core';
import {Donor} from "../Donor.model";
import {RegisteredDonorService} from "./RegisteredDonor.service";

@Component({
  selector: 'app-registered-donors',
  templateUrl: './registered-donors.component.html',
  styleUrl: './registered-donors.component.css'
})
export class RegisteredDonorsComponent implements OnInit{
  Donors : Donor[] ;
  searchTerm : string = '';
  constructor(private RegisteredDonorService: RegisteredDonorService ) {
  }
  ngOnInit(): void {
    this.Donors = this.RegisteredDonorService.getDonors() ;
  }

  get isFilteredEmpty(): boolean {
    return this.Donors.filter(Donor => Donor.name.toLowerCase().includes(this.searchTerm.toLowerCase())).length === 0;
  }

  deleteDonor(i:number){
    this.RegisteredDonorService.deleteDonor(i) ;
  }

  protected readonly Donor = Donor;
}
