import { Component, OnInit, Output } from '@angular/core';
import { ComandaService } from 'src/app/services/comanda.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from '../../../environments/environment';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-empleados-page',
  templateUrl: './empleados-page.component.html',
  styleUrls: ['./empleados-page.component.scss']
})
export class EmpleadosPageComponent implements OnInit
{
  @Output() empleados: any;
  users: any;
  showingSpinner: boolean;
  constructor(private comandaService: ComandaService,
    private jwtHelper: JwtHelperService,
    private localStorage: LocalStorageService,
  ) { }

  ngOnInit()
  {
    // if (environment.production)
    //   this.GetAllEmployees();
    // else
    //   this.GetAllEmployeesOffline();

    this.GetAllEmployees();
  }

  GetAllEmployees()
  {
    let token = this.jwtHelper.tokenGetter();
    this.showingSpinner = true;
    let that = this;
    this.comandaService.GetEmpleados().subscribe({
      next: function (response) { that.empleados = response; console.log(response) },
      complete: () => { this.showingSpinner = false }
    });

  }

  Pdf()
  {
    var data = document.getElementById('tablaEmpleados');
    this.showingSpinner = true;
    html2canvas(data).then(canvas =>
    {
      // Few necessary setting options  
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      //let pdf = new jsPDF(); // A4 size page of PDF  
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('Empleados.pdf'); // Generated PDF   
      this.showingSpinner = false;
    });
  }
  GetAllEmployeesOffline()
  {
    console.log("getting empleados offline");
    this.empleados = [
      {
        "id": 1,
        "dni": "39774900",
        "nombre": "franco",
        "apellido": "canevali",
        "username": "fcanevali900",
        "role": "socio",
        "image": null,
        "horario": null
      },
      {
        "id": 2,
        "dni": "39774902",
        "nombre": "Jorge",
        "apellido": "Alberto",
        "username": "jalberto902",
        "role": "mozo",
        "image": null,
        "horario": null
      },
      {
        "id": 3,
        "dni": "39774903",
        "nombre": "Juan",
        "apellido": "Perez",
        "username": "jperez903",
        "role": "mozo",
        "image": null,
        "horario": null
      },
      {
        "id": 4,
        "dni": "39774904",
        "nombre": "Estban",
        "apellido": "Quito",
        "username": "equito904",
        "role": "bartender",
        "image": null,
        "horario": null
      },
      {
        "id": 5,
        "dni": "39774905",
        "nombre": "Mariano",
        "apellido": "Rizzo",
        "username": "mrizzo905",
        "role": "bartender",
        "image": null,
        "horario": null
      },
      {
        "id": 6,
        "dni": "39774906",
        "nombre": "Pablo",
        "apellido": "Salde",
        "username": "psalde906",
        "role": "cocinero",
        "image": null,
        "horario": null
      },
      {
        "id": 7,
        "dni": "39774907",
        "nombre": "Ezequiel",
        "apellido": "Gonzalez",
        "username": "egonzalez907",
        "role": "cocinero",
        "image": null,
        "horario": null
      },
      {
        "id": 8,
        "dni": "39774908",
        "nombre": "Alejo",
        "apellido": "Ruiz",
        "username": "aruiz908",
        "role": "cervecero",
        "image": null,
        "horario": null
      },
      {
        "id": 9,
        "dni": "39774909",
        "nombre": "Matias",
        "apellido": "Hacha",
        "username": "mhacha909",
        "role": "cervecero",
        "image": null,
        "horario": null
      }
    ]
  }
}
