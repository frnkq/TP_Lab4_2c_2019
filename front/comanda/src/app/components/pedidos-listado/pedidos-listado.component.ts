import { Component, OnInit } from '@angular/core';
import { ComandaService } from 'src/app/services/comanda.service';

@Component({
  selector: 'app-pedidos-listado',
  templateUrl: './pedidos-listado.component.html',
  styleUrls: ['./pedidos-listado.component.scss']
})
export class PedidosListadoComponent implements OnInit {
  cols: any[];
  pedidos: any;
  constructor(private comandaService: ComandaService) {
    this.pedidos = [];
   }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: "#" },
      { field: 'mesaId', header: "Mesa" },
      { field: 'mozoUsername', header: "Mozo" },
      { field: 'clienteUsername', header: "Cliente" },
      { field: 'pedidosBarIds', header: "Pedidos Bar" },
      { field: 'pedidosCervezaIds', header: "Pedidos Cerveza" },
      { field: 'pedidosCocinaIds', header: "Pedidos Cocina" },
      { field: 'hora', header: "Hora" },
      { field: 'estado', header: "Estado" },
    ];
  }

  Run()
  {
    let that = this;
    this.comandaService.ListOrders().subscribe({
      next: function(pedidos){that.pedidos = pedidos; console.log("got pedidos", pedidos)}
    });
  }
}
