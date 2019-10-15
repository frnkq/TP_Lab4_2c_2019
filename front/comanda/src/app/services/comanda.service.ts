import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {
  host = "http://localhost:8080/";
  endpoints = {
    auth: {
      login: "auth/login"
    }
  }
  constructor(private http: HttpClient) { }

  public Login(username: string, password: string): Observable<any>
  {
    let endpoint = this.host+this.endpoints.auth.login;
    return this.http.post(endpoint,
       JSON.stringify({username: username, password:password}),
       {responseType: 'text'}
       ); 
  }
}
