import {Injectable} from "@angular/core";
import {OrganizationSubmissions} from "./OrganiztionSubmission.model";
import {OrganizationService} from "../registered-organization/RegisteredOrganization.service";

@Injectable({providedIn: 'root'})

export class OrganizationSubmissionService {

  constructor(private registeredOrganization :OrganizationService) {
  }

  private OrganizationSubmissions :OrganizationSubmissions[] =[
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "clothes", "10 shirts, cotton, L size"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "toys", "20 toys, various types"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "medical supplies", "50 boxes of masks"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "school supplies", "100 notebooks, 50 pens"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "blood donation", "10 units of blood"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "clothes", "5 dresses, polyester, M size"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "toys", "30 action figures"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "medical supplies", "200 gloves"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "school supplies", "50 backpacks, 200 pencils"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "blood donation", "5 units of blood"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "clothes", "15 pairs of pants, denim, XL size"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "toys", "40 stuffed animals"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "medical supplies", "100 bandages"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "school supplies", "150 textbooks"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "blood donation", "8 units of blood"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "clothes", "20 t-shirts, cotton, S size"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "toys", "50 board games"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "medical supplies", "50 syringes"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "school supplies", "200 folders"),
    new OrganizationSubmissions(this.registeredOrganization.getRandomOrganization(), "blood donation", "15 units of blood"),
  ];

  acceptOrganization (index:number){
    this.OrganizationSubmissions.splice(index, 1);
  }

  // Method to delete organization
  RejectOrganization(index: number) {
    this.OrganizationSubmissions.splice(index, 1);
  }

  // Method to get all organizations
  getSubmissions() {
    return this.OrganizationSubmissions;
  }
  getSubmissionByID(i:number){
    return this.OrganizationSubmissions[i] ;
  }
}
