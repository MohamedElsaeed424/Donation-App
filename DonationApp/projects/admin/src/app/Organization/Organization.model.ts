import {OrganizationRepresentitve} from "./OrganizationRepresentitve";

export class Organization {
  public name: string;
  public type: string;
  public address: string;
  public area: string;
  public government: string;
  public GoogleMarkersrc: string;
  public OrganizationRepresentative: OrganizationRepresentitve;

  constructor(name: string, type: string, address: string, area: string, government: string,GoogleMarkersrc: string, organizationRepresentative: OrganizationRepresentitve) {
    this.name = name;
    this.type = type;
    this.address = address;
    this.area = area;
    this.government = government;
    this.OrganizationRepresentative = organizationRepresentative;
    this.GoogleMarkersrc = GoogleMarkersrc;
  }
}
