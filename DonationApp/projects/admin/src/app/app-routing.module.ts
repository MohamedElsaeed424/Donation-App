import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Dashboard} from "./home-page/Dashboard";
import {LoginComponent} from "./login/login.component" ;
const routes: Routes = [
  {path: '' , component: LoginComponent} ,
  {path:'Dashboard' , component:Dashboard}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
