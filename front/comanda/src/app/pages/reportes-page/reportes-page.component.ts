import { Component, OnInit } from '@angular/core';
import { ComandaService } from 'src/app/services/comanda.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reportes-page',
  templateUrl: './reportes-page.component.html',
  styleUrls: ['./reportes-page.component.scss']
})
export class ReportesPageComponent implements OnInit {
  message: string = "";
  operations: any = [];
  cols: any[];
  constructor(private comandaService: ComandaService, private jwtHelper: JwtHelperService) { }

  ngOnInit() {
    this.cols = [
      { field: 'fecha', header: "Fecha" },
      { field: 'username', header: "Usuario" },
      { field: 'role', header: "Rol" },
      { field: 'accion', header: "Accion" },
      { field: 'uri', header: "URI" }
    ]

  }

  Run() {
    let that = this;
    this.comandaService.ListKitchenOperations(this.jwtHelper.tokenGetter()).subscribe({
      next: function (response) { that.message = "getting..."; that.operations = response; console.log(response); }

    })
  }

  Pdf() {
    var data = document.getElementById('tabla');

    html2canvas(data).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')  ;
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      //let pdf = new jsPDF(); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });
  }
}
