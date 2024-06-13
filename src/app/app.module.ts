import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
//import { JwtInterceptorService } from './jwt-interceptor.service';
//import { JwtUnauthorizedInterceptorService } from './jwt-unauthorized-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    // other components go here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    CommonModule 
    // other modules go here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
