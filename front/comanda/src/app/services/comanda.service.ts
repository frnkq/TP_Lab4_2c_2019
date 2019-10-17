import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {
  host = "http://comandapi.francocanevali.com/";
  endpoints = {
    auth: {
      login: "auth/login"
    }
  }
  constructor(private http: HttpClient) { }

  public Login(username: string, password: string): Observable<any>
  {
    let endpoint = this.host+this.endpoints.auth.login;
    console.log("endpoint: ", endpoint);
     let header = new HttpHeaders();
    header.set("Access-Control-Allow-Origin", "*");
    return this.http.post(endpoint,
       JSON.stringify({username: username, password:password}),
       {
         responseType: 'text',
        headers: header
        }
       ); 
  }
}
