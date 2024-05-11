import {Injectable} from '@angular/core';
import {Organization} from '../Organization.model';
import {OrganizationRepresentitve} from "../OrganizationRepresentitve";

@Injectable({providedIn: 'root'})
export class OrganizationService {

  private organizations: Organization[] = [
    new Organization(
      'Organization 1',
      'Type 1',
      '123 Main St',
      'Area 1',
      'Government 1',
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.510939551825!2d31.379627764998325!3d30.108189828665278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145817a1c0d1be4d%3A0x7593084887c04837!2sProtiviti%20Egypt!5e0!3m2!1sen!2seg!4v1715447122454!5m2!1sen!2seg",
      new OrganizationRepresentitve('John', 'Doe', 'Male', 'john@example.com', 'password123', 123456789)
    ),
    new Organization(
      'Organization 2',
      'Type 2',
      '456 Elm St',
      'Area 2',
      'Government 2',
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.7385791140005!2d31.37621318207179!3d30.101672456138722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145816401818892f%3A0xf0810cffd0a37117!2sCoccole!5e0!3m2!1sen!2seg!4v1715447040074!5m2!1sen!2seg",
      new OrganizationRepresentitve('Jane', 'Smith', 'Female', 'jane@example.com', 'password456', 987654321)
    ),
    new Organization(
      'Organization 3',
      'Type 3',
      '789 Oak St',
      'Area 3',
      'Government 3',
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.5294892747653!2d31.45384836941957!3d30.03347360922928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14582302d0bc7ec7%3A0xc47f0b6e65519e8b!2sThe%20Village!5e0!3m2!1sen!2seg!4v1715446984060!5m2!1sen!2seg",      new OrganizationRepresentitve('Michael', 'Johnson', 'Male', 'michael@example.com', 'password789', 111222333)
    ),

    new Organization(
      'Organization 5',
      'Type 5',
      '112 Cedar St',
      'Area 5',
      'Government 5',
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.5501034950125!2d31.45284555852411!3d30.03110767453918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822cef0254b75%3A0x850a42814ff0978f!2sFoorera!5e0!3m2!1sen!2seg!4v1715446914860!5m2!1sen!2seg",
    new OrganizationRepresentitve('David', 'Brown', 'Male', 'david@example.com', 'passwordxyz', 777888999)
    )
  ];


  //getting random organization to be used in the submissions
  getRandomOrganization(): Organization {
    const randomIndex = Math.floor(Math.random() * this.organizations.length);
    return this.organizations[randomIndex];
  }

  // Method to add organization
  addOrganization(organization: Organization) {
    this.organizations.push(organization);
  }

  // Method to delete organization
  deleteOrganization(index: number) {
    this.organizations.splice(index, 1);
  }

  // Method to get all organizations
  getOrganizations() {
    return this.organizations;
  }


  getOrganizationByIndex(index: number) {
    return this.organizations[index];
  }


}
