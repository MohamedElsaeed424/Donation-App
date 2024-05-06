import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../login/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrl: './error-component.component.css'
})
export class ErrorComponent implements OnInit {
  constructor(protected authService: AuthService , private router:Router) {
  }

  ngOnInit() {
  }

  ReturnToDashboard(){
    this.router.navigate(['/dashboard'],{queryParams: {username: this.authService.username}});
  }

  ReturnToLogin(){
    this.router.navigate(['/login']);
  }
}
