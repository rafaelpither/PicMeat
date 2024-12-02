import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { ListacarneService } from '../../../Services/listaCarne/listacarne.service';

@Component({
  selector: 'app-cadastro-prod',
  templateUrl: './cadastro-prod.component.html',
  styleUrl: './cadastro-prod.component.css'
})
export class CadastroProdComponent {
  constructor(private listacService: ListacarneService){}

  @ViewChild('addname') addName!: ElementRef;
  @ViewChild('addpeso') addPeso!: ElementRef;
  @ViewChild('addpreco') addPreco!: ElementRef;
  @ViewChild('addimg') addImg!: ElementRef;

  id!: number;
  nome!: string;
  peso!: number;
  preco!: number;
  img!: string;

  nameAdd() {
    this.nome = this.addName.nativeElement.value;
    console.log(this.nome);
  }

  pesoAdd() {
    this.peso = this.addPeso.nativeElement.value;
    console.log(this.peso);
  }

  precoAdd() {
    this.preco = this.addPreco.nativeElement.value;
    console.log(this.preco);
  }

  imgAdd() {
    this.img = this.addImg.nativeElement.value;
    console.log(this.img);
  }

  addCarne() {
    if (this.nome === null || this.peso === null || this.preco === null || this.img === null || this.peso > 0 || this.preco > 0) {
      console.log('Deu ruim');
    }
    if (this.nome != null && this.peso != null && this.preco != null && this.img != null && this.peso > 0 && this.preco > 0) {
      const newCarne = { id: this.id, nome: this.nome, peso: this.peso, preco: this.preco, img: this.img };
      this.listacService.add(newCarne).subscribe((a) => console.log(a));
    }
  }
}
