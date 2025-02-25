import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuth = localStorage.getItem('user') != null;
  if(!isAuth){
    router.navigate(['login'])
  }
  return isAuth;
};
