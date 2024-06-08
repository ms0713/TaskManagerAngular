import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit
{
  projects: Project[];

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

}
