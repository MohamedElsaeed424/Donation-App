import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path:'', redirectTo: '/auth/login', pathMatch: 'full'} ,
  {path: 'auth' , children:[
      {path: 'signup', component: SignUpComponent},
      {path: 'login', component: LoginComponent}
    ]
  }, {path : 'Dashboard' , component : DashboardComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
