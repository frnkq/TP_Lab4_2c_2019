import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { typeSourceSpan } from '@angular/compiler';

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
        beer: "listados/cerveza",
        bar: "listados/bar",
        mozos: "listados/mozos",
        user: "listados/empleado",
      },
    },
    orders: "pedidos"
  }
  constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) { }
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
  public GetEmpleados() {
    let token = this.jwtHelperService.tokenGetter();
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

  /* PEDIDOS */
  public ListOrders() {
    let token = this.jwtHelperService.tokenGetter();
    let endpoint = this.host + this.endpoints.orders;
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

  public ListOrder(type: string, id: string)
  {
    let token = this.jwtHelperService.tokenGetter();
    let endpoint = this.host + "pedidos/"+type+"/"+id;
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


  /* LISTADOS */
  public ListOperations(list?: string, employee?: string) {
    console.log("listing ", { list: list, employee: employee });
    let token = this.jwtHelperService.tokenGetter();
    switch (list) {
      case "default":
      case "Cocina":
        return this.ListKitchenOperations(token, employee);
      case "Cerveza":
        return this.ListBeerOperations(token, employee);
      case "Bar":
        return this.ListBarOperations(token, employee);
      case "Mozos":
        return this.ListMozosOperations(token, employee);
      case "Usuario":
        return this.ListUserOperations(token, employee);

    }
    return this.ListKitchenOperations(token, employee);
  }
  private ListKitchenOperations(token: string, employee?: string) {
    let endpoint = this.host + this.endpoints.admin.lists.kitchen;
    endpoint = employee ? endpoint + "/" + employee : endpoint;
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

  private ListBeerOperations(token: string, employee?: string) {
    let endpoint = this.host + this.endpoints.admin.lists.beer;
    endpoint = employee ? endpoint + "/" + employee : endpoint;
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

  private ListBarOperations(token: string, employee?: string) {
    let endpoint = this.host + this.endpoints.admin.lists.bar;
    endpoint = employee ? endpoint + "/" + employee : endpoint;
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

  private ListMozosOperations(token: string, employee?: string) {
    let endpoint = this.host + this.endpoints.admin.lists.mozos;
    endpoint = employee ? endpoint + "/" + employee : endpoint;
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

  private ListUserOperations(token: string, employee?: string) {
    if (!employee)
      return this.ListOperations();


    let endpoint = this.host + this.endpoints.admin.lists.mozos;
    endpoint = employee ? endpoint + "/" + employee : endpoint;
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
