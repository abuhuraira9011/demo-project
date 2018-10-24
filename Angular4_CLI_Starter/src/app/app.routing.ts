import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts

import { FullLayoutComponent } from './layouts/full-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout.component';

import { LoginComponent } from './component/auth/login/login.component';
import { ForgetPasswordComponent } from './component/auth/forget-password/forget-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AuthLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path:'auth/login',
        component:LoginComponent,
        data:{
          title:'Login'
        }
      },
      {
        path:'auth/forget-password',
        component:ForgetPasswordComponent,
        data:{
          title:'Forget Password'
        }
      },
    ]
  },
  
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
    ]
  }
  

  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
