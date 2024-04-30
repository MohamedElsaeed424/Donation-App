import { Pipe, PipeTransform } from '@angular/core';
import {Organization} from "./Organization.model";

@Pipe({
  name: 'organizationFilterPipe'
})
export class OrganizationFilterPipe implements PipeTransform {

  transform(organizations: Organization[], searchTerm: string): Organization[] {
    if (!organizations || !searchTerm) {
      return organizations;
    }
    return organizations.filter(org =>
      org.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
