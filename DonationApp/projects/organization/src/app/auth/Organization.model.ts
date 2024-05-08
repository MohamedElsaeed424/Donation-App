import {OrganizationRepresentitve} from "./OrganizationRepresentitve";

export class Organization {
  public username: string;
  public type: string;
  public address: string;
  public area: string;
  public government: string;
  public GoogleMarkersrc: string;
  public OrganizationRepresentative: OrganizationRepresentitve;

  constructor(username: string, type: string, address: string, area: string, government: string,GoogleMarkersrc: string, organizationRepresentative: OrganizationRepresentitve) {
    this.username = username;
    this.type = type;
    this.address = address;
    this.area = area;
    this.government = government;
    this.OrganizationRepresentative = organizationRepresentative;
    this.GoogleMarkersrc = GoogleMarkersrc;
  }
}
