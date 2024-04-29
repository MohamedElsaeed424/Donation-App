import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../login/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public constructor(private route:Router  ,private authservice:AuthService) {
  }
  organizationsDropdownOpen = false;
  donorsDropdownOpen = false;
  settingsDropdownOpen = false;

  toggleOrganizationsDropdown() {
    this.organizationsDropdownOpen = !this.organizationsDropdownOpen;
    this.donorsDropdownOpen = false ;
    this.settingsDropdownOpen = false ;
  }

  toggleDonorsDropdown() {
    this.donorsDropdownOpen = !this.donorsDropdownOpen;
    this.organizationsDropdownOpen = false ;
    this.settingsDropdownOpen = false ;
  }

  toggleSettingsDropdown() {
    this.settingsDropdownOpen = !this.settingsDropdownOpen;
    this.organizationsDropdownOpen = false ;
    this.donorsDropdownOpen = false ;
  }



  Logout(){
    this.authservice.isLoggedIn = false ;
  }

  NaviagteToChnagePassword(){
    this.route.navigate(["/changePassword"],{queryParams:{username:this.authservice.username}})
  }}
