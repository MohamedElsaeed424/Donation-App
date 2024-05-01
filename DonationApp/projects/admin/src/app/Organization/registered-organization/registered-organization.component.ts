import {Component, OnInit} from '@angular/core';
import {OrganizationService }  from "./RegisteredOrganization.service"
import {Organization} from "../Organization.model";
import {OrganizationFilterPipe} from "../organization-filter-pipe";
import {Router} from "@angular/router";
import {AuthService} from "../../login/services/auth.service";

@Component({
  selector: 'app-registered-organization',
  templateUrl: './registered-organization.component.html',
  styleUrl: './registered-organization.component.css'
})
export class RegisteredOrganizationComponent implements OnInit{
  Organizations  : Organization[];
  searchTerm: string = '';
  constructor(private OrganizationService : OrganizationService , private route:Router , private authservice:AuthService ) {
  }

  ngOnInit(): void {
    this.Organizations = this.OrganizationService.getOrganizations();
  }

  get isFilteredEmpty(): boolean {
    return this.Organizations.filter(org => org.name.toLowerCase().includes(this.searchTerm.toLowerCase())).length === 0;
  }

  deleteOrganization(i:number){
    this.OrganizationService.deleteOrganization(i)
  }
  NavigateToOrganizationDetails(i:number){
    this.route.navigate(['/Organizations/Registered' ,i] ,{queryParams: {username: this.authservice.username}})
  }
}
