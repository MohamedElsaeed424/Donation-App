import {Injectable} from "@angular/core";
import {OrganizationSubmissions} from "./OrganiztionSubmission.model";import {AuthService} from "../auth/auth.service";

@Injectable({providedIn: 'root'})

export class OrganizationSubmissionService {

  constructor(
              private authService: AuthService,) {
  }

  private OrganizationSubmissions :OrganizationSubmissions[] =[
    new OrganizationSubmissions(this.authService.currentOrganization, "clothes", "10 shirts, cotton, L size"),
    new OrganizationSubmissions(this.authService.currentOrganization, "toys", "20 toys, various types"),
    new OrganizationSubmissions(this.authService.currentOrganization, "medical supplies", "50 boxes of masks"),
    new OrganizationSubmissions(this.authService.currentOrganization, "school supplies", "100 notebooks, 50 pens"),
    new OrganizationSubmissions(this.authService.currentOrganization, "blood donation", "10 units of blood"),
    new OrganizationSubmissions(this.authService.currentOrganization, "clothes", "5 dresses, polyester, M size"),
    new OrganizationSubmissions(this.authService.currentOrganization, "toys", "30 action figures"),
    new OrganizationSubmissions(this.authService.currentOrganization, "medical supplies", "200 gloves"),
    new OrganizationSubmissions(this.authService.currentOrganization, "school supplies", "50 backpacks, 200 pencils"),
    new OrganizationSubmissions(this.authService.currentOrganization, "blood donation", "5 units of blood"),
    new OrganizationSubmissions(this.authService.currentOrganization, "clothes", "15 pairs of pants, denim, XL size"),
    new OrganizationSubmissions(this.authService.currentOrganization, "toys", "40 stuffed animals"),
    new OrganizationSubmissions(this.authService.currentOrganization, "medical supplies", "100 bandages"),
    new OrganizationSubmissions(this.authService.currentOrganization, "school supplies", "150 textbooks"),
    new OrganizationSubmissions(this.authService.currentOrganization, "blood donation", "8 units of blood"),
    new OrganizationSubmissions(this.authService.currentOrganization, "clothes", "20 t-shirts, cotton, S size"),
    new OrganizationSubmissions(this.authService.currentOrganization, "toys", "50 board games"),
    new OrganizationSubmissions(this.authService.currentOrganization, "medical supplies", "50 syringes"),
    new OrganizationSubmissions(this.authService.currentOrganization, "school supplies", "200 folders"),
    new OrganizationSubmissions(this.authService.currentOrganization, "blood donation", "15 units of blood"),
  ];


  addPost(OrganizationSubmission:OrganizationSubmissions){
    this.OrganizationSubmissions.push(OrganizationSubmission);
  }
  // Method to delete organization
  deletePost(index: number) {
    this.OrganizationSubmissions.splice(index, 1);
  }

  // Method to get all organizations
  getPosts() {
    return this.OrganizationSubmissions;
  }
  getPostById(i:number){
    return this.OrganizationSubmissions[i] ;
  }
}
