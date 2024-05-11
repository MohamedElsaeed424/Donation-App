import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EditProfileComponent} from "./Account-management/edit-profile.component";
import {CreatePostComponent} from "./OrganizationPosts/create-post/create-post.component";
import {SubmissionsComponent} from "./OrganizationPosts/OrganizationSubmissions/submissions.component";
import {
  OrganizationSubmissionDetailsComponent
} from "./OrganizationPosts/OrganizationSubmissions/organization-submission-details/organization-submission-details.component";
import {EditPostComponent} from "./OrganizationPosts/OrganizationSubmissions/edit-post/edit-post.component";
import {
  FulfilledDonorsComponent
} from "./OrganizationPosts/OrganizationSubmissions/fulfilled-donors/fulfilled-donors.component";
import {
  DonorDetailsComponent
} from "./OrganizationPosts/OrganizationSubmissions/fulfilled-donors/donor-details/donor-details.component";
import {ShedulingComponent} from "./sheduling/sheduling.component";

const routes: Routes = [
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  {
    path: 'auth', children: [
      {path: 'signup', component: SignUpComponent},
      {path: 'login', component: LoginComponent}
    ]
  }, {path: 'Dashboard', component: DashboardComponent}, {
    path: 'editProfile', component: EditProfileComponent
  }
  , {
    path: 'posts', children: [
      {path: 'createPost', component: CreatePostComponent},
      {
        path: 'allPosts', children: [
          {path: '', component: SubmissionsComponent},
          {path: 'details/:id', component: OrganizationSubmissionDetailsComponent},
          {path: 'edit/:id', component: EditPostComponent},
          {
            path: 'Fulfilled-Donors/:id', children: [
              {path: '', component: FulfilledDonorsComponent},
              {path: 'donor-details/:id', component: DonorDetailsComponent}
            ]
          }
        ]
      }]
  },
  {path: 'Scheduling', component: ShedulingComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
