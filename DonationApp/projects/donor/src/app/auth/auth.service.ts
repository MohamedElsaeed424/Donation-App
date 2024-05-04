import {Injectable, OnInit} from '@angular/core';
import {Donor, DonorType} from "../Donors/models/donor.model";
import {DonorService} from "../Donors/donors.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: Donor | null = null;
  public isLoggedIn: boolean = false;
  public users: Donor[] =[] ;

  constructor(private donorService : DonorService) {
    this.users = this.donorService.getAllDonors();
    console.log(this.users);
  }

  login(username: string, password: string): boolean {
    console.log(this.users);
    const user = this.users.find(u => u.userName === username && u.password === password);
    console.log(user);
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
    return !!localStorage.getItem('token');
  }
  isTeacher(): boolean {
    return localStorage.getItem('userType') === 'teacher';
  }
  isDoctor(): boolean {
    return localStorage.getItem('userType') === 'doctor';
  }

}
