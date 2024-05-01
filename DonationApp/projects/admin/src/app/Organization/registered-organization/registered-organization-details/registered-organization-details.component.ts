import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Organization} from "../../Organization.model";
import {
  OrganizationPendingRequestService
} from "../../organizations-pending-requests/organization-pending-request.service";

@Component({
  selector: 'app-registered-organization-details',
  templateUrl: './registered-organization-details.component.html',
  styleUrl: './registered-organization-details.component.css'
})
export class RegisteredOrganizationDetailsComponent {
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
