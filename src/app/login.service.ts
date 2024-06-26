import { Injectable } from '@angular/core';
import { LoginViewModel } from './login-view-model';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable, map } from 'rxjs';
//import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpClient: HttpClient | null = null;
  urlPrefix: string = "http://localhost:5219"; //make this as empty ("") if you are using asp.net core [without CORS]

  constructor(private httpBackend: HttpBackend)
    //, private jwtHelperService: JwtHelperService)
  {
  }

  currentUserName: any = null;

  public Login(loginViewModel: LoginViewModel): Observable<any>
  {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<any>(this.urlPrefix + "/authenticate", loginViewModel, { responseType: "json", observe: "response" })
      .pipe(map(response =>
      {
        if (response)
        {
          this.currentUserName = response.body.userName;
          localStorage.setItem('currentUser', JSON.stringify(response.body));
          //sessionStorage['XSRFRequestToken'] = response.headers.get("XSRF-REQUEST-TOKEN");
        }
        return response.body;
      }));
  }

  public Logout()
  {
    localStorage.removeItem('currentUser');
    this.currentUserName = null;
  }

  public isAuthenticated() :any
  {
    var token :any= "null";
    //var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") as any).token : null;
    //if (this.jwtHelperService.isTokenExpired())
    if (token == null)
    {
      return false; //token is not valid
    }
    else
    {
      return true; //token is valid
    }
  }
}
