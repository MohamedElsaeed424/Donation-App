import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/login/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(protected authService: AuthService) {}

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.authService.logout();
    }
  }
}
