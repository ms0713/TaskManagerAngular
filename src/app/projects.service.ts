import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient : HttpClient) 
  {

  }

  getAllProjects() : Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("http://localhost:5219/api/projects");
  }

  insertProject(newProject : Project) : Observable<Project>
  {
    return this.httpClient.post<Project>("http://localhost:5219/api/projects", newProject);
  }
}
