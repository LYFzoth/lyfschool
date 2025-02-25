import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './config/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home-introductionFeatures/home.module').then(m => m.HomeModule)
  },
  // {
  //   path: 'admin-home',
  //   // canActivate:[authGuard],
  //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  // },
  {
    path:'login',
    component:LoginComponent
  }
];
