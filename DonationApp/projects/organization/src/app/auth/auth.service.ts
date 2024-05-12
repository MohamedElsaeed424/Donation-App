import { Injectable } from '@angular/core';
import {Organization} from "./Organization.model";
import {OrganizationRepresentitve} from "../../../../admin/src/app/Organization/OrganizationRepresentitve";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public username: string ;
  public isLoggedIn: boolean = false;
  currentOrganization :Organization;
  private users: Organization[] = [
    new Organization('org1',
      'Type 1',
      '123 Main St',
      'Area 1',
      'Government 1', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d348092.19244772205!2d31.232492791336893!3d29.95416484046617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg&markers=30.0444,31.2357" ,
      new OrganizationRepresentitve('John',
        'Doe',
        'Male',
        'john@example.com',
        'password123',
        123456789)),
    new Organization('org1',
      'Type 2',
      '456 Elm St',
      'Area 2',
      'Government 2',  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d863272.7240879732!2d32.52622001308696!3d26.133168083294733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg&markers=30.0444,31.2357",
      new OrganizationRepresentitve('Jane',
        'Smith',
        'Female',
        'jane@example.com',
        'password123',
        987654321)),
    // Add more users as needed
  ];

  public isMatchingPasswords(username:string , password:string): boolean {
    const index = this.users.findIndex(user => user.username === username);
    return this.users[index].OrganizationRepresentative.password==password ;
  }

  addUser(user:Organization) {
    this.users.push(user);
  }

  constructor() { }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.OrganizationRepresentative.password === password);
    if (user) {
      this.username = username ;
      this.isLoggedIn = true ;
      localStorage.setItem('token', 'your_token_here');
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentOrganization = this.findOrganizationByUsername(this.username)
      console.log(this.username)
      return true;
    } else {
      // Authentication failed
      return false;
    }
  }
  findOrganizationByUsername(username: string): Organization | undefined {
    return this.users.find(org => org.username === username);
  }

  resetPassword(username:string ,password:string){
    const index = this.users.findIndex(user => user.username === username);
    this.users[index].OrganizationRepresentative.password = password;
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

}
