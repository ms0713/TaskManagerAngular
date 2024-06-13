"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
//import { JwtHelperService } from '@auth0/angular-jwt';
var LoginService = /** @class */ (function () {
    function LoginService(httpBackend) {
        this.httpBackend = httpBackend;
        this.httpClient = null;
        this.urlPrefix = "http://localhost:5219"; //make this as empty ("") if you are using asp.net core [without CORS]
        this.currentUserName = null;
    }
    LoginService.prototype.Login = function (loginViewModel) {
        var _this = this;
        this.httpClient = new http_1.HttpClient(this.httpBackend);
        return this.httpClient.post(this.urlPrefix + "/authenticate", loginViewModel, { responseType: "json", observe: "response" })
            .pipe(rxjs_1.map(function (response) {
            if (response) {
                _this.currentUserName = response.body.userName;
                localStorage.setItem('currentUser', JSON.stringify(response.body));
                //sessionStorage['XSRFRequestToken'] = response.headers.get("XSRF-REQUEST-TOKEN");
            }
            return response.body;
        }));
    };
    LoginService.prototype.Logout = function () {
        localStorage.removeItem('currentUser');
        this.currentUserName = null;
    };
    LoginService.prototype.isAuthenticated = function () {
        var token = "null";
        //var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") as any).token : null;
        //if (this.jwtHelperService.isTokenExpired())
        if (token == null) {
            return false; //token is not valid
        }
        else {
            return true; //token is valid
        }
    };
    LoginService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
