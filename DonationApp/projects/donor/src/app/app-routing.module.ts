// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { AuthComponent } from "./auth/auth.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { RequestedItemComponent } from "./requested-items/requested-item/requested-item.component";
import { AuthGuard } from './auth/auth.guard';
import { RequestedItemDetailsComponent} from "./requested-items/requested-item/requested-item-details/requested-item-details.component";
import {RequestedItemsComponent} from "./requested-items/requested-items.component";
import {RequestedItemsListComponent} from "./requested-items/requested-items-list/requested-items-list.component";
import {RequestedItemCategoryComponent} from "./requested-items/categories/requested-item-category/requested-item-category.component";
import {TeachingPostComponent} from "./teaching-posts/teaching-post/teaching-post.component";
import {TeachingPostsComponent} from "./teaching-posts/teaching-posts.component";
import {TeachingPostsListComponent} from "./teaching-posts/teaching-posts-list/teaching-posts-list.component";
import {
  TeachingPostDetailsComponent
} from "./teaching-posts/teaching-post/teaching-post-details/teaching-post-details.component";
import {MedicalCasesComponent} from "./medical-cases/medical-cases.component";
import {MedicalCasesListComponent} from "./medical-cases/medical-cases-list/medical-cases-list.component";
import {
  MedicalCaseDetailsComponent
} from "./medical-cases/medical-case/medical-case-details/medical-case-details.component"; // Import the AuthGuard

const routes: Routes = [
  { path:'',  redirectTo:'auth/login', pathMatch : 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignUpComponent },
    ]
  },
  {
    path: 'requested-items',
    component : RequestedItemsComponent ,
    canActivate:[AuthGuard] ,
    children: [
      { path: '', component: RequestedItemsListComponent ,canActivate:[AuthGuard]},
      { path: 'requested-item-details/:id', component: RequestedItemDetailsComponent ,canActivate:[AuthGuard] },
      { path: 'requested-item-details/:id/request-to-donate', component: RequestedItemComponent,canActivate: [AuthGuard] },
        { path: 'requested-item-category/:category', component: RequestedItemCategoryComponent,canActivate:[AuthGuard]}
    ]
  },
  {
    path: 'teaching-posts',
    component : TeachingPostsComponent,
    canActivate:[AuthGuard],
    children:[
      { path: '', component: TeachingPostsListComponent,canActivate:[AuthGuard] },
      { path: 'teaching-post-details/:id', component: TeachingPostDetailsComponent,canActivate:[AuthGuard] },
    ]
  },
  {
    path: 'medical-cases',
    component : MedicalCasesComponent,
    canActivate:[AuthGuard],
    children:[
      { path: '', component: MedicalCasesListComponent,canActivate:[AuthGuard] },
      { path: 'medical-case-details/:id', component: MedicalCaseDetailsComponent,canActivate:[AuthGuard] },
    ]
  },
  { path: '**', redirectTo: '/requested-items' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
