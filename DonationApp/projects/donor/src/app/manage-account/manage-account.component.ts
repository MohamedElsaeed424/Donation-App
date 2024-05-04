import {Component, OnInit} from '@angular/core';
import {Donor} from "../Donors/models/donor.model";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrl: './manage-account.component.css'
})
export class ManageAccountComponent implements OnInit {
  currentDonor: Donor;
  constructor(private authService : AuthService) {}

  ngOnInit(): void {
    this.currentDonor = this.authService.currentUser;
  }

}
