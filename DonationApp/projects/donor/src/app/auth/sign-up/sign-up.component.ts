import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  selectedRole: string;
  donorSignupForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.createDonorSignupForm();
  }

  createDonorSignupForm(): void {
    this.donorSignupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      area: ['', Validators.required],
      governorate: ['', Validators.required],
      role: ['donor' , Validators.required], // Default role is donor
      teacherData: this.fb.group({
        subjects: ['', this.selectedRole === 'teacher' ? Validators.required : null],
        proBonoClasses: ['', [Validators.min(0)]],
        proBonoStudents: ['', [Validators.min(0)]]
      }),
      doctorData: this.fb.group({
        clinicAddress: ['', this.selectedRole === 'doctor' ? Validators.required : null],
        clinicArea: ['', this.selectedRole === 'doctor' ? Validators.required : null],
        clinicGovernorate: ['', this.selectedRole === 'doctor' ? Validators.required : null],
        specialty: ['', this.selectedRole === 'doctor' ? Validators.required : null],
        proBonoCases: ['', this.selectedRole === 'doctor' ? [Validators.required, Validators.min(0)] : null]
      })
    });
  }
  selectRole(role: string): void {
    this.donorSignupForm.get('role').setValue(role);
    this.selectedRole = role;
    this.updateValidators();
  }
  updateValidators(): void {
    const teacherData = this.donorSignupForm.get('teacherData');
    const doctorData = this.donorSignupForm.get('doctorData');

    if (this.selectedRole === 'teacher') {
      teacherData.get('subjects').setValidators(Validators.required);
      teacherData.get('proBonoClasses').setValidators([Validators.min(0)]);
      teacherData.get('proBonoStudents').setValidators([Validators.min(0)]);

      doctorData.get('clinicAddress').clearValidators();
      doctorData.get('clinicArea').clearValidators();
      doctorData.get('clinicGovernorate').clearValidators();
      doctorData.get('specialty').clearValidators();
      doctorData.get('proBonoCases').clearValidators();
    } else if (this.selectedRole === 'doctor') {
      doctorData.get('clinicAddress').setValidators(Validators.required);
      doctorData.get('clinicArea').setValidators(Validators.required);
      doctorData.get('clinicGovernorate').setValidators(Validators.required);
      doctorData.get('specialty').setValidators(Validators.required);
      doctorData.get('proBonoCases').setValidators([Validators.required, Validators.min(0)]);

      teacherData.get('subjects').clearValidators();
      teacherData.get('proBonoClasses').clearValidators();
      teacherData.get('proBonoStudents').clearValidators();
    }else{
      teacherData.get('subjects').clearValidators();
      teacherData.get('proBonoClasses').clearValidators();
      teacherData.get('proBonoStudents').clearValidators();
      doctorData.get('clinicAddress').clearValidators();
      doctorData.get('clinicArea').clearValidators();
      doctorData.get('clinicGovernorate').clearValidators();
      doctorData.get('specialty').clearValidators();
      doctorData.get('proBonoCases').clearValidators();
    }
    this.donorSignupForm.updateValueAndValidity();
    teacherData.updateValueAndValidity();
    doctorData.updateValueAndValidity();
  }

  submitDonorSignupInfo(): void {
    this.router.navigate(['/login'] , {relativeTo : this.route}) ;
    if (this.donorSignupForm.valid) {
      console.log(this.donorSignupForm.value);

    } else {
      this.validateAllFormFields(this.donorSignupForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    // Validation logic
  }

}

