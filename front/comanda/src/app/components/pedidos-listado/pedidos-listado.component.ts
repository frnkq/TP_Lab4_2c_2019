import { Component, OnInit, Input, EventEmitter, OnChanges } from '@angular/core';
import { ComandaService } from 'src/app/services/comanda.service';
import { Router } from '@angular/router';
import { ɵELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';

@Component({
  selector: 'app-pedidos-listado',
  templateUrl: './pedidos-listado.component.html',
  styleUrls: ['./pedidos-listado.component.scss']
})
export class PedidosListadoComponent implements OnInit
{

  cols: any[];
  pedidos: any;
  clickedPedido: any;
  onClickedPedido: EventEmitter<any> = new EventEmitter<any>();
  constructor(private comandaService: ComandaService, private router: Router)
  {
    this.pedidos = [];
  }

  ngOnInit()
  {
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

    let that = this;
    this.comandaService.ListOrders().subscribe({
      next: function (pedidos) { that.pedidos = pedidos; console.log("got pedidos", pedidos); },
      complete: () =>
      {
        that.PostProcessTable();
      }
    });

  }

  Click(pedido: any)
  {
    this.clickedPedido = pedido;
  }

  PostProcessTable()
  {

    this.pedidos.forEach(element =>
    {
      if (element.pedidosCocinaIds)
      {
        let re = /\[/gi;
        element.pedidosCocinaIds = element.pedidosCocinaIds.replace(re, "");
        re = /\]/gi;
        element.pedidosCocinaIds = element.pedidosCocinaIds.replace(re, "");
        element.arrayPedidosCocina = element.pedidosCocinaIds.split(",");
        element.arrayPedidosCocinaLinks = [];
        element.arrayPedidosCocina.forEach(pedidoCocina =>
        {
          if (pedidoCocina)
          {

            let pedido;
            this.comandaService.ListOrder("cocina", pedidoCocina).subscribe({
              next(response) { pedido = response; element.arrayPedidosCocinaLinks.push(pedido); }
            });
          }
        });
      }

      if (element.pedidosBarIds)
      {
        let re = /\[/gi;
        element.pedidosBarIds = element.pedidosBarIds.replace(re, "");
        re = /\]/gi;
        element.pedidosBarIds = element.pedidosBarIds.replace(re, "");
        element.arrayPedidosBar = element.pedidosBarIds.split(",");
        element.arrayPedidosBarLinks = [];
        element.arrayPedidosBar.forEach(pedidoBar =>
        {
          if (pedidoBar)
          {
            let pedido;
            this.comandaService.ListOrder("bar", pedidoBar).subscribe({
              next(response) { pedido = response; element.arrayPedidosBarLinks.push(pedido); }
            });

          }
        });
      }

      if (element.pedidosCervezaIds)
      {
        let re = /\[/gi;
        element.pedidosCervezaIds = element.pedidosCervezaIds.replace(re, "");
        re = /\]/gi;
        element.pedidosCervezaIds = element.pedidosCervezaIds.replace(re, "");
        element.arrayPedidosCerveza = element.pedidosCervezaIds.split(",");
        element.arrayPedidosCervezaLinks = [];
        element.arrayPedidosCerveza.forEach(pedidoCerveza =>
        {
          if (pedidoCerveza)
          {
            let pedido;
            this.comandaService.ListOrder("cerveza", pedidoCerveza).subscribe({
              next(response) { pedido = response; element.arrayPedidosCervezaLinks.push(pedido); }
            });

          }
        });
      }

    });//elements foreach
  }
}
