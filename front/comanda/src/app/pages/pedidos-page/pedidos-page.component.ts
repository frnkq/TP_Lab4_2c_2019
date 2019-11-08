import { Component, OnInit, Output } from '@angular/core';
import { ComandaService } from 'src/app/services/comanda.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-pedidos-page',
  templateUrl: './pedidos-page.component.html',
  styleUrls: ['./pedidos-page.component.scss']
})
export class PedidosPageComponent implements OnInit {
  @Output() pedidos: any;
  @Output() token: string;
  constructor(private comandaService: ComandaService, private jwtHelper: JwtHelperService) { }

  ngOnInit() {
    this.token = this.jwtHelper.tokenGetter();
    // let that = this;
    // this.comandaService.ListOrders().subscribe({
    //   next: function(pedidos){that.pedidos = pedidos; console.log("got pedidos", pedidos)}
    // });
  }

}
