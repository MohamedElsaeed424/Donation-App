import {Organization} from "../Organization.model";
export class OrganizationSubmissions {
  Organization : Organization
  itemCategory : string
  details :string
  constructor(Organization : Organization, itemCategory : string,details :string) {
  this.Organization = Organization ;
  this.itemCategory = itemCategory ;
  this.details = details ;
  }
}
