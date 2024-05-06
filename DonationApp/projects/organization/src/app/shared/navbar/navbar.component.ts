import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public constructor(private route: Router, private authservice: AuthService) {
  }

  settingsDropdownOpen = false;
  dashboardButton = false;

  closeAllDropDown(){
    this.settingsDropdownOpen = false;
    this.dashboardButton = false;
  }

  toggleSettingsDropdown() {
    this.settingsDropdownOpen = !this.settingsDropdownOpen;
    this.dashboardButton = false;
  }
  toggledashboardButton(){
    this.dashboardButton =! this.dashboardButton;
    this.settingsDropdownOpen = false;
  }



  Logout() {
    this.authservice.isLoggedIn = false;
  }

  NaviagteToChnagePassword() {
    this.route.navigate(["/changePassword"], {queryParams: {username: this.authservice.username}})
    this.closeAllDropDown()
  }

  LoadRegisteredOrganizations(){
    this.route.navigate(['/Organizations/Registered'],{queryParams: {username: this.authservice.username}})
    this.closeAllDropDown()
  }

  NavigateToRegisteredDonors(){
    this.route.navigate(['/Donor/Registered'],{queryParams: {username: this.authservice.username}})
    this.closeAllDropDown()
  }
  navigateToPendingOrganizationsRequest(){
    this.route.navigate(['/Organizations/PendingRequest'],{queryParams: {username: this.authservice.username}})
    this.closeAllDropDown()
  }
  NavigateToPendingDonorRequest(){
    this.route.navigate(['/Donor/PendingRequest'],{queryParams: {username: this.authservice.username}})
    this.closeAllDropDown()
  }
  NavigateToDashboard(){
    this.route.navigate(['/Dashboard'],{queryParams: {username: this.authservice.username}})
    this.closeAllDropDown()
  }

  naviagteToOranizationSubmissions(){
    this.route.navigate(['/Organizations/Submissions'],{queryParams: {username: this.authservice.username}})
    this.closeAllDropDown()
  }

  naviagteToDonorsSubmissions(){
    this.route.navigate(['/Donor/Submissions'],{queryParams: {username: this.authservice.username}})
    this.closeAllDropDown()
  }

}
