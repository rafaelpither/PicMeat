import { Component } from '@angular/core';
import { Pedidos } from '../../../Interfaces/Pedidos';
import { PedidosService } from '../../../Services/pedidos/pedidos.service';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrl: './lista-pedido.component.css'
})
export class ListaPedidoComponent {
  constructor(private pedidoService: PedidosService) { }

  ngOnInit(): void {
    this.getPedidos();
  }

  pedidos: Pedidos[] = []

  getPedidos(): void {
    this.pedidoService.getAll().subscribe((pedidos) => {(this.pedidos = pedidos)});
    console.log(this.pedidos)
  }
}
