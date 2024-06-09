"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectsService = void 0;
var core_1 = require("@angular/core");
var ProjectsService = /** @class */ (function () {
    function ProjectsService(httpClient) {
        this.httpClient = httpClient;
        this.urlPrefix = "http://localhost:5219";
    }
    ProjectsService.prototype.getAllProjects = function () {
        return this.httpClient.get(this.urlPrefix + "/api/projects");
    };
    ProjectsService.prototype.insertProject = function (newProject) {
        return this.httpClient.post(this.urlPrefix + "/api/projects", newProject);
    };
    ProjectsService.prototype.updateProject = function (existingProject) {
        return this.httpClient.put(this.urlPrefix + "/api/projects", existingProject);
    };
    ProjectsService.prototype.deleteProject = function (projectId) {
        return this.httpClient["delete"](this.urlPrefix + "/api/projects?projectId=" + projectId);
    };
    ProjectsService.prototype.SearchProjects = function (searchBy, searchText) {
        return this.httpClient.get(this.urlPrefix + '/api/projects/search/?searchBy=' + searchBy + '&searchText=' + searchText, { responseType: 'json' });
    };
    ProjectsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProjectsService);
    return ProjectsService;
}());
exports.ProjectsService = ProjectsService;
