"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var about_component_1 = require("./about/about.component");
var my_profile_component_1 = require("./my-profile/my-profile.component");
var dashboard_service_1 = require("../dashboard.service");
var projects_component_1 = require("./projects/projects.component");
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            declarations: [
                dashboard_component_1.DashboardComponent,
                about_component_1.AboutComponent,
                my_profile_component_1.MyProfileComponent,
                projects_component_1.ProjectsComponent
            ],
            imports: [
                common_1.CommonModule
            ],
            exports: [dashboard_component_1.DashboardComponent, my_profile_component_1.MyProfileComponent, about_component_1.AboutComponent, projects_component_1.ProjectsComponent],
            providers: [dashboard_service_1.DashboardService]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
