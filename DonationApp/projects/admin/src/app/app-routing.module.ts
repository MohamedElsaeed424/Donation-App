import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component" ;
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {
  RegisteredOrganizationComponent
} from "./Organization/registered-organization/registered-organization.component";
import {RegisteredDonorsComponent} from "./Donor/registered-donors/registered-donors.component";
import {
  OrganizationsPendingRequestsComponent
} from "./Organization/organizations-pending-requests/organizations-pending-requests.component";
import {DonorsPendingRequestsComponent} from "./Donor/donorss-pending-requests/donors-pending-requests.component";
import {
  OrganizationDetailsComponent
} from "./Organization/organizations-pending-requests/pending-organization-details/organization-details.component";
import {
  RegisteredOrganizationDetailsComponent
} from "./Organization/registered-organization/registered-organization-details/registered-organization-details.component";
import {OrganizationSubmissions} from "./Organization/OrganizationSubmissions/OrganiztionSubmission.model";
import {SubmissionsComponent} from "./Organization/OrganizationSubmissions/submissions.component";
import {
  OrganizationSubmissionDetailsComponent
} from "./Organization/OrganizationSubmissions/organization-submission-details/organization-submission-details.component";
import {DonorSubmissionsComponent} from "./Donor/donor-submissions/donor-submissions.component";
import {
  DonorsSubmissionDetailsComponent
} from "./Donor/donor-submissions/donors-submission-details/donors-submission-details.component";

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'changePassword', component: ChangePasswordComponent},
  {
    path: 'Donor', children: [
      {path: 'Registered', component: RegisteredDonorsComponent},
      {path: 'PendingRequest', component: DonorsPendingRequestsComponent},
      {path: 'Submissions',children: [
          {path:'' ,component:DonorSubmissionsComponent},
          {path:':id' , component:DonorsSubmissionDetailsComponent }
        ]}
    ]
  },
  {
    path: 'Organizations', children: [
      {
        path: 'Registered', children: [{
          path: '', component: RegisteredOrganizationComponent
        }, {
          path: ':id', component: RegisteredOrganizationDetailsComponent
        } ]
      },
      {
        path: 'PendingRequest',
        children: [
          {path: '', component: OrganizationsPendingRequestsComponent}, {
            path: ':id',
            component: OrganizationDetailsComponent
          }]
      }, {
      path: 'Submissions' ,children:[
          {path : '' , component: SubmissionsComponent} ,
          {path:':id' , component: OrganizationSubmissionDetailsComponent}
        ]
      }
    ]
  }
  // { path: '**',  redirectTo:'pageNotFound' ,component:ErrorComponent } ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
