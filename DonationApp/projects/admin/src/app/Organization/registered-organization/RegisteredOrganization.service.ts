import {Injectable} from '@angular/core';
import {Organization} from '../Organization.model';
import {OrganizationRepresentitve} from "../OrganizationRepresentitve";

@Injectable({providedIn: 'root'})
export class OrganizationService {
  private  organizations: Organization[] = [new Organization('Organization 1',
    'Type 1',
    '123 Main St',
    'Area 1',
    'Government 1',
    new OrganizationRepresentitve('John',
      'Doe',
      'Male',
      'john@example.com',
      'password123',
      123456789)),
    new Organization('Organization 2',
      'Type 2',
      '456 Elm St',
      'Area 2',
      'Government 2',
      new OrganizationRepresentitve('Jane',
        'Smith',
        'Female',
        'jane@example.com',
        'password456',
        987654321)),
    new Organization('Organization 3',
      'Type 3',
      '789 Oak St',
      'Area 3',
      'Government 3', new OrganizationRepresentitve('Michael',
        'Johnson',
        'Male',
        'michael@example.com',
        'password789',
        111222333)) ,
    new Organization('Organization 4',
      'Type 4',
      '101 Pine St',
      'Area 4'
      , 'Government 4',
      new OrganizationRepresentitve('Emily',
        'Davis',
        'Female',
        'emily@example.com'
        , 'passwordabc',
        444555666)) ,
    new Organization('Organization 5',
      'Type 5',
      '112 Cedar St',
      'Area 5',
      'Government 5',
      new OrganizationRepresentitve('David',
        'Brown',
        'Male',
        'david@example.com',
        'passwordxyz',
        777888999))
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
