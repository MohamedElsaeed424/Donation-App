import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Organization} from "../../Organization.model";
import {
  OrganizationPendingRequestService
} from "../organization-pending-request.service";


@Component({
  selector: 'app-pending-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrl: './organization-details.component.css'
})
export class OrganizationDetailsComponent implements OnInit{
  id:number ;
  Organization : Organization ;
  constructor(private route:ActivatedRoute , private OrganizationPendingRequestService :OrganizationPendingRequestService) {
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.Organization = this.OrganizationPendingRequestService.getOrganizationByID(this.id) ;
    })
  }
}
