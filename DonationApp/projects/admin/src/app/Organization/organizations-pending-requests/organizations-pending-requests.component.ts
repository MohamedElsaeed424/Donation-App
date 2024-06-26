import {Component, OnInit} from '@angular/core';
import {Organization} from "../Organization.model";
import {OrganizationPendingRequestService} from "./organization-pending-request.service";
import {Router} from "@angular/router";
import {AuthService} from "../../login/services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-organizations-pending-requests',
  templateUrl: './organizations-pending-requests.component.html',
  styleUrl: './organizations-pending-requests.component.css'
})
export class OrganizationsPendingRequestsComponent implements OnInit {
  Organiztions: Organization[];

  constructor(private OrganizationsPendingRequests: OrganizationPendingRequestService,
              private route: Router,
              private authservice: AuthService,
              private toaster: ToastrService) {
  }

  ngOnInit(): void {
    this.Organiztions = this.OrganizationsPendingRequests.getOrganizations();
  }

  get isEmpty() {
    return this.Organiztions.length == 0;
  }

  deleteOrganization(i: number) {
    const organization = this.OrganizationsPendingRequests.getOrganizations()[i]
    this.toaster.success( organization.name  + ' has been deleted successfully.');
    this.OrganizationsPendingRequests.deleteOrganization(i)
  }

  acceptOrganization(org: Organization, i: number) {
    this.toaster.success(org.name + ' has been added successfully.')
    this.OrganizationsPendingRequests.acceptrganization(org)
    this.OrganizationsPendingRequests.deleteOrganization(i)
  }

  NavigateToOrganizationDetails(i: number) {
    this.route.navigate(['/Organizations/PendingRequest', i], {queryParams: {username: this.authservice.username}})
  }
}
