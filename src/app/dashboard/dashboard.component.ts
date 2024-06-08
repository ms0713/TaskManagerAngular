import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  designation: string = "";
  username: string = "";
  noOfTeamMembers: number = 0;
  totalCostOfAllProjects: number = 0;
  pendingTasks: number = 0;
  upComingProjects: number = 0;
  projectCost: number = 0;
  currentExpenditure: number = 0;
  availableFunds: number = 0;

  clients: string[] = [];
  projects: string[] = [];
  years: number[] = [];
  teamMembersSummary: any = [];
  teamMembers: any = [];

  ngOnInit()
  {
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

    this.projects=[
      "ProjectA","ProjectB","ProjectC","ProjectD"
    ];

    for (let index = 2024; index > 2020; index--) 
    {
      this.years.push(index);
    }

    this.teamMembersSummary = [
      {
        Region: 'East',
        TeamMembersCount: 20,
        TemporarilyUnavailableMembers: 4,
      },
      {
        Region: 'West',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 8,
      },
      {
        Region: 'South',
        TeamMembersCount: 17,
        TemporarilyUnavailableMembers: 1,
      },
      {
        Region: 'North',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 6,
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
        ],
      },
      {
        Region: 'West',
        Members: [
          { ID: 5, Name: 'Anna', Status: 'Available' },
          { ID: 6, Name: 'Arun', Status: 'Available' },
          { ID: 7, Name: 'Varun', Status: 'Busy' },
          { ID: 8, Name: 'Jasmine', Status: 'Busy' },
        ],
      },
      {
        Region: 'South',
        Members: [
          { ID: 9, Name: 'Krishna', Status: 'Available' },
          { ID: 10, Name: 'Mohan', Status: 'Available' },
          { ID: 11, Name: 'Raju', Status: 'Busy' },
          { ID: 12, Name: 'Farooq', Status: 'Busy' },
        ],
      },
      {
        Region: 'North',
        Members: [
          { ID: 13, Name: 'Jacob', Status: 'Available' },
          { ID: 14, Name: 'Smith', Status: 'Available' },
          { ID: 15, Name: 'Jones', Status: 'Busy' },
          { ID: 16, Name: 'James', Status: 'Busy' },
        ],
      },
    ];
  }

}
