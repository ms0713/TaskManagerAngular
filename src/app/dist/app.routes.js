"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = exports.routes = void 0;
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./admin/dashboard/dashboard.component");
var about_component_1 = require("./admin/about/about.component");
var core_1 = require("@angular/core");
var projects_component_1 = require("./admin/projects/projects.component");
var login_component_1 = require("./login/login.component");
var auth_guard_1 = require("./auth.guard");
exports.routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [auth_guard_1.authGuard],
        data: {
            expectedRole: "Admin"
        }
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'projects',
        component: projects_component_1.ProjectsComponent,
        canActivate: [auth_guard_1.authGuard],
        data: {
            expectedRole: "Admin"
        }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(exports.routes, { useHash: true })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
