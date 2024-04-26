import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrl: './doctor-signup.component.css'
})
export class DoctorSignupComponent implements OnInit {
  donorForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.donorForm = this.fb.group({
      clinicAddress: ['', Validators.required],
      clinicArea: ['', Validators.required],
      clinicGovernorate: ['', Validators.required],
      specialty: ['', Validators.required],
      proBonoCases: ['', [Validators.required, Validators.min(0)]]
    });
  }

  submitDonorInfo() {
    if (this.donorForm.valid) {
      console.log(this.donorForm.value); // You can handle form submission logic here
    } else {
      // Mark all fields as touched to show validation errors
      this.donorForm.markAllAsTouched();
    }
  }
}
