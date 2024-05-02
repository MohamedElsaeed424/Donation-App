import {Component, HostListener} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../auth/login/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public constructor(private route: ActivatedRoute, private  router : Router,private authService: AuthService) {
  }

  logout() {
   this.authService.logout();
   this.router.navigate(['/auth/login']);
  }

}
