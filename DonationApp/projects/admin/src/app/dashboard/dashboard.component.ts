import {Component, OnInit} from '@angular/core';
import {AuthService} from "../login/services/auth.service";
import { Organization } from '../Organization/Organization.model';
import { Router } from '@angular/router';
import {OrganizationService} from "../Organization/registered-organization/RegisteredOrganization.service";
import {
  OrganizationPendingRequestService
} from "../Organization/organizations-pending-requests/organization-pending-request.service";
import {OrganizationSubmissions} from "../Organization/OrganizationSubmissions/OrganiztionSubmission.model";
import {OrganizationSubmissionService} from "../Organization/OrganizationSubmissions/OrganizationSubmission.service";
import {Donor} from "../Donor/Donor.model";
import {RegisteredDonorService} from "../Donor/registered-donors/RegisteredDonor.service";
import {DonorsPendingRequestService} from "../Donor/donorss-pending-requests/DonorsPendingRequest.service";
import {DonorSubmissionsService} from "../Donor/donor-submissions/services/DonorSubmissions.service";
import {DonorSubmission} from "../Donor/donor-submissions/models/DonorSubmission.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  userName:string ;
  RegisteredOrganizations  : Organization[];
  OrganizationPendingRequests : Organization[] ;
  OrganizationSubmissions : OrganizationSubmissions[] ;
  RegisteredDonors :Donor[] ;
  DonorsPendingRequests :Donor[] ;
  DonorsSubmissions :DonorSubmission[] ;
  searchTerm: string = '';
  constructor( private route:Router ,
               private authservice:AuthService,
               private RegisterdOganizationsService:OrganizationService ,
               private OrganizationPendingRequestsService:OrganizationPendingRequestService,
               private OrganizationSubmissionsService :OrganizationSubmissionService ,
               private RegisteredDonorService:RegisteredDonorService,
               private DonorPendingRequestService:DonorsPendingRequestService ,
               private DonorsSubmissionsService:DonorSubmissionsService) {
  }
  ngOnInit(){
    this.userName=this.authservice.username;
    this.RegisteredOrganizations = this.RegisterdOganizationsService.getOrganizations()
    this.OrganizationPendingRequests = this.OrganizationPendingRequestsService.getOrganizations()
    this.OrganizationSubmissions = this.OrganizationSubmissionsService.getSubmissions()
    this.RegisteredDonors = this.RegisteredDonorService.getDonors()
    this.DonorsPendingRequests = this.DonorPendingRequestService.getDonors()
    this.DonorsSubmissions = this.DonorsSubmissionsService.getDonorsSubmissions()
  }
  NavigateToRegisteredOrganizationDetails(i:number){
    this.route.navigate(['/Organizations/Registered' ,i] ,{queryParams: {username: this.authservice.username}})
  }
  deleteRegisteredOrganization(i:number){
    this.RegisterdOganizationsService.deleteOrganization(i)
  }

  acceptOrganization(organization:Organization, i:number){
    this.OrganizationPendingRequestsService.acceptrganization(organization)
    this.OrganizationPendingRequestsService.deleteOrganization(i)
  }

  NavigateToPendingOrganizationRequestDetails(i:number){
    this.route.navigate(['/Organizations/PendingRequest',i] ,{queryParams: {username: this.authservice.username}})
  }

  deleteOrganizationPendingRequest(i:number){this.OrganizationPendingRequestsService.deleteOrganization(i)}

  acceptSubmission(i: number) {
    this.OrganizationSubmissionsService.acceptOrganization(i)
  }

  NavigateToOranizationsSumbissionDetails(i: number) {
    this.route.navigate(['/Organizations/Submissions', i], {queryParams: {username: this.authservice.username}})
  }

  deleteOrganizationSubmission(i: number) {
    this.OrganizationSubmissionsService.RejectOrganization(i)
  }

  deleteRegisteredDonor(i:number){
    this.RegisteredDonorService.deleteDonor(i) ;
  }

  deleteDonorPendingRequest(i:number){
    this.DonorPendingRequestService.deleteDonor(i)
  }

  DeleteDonorSubmission(i:number){
    this.DonorsSubmissionsService.rejectSubmission(i)
  }
  ViewSubmission(i){
    this.route.navigate(['/Donor/Submissions' , i] , {queryParams: {username: this.authservice.username}})
  }
  acceptDonor(donor:Donor , i:number){
    this.DonorPendingRequestService.deleteDonor(i)
    this.RegisteredDonorService.addDonor(donor)
  }
}
