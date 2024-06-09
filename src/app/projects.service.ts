import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService 
{
  urlPrefix: string = "http://localhost:5219"; 

  constructor(private httpClient : HttpClient) 
  {

  }

  getAllProjects() : Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(this.urlPrefix + "/api/projects");
  }

  insertProject(newProject : Project) : Observable<Project>
  {
    return this.httpClient.post<Project>(this.urlPrefix + "/api/projects", newProject);
  }

  updateProject(existingProject : Project) : Observable<Project>
  {
    return this.httpClient.put<Project>(this.urlPrefix + "/api/projects", existingProject);
  }
  deleteProject(projectId : number) : Observable<string>
  {
    return this.httpClient.delete<string>(this.urlPrefix + "/api/projects?projectId=" + projectId);
  }

  
  SearchProjects(searchBy: string, searchText: string): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(
      this.urlPrefix + '/api/projects/search/?searchBy=' + searchBy + '&searchText=' + searchText,
      { responseType: 'json' }
    );
  }
}
