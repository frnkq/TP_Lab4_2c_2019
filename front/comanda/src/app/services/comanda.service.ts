import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {
  endpoint = "http://google.com";
  constructor(private http: HttpClient) { }

  public Login(username: string, password: string): Observable<any>
  {
    return this.http.post(this.endpoint, {});
  }
}
