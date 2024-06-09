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
var project_1 = require("../../project");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectsService) {
        this.projectsService = projectsService;
        this.newProject = new project_1.Project();
        this.editProject = new project_1.Project();
        this.editIndex = null;
        this.deleteProject = new project_1.Project();
        this.deleteIndex = null;
        this.searchBy = 'Name';
        this.searchText = '';
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectsService.getAllProjects().subscribe(function (response) {
            _this.projects = response;
        });
    };
    ProjectsComponent.prototype.onSaveClick = function () {
        //console.log('New project data:', this.testStr);
        var _this = this;
        this.projectsService.insertProject(this.newProject).subscribe(function (response) {
            //Add Project to Grid
            var p = new project_1.Project();
            p.id = response.id;
            p.name = response.name;
            p.dateOfStart = response.dateOfStart;
            p.teamSize = response.teamSize;
            _this.projects.push(p);
            //Clear New Project Dialog - TextBoxes
            _this.newProject.id = null;
            _this.newProject.name = null;
            _this.newProject.dateOfStart = null;
            _this.newProject.teamSize = null;
        }, function (error) {
            console.log(error);
        });
    };
    ProjectsComponent.prototype.onEditClick = function (event, index) {
        this.editProject.id = this.projects[index].id;
        this.editProject.name = this.projects[index].name;
        this.editProject.dateOfStart = this.projects[index].dateOfStart;
        this.editProject.teamSize = this.projects[index].teamSize;
        this.editIndex = index;
    };
    ProjectsComponent.prototype.onUpdateClick = function () {
        var _this = this;
        this.projectsService.updateProject(this.editProject).subscribe(function (response) {
            var p = new project_1.Project();
            p.id = response.id;
            p.name = response.name;
            p.dateOfStart = response.dateOfStart;
            p.teamSize = response.teamSize;
            _this.projects[_this.editIndex] = p;
            _this.editProject.id = null;
            _this.editProject.name = null;
            _this.editProject.dateOfStart = null;
            _this.editProject.teamSize = null;
        }, function (error) {
            console.log(error);
        });
    };
    ProjectsComponent.prototype.onDeleteClick = function (event, index) {
        this.deleteIndex = index;
        this.deleteProject.id = this.projects[index].id;
        this.deleteProject.name = this.projects[index].name;
        this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
        this.deleteProject.teamSize = this.projects[index].teamSize;
    };
    ProjectsComponent.prototype.onDeleteConfirmClick = function () {
        var _this = this;
        this.projectsService.deleteProject(this.deleteProject.id).subscribe(function (response) {
            _this.projects.splice(_this.deleteIndex, 1);
            _this.deleteProject.id = null;
            _this.deleteProject.name = null;
            _this.deleteProject.teamSize = null;
            _this.deleteProject.dateOfStart = null;
        }, function (error) {
            console.log(error);
        });
    };
    ProjectsComponent.prototype.onSearchClick = function () {
        var _this = this;
        this.projectsService
            .SearchProjects(this.searchBy, this.searchText)
            .subscribe(function (response) {
            _this.projects = response;
        }, function (error) {
            console.log(error);
        });
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'app-projects',
            standalone: true,
            imports: [common_1.CommonModule, forms_1.FormsModule],
            templateUrl: './projects.component.html',
            styleUrl: './projects.component.scss'
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
