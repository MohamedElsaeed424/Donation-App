import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {FileUploadService} from "../../shared/file-upload/file-upload.service";
import {AuthService} from "../auth.service";
import {Organization} from "../Organization.model";
import {OrganizationRepresentitve} from "../OrganizationRepresentitve";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  OrganizationSignupForm: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router ,
              private toaster: ToastrService,
              private fileUploadService :FileUploadService,
              private authService: AuthService,) { }

  ngOnInit(): void {
    this.createOrganizaitonForm();
  }

  createOrganizaitonForm(): void {
    this.OrganizationSignupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      OrganizationName: ['', Validators.required],
      OrganizationType: ['', Validators.required],
      OrganizationAddress: ['', Validators.required],
      OrganizationArea: ['', Validators.required],
      OrganizationGovernment: ['', Validators.required],
    });
  }


  logOrganizationFormAttributes(): void {
    const formValue = this.OrganizationSignupForm.value;
    console.log("First Name:", formValue.firstName);
    console.log("Last Name:", formValue.lastName);
    console.log("Gender:", formValue.gender);
    console.log("Email:", formValue.email);
    console.log("Contact Number:", formValue.contactNumber);
    console.log("Password:", formValue.password);
    console.log("Organization Name:", formValue.OrganizationName);
    console.log("Organization Type:", formValue.OrganizationType);
    console.log("Organization Address:", formValue.OrganizationAddress);
    console.log("Organization Area:", formValue.OrganizationArea);
    console.log("Organization Government:", formValue.OrganizationGovernment);
  }

  isSignUpFormValid(): boolean {
    console.log(this.OrganizationSignupForm.valid)
    return this.OrganizationSignupForm.valid;
  }

  getRegisteredOrganizations(){
    const formValue = this.OrganizationSignupForm.value ;
    return new Organization(
      formValue.OrganizationName,
      formValue.OrganizationType,
      formValue.OrganizationAddress,
      formValue.OrganizationArea,
      formValue.OrganizationGovernment,
      "",
      new OrganizationRepresentitve(
        formValue.firstName,
        formValue.lastName,
        formValue.gender,
        formValue.email,
        formValue.password,
        formValue.contactNumber,
      )
    )
  }

  submitOrgnanizationSignupInfo(): void {
    if (this.fileUploadService.isUploaded){
    this.logOrganizationFormAttributes()
      this.authService.addUser(this.getRegisteredOrganizations())
    this.toaster.success('Signed up successfully')
    this.router.navigate(['../login'] , {relativeTo : this.route}) ; }
    else{
      this.toaster.warning('file is not uploaded')
    }
  }

}

