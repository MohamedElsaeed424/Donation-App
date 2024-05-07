import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {NgOptimizedImage} from "@angular/common";
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {FooterComponent} from "./shared/footer/footer.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePostComponent } from './OrganizationPosts/create-post/create-post.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {OrganizationSubmissionService} from "./OrganizationPosts/OrganizationSubmission.service";
import {SubmissionsComponent} from "./OrganizationPosts/OrganizationSubmissions/submissions.component";
import {OrganizationSubmissionDetailsComponent} from "./OrganizationPosts/OrganizationSubmissions/organization-submission-details/organization-submission-details.component";
import { EditPostComponent } from './OrganizationPosts/OrganizationSubmissions/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    CreatePostComponent,
    EditProfileComponent,
    SubmissionsComponent,
    OrganizationSubmissionDetailsComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [OrganizationSubmissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
