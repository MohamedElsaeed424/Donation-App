import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public constructor(private route: Router, private authservice: AuthService) {
  }
  NavigateToDashboard(){
    this.route.navigate(['/Dashboard'],{queryParams: {username: this.authservice.username}})
  }
}
