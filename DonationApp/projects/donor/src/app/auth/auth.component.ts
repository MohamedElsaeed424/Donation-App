import {Component, OnInit} from '@angular/core';
import {AuthService} from "./login/services/auth.service";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit{
  mode : string = 'signup' ;
  constructor(private  authService : AuthService) { }

  ngOnInit(){
    this.mode = this.authService.isLoggedIn ? 'login' : 'signup';
  }
}
