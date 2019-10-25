import { Component, OnInit, Output } from '@angular/core';
import { ComandaService } from 'src/app/services/comanda.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-empleados-page',
  templateUrl: './empleados-page.component.html',
  styleUrls: ['./empleados-page.component.scss']
})
export class EmpleadosPageComponent implements OnInit {
  @Output() empleados: any;
  showingSpinner: boolean;
  constructor(private comandaService: ComandaService,
    private jwtHelper: JwtHelperService) { }

  ngOnInit() {
    this.GetAllEmployees();
  }

  GetAllEmployees()
  {
    let token = this.jwtHelper.tokenGetter();
    this.showingSpinner = true;
    let that = this;
    this.comandaService.GetEmpleados(token).subscribe({
      next: function(response){that.empleados = response;console.log(response)},
      complete: ()=>{this.showingSpinner = false}
    });
  }
}
