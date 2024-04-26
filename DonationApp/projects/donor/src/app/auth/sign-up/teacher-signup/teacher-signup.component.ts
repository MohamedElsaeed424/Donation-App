import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-teacher-signup',
  templateUrl: './teacher-signup.component.html',
  styleUrl: './teacher-signup.component.css'
})
export class TeacherSignupComponent {
  donorTeachingForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createDonorTeachingForm();
  }

  createDonorTeachingForm(): void {
    this.donorTeachingForm = this.fb.group({
      subjects: ['', Validators.required],
      proBonoClasses: ['', [Validators.min(0)]],
      proBonoStudents: ['', [Validators.min(0)]],
    });
  }

  submitDonorTeachingInfo(): void {
    if (this.donorTeachingForm.valid) {
      // Here you can handle the form submission logic
      console.log(this.donorTeachingForm.value);
    } else {
      // Handle form validation errors
      this.validateAllFormFields(this.donorTeachingForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }
}
