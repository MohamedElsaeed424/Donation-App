import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Organization} from "../../Organization.model";
import {
  OrganizationPendingRequestService
} from "../../organizations-pending-requests/organization-pending-request.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-registered-organization-details',
  templateUrl: './registered-organization-details.component.html',
  styleUrl: './registered-organization-details.component.css'
})
export class RegisteredOrganizationDetailsComponent {
  id:number ;
  Organization : Organization ;
  OrganizationGoogelMarker:SafeResourceUrl;
  constructor(private route:ActivatedRoute , private OrganizationPendingRequestService :OrganizationPendingRequestService,private sanitizer: DomSanitizer) {
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.Organization = this.OrganizationPendingRequestService.getOrganizationByID(this.id) ;
      this.OrganizationGoogelMarker = this.sanitizer.bypassSecurityTrustResourceUrl(this.Organization.GoogleMarkersrc)

    })
  }
}
