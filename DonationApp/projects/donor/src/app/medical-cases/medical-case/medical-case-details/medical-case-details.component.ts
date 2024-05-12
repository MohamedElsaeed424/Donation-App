import { Component, OnInit } from '@angular/core';
import { MedicalCase } from '../../medical-case.model';

import { ActivatedRoute, Router } from '@angular/router';
import {MedicalCaseService} from "../../medical-cases.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-medical-case-details',
  templateUrl: './medical-case-details.component.html',
  styleUrls: ['./medical-case-details.component.css']
})
export class MedicalCaseDetailsComponent implements OnInit {
  currentMedicalCase: MedicalCase;
  currentMedicalCaseId: number;
  selectedQuantity: number = 1;

  constructor(
    private medicalCaseService: MedicalCaseService,
    private route: ActivatedRoute,
    private router: Router ,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentMedicalCaseId = +params['id'];
      this.currentMedicalCase = this.medicalCaseService.getMedicalCaseById(this.currentMedicalCaseId);
    });
  }

  submitDonation() {
    this.toastr.success('Medical Case fulfilled successfully', 'Success');
    this.router.navigate(['/medical-cases']);
  }
}
