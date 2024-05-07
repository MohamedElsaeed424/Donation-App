import {OrganizationRepresentitveModel} from "./OrganizationRepresentitve.model";

export class Organization {
  public name: string;
  public type: string;
  public address: string;
  public area: string;
  public government: string;
  public GoogleMarkersrc: string;
  public OrganizationRepresentative: OrganizationRepresentitveModel;

  constructor(name: string, type: string, address: string, area: string, government: string,GoogleMarkersrc: string, organizationRepresentative: OrganizationRepresentitveModel) {
    this.name = name;
    this.type = type;
    this.address = address;
    this.area = area;
    this.government = government;
    this.OrganizationRepresentative = organizationRepresentative;
    this.GoogleMarkersrc = GoogleMarkersrc;
  }
}
