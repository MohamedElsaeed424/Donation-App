import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  {path:'', redirectTo: '/auth', pathMatch: 'full'} ,
  {path: 'auth', component : AuthComponent , children:[
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: LoginComponent}
    ]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
