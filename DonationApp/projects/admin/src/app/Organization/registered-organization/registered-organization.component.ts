import {Component, OnInit} from '@angular/core';
import {OrganizationService }  from "./RegisteredOrganization.service"
import {Organization} from "../Organization.model";
import {OrganizationFilterPipe} from "../organization-filter-pipe";

@Component({
  selector: 'app-registered-organization',
  templateUrl: './registered-organization.component.html',
  styleUrl: './registered-organization.component.css'
})
export class RegisteredOrganizationComponent implements OnInit{
  Organizations  : Organization[];
  searchTerm: string = '';
  constructor(private OrganizationService : OrganizationService ) {
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
}
