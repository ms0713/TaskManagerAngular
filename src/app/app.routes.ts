import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './admin/about/about.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './admin/projects/projects.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent,
        canActivate:[authGuard],
        data:{
            expectedRole:"Admin"
        }
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'projects',
        component:ProjectsComponent,
        canActivate:[authGuard],
        data:{
            expectedRole:"Admin"
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
