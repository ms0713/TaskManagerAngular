import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    // var httpHeader = new HttpHeaders();
    // httpHeader = httpHeader.set("Authorization","Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjZlZmE5ODQxLTBiMjktNDdjNS04OGZmLTdhZDIwNjJkYWE4NyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNzE4MjYxMTQ4LCJleHAiOjE3MTgyODk5NDgsImlhdCI6MTcxODI2MTE0OH0.1XJUTMPdU6j0LzNWIHcbERXkcoM66Ag7aLRLcFxkHp4");
    // console.log(httpHeader);
    return this.httpClient.get<Project[]>(this.urlPrefix + "/api/projects", { responseType:'json'});
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
