import {Component, OnInit} from '@angular/core';
import {Organization} from "../../../auth/Organization.model";
import {OrganizationSubmissions} from "../../OrganiztionSubmission.model";
import {OrganizationSubmissionService} from "../../OrganizationSubmission.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Donor, DonorTypeString} from "./models/Donor.model";
import {RegisteredDonorService} from "./Services/RegisteredDonor.service";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-fulfilled-donors',
  templateUrl: './fulfilled-donors.component.html',
  styleUrl: './fulfilled-donors.component.css'
})
export class FulfilledDonorsComponent implements OnInit {
  OrganizationSubmission:OrganizationSubmissions
  id:number
  Donors :Donor[]
  constructor(private OrganizationSubmissionService:OrganizationSubmissionService,
              private route:ActivatedRoute,
              private registeredDonors:RegisteredDonorService,
              private router :Router,
              private authservice :AuthService) {
    }
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = +params['id'];
        this.OrganizationSubmission = this.OrganizationSubmissionService.getPostById(this.id) ;
      })
      const itemCategory = this.OrganizationSubmission.itemCategory
      if (itemCategory === 'blood donation'|| itemCategory==='medical supplies')
        this.Donors = this.registeredDonors.getRandomDoctorsDonors()
      else
        this.Donors = this.registeredDonors.getRandomTeacherDonors()
    }

  viewDetails(name:string){
    const id = this.registeredDonors.findDonorIndexByName(name)
    this.router.navigate(['donor-details',id],{relativeTo: this.route,queryParams: {username: this.authservice.username}})
  }

  protected readonly DonorTypeString = DonorTypeString;
}
