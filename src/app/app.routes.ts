import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'about',
        component:AboutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
