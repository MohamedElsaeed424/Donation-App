import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrl: './doctor-signup.component.css'
})
export class DoctorSignupComponent implements OnInit{
  @Output() formSubmit = new EventEmitter<any>();
  doctorForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.doctorForm = this.fb.group({
      clinicAddress: ['', Validators.required],
      clinicArea: ['', Validators.required],
      clinicGovernorate: ['', Validators.required],
      specialty: ['', Validators.required],
      proBonoCases: ['', [Validators.required, Validators.min(0)]]
    });
  }
  submitDoctorInfo() {
    if (this.doctorForm.valid) {
      this.formSubmit.emit(this.doctorForm.value);
    } else {
      // Handle form validation errors
      this.validateAllFormFields(this.doctorForm);
    }
  }
  validateAllFormFields(formGroup: FormGroup): void {
    // Validation logic
  }
}
