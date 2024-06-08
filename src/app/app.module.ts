import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
    // other components go here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule 
    // other modules go here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
