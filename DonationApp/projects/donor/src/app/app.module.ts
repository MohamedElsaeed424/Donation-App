import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DoctorSignupComponent } from './auth/sign-up/doctor-signup/doctor-signup.component';
import { TeacherSignupComponent } from './auth/sign-up/teacher-signup/teacher-signup.component';
import { UploadComponent } from './shared/upload/upload.component';
import {ReactiveFormsModule} from "@angular/forms";
import { GoogleMapComponent } from './shared/google-map/google-map.component';
import {GoogleMapsModule} from "@angular/google-maps";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignUpComponent,
    DoctorSignupComponent,
    TeacherSignupComponent,
    UploadComponent,
    GoogleMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    ReactiveFormsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
