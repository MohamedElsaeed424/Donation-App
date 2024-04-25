import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  signInFrom : FormGroup

  ngOnInit(){
    this.signInFrom = new FormGroup({
      'username'  : new FormControl(null) ,
      'password'  : new FormControl(null) ,
    })
  }

  constructor(private authService: AuthService) { }

  login() {
    const isAuthenticated = this.authService.login(this.username, this.password);
    if (isAuthenticated) {
      // Redirect to the dashboard or another page
    } else {
      // Show error message or handle authentication failure
    }
  }

}
