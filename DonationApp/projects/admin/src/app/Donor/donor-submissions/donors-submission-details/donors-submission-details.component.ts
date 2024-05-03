import {Component, OnInit} from '@angular/core';
import {DonorSubmission} from "../models/DonorSubmission.model";
import {ActivatedRoute} from "@angular/router";
import {DonorSubmissionsService} from "../services/DonorSubmissions.service";

@Component({
  selector: 'app-donors-submission-details',
  templateUrl: './donors-submission-details.component.html',
  styleUrl: './donors-submission-details.component.css'
})
export class DonorsSubmissionDetailsComponent implements OnInit{
  id:number
  Submission :DonorSubmission
  constructor(private route : ActivatedRoute , private DonorsSubmission:DonorSubmissionsService) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.Submission = this.DonorsSubmission.getDonorSubmissionByIndex(this.id) ;
    })
  }
}
