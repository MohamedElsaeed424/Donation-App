import { Injectable } from '@angular/core';
import {Donor, DonorType} from "../Donors/models/donor.model";
import {Teacher} from "../Donors/models/pro-bonoTeacher.model";
import {ClinicLocationSpecification, Doctor} from "../Donors/models/pro-bonoDoctor.model";
import {DonorService} from "../Donors/donors.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: Donor | null = null;
  public isLoggedIn: boolean = false;

  constructor(private donorService : DonorService) { }
  public users: Donor[] = this.donorService.getAllDonors();

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.userName === username && u.password === password);
    if (user) {
      localStorage.setItem('token', 'your_token_here');
      localStorage.setItem('userType', user.type.toString());
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    this.isLoggedIn = false;
  }
  isAuthenticated(): boolean {
    console.log(!!localStorage.getItem('token'));
    console.log(localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }
  isTeacher(): boolean {
    return localStorage.getItem('userType') === 'teacher';
  }
  isDoctor(): boolean {
    return localStorage.getItem('userType') === 'doctor';
  }
}
