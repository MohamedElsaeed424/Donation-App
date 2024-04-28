import {Component, OnInit} from '@angular/core';
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

  constructor(private fb: FormBuilder , private route : ActivatedRoute , private router : Router) { }

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
      role: ['donor'] // Default role is donor
    });
  }

  submitDonorSignupInfo(): void {
    if (this.donorSignupForm.valid) {
      this.router.navigate(['login'] , {relativeTo : this.route});
      console.log(this.donorSignupForm.value);
    } else {
      // Handle form validation errors
      this.validateAllFormFields(this.donorSignupForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    // Validation logic
  }

  selectRole(role: string): void {
    this.selectedRole = role;
  }
}
