import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit{
  constructor(private  authService : AuthService) { }

  ngOnInit(){

  }
}
