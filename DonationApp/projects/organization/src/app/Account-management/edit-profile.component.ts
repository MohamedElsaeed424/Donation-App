import { Component } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Organization} from "../auth/Organization.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrganizationRepresentitve} from "../auth/OrganizationRepresentitve";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-Account-management',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  organization :Organization ;
  OrganizationProfile: FormGroup;
  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private route:Router,
              private toaster :ToastrService ,) {}

  ngOnInit(): void {
    this.organization = this.authService.currentOrganization
    this.createOrganizaitonForm();
    this.populateFormWithOldValues()
  }


  createOrganizaitonForm(): void {
    this.OrganizationProfile = this.fb.group({
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

  populateFormWithOldValues() {
    if (this.organization && this.organization.OrganizationRepresentative) {
      this.OrganizationProfile.patchValue({
        firstName: this.organization.OrganizationRepresentative.firstName,
        lastName: this.organization.OrganizationRepresentative.lastName,
        gender: this.organization.OrganizationRepresentative.gender,
        email: this.organization.OrganizationRepresentative.email,
        contactNumber: this.organization.OrganizationRepresentative.contactNumber,
        password: this.organization.OrganizationRepresentative.password,
        OrganizationName: this.organization.username,
        OrganizationType: this.organization.type,
        OrganizationAddress: this.organization.address,
        OrganizationArea: this.organization.area,
        OrganizationGovernment: this.organization.government,
      });
    }
  }
  updateAccount(){
    const organizationData =this.OrganizationProfile.value ;
    const updatedOrganization = new Organization(
      organizationData.OrganizationName ,
      organizationData.OrganizationType,
      organizationData.OrganizationAddress ,
      organizationData.OrganizationArea ,
      organizationData.OrganizationGovernment ,
      organizationData.GoogleMarkersrc ,
      new OrganizationRepresentitve(
        organizationData.firstName,
        organizationData.lastName,
        organizationData.gender,
        organizationData.email,
        organizationData.password,
        organizationData.contactNumber
      )
    )
    this.toaster.success('Account updated successfully.');
    this.authService.currentOrganization = updatedOrganization ;
  }

  EditProfile(){
    if (this.isProfileFormValid())
      console.log('updated successfully')
    this.updateAccount()
  }

  isProfileFormValid(): boolean {
    console.log(this.OrganizationProfile.valid)
    return this.OrganizationProfile.valid;
  }


  NavigateToLogin(){
    this.route.navigate(['/auth/login'])
    this.authService.isLoggedIn=false
  }

}
