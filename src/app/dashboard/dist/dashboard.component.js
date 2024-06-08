"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.designation = "";
        this.username = "";
        this.noOfTeamMembers = 0;
        this.totalCostOfAllProjects = 0;
        this.pendingTasks = 0;
        this.upComingProjects = 0;
        this.projectCost = 0;
        this.currentExpenditure = 0;
        this.availableFunds = 0;
        this.clients = [];
        this.projects = [];
        this.years = [];
        this.teamMembersSummary = [];
        this.teamMembers = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.designation = 'Team Leader';
        this.username = 'Scott Smith';
        this.noOfTeamMembers = 67;
        this.totalCostOfAllProjects = 240;
        this.pendingTasks = 15;
        this.upComingProjects = 2;
        this.projectCost = 2113507;
        this.currentExpenditure = 96788;
        this.availableFunds = 52536;
        this.clients = [
            "ABC Infotech Ltd", "DEF Software Solutions", "GHI Industries"
        ];
        this.projects = [
            "ProjectA", "ProjectB", "ProjectC", "ProjectD"
        ];
        for (var index = 2024; index > 2020; index--) {
            this.years.push(index);
        }
        this.teamMembersSummary = [
            {
                Region: 'East',
                TeamMembersCount: 20,
                TemporarilyUnavailableMembers: 4
            },
            {
                Region: 'West',
                TeamMembersCount: 15,
                TemporarilyUnavailableMembers: 8
            },
            {
                Region: 'South',
                TeamMembersCount: 17,
                TemporarilyUnavailableMembers: 1
            },
            {
                Region: 'North',
                TeamMembersCount: 15,
                TemporarilyUnavailableMembers: 6
            },
        ];
        this.teamMembers = [
            {
                Region: 'East',
                Members: [
                    { ID: 1, Name: 'Ford', Status: 'Available' },
                    { ID: 2, Name: 'Miller', Status: 'Available' },
                    { ID: 3, Name: 'Jones', Status: 'Busy' },
                    { ID: 4, Name: 'James', Status: 'Busy' },
                ]
            },
            {
                Region: 'West',
                Members: [
                    { ID: 5, Name: 'Anna', Status: 'Available' },
                    { ID: 6, Name: 'Arun', Status: 'Available' },
                    { ID: 7, Name: 'Varun', Status: 'Busy' },
                    { ID: 8, Name: 'Jasmine', Status: 'Busy' },
                ]
            },
            {
                Region: 'South',
                Members: [
                    { ID: 9, Name: 'Krishna', Status: 'Available' },
                    { ID: 10, Name: 'Mohan', Status: 'Available' },
                    { ID: 11, Name: 'Raju', Status: 'Busy' },
                    { ID: 12, Name: 'Farooq', Status: 'Busy' },
                ]
            },
            {
                Region: 'North',
                Members: [
                    { ID: 13, Name: 'Jacob', Status: 'Available' },
                    { ID: 14, Name: 'Smith', Status: 'Available' },
                    { ID: 15, Name: 'Jones', Status: 'Busy' },
                    { ID: 16, Name: 'James', Status: 'Busy' },
                ]
            },
        ];
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            standalone: true,
            imports: [common_1.CommonModule],
            templateUrl: './dashboard.component.html',
            styleUrl: './dashboard.component.scss'
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
