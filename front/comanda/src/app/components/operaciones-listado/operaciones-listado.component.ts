import { Component, OnInit, Input, Output } from '@angular/core';
import { ComandaService } from 'src/app/services/comanda.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-operaciones-listado',
  templateUrl: './operaciones-listado.component.html',
  styleUrls: ['./operaciones-listado.component.scss']
})
export class OperacionesListadoComponent implements OnInit
{

  message: string = "";
  cols: any[];
  report: string;
  reports:  any;
  operations: any;
  employee: string;
  @Input() empleadosFilter;
  @Input() operationsFilter;
  @Input() empleados: any[];
  constructor(private comandaService: ComandaService, private jwtHelper: JwtHelperService)
  {
    this.report = "kitchen";
    this.reports = ["kitchen", "beer", "bar", "mozos", "/empleado/username"];
    this.empleados = [];
  }

  ngOnInit()
  {
    this.cols = [
      { field: 'fecha', header: "Fecha" },
      { field: 'username', header: "Usuario" },
      { field: 'role', header: "Rol" },
      { field: 'accion', header: "Accion" },
      { field: 'uri', header: "URI" }
    ];

    this.Run();
  }

  Run()
  {
    this.ListAllOperations();
  }

  onEmpleadosSelectChange($event /*option.value = employee*/)
  {
    this.employee = $event.username;
    //match operation for employee
    if($event.role.indexOf("bartender") == 0)
    {
      (document.getElementById('operationsType') as HTMLSelectElement).value= "bar";
    }
    this.ListOperations(this.report, this.employee);
    console.log("empelado changed", $event);
  }

  onReportSelectChange($event /*option.value*/)
  {
    this.report = $event;
    this.ListOperations(this.report, this.employee);
    console.log("empelado changed");
  }

  ListOperations(report?: string, employee?: string)
  {
    let that = this;
    this.comandaService.ListOperations(report, employee).subscribe({
      next: function (response) { that.operations = response; },
      error: (err) => { console.error(err); }
    });
    console.log("filter changed");
  }


  ListAllOperations(employee?: string)
  {
    let that = this;
    this.comandaService.ListOperations(this.report, employee).subscribe({
      next: function (response) { that.operations = response; },
      error: (err) => { console.error(err); }
    });
  }

  PrintTable()
  {
    var data = document.getElementById('tabla');

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
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });
  }
}
