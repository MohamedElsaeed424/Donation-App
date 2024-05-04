import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Donor, DonorType } from "../Donors/models/donor.model";
import { AuthService } from "../auth/auth.service";
import {Teacher} from "../Donors/models/pro-bonoTeacher.model";
import {ClinicLocationSpecification, Doctor} from "../Donors/models/pro-bonoDoctor.model";
import {DonorService} from "../Donors/donors.service";
import {Router} from "@angular/router";
import {verifyHostBindings} from "@angular/compiler";

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {
  currentDonor: Donor;
  donorAccountManagementForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private donorService :DonorService) {}

  ngOnInit(): void {
    this.currentDonor = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
    console.log(this.currentDonor);
    this.createDonorAccountManagementForm();
    this.populateFormWithOldValues();
  }

  createDonorAccountManagementForm(): void {
    this.donorAccountManagementForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      area: ['', Validators.required],
      government: ['', Validators.required],
      teacherData: this.fb.group({
        subjects: [''],
        proBonoClasses: [0, [Validators.min(0)]], // Initialize with 0
        proBonoStudents: [0, [Validators.min(0)]], // Initialize with 0
      }),
      doctorData: this.fb.group({
        address: [''],
        area: [''],
        government: [''],
        specialty: [''],
        proBonoCases: [0, [Validators.min(0)]], // Initialize with 0
      })
    });
  }

  populateFormWithOldValues(): void {
    if (this.currentDonor) { // Check if currentDonor is defined
      this.donorAccountManagementForm.patchValue({
        firstName: this.currentDonor.firstName,
        lastName: this.currentDonor.lastName,
        userName: this.currentDonor.userName,
        gender: this.currentDonor.gender,
        email: this.currentDonor.email,
        phoneNumber: this.currentDonor.phoneNumber,
        password: this.currentDonor.password,
        address: this.currentDonor.address, // Check if currentDonor is defined before accessing its properties
        area: this.currentDonor.area,
        government: this.currentDonor.government,
      });
      if (this.currentDonor.type === DonorType.Teacher) {
        const teacher = this.currentDonor as Teacher;
        this.donorAccountManagementForm.get('teacherData').patchValue({
          subjects: teacher.subjects,
          proBonoClasses: teacher.proBonoClasses,
          proBonoStudents: teacher.proBonoStudents
        });
      } else if (this.currentDonor.type === DonorType.Doctor) {
        const doctor = this.currentDonor as Doctor;
        console.log(doctor);
        console.log("hee",doctor.clinicLocation.address);
        this.donorAccountManagementForm.get('doctorData').patchValue({
          address: doctor.clinicLocation.address,
          area: doctor.clinicLocation.area,
          government: doctor.clinicLocation.government,
          specialty: doctor.specialty,
          proBonoCases: doctor.proBonoCases
        });
      }
    }
  }

  updateAccount(): void {
    if (this.donorAccountManagementForm.valid) {
      // Extract form values to create a new donor
      const donorData = this.donorAccountManagementForm.value;

      // Determine donor type based on user type stored in local storage
      const userType = localStorage.getItem('userType') as DonorType;

      // Create a new donor based on the user type
      let updatedDonor: Donor;
      if (userType === DonorType.Teacher) {
        updatedDonor = new Teacher(
          donorData.firstName,
          donorData.lastName,
          donorData.userName,
          donorData.gender,
          donorData.email,
          donorData.phoneNumber,
          donorData.password,
          donorData.address,
          donorData.area,
          donorData.government,
          userType,
          donorData.teacherData.subjects,
          donorData.teacherData.proBonoClasses,
          donorData.teacherData.proBonoStudents
        );
      } else if (userType === DonorType.Doctor) {
        const clinicLocation = new ClinicLocationSpecification(
          donorData.doctorData.address,
          donorData.doctorData.area,
          donorData.doctorData.government,
          donorData.doctorData.googleMarker
        );
        updatedDonor = new Doctor(
          donorData.firstName,
          donorData.lastName,
          donorData.userName,
          donorData.gender,
          donorData.email,
          donorData.phoneNumber,
          donorData.password,
          donorData.address,
          donorData.area,
          donorData.government,
          userType,
          donorData.doctorData.specialty,
          donorData.doctorData.proBonoCases,
          clinicLocation
        );
      } else {
        updatedDonor = new Donor(
          donorData.firstName,
          donorData.lastName,
          donorData.userName,
          donorData.gender,
          donorData.email,
          donorData.contactNumber,
          donorData.password,
          donorData.address,
          donorData.area,
          donorData.governorate,
          userType
        );
      }
      localStorage.setItem('currentUser', JSON.stringify(updatedDonor));
      console.log('Updated donor saved to local storage:', updatedDonor);
    }
  }


  deleteAccount(): void {
    if (confirm("Are you sure you want to delete your account?")) {
      const userName = this.currentDonor.userName;
      this.donorService.deleteDonor(userName);
      this.authService.logout();
      this.router.navigate(['/']); // Navigate to home page
    }
  }

  protected readonly DonorType = DonorType;
}
