import { Component, OnInit, Input } from '@angular/core';
import { EmpleadosPageComponent } from 'src/app/pages/empleados-page/empleados-page.component';
import { ComandaService } from 'src/app/services/comanda.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-empleados-listado',
  templateUrl: './empleados-listado.component.html',
  styleUrls: ['./empleados-listado.component.scss']
})
export class EmpleadosListadoComponent implements OnInit {
  @Input() empleados: any;
  cols: any[];
  constructor(private comandaService: ComandaService, private jwtHelper: JwtHelperService) {
    this.empleados = [];
  }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: "#" },
      { field: 'username', header: "Usuario" },
      { field: 'role', header: "Puesto" },
      { field: 'nombre', header: "Nombre" },
      { field: 'apellido', header: "Apellido" },
      { field: 'dni', header: "DNI" }
    ]

    this.cols.forEach((col) => { this.SortBy(col.field) });
  }

  SortBy(parameter) {

    let filters = {
      id: false,
      username:false,
      role: false,
      nombre: false,
      apellido: false,
      dni: false
    };
    if (sessionStorage.getItem("filters"))
      filters = JSON.parse(sessionStorage.getItem("filters"));

    switch (parameter) {
      case 'id':
        this.empleados = this.empleados.sort(function (a, b) {
          return filters.id ? a.id - b.id : a.id + b.id;
        });
        filters.id = filters.id ? true : false;
        break;
      case 'username':
        this.empleados = this.empleados.sort(function (a, b) {
          return filters.username ? a.username > b.username : a.username < b.username;
        });
        filters.username = filters.username ? false : true;
        break;
      case 'role':
        this.empleados = this.empleados.sort(function (a, b) {
          return filters.role ? a.role > b.role : a.role < b.role;
        });
        filters.role = filters.role ? false : true;
        break;
      case 'nombre':
        this.empleados = this.empleados.sort(function (a, b) {
          return filters.nombre ? a.nombre > b.nombre : a.nombre < b.nombre;
        });
        filters.nombre = filters.nombre ? false : true;
        break;
      case 'apellido':
        this.empleados = this.empleados.sort(function (a, b) {
          return filters.apellido ? a.apellido > b.apellido : a.apellido < b.apellido;
        });
        filters.apellido = filters.apellido ? false : true;
        break;
      case 'dni':
        this.empleados = this.empleados.sort(function (a, b) {
          return filters.dni ? a.dni > b.dni : a.dni < b.dni;
        });
        filters.dni = filters.dni ? false : true;
        break;
    }
    sessionStorage.setItem("filters", JSON.stringify(filters));
  }

  Suspender(id)
  {
    this.comandaService.SuspendEmployee(this.jwtHelper.tokenGetter(), id).subscribe({
      next: function(response){console.log(response)}
    })
  }
  Reactivar(id)
  {
    this.comandaService.UnsuspendEmployee(this.jwtHelper.tokenGetter(), id).subscribe({
      next: function(response){console.log(response)}
    })
  }
}