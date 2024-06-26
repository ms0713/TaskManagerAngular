"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var admin_module_1 = require("./admin/admin.module");
var forms_1 = require("@angular/forms");
var login_component_1 = require("./login/login.component");
var common_1 = require("@angular/common");
//import { JwtInterceptorService } from './jwt-interceptor.service';
//import { JwtUnauthorizedInterceptorService } from './jwt-unauthorized-interceptor.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent
                // other components go here
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.AppRoutingModule,
                admin_module_1.AdminModule,
                forms_1.FormsModule,
                common_1.CommonModule
                // other modules go here
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
