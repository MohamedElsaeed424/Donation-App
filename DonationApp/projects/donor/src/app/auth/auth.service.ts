import { Injectable, OnInit } from '@angular/core';
import { Donor, DonorType } from "../Donors/models/donor.model";
import { DonorService } from "../Donors/donors.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  public currentUser: Donor | null = null;
  public isLoggedIn: boolean = false;
  public users: Donor[] =[];

  constructor(private donorService: DonorService) {
    this.users = this.donorService.getAllDonors();
    this.initCurrentUser();
  }
  private initCurrentUser(): void {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      const user = this.donorService.getDonorById(storedUsername);
      if (user) {
        this.currentUser = user;
        this.isLoggedIn = true;
      }
    }
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.userName === username && u.password === password);
    if (user) {
      localStorage.setItem('token', 'your_token_here');
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('userType', user.type.toString());
      this.currentUser = user;
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isItemRequested');
    this.currentUser = null; // Reset the currentUser
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
