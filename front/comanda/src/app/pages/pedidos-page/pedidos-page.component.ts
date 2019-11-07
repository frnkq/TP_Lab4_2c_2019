import { Component, OnInit, Output } from '@angular/core';
import { ComandaService } from 'src/app/services/comanda.service';

@Component({
  selector: 'app-pedidos-page',
  templateUrl: './pedidos-page.component.html',
  styleUrls: ['./pedidos-page.component.scss']
})
export class PedidosPageComponent implements OnInit {
  @Output() pedidos: any;
  constructor(private comandaService: ComandaService) { }

  ngOnInit() {
    // let that = this;
    // this.comandaService.ListOrders().subscribe({
    //   next: function(pedidos){that.pedidos = pedidos; console.log("got pedidos", pedidos)}
    // });
  }

}
