import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => 
{
  const loginService = inject(LoginService);
  const router = inject(Router);

  console.log(router.url);
    if (loginService.isAuthenticated())
    {
      return true; //the user can navigate to the particular route
    }
    else
    {
      router.navigate([ "login" ]);
      return false; //the user can't navigate to the particular route
    }
  return true;
};
