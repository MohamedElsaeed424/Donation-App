import {Component, OnInit} from '@angular/core';
import {OrganizationSubmissions} from "../../OrganiztionSubmission.model";
import {ActivatedRoute} from "@angular/router";
import {OrganizationSubmissionService} from "../../OrganizationSubmission.service";

@Component({
  selector: 'app-organization-submission-details',
  templateUrl: './organization-submission-details.component.html',
  styleUrl: './organization-submission-details.component.css'
})
export class OrganizationSubmissionDetailsComponent implements OnInit{
  id:number
  OrganizationSubmission :OrganizationSubmissions
  constructor(private route:ActivatedRoute , private OrganizationsSubmission : OrganizationSubmissionService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.OrganizationSubmission = this.OrganizationsSubmission.getPostById(this.id) ;
    })
  }

}
