import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent
    // other components go here
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule 
    // other modules go here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
