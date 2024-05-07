import { Pipe, PipeTransform } from '@angular/core';
import {Organization} from "./Organization.model";

@Pipe({
  name: 'organizationFilterPipe'
})
export class OrganizationFilterPipe implements PipeTransform {

  transform(organizations: any[], searchTerm: string, area: string, type: string, government: string): any[] {
    if (!organizations) {
      return [];
    }

    searchTerm = searchTerm.toLowerCase();
    area = area.toLowerCase();
    type = type.toLowerCase();
    government = government.toLowerCase();

    return organizations.filter(organization => {
      return (
        (organization.name && organization.name.toLowerCase().includes(searchTerm)) &&
        (organization.area && organization.area.toLowerCase().includes(area)) &&
        (organization.type && organization.type.toLowerCase().includes(type)) &&
        (organization.government && organization.government.toLowerCase().includes(government))
      );
    });
  }

}
