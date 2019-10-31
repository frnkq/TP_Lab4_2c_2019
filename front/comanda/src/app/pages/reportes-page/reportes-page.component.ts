import { Component, OnInit, Input, Output } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ComandaService } from 'src/app/services/comanda.service';
@Component({
  selector: 'app-reportes-page',
  templateUrl: './reportes-page.component.html',
  styleUrls: ['./reportes-page.component.scss']
})
export class ReportesPageComponent implements OnInit {
  @Output() empleados;
  constructor(private comandaService: ComandaService) { 
    this.empleados = [];
  }
  
  ngOnInit() {
    if(!environment.production)
      this.GetEmployees();
    else
      this.GetEmployeesOffline();
  }

  GetEmployees()
  {
    let that = this;
    this.comandaService.GetEmpleados().subscribe({
      next: function(empleados){that.empleados = empleados; console.log(empleados)},
      error: function(error){},
      complete: ()=>{}
    });
  }

  GetEmployeesOffline()
  {
    return [];
  }
}
