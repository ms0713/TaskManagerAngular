"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var login_view_model_1 = require("../login-view-model");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.loginViewModel = new login_view_model_1.LoginViewModel();
        this.loginError = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginClick = function (event) {
        var _this = this;
        this.loginService.Login(this.loginViewModel).subscribe((function (response) {
            _this.router.navigateByUrl("/dashboard");
        }), (function (error) {
            console.log(error);
            _this.loginError = "Invalid Username or Password";
        }));
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            standalone: true,
            imports: [common_1.CommonModule, forms_1.FormsModule],
            templateUrl: './login.component.html',
            styleUrl: './login.component.scss'
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
