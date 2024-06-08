import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './admin/about/about.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './admin/projects/projects.component';

export const routes: Routes = [
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'projects',
        component:ProjectsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
