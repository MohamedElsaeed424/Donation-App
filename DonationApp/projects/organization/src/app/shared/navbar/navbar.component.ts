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


  NavigateToDashboard(){
    this.route.navigate(['/Dashboard'],{queryParams: {username: this.authservice.username}})
    this.closeAllDropDown()
  }

  NavigateToEditProfile(){
    this.route.navigate(['/editProfile'],{queryParams: {username: this.authservice.username}})
  }

  NavigateToAddPost(){
    this.route.navigate(['/posts/createPost'],{queryParams: {username: this.authservice.username}})
  }

  navigateToAllPosts(){
    this.route.navigate(['/posts/allPosts',{queryParams: {username: this.authservice.username}}])
  }

}
