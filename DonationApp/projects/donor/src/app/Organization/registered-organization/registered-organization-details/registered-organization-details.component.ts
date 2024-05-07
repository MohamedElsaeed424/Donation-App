import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Organization} from "../../Organization.model";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {OrganizationService} from "../RegisteredOrganization.service";


@Component({
  selector: 'app-registered-organization-details',
  templateUrl: './registered-organization-details.component.html',
  styleUrl: './registered-organization-details.component.css'
})
export class RegisteredOrganizationDetailsComponent {
  id:number ;
  Organization : Organization ;
  OrganizationGoogelMarker:SafeResourceUrl;
  constructor(private route:ActivatedRoute , private RegisteredOrganization:OrganizationService,private sanitizer: DomSanitizer) {
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.Organization = this.RegisteredOrganization.getOrganizationByIndex(this.id) ;
      this.OrganizationGoogelMarker = this.sanitizer.bypassSecurityTrustResourceUrl(this.Organization.GoogleMarkersrc)

    })
  }
}
