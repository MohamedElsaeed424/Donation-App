import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {AuthComponent} from "./auth/auth.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {RequestedItemsListComponent} from "./requested-items/requested-items-list/requested-items-list.component";
import {RequestedItemComponent} from "./requested-items/requested-items-list/requested-item/requested-item.component";

const routes: Routes = [
  {path:'',  redirectTo:'/requested-items',pathMatch : 'full'} ,
  {path: 'auth', component : AuthComponent , children:[
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignUpComponent},
    ]
  },
  {path: 'requested-items',component : RequestedItemsListComponent , children:[
      {path: 'requested-item/:id', component: RequestedItemComponent},
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
