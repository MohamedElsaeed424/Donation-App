import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DoctorSignupComponent } from './auth/sign-up/doctor-signup/doctor-signup.component';
import { TeacherSignupComponent } from './auth/sign-up/teacher-signup/teacher-signup.component';

import {ReactiveFormsModule} from "@angular/forms";
import { GoogleMapComponent } from './shared/google-map/google-map.component';
import {GoogleMapsModule} from "@angular/google-maps";
import {NgOptimizedImage} from "@angular/common";
import { FileUploadComponent } from './shared/file-upload/file-upload.component';
import { HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./auth/login/login.component";

import { RequestedItemsComponent } from './requested-items/requested-items.component';

import { RequestedItemComponent } from './requested-items/requested-item/requested-item.component';
import {NavbarComponent} from "./shared/navbar/navbar.component";
import { RequestBodyComponent } from './request-body/request-body.component';
import {DropdownDirective} from "./shared/dropdown.directive";
import { RequestedItemDetailsComponent } from './requested-items/requested-item/requested-item-details/requested-item-details.component';
import { RequestedItemsListComponent } from './requested-items/requested-items-list/requested-items-list.component';




@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignUpComponent,
    LoginComponent,
    DoctorSignupComponent,
    TeacherSignupComponent,
    GoogleMapComponent,
    FileUploadComponent,
    NavbarComponent,
    RequestedItemsComponent,
    RequestedItemComponent,
    RequestBodyComponent,
    DropdownDirective,
    RequestedItemDetailsComponent,
    RequestedItemsListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    NgOptimizedImage ,
    HttpClientModule ,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
