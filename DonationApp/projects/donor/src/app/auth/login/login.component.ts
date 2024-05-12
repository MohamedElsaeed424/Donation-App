import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DonorService} from "../../Donors/donors.service";

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

  constructor(
    private authService: AuthService ,
    private donorService :DonorService,
    private router : Router ,
    private route : ActivatedRoute) { }

  login() {
    let username = this.signInFrom.get('username').value
    let password = this.signInFrom.get('password').value
    const isAuthenticated = this.authService.login(username,password);
    if (isAuthenticated) {
      this.authService.currentUser = this.donorService.getDonorById(username);
      this.redirectTo('/Dashboard') ;
    } else {
      this.isValid = false ;
      this.redirectTo('/login') ;
    }
  }

  redirectTo(path : string){
    console.log(this.signInFrom)
    this.router.navigate([path] , {relativeTo : this.route});
  }

}
