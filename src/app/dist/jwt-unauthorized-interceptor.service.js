"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JwtUnauthorizedInterceptorService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var JwtUnauthorizedInterceptorService = /** @class */ (function () {
    function JwtUnauthorizedInterceptorService() {
    }
    JwtUnauthorizedInterceptorService.prototype.intercept = function (request, next) {
        return next.handle(request).pipe(rxjs_1.tap(function (event) {
            if (event instanceof http_1.HttpResponse) {
                //do something with response
            }
        }, function (error) {
            if (error instanceof http_1.HttpErrorResponse) {
                if (error.status == 401) {
                    console.log(error);
                    alert("401 UnAuthorized");
                }
            }
        }));
    };
    JwtUnauthorizedInterceptorService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], JwtUnauthorizedInterceptorService);
    return JwtUnauthorizedInterceptorService;
}());
exports.JwtUnauthorizedInterceptorService = JwtUnauthorizedInterceptorService;
