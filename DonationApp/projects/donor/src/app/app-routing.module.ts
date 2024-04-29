import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {AuthComponent} from "./auth/auth.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";

const routes: Routes = [
  {path:'', redirectTo: '/auth/signup', pathMatch: 'full'} ,
  {path: 'auth', component : AuthComponent , children:[
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignUpComponent},
    ]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
