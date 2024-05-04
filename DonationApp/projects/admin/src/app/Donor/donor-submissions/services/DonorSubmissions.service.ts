import {DonorSubmission} from "../models/DonorSubmission.model";
import {RegisteredDonorService} from "../../registered-donors/RegisteredDonor.service";
import {Injectable} from "@angular/core";
@Injectable()
export class DonorSubmissionsService {
  constructor(private RegisteredDonors: RegisteredDonorService) {
  }

  donationItems = [
    {
      id: 1,
      name: 'Laptops',
      description: 'I need a laptop for my online classes',
      quantity: 5,
      status: 'Available',
      date: '2024-04-30',
      location: 'Example Location',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Books',
      description: 'I need books for my studies',
      quantity: 10,
      status: 'Available',
      date: '2024-05-01',
      location: 'Example Location',
      category: 'Education'
    },
    {
      id: 3,
      name: 'Clothes',
      description: 'I need clothes for my family',
      quantity: 20,
      status: 'Available',
      date: '2024-05-02',
      location: 'Example Location',
      category: 'Apparel'
    },
    {
      id: 4,
      name: 'Furniture',
      description: 'I need furniture for my home',
      quantity: 8,
      status: 'Available',
      date: '2024-05-03',
      location: 'Example Location',
      category: 'Home'
    },
    {
      id: 5,
      name: 'Shoes',
      description: 'I need shoes for my family',
      quantity: 15,
      status: 'Available',
      date: '2024-05-04',
      location: 'Example Location',
      category: 'Footwear'
    },
    {
      id: 6,
      name: 'Mobile',
      description: 'I need a mobile for my online classes',
      quantity: 3,
      status: 'Available',
      date: '2024-05-05',
      location: 'Example Location',
      category: 'Electronics'
    },
    {
      id: 7,
      name: 'Schoolbooks',
      description: 'Textbooks for different subjects and grade levels',
      quantity: 12,
      status: 'Available',
      date: '2024-05-06',
      location: 'Example Location',
      category: 'Education'
    },
    {
      id: 8,
      name: 'Stationary items',
      description: 'Pens, pencils, notebooks, and other stationary supplies',
      quantity: 25,
      status: 'Available',
      date: '2024-05-07',
      location: 'Example Location',
      category: 'Education'
    }
  ];


  DonorsSubmissions: DonorSubmission[] = [{
    Donor: this.RegisteredDonors.getRandomDonor(),
    DonationItem: this.donationItems[0]
  } ,{
    Donor: this.RegisteredDonors.getRandomDonor(),
    DonationItem: this.donationItems[1]
  },{
    Donor: this.RegisteredDonors.getRandomDonor(),
    DonationItem: this.donationItems[2]
  },{
    Donor: this.RegisteredDonors.getRandomDonor(),
    DonationItem: this.donationItems[3]
  },{
    Donor: this.RegisteredDonors.getRandomDonor(),
    DonationItem: this.donationItems[4]
  },{
    Donor: this.RegisteredDonors.getRandomDonor(),
    DonationItem: this.donationItems[5]
  },{
    Donor: this.RegisteredDonors.getRandomDonor(),
    DonationItem: this.donationItems[6]
  }];

  getDonorsSubmissions(){
    return this.DonorsSubmissions ;
  }

  getDonorSubmissionByIndex(index:number){
    return this.DonorsSubmissions[index] ;
  }

  acceptSubmission(index:number){
    this.donationItems.splice(index, 1);
  }
  rejectSubmission(index:number){
    this.donationItems.splice(index, 1);
  }
}
