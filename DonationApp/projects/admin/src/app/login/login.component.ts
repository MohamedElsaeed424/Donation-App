import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  signInFrom : FormGroup
  isValid : boolean = true ;

  ngOnInit(){
    this.signInFrom = new FormGroup({
      'username'  : new FormControl(null , Validators.required),
      'password'  : new FormControl(null,Validators.required) ,
    })
  }

  constructor(private authService: AuthService ,  private router : Router) { }

  login() {
    let username = this.signInFrom.get('username').value
    let password = this.signInFrom.get('password').value
    const isAuthenticated = this.authService.login(username,password);
    if (isAuthenticated) {
      this.redirectToDashboard()
    } else {
      this.isValid = false ;
    }
  }

  redirectToDashboard(){
    console.log(this.signInFrom)
    this.router.navigate(['/Dashboard'] , {queryParams:{username:this.signInFrom.get('username').value}})
  }

}
