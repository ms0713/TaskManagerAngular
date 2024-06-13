"use strict";
exports.__esModule = true;
exports.authGuard = void 0;
var router_1 = require("@angular/router");
var login_service_1 = require("./login.service");
var core_1 = require("@angular/core");
exports.authGuard = function (route, state) {
    var loginService = core_1.inject(login_service_1.LoginService);
    var router = core_1.inject(router_1.Router);
    console.log(router.url);
    if (loginService.isAuthenticated()) {
        return true; //the user can navigate to the particular route
    }
    else {
        router.navigate(["login"]);
        return false; //the user can't navigate to the particular route
    }
    return true;
};
