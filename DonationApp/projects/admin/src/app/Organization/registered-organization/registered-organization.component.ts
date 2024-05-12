import {Component, OnInit} from '@angular/core';
import {OrganizationService} from "./RegisteredOrganization.service"
import {Organization} from "../Organization.model";
import {OrganizationFilterPipe} from "../organization-filter.pipe";
import {Router} from "@angular/router";
import {AuthService} from "../../login/services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-registered-organization',
  templateUrl: './registered-organization.component.html',
  styleUrl: './registered-organization.component.css'
})
export class RegisteredOrganizationComponent implements OnInit {
  Organizations: Organization[];
  searchTerm: string = '';
  area: string = '';
  government: string = '';
  type: string = '';

  constructor(private OrganizationService: OrganizationService,
              private route: Router,
              private authservice: AuthService,
              private toaster: ToastrService){}

  ngOnInit(): void {
    this.Organizations = this.OrganizationService.getOrganizations();
  }

  get isFilteredEmpty(): boolean {
    const filteredOrganizations = this.Organizations.filter(org =>
      org.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      org.area.toLowerCase().includes(this.area.toLowerCase()) &&
      org.type.toLowerCase().includes(this.type.toLowerCase()) &&
      org.government.toLowerCase().includes(this.government.toLowerCase())
    );
    return filteredOrganizations.length === 0;
  }

  deleteOrganization(i: number) {
    this.OrganizationService.deleteOrganization(i)
    this.toaster.success( 'Organization has been deleted successfully.');
  }

  NavigateToOrganizationDetails(i: number) {
    this.route.navigate(['/Organizations/Registered', i], {queryParams: {username: this.authservice.username}})
  }
}
