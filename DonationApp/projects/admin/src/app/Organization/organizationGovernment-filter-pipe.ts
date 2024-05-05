import { Pipe, PipeTransform } from '@angular/core';
import {Organization} from "./Organization.model";

@Pipe({
  name: 'organizationGovernmentsFilterPipe'
})
export class OrganizationGovernmentsFilterPipe implements PipeTransform {

  transform(organizations: Organization[], searchTerm: string): Organization[] {
    if (!organizations || !searchTerm) {
      return organizations;
    }
    return organizations.filter(org =>
      org.government.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}