import {Component, OnInit} from '@angular/core';
import {OrganizationSubmissions} from "./OrganiztionSubmission.model";
import {OrganizationSubmissionService} from "./OrganizationSubmission.service";
import {Router} from "@angular/router";
import {AuthService} from "../../login/services/auth.service";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-OrganizationSubmissions',
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.css'
})
export class SubmissionsComponent implements OnInit {
  OrganizationSubmissions: OrganizationSubmissions[];

  constructor(private OrganizationSubmissionsService: OrganizationSubmissionService,
              private route: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.OrganizationSubmissions = this.OrganizationSubmissionsService.getSubmissions();
  }

  rejectSubmission(i: number) {
    this.OrganizationSubmissionsService.RejectOrganization(i)
  }

  acceptSubmission(i: number) {
    this.OrganizationSubmissionsService.acceptOrganization(i)
  }

  ViewSubmission(i: number) {
    this.route.navigate(['/Organizations/Submissions', i], {queryParams: {username: this.authService.username}})
  }

  generatePDF(i: number) {
    let Submission = this.OrganizationSubmissionsService.getSubmissionByID(i)
    const documentDefinition = {
      content: [
        {text: Submission.Organization.name + " submission details", style: 'header'},
        {text: "Category: " + Submission.itemCategory, style: 'subheader'},
        {text: "Details: " + Submission.details, margin: [0, 10, 0, 10], style: 'txt'},
        {text: "Location", style: 'subheader'},
        {
          text: Submission.Organization.area + " , " +
            Submission.Organization.government + " , " +
            Submission.Organization.address, margin: [0, 0, 0, 10], style: 'txt'
        },
        {text: "Representative Information ", style: 'subheader'},
        {
          text: Submission.Organization.OrganizationRepresentative.firstName + " "
            + Submission.Organization.OrganizationRepresentative.lastName, margin: [0, 0, 0, 10], style: 'txt'
        },
        {text: Submission.Organization.OrganizationRepresentative.gender, margin: [0, 0, 0, 10], style: 'txt'},
        {text: Submission.Organization.OrganizationRepresentative.email, margin: [0, 0, 0, 10], style: 'txt'},
        {text: Submission.Organization.OrganizationRepresentative.contactNumber, margin: [0, 0, 0, 10], style: 'txt'}
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
    pdfMake.createPdf(documentDefinition).download(Submission.Organization.name + " Submission");
  }

}
