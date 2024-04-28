import {Component, ElementRef, HostListener} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../login/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public constructor(private route:Router , private elementRef:ElementRef ,private authservice:AuthService) {
  }
  organizationsDropdownOpen = false;
  donorsDropdownOpen = false;
  settingsDropdownOpen = false;

  toggleOrganizationsDropdown() {
    this.organizationsDropdownOpen = !this.organizationsDropdownOpen;
  }

  toggleDonorsDropdown() {
    this.donorsDropdownOpen = !this.donorsDropdownOpen;
  }

  toggleSettingsDropdown() {
    this.settingsDropdownOpen = !this.settingsDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  closeDropdownOnClickOutside(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.elementRef.nativeElement.close();
    }
  }
  Logout(){
    this.authservice.isLoggedIn = false ;
  }

  NaviagteToChnagePassword(){
    this.route.navigate(["/changePassword"],{queryParams:{username:this.authservice.username}})
  }}
