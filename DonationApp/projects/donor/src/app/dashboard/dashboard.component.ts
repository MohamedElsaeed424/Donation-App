import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Donor} from "../Donors/models/donor.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {DonorService} from "../Donors/donors.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  currentDonor: Donor;
  title: string;
  emoji: string;
  constructor() {}

  ngOnInit(): void {
    this.currentDonor = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
    this.title = this.currentDonor.type === 'doctor'? "Dr. ": this.currentDonor.type === 'teacher'? "Mr. ": "";
    this.emoji = this.currentDonor.type === 'doctor'? "🧑‍⚕️💉🩺": this.currentDonor.type === 'teacher'? "🧑‍🏫🏫": "🩸🎒🧸";
    console.log(this.currentDonor);

  }

}
