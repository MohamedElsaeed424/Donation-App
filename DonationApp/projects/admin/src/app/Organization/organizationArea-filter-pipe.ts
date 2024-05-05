import { Pipe, PipeTransform } from '@angular/core';
import {Organization} from "./Organization.model";

@Pipe({
  name: 'organizationAreasFilterPipe'
})
export class OrganizationAreasFilterPipe implements PipeTransform {

  transform(organizations: Organization[], searchTerm: string): Organization[] {
    if (!organizations || !searchTerm) {
      return organizations;
    }
    return organizations.filter(org =>
      org.area.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}