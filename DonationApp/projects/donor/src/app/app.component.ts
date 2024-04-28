import { Component } from '@angular/core';
import {AuthService} from "./auth/login/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Donor';
  constructor(protected authService: AuthService) {}
}
