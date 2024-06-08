"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectsComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectsService) {
        this.projectsService = projectsService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectsService.getAllProjects().subscribe(function (response) {
            _this.projects = response;
        });
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'app-projects',
            standalone: true,
            imports: [common_1.CommonModule],
            templateUrl: './projects.component.html',
            styleUrl: './projects.component.scss'
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
