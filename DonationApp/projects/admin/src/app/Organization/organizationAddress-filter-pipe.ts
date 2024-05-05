import { Pipe, PipeTransform } from '@angular/core';
import {Organization} from "./Organization.model";

@Pipe({
  name: 'organizationAddressesFilterPipe'
})
export class OrganizationAddressesFilterPipe implements PipeTransform {

  transform(organizations: Organization[], searchTerm: string): Organization[] {
    if (!organizations || !searchTerm) {
      return organizations;
    }
    return organizations.filter(org =>
      org.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}