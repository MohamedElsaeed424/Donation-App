import {Component, OnInit} from '@angular/core';
import {AuthService} from "../login/services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  userName:string ;
  constructor(private authSerbice :AuthService) {
  }
  ngOnInit(){
    this.userName=this.authSerbice.username;
  }
}
