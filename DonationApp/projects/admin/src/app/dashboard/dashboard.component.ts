import {Component, OnInit} from '@angular/core';
import {AuthService} from "../login/services/auth.service";
import { Organization } from '../Organization/Organization.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  userName:string ;
  Organizations  : Organization[];
  searchTerm: string = '';
  constructor( private route:Router , private authservice:AuthService ) {
  }
  NavigateToOrganizationDetails(i:number){
    this.route.navigate(['/Organizations/Registered' ,i] ,{queryParams: {username: this.authservice.username}})
  }
  ngOnInit(){
    this.userName=this.authservice.username;
  }
}
