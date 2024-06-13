import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginService } from './login.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => 
{
  console.log('Inside intercept method');
    var currentUser = { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjZlZmE5ODQxLTBiMjktNDdjNS04OGZmLTdhZDIwNjJkYWE4NyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNzE4MjYxMTQ4LCJleHAiOjE3MTgyODk5NDgsImlhdCI6MTcxODI2MTE0OH0.1XJUTMPdU6j0LzNWIHcbERXkcoM66Ag7aLRLcFxkHp4" };

    // //const loginService = inject(LoginService);
    // //var user:any = loginService.GetToken();

    // var user : any = localStorage.getItem('currentUser');
    // if (user != null)
    // {
    //   console.log(user);
    //   currentUser = JSON.parse(user);
    // }

    req = req.clone({
      setHeaders: {
        Authorization: "Bearer " + currentUser.token
      }}
    );

  return next(req);
};
