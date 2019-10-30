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
      login: "auth/login",
      register: "auth/register"
    },
    admin: {
      getEmployees: "admin/empleados/",
      suspendEmployee: "admin/empleados/suspender",
      unSuspendemployee: "admin/empleados/dessuspender",
      lists: {
        kitchen: "listados/cocina",
      }
    },
  }
  constructor(private http: HttpClient) { }
  /**AUTH */
  public Login(username: string, password: string): Observable<any> {
    let endpoint = this.host + this.endpoints.auth.login;
    console.log("endpoint: ", endpoint);
    let header = new HttpHeaders();
    header.set("Access-Control-Allow-Origin", "*");
    return this.http.post(endpoint,
      JSON.stringify({ username: username, password: password }),
      {
        responseType: 'text',
        headers: header
      }
    );
  }

  public Register(username: string, password: string): Observable<any> {
    let endpoint = this.host + this.endpoints.auth.register;
    console.log("hitting: ", endpoint);
    let header = new HttpHeaders();
    header.set("Access-Control-Allow-Origin", "*");

    return this.http.post(
      endpoint,
      JSON.stringify({ username: username, password: password }),
      {
        responseType: 'text',
        headers: header
      }
    );
  }

  /**EMPLOYEES */
  public GetEmpleados(token: string) {
    let endpoint = this.host + this.endpoints.admin.getEmployees;
    let header = new HttpHeaders();
    header = header.set("Access-Control-Allow-Origin", "*");
    header = header.append("token", token);
    return this.http.get(
      endpoint,
      {
        headers: header,
        responseType: "json"
      }
    );
  }

  public SuspendEmployee(token: string, employeeId: string) {
    let endpoint = this.host + this.endpoints.admin.suspendEmployee;
    let header = new HttpHeaders();
    header = header.set("Access-Control-Allow-Origin", "*");
    header = header.append("token", token);
    return this.http.post(
      endpoint,
      {
        username: employeeId
      },
      {
        headers: header,
        responseType: "json"
      }
    );
  }

  public UnsuspendEmployee(token: string, employeeId: string) {
    let endpoint = this.host + this.endpoints.admin.unSuspendemployee;
    let header = new HttpHeaders();
    header = header.set("Access-Control-Allow-Origin", "*");
    header = header.append("token", token);
    return this.http.post(
      endpoint,
      {
        username: employeeId
      },
      {
        headers: header,
        responseType: "json"
      }
    );
  }

  /* LISTADOS */
  public ListOperations(token: string, list: string, employee? :string)
  {
    switch(list)
    {
      case "kitchen":
        return this.ListKitchenOperations(token, employee);
      
    }
  }

  public ListKitchenOperations(token: string, employee?: string) {
    let endpoint = this.host + this.endpoints.admin.lists.kitchen;
    endpoint = employee ? endpoint+"/"+employee : endpoint;
    let header = new HttpHeaders();
    header = header.set("Access-Control-Allow-Origin", "*");
    header = header.append("token", token);
    return this.http.get(
      endpoint,
      {
        headers: header,
        responseType: "json"
      }
    );

  }
}
