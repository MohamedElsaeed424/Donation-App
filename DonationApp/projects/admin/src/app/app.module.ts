import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from './shared/navbar/navbar.component';
import {ErrorComponent} from './shared/error-component/error-component.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {
  RegisteredOrganizationComponent
} from './Organization/registered-organization/registered-organization.component';
import {OrganizationService} from "./Organization/registered-organization/RegisteredOrganization.service";
import {OrganizationFilterPipe} from './Organization/organization-filter.pipe';
import {RegisteredDonorsComponent} from './Donor/registered-donors/registered-donors.component';
import {DonorFilterPipePipe} from './Donor/donor-filter-pipe.pipe';
import {RegisteredDonorService} from "./Donor/registered-donors/RegisteredDonor.service";
import {
  OrganizationsPendingRequestsComponent
} from './Organization/organizations-pending-requests/organizations-pending-requests.component';
import {
  OrganizationPendingRequestService
} from "./Organization/organizations-pending-requests/organization-pending-request.service";
import {DonorsPendingRequestsComponent} from './Donor/donorss-pending-requests/donors-pending-requests.component';
import {DonorsPendingRequestService} from "./Donor/donorss-pending-requests/DonorsPendingRequest.service";
import {
  OrganizationDetailsComponent
} from './Organization/organizations-pending-requests/pending-organization-details/organization-details.component';
import {
  RegisteredOrganizationDetailsComponent
} from './Organization/registered-organization/registered-organization-details/registered-organization-details.component';
import {FooterComponent} from './shared/footer/footer.component';
import {SubmissionsComponent} from './Organization/OrganizationSubmissions/submissions.component';
import {OrganizationSubmissionService} from "./Organization/OrganizationSubmissions/OrganizationSubmission.service";
import {
  OrganizationSubmissionDetailsComponent
} from './Organization/OrganizationSubmissions/organization-submission-details/organization-submission-details.component';
import {DonorSubmissionsComponent} from './Donor/donor-submissions/donor-submissions.component';
import {DonorSubmissionsService} from "./Donor/donor-submissions/services/DonorSubmissions.service";
import { DonorsSubmissionDetailsComponent } from './Donor/donor-submissions/donors-submission-details/donors-submission-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginComponent,
    NavbarComponent,
    ErrorComponent,
    ChangePasswordComponent,
    DashboardComponent,
    RegisteredOrganizationComponent,
    OrganizationFilterPipe,
    RegisteredDonorsComponent,
    DonorFilterPipePipe,
    OrganizationsPendingRequestsComponent,
    DonorsPendingRequestsComponent,
    OrganizationDetailsComponent,
    RegisteredOrganizationDetailsComponent,
    FooterComponent,
    SubmissionsComponent,
    OrganizationSubmissionDetailsComponent,
    DonorSubmissionsComponent,
    DonorsSubmissionDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [OrganizationService,
    RegisteredDonorService,
    OrganizationPendingRequestService,
    DonorsPendingRequestService,
    OrganizationSubmissionService,
    DonorSubmissionsService,
  ],
  exports: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
