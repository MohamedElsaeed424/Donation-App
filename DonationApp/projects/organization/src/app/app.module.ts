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
import { EditProfileComponent } from './Account-management/edit-profile.component';
import {OrganizationSubmissionService} from "./OrganizationPosts/OrganizationSubmission.service";
import {SubmissionsComponent} from "./OrganizationPosts/OrganizationSubmissions/submissions.component";
import {OrganizationSubmissionDetailsComponent} from "./OrganizationPosts/OrganizationSubmissions/organization-submission-details/organization-submission-details.component";
import { EditPostComponent } from './OrganizationPosts/OrganizationSubmissions/edit-post/edit-post.component';
import { FulfilledDonorsComponent } from './OrganizationPosts/OrganizationSubmissions/fulfilled-donors/fulfilled-donors.component';
import {
  RegisteredDonorService
} from "./OrganizationPosts/OrganizationSubmissions/fulfilled-donors/Services/RegisteredDonor.service";
import { DonorDetailsComponent } from './OrganizationPosts/OrganizationSubmissions/fulfilled-donors/donor-details/donor-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ShedulingComponent } from './sheduling/sheduling.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormField, MatInput, MatInputModule, MatLabel} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCard, MatCardContent} from "@angular/material/card";
import {NotificationsComponent} from "./shared/notifications/notifications.component";
import {NotificationDetailsComponent} from "./shared/notifications/notification-details/notification-details.component";

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
    EditPostComponent,
    FulfilledDonorsComponent,
    DonorDetailsComponent,
    ShedulingComponent,
    NotificationsComponent ,
    NotificationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule,
    NgxMaterialTimepickerModule,
    MatFormField,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatInput,
    MatFormFieldModule,
    MatLabel,
    MatInputModule,
    MatNativeDateModule,
    MatCardContent,
    MatCard,
  ],
  providers: [OrganizationSubmissionService,
              RegisteredDonorService,
              provideAnimationsAsync() ,
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
