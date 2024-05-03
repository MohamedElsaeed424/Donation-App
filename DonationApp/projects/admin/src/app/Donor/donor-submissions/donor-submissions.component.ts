import {Component, OnInit} from '@angular/core';
import {DonorSubmissionsService} from "./services/DonorSubmissions.service";
import {RegisteredDonorsComponent} from "../registered-donors/registered-donors.component";
import {DonorSubmission} from "./models/DonorSubmission.model";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {Router} from "@angular/router";
import {AuthService} from "../../login/services/auth.service";

@Component({
  selector: 'app-donor-submissions',
  templateUrl: './donor-submissions.component.html',
  styleUrl: './donor-submissions.component.css'
})
export class DonorSubmissionsComponent implements OnInit {

  DonorSubmissions: DonorSubmission[];

  constructor(private donorSubmissionsService: DonorSubmissionsService , private route:Router ,private authservice:AuthService) {
  }

  ngOnInit(): void {
    this.DonorSubmissions = this.donorSubmissionsService.getDonorsSubmissions()
  }

  acceptSubmission(i: number) {
    this.donorSubmissionsService.acceptSubmission(i)
  }

  rejectSubmission(i: number) {
    this.donorSubmissionsService.rejectSubmission(i)
  }

  ViewSubmission(i){
    this.route.navigate(['/Donor/Submissions' , i] , {queryParams: {username: this.authservice.username}})
  }

  generatePDF(i: number) {
    let Submission = this.donorSubmissionsService.getDonorSubmissionByIndex(i)
    const documentDefinition = {
      content: [
        {text: Submission.Donor.name + " submission details", style: 'header'},
        {text: "Category: " + Submission.DonationItem.name, style: 'subheader'},
        {text: "status: " + Submission.DonationItem.status, margin: [0, 10, 0, 10], style: 'txt'},
        {text: "quantity: " + Submission.DonationItem.quantity, margin: [0, 0, 0, 10], style: 'txt'},
        {text: "category: " + Submission.DonationItem.category, margin: [0, 0, 0, 10], style: 'txt'},
        {text: "description" + Submission.DonationItem.description, margin: [0, 0, 0, 10], style: 'txt'},
        {text: "Location", style: 'subheader'},
        {text: Submission.DonationItem.location, margin: [0, 0, 0, 10], style: 'txt'},
        {text: "Donors' information ", style: 'subheader'},
        {text: "name: " + Submission.Donor.name, margin: [0, 0, 0, 10], style: 'txt'},
        {text: "type: " + Submission.Donor.type, margin: [0, 0, 0, 10], style: 'txt'},
        {text: "phone number: " + Submission.Donor.phoneNumber, margin: [0, 0, 0, 10], style: 'txt'},
        {text: "email: " + Submission.Donor.email, margin: [0, 0, 0, 10], style: 'txt'},
        {text: "gender:" + Submission.Donor.gender, margin: [0, 0, 0, 10], style: 'txt'},
        {text: "area:" + Submission.Donor.area, margin: [0, 0, 0, 10], style: 'txt'},
        {text: Submission.Donor.name, margin: [0, 0, 0, 10], style: 'txt'},

      ],
      styles: {

        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
          alignment: 'center'// Add margin to the bottom
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 5],
          alignment: 'center'// Add margin to the top and bottom
        },
        txt: {
          alignment: 'center'
        }
      }
    };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(documentDefinition).download(Submission.Donor.name + " Submission");
  }

}
