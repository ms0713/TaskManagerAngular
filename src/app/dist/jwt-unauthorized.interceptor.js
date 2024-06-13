"use strict";
exports.__esModule = true;
exports.jwtUnauthorizedInterceptor = void 0;
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
exports.jwtUnauthorizedInterceptor = function (req, next) {
    return next(req).pipe(rxjs_1.tap(function (event) {
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
