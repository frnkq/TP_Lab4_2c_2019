import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empleados-listado',
  templateUrl: './empleados-listado.component.html',
  styleUrls: ['./empleados-listado.component.scss']
})
export class EmpleadosListadoComponent implements OnInit {
  @Input() empleados: any;
  constructor() {
    this.empleados = [];
   }

  ngOnInit() {

  }

}
