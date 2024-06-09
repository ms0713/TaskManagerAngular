import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../project';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit
{
  projects: Project[];
  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: any = null;
  deleteProject: Project = new Project();
  deleteIndex: any = null;
  searchBy: string = 'Name';
  searchText: string = '';

  constructor(private projectsService : ProjectsService) 
  {
    
  }

  ngOnInit() 
  {
    this.projectsService.getAllProjects().subscribe(
      (response: Project[]) => 
        {
          this.projects = response;
        }
    );
  }

  onSaveClick()
  {
    //console.log('New project data:', this.testStr);

    this.projectsService.insertProject(this.newProject).subscribe((response) => {
      //Add Project to Grid
      var p: Project = new Project();
      p.id = response.id;
      p.name = response.name;
      p.dateOfStart = response.dateOfStart;
      p.teamSize = response.teamSize;
      this.projects.push(p);

      //Clear New Project Dialog - TextBoxes
      this.newProject.id = null;
      this.newProject.name = null;
      this.newProject.dateOfStart = null;
      this.newProject.teamSize = null;
    }, (error) => {
      console.log(error);
    });
  }

  onEditClick(event: any, index: number)
  {
    this.editProject.id = this.projects[index].id;
    this.editProject.name = this.projects[index].name;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
  }

  onUpdateClick()
  {
    this.projectsService.updateProject(this.editProject).subscribe(
      (response: Project) =>
      {
        var p: Project = new Project();
        p.id = response.id;
        p.name = response.name;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects[this.editIndex] = p;

        this.editProject.id = null;
        this.editProject.name = null;
        this.editProject.dateOfStart = null;
        this.editProject.teamSize = null;
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }

  onDeleteClick(event: any, index: number)
  {
    this.deleteIndex = index;
    this.deleteProject.id = this.projects[index].id;
    this.deleteProject.name = this.projects[index].name;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
    this.deleteProject.teamSize = this.projects[index].teamSize;
  }

  onDeleteConfirmClick()
  {
    this.projectsService.deleteProject(this.deleteProject.id).subscribe(
      (response) =>
      {
        this.projects.splice(this.deleteIndex, 1);
        this.deleteProject.id = null;
        this.deleteProject.name = null;
        this.deleteProject.teamSize = null;
        this.deleteProject.dateOfStart = null;
      },
      (error) =>
      {
        console.log(error);
      });
  }

  onSearchClick()
  {
    this.projectsService
      .SearchProjects(this.searchBy, this.searchText)
      .subscribe(
        (response: Project[]) =>
        {
          this.projects = response;
        },
        (error) =>
        {
          console.log(error);
        }
      );
  }
}
