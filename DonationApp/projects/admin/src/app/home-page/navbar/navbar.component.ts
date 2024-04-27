import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public constructor(private route:Router ) {
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
}
