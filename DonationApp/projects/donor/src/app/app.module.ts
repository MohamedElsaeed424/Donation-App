import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DoctorSignupComponent } from './auth/sign-up/doctor-signup/doctor-signup.component';
import { TeacherSignupComponent } from './auth/sign-up/teacher-signup/teacher-signup.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {RequestedItemCategoryComponent} from "./requested-items/categories/requested-item-category/requested-item-category.component";
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import {
  BloodDonationItemsCategoryComponent
} from "./requested-items/categories/requested-item-category/blood-donation-items-category/blood-donation-items-category.component";
import {
  BooksItemsCategoryComponent
} from "./requested-items/categories/requested-item-category/books-items-category/books-items-category.component";
import {
  ClothesItemsCategoryComponent
} from "./requested-items/categories/requested-item-category/clothes-items-category/clothes-items-category.component";
import {
  FoodItemsCategoryComponent
} from "./requested-items/categories/requested-item-category/food-items-category/food-items-category.component";
import {
  MedicalSuppliesItemsCategoryComponent
} from "./requested-items/categories/requested-item-category/medical-supplies-items-category/medical-supplies-items-category.component";
import {
  SchoolSuppliesItemsCategoryComponent
} from "./requested-items/categories/requested-item-category/school-supplies-items-category/school-supplies-items-category.component";
import {
  ToysSuppliesItemsCategoryComponent
} from "./requested-items/categories/requested-item-category/toys-supplies-items-category/toys-supplies-items-category.component";
import {
  BloodDonationFilterPipe
} from "./requested-items/categories/category-filter-pipes/blood-donationFilter.pipe";
import {
  ClothesFilterPipe
} from "./requested-items/categories/category-filter-pipes/clothesFilter.pipe";
import {
  FoodFilterPipe
} from "./requested-items/categories/category-filter-pipes/foodFilter.pipe";
import {
  MedicalSupplyFilterPipe
} from "./requested-items/categories/category-filter-pipes/medical-suppliesFilter.pipe";
import {
  SchoolSuppliesFilterPipe
} from "./requested-items/categories/category-filter-pipes/school-suppliesFilter.pipe";
import {
  ToyFilterPipe
} from "./requested-items/categories/category-filter-pipes/toysFilter.pipe";
import {
  BookFilterPipe
} from "./requested-items/categories/category-filter-pipes/booksFilter.pipe";
import { TeachingPostsComponent } from './teaching-posts/teaching-posts.component';
import { TeachingPostComponent } from './teaching-posts/teaching-post/teaching-post.component';
import { TeachingPostsListComponent } from './teaching-posts/teaching-posts-list/teaching-posts-list.component';
import { TeachingPostDetailsComponent } from './teaching-posts/teaching-post/teaching-post-details/teaching-post-details.component';
import {TeachingPostFilterPipe} from "./teaching-posts/teaching-postsFilter.pipe";
import { MedicalCasesComponent } from './medical-cases/medical-cases.component';

import { MedicalCasesListComponent } from './medical-cases/medical-cases-list/medical-cases-list.component';
import { MedicalCaseDetailsComponent } from './medical-cases/medical-case/medical-case-details/medical-case-details.component';
import {MedicalCaseComponent} from "./medical-cases/medical-case/medical-case.component";
import {MedicalCaseFilterPipe} from "./medical-cases/medical-casesFilter.pipe";
import { ManageAccountComponent } from './manage-account/manage-account.component';
import {DonorService} from "./Donors/donors.service";
import { PickUpDetailsComponent } from './requested-items/pick-up-details/pick-up-details.component';
import { EstimatedTimeComponent } from './shared/estimated-time/estimated-time.component';
import {
  RegisteredOrganizationComponent
} from "./Organization/registered-organization/registered-organization.component";
import {OrganizationFilterPipe} from "./Organization/organizationFilter.pipe";
import { FooterComponent } from './shared/footer/footer.component';
import {
  RegisteredOrganizationDetailsComponent
} from "./Organization/registered-organization/registered-organization-details/registered-organization-details.component";
import {NotificationsComponent} from "./shared/notifications/notifications.component";
import { NotificationDetailsComponent } from './shared/notifications/notification-details/notification-details.component';
import {NgbAlertModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ToastrComponent } from './shared/toastr/toastr.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignUpComponent,
    LoginComponent,
    DoctorSignupComponent,
    TeacherSignupComponent,
    FileUploadComponent,
    NavbarComponent,
    RequestedItemsComponent,
    RequestedItemComponent,
    RequestedItemDetailsComponent,
    RequestedItemsListComponent,
    ClothesDetailsComponent,
    BooksDetailsComponent,
    FooterComponent,
    SchoolSuppliesDetailsComponent,
    ToysDetailsComponent,
    FoodDetailsComponent,
    MedicalSuppliesDetailsComponent,
    BloodDonationDetailsComponent ,
    RequestedItemCategoryComponent,
    SearchBarComponent,
    BloodDonationItemsCategoryComponent,
    BooksItemsCategoryComponent,
    ClothesItemsCategoryComponent,
    FoodItemsCategoryComponent,
    MedicalSuppliesItemsCategoryComponent,
    SchoolSuppliesItemsCategoryComponent,
    ToysSuppliesItemsCategoryComponent,
    DropdownDirective,
    CategoryFilterPipe ,
    BloodDonationFilterPipe,
    ClothesFilterPipe,
    FoodFilterPipe,
    MedicalSupplyFilterPipe,
    SchoolSuppliesFilterPipe,
    ToyFilterPipe,
    BookFilterPipe,
    TeachingPostFilterPipe,
    MedicalCaseFilterPipe,
    OrganizationFilterPipe,
    TeachingPostsComponent,
    TeachingPostComponent,
    TeachingPostsListComponent,
    TeachingPostDetailsComponent,
    MedicalCasesComponent,
    MedicalCaseComponent,
    MedicalCasesListComponent,
    MedicalCaseDetailsComponent,
    ManageAccountComponent,
    PickUpDetailsComponent,
    EstimatedTimeComponent,
    RegisteredOrganizationComponent ,
    RegisteredOrganizationDetailsComponent,
    NotificationsComponent,
    NotificationDetailsComponent,
    ToastrComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    NgOptimizedImage,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbAlertModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
