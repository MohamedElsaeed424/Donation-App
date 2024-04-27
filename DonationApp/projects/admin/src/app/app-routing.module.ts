import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component" ;
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
const routes: Routes = [
  // { path: '**',  redirectTo:'pageNotFound' ,component:ErrorComponent } ,
  {path: '', redirectTo: 'login', pathMatch: 'full'} ,
  {path: 'login' , component: LoginComponent} ,
  {path:'Dashboard' , component:DashboardComponent} ,
  {path:'changePassword' , component : ChangePasswordComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
