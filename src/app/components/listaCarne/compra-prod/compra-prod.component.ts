import { Component } from '@angular/core';
import { PedidosService } from '../../../Services/pedidos/pedidos.service';
import { ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-compra-prod',
  templateUrl: './compra-prod.component.html',
  styleUrl: './compra-prod.component.css'
})
export class CompraProdComponent {
  constructor(private pedidoService: PedidosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idUrl = this.route.snapshot.paramMap.get('id');
    this.precoUrl = this.route.snapshot.paramMap.get('preco')

    if (this.idUrl !== null){
      this.idCompra = parseInt(this.idUrl);
      this.nomeCompra = String(this.route.snapshot.paramMap.get('nome'));
    }
    if (this.precoUrl !== null){
      this.precoCompra = parseFloat(this.precoUrl);
    }
  }

  @ViewChild('addqtd') addQtd!: ElementRef;
  @ViewChild('pgto') addPgto!: ElementRef;

  idUrl: string | null = null;
  precoUrl: string | null = null;

  idCompra!: number;
  nomeCompra!: string;
  precoCompra!: number;
  qtdCompra: number = 0;
  valorTotal: number = 0;
  pagamento!: string;

  qtdAdd() {
    this.qtdCompra = this.addQtd.nativeElement.value;
    console.log(this.qtdCompra)
    if(this.pagamento === 'Nubank'){
      this.valorTotal = Math.round(((this.qtdCompra * this.precoCompra) * 100) * 0.3) / 100
    }
    else if(this.pagamento === 'PicPay'){
      this.valorTotal = Math.round(((this.qtdCompra * this.precoCompra) * 100) * 1.2) / 100
    }
    else{
      this.valorTotal = Math.round((this.qtdCompra * this.precoCompra) * 100) / 100
    }
  };

  pgtoAdd() {
    this.pagamento = this.addPgto.nativeElement.value;
    console.log(this.pagamento);
  }

  pgtoNull() {
    this.pagamento = 'null';
    console.log(this.pagamento)
  }

  addPedidos(){
    if (this.nomeCompra && this.qtdCompra && this.valorTotal && this.pagamento){
      const params = { idCompra: this.idCompra, nome: this.nomeCompra, qtd: this.qtdCompra, total: this.valorTotal, pagamento: this.pagamento };
      console.log(this.idCompra)
      console.log(typeof(this.idCompra))
      this.pedidoService.add(params).subscribe((a) => console.log(a));
    }
    if(!this.nomeCompra || !this.qtdCompra || !this.valorTotal || !this.pagamento){
      console.log('Fudeo')
    }
  }
}