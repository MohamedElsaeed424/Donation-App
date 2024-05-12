import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {Donor, DonorType} from "../../Donors/models/donor.model";
import {Teacher} from "../../Donors/models/pro-bonoTeacher.model";
import {ClinicLocationSpecification, Doctor} from "../../Donors/models/pro-bonoDoctor.model";
import {DonorService} from "../../Donors/donors.service";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  selectedRole: string;
  donorSignupForm: FormGroup;
  userLat: number;
  userLng: number;
  userMarkerLat: number;
  userMarkerLng: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router ,
    private donorService : DonorService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createDonorSignupForm();
  }
  setUserMarker(): void {
    this.userMarkerLat = this.userLat; // Set marker latitude based on user input
    this.userMarkerLng = this.userLng; // Set marker longitude based on user input
  }
  createDonorSignupForm(): void {
    this.donorSignupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
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
    if (this.donorSignupForm.valid) {
      const formData = this.donorSignupForm.value;
      let newDonor: Donor;
      switch (this.selectedRole) {
        case 'donor':
          newDonor = new Donor(
            formData.firstName,
            formData.lastName,
            formData.userName,
            formData.gender,
            formData.email,
            formData.contactNumber,
            formData.password,
            formData.address,
            formData.area,
            formData.governorate,
            DonorType.Donor
          );
          break;
        case 'teacher':
          newDonor = new Teacher(
            formData.firstName,
            formData.lastName,
            formData.userName,
            formData.gender,
            formData.email,
            formData.contactNumber,
            formData.password,
            formData.address,
            formData.area,
            formData.governorate,
            DonorType.Teacher,
            formData.teacherData.subjects,
            formData.teacherData.proBonoClasses,
            formData.teacherData.proBonoStudents
          );
          break;
        case 'doctor':
          newDonor = new Doctor(
            formData.firstName,
            formData.lastName,
            formData.userName,
            formData.gender,
            formData.email,
            formData.contactNumber,
            formData.password,
            formData.address,
            formData.area,
            formData.governorate,
            DonorType.Doctor,
            formData.doctorData.specialty,
            formData.doctorData.proBonoCases,
            new ClinicLocationSpecification(
              formData.doctorData.clinicAddress,
              formData.doctorData.clinicArea,
              formData.doctorData.clinicGovernorate,
              'google_marker_url' // You can set the Google marker URL here
            )
          );
          break;
        default: console.log("22")
          break;
      }
      if (newDonor) {
        this.donorService.addDonor(newDonor);
        this.toastr.success("Sign up successful!,Success")
        this.router.navigate(['/auth/login'], { relativeTo: this.route });
      }
    } else {
      this.validateAllFormFields(this.donorSignupForm);
    }
  }
  validateAllFormFields(formGroup: FormGroup): void {
    this.toastr.error("Please fill in all required fields", "Error")
  }

}

