import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DoctorSignupComponent } from './auth/sign-up/doctor-signup/doctor-signup.component';
import { TeacherSignupComponent } from './auth/sign-up/teacher-signup/teacher-signup.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GoogleMapComponent } from './shared/google-map/google-map.component';
import {GoogleMapsModule} from "@angular/google-maps";
import {NgOptimizedImage} from "@angular/common";
import { FileUploadComponent } from './shared/file-upload/file-upload.component';
import { HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./auth/login/login.component";

import { RequestedItemsComponent } from './requested-items/requested-items.component';

import { RequestedItemComponent } from './requested-items/requested-item/requested-item.component';
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {DropdownDirective} from "./shared/dropdown.directive";
import { RequestedItemDetailsComponent } from './requested-items/requested-item/requested-item-details/requested-item-details.component';
import { RequestedItemsListComponent } from './requested-items/requested-items-list/requested-items-list.component';
import { ClothesDetailsComponent } from './requested-items/requested-item/requested-item-details/clothes-details/clothes-details.component';
import { BooksDetailsComponent } from './requested-items/requested-item/requested-item-details/books-details/books-details.component';
import { SchoolSuppliesDetailsComponent } from './requested-items/requested-item/requested-item-details/school-supplies-details/school-supplies-details.component';
import { ToysDetailsComponent } from './requested-items/requested-item/requested-item-details/toys-details/toys-details.component';
import { FoodDetailsComponent } from './requested-items/requested-item/requested-item-details/food-details/food-details.component';
import { MedicalSuppliesDetailsComponent } from './requested-items/requested-item/requested-item-details/medical-supplies-details/medical-supplies-details.component';
import { BloodDonationDetailsComponent } from './requested-items/requested-item/requested-item-details/blood-donation-details/blood-donation-details.component';
import {CategoryFilterPipe} from "./requested-items/categoryFilter.pipe";
import {RequestedItemCategoryComponent} from "./requested-items/requested-Items-categories/requested-item-category/requested-item-category.component";
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import {
  BloodDonationFilterPipe
} from "./requested-items/requested-Items-categories/requested-item-category/category-filter-pipes/blood-donationFilter.pipe";
import {
  ClothesFilterPipe
} from "./requested-items/requested-Items-categories/requested-item-category/category-filter-pipes/clothesFilter.pipe";
import {
  FoodFilterPipe
} from "./requested-items/requested-Items-categories/requested-item-category/category-filter-pipes/foodFilter.pipe";
import {
  MedicalSupplyFilterPipe
} from "./requested-items/requested-Items-categories/requested-item-category/category-filter-pipes/medical-suppliesFilter.pipe";
import {
  SchoolSuppliesFilterPipe
} from "./requested-items/requested-Items-categories/requested-item-category/category-filter-pipes/school-suppliesFilter.pipe";
import {
  ToyFilterPipe
} from "./requested-items/requested-Items-categories/requested-item-category/category-filter-pipes/toysFilter.pipe";

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
    RequestedItemDetailsComponent,
    RequestedItemsListComponent,
    ClothesDetailsComponent,
    BooksDetailsComponent,
    SchoolSuppliesDetailsComponent,
    ToysDetailsComponent,
    FoodDetailsComponent,
    MedicalSuppliesDetailsComponent,
    BloodDonationDetailsComponent ,
    RequestedItemCategoryComponent,
    SearchBarComponent,
    DropdownDirective,
    CategoryFilterPipe ,
    BloodDonationFilterPipe,
    ClothesFilterPipe,
    FoodFilterPipe,
    MedicalSupplyFilterPipe,
    SchoolSuppliesFilterPipe,
    ToyFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    NgOptimizedImage,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
