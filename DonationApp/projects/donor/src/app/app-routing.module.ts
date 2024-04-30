// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { AuthComponent } from "./auth/auth.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { RequestedItemsListComponent } from "./requested-items/requested-items-list/requested-items-list.component";
import { RequestedItemComponent } from "./requested-items/requested-items-list/requested-item/requested-item.component";
import { RequestBodyComponent } from "./request-body/request-body.component";
import { AuthGuard } from './auth/auth.guard'; // Import the AuthGuard

const routes: Routes = [
  { path:'',  redirectTo:'/requested-items', pathMatch : 'full' },
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
    component: RequestedItemsListComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'requested-item/:id', component: RequestedItemComponent },
    ]
  },
  { path:'send-request/:itemId', component: RequestBodyComponent },
  { path: '**', redirectTo: '/requested-items' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
