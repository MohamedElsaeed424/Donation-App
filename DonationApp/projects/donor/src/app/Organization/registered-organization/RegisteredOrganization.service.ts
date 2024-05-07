import {Injectable} from '@angular/core';
import {Organization} from '../Organization.model';
import {OrganizationRepresentitveModel} from "../OrganizationRepresentitve.model";

@Injectable({providedIn: 'root'})
export class OrganizationService {
  private  organizations: Organization[] = [new Organization('Organization 1',
    'Type 1',
    '123 Main St',
    'Area 1',
    'Government 1', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d348092.19244772205!2d31.232492791336893!3d29.95416484046617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg&markers=30.0444,31.2357" ,
    new OrganizationRepresentitveModel('John',
      'Doe',
      'Male',
      'john@example.com',
      'password123',
      123456789)),
    new Organization('Organization 2',
      'Type 2',
      '456 Elm St',
      'Area 2',
      'Government 2',  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d863272.7240879732!2d32.52622001308696!3d26.133168083294733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg&markers=30.0444,31.2357",
      new OrganizationRepresentitveModel('Jane',
        'Smith',
        'Female',
        'jane@example.com',
        'password456',
        987654321)),
    new Organization('Organization 3',
      'Type 3',
      '789 Oak St',
      'Area 3',
      'Government 3', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d82969.53710127728!2d31.197928731076166!3d30.021650568065866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg&markers=30.0444,31.2357",
      new OrganizationRepresentitveModel('Michael',
        'Johnson',
        'Male',
        'michael@example.com',
        'password789',
        111222333)) ,
    new Organization('Organization 4',
      'Type 4',
      '101 Pine St',
      'Area 4'
      , 'Government 4', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d862959.4855104281!2d30.48427472672764!3d26.36570460965092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg&markers=30.0444,31.2357",
      new OrganizationRepresentitveModel('Emily',
        'Davis',
        'Female',
        'emily@example.com'
        , 'passwordabc',
        444555666)) ,
    new Organization('Organization 5',
      'Type 5',
      '112 Cedar St',
      'Area 5',
      'Government 5', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d173150.70639027644!2d29.925774456763993!3d31.200092375308864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg&markers=30.0444,31.2357" ,
      new OrganizationRepresentitveModel('David',
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
