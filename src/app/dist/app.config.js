"use strict";
exports.__esModule = true;
exports.appConfig = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var jwt_interceptor_1 = require("./jwt.interceptor");
var jwt_unauthorized_interceptor_1 = require("./jwt-unauthorized.interceptor");
exports.appConfig = {
    providers: [core_1.provideZoneChangeDetection({ eventCoalescing: true }), router_1.provideRouter(app_routes_1.routes), platform_browser_1.provideClientHydration(), http_1.provideHttpClient(http_1.withFetch(), http_1.withInterceptors([jwt_interceptor_1.jwtInterceptor, jwt_unauthorized_interceptor_1.jwtUnauthorizedInterceptor])),]
};
