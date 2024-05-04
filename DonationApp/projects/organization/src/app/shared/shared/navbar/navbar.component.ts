import {Component, HostListener} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

import {ItemCategory} from "../../requested-items/categories/categories-models/all-categories.enum";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  itemCategory : ItemCategory ;
  categoriesDropdownOpen :boolean = false ;

  public constructor(
    private route: ActivatedRoute,
    private  router : Router,
    protected authService: AuthService) {}

  toggleCategoriesDropdown() {
    this.categoriesDropdownOpen = !this.categoriesDropdownOpen;
    console.log(this.categoriesDropdownOpen);
  }

  closeAllDropdowns(){
    this.categoriesDropdownOpen = false;
  }

  logout() {
   this.authService.logout();
   this.router.navigate(['/auth/login']);
  }

  protected readonly ItemCategory = ItemCategory;
}
