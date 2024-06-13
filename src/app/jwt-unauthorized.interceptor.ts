import { HttpErrorResponse, HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';

export const jwtUnauthorizedInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(tap(

    (event: HttpEvent<any>) =>
    {
      if (event instanceof HttpResponse)
      {
        //do something with response
      }
    },

    (error: any) =>
    {
      if (error instanceof HttpErrorResponse)
      {
        if (error.status == 401)
        {
          console.log(error);
          alert("401 UnAuthorized");
        }
      }
    }

  ));
};
