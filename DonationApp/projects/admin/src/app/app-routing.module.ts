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

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'changePassword', component: ChangePasswordComponent},
  {
    path: 'Donor', children: [
      {path: 'Registered', component: RegisteredDonorsComponent} ,
      {path: 'PendingRequest', component: DonorsPendingRequestsComponent}
    ]
  },
  {
    path: 'Organizations', children: [
      {path: 'Registered', component: RegisteredOrganizationComponent},
      {path:'PendingRequest',component: OrganizationsPendingRequestsComponent}
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
