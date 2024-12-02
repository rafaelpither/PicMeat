import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { ListacarneService } from '../../../Services/listaCarne/listacarne.service';
import { ActivatedRoute } from '@angular/router';
import { Carne } from '../../../Interfaces/Carne';

@Component({
  selector: 'app-edicao-prod',
  templateUrl: './edicao-prod.component.html',
  styleUrl: './edicao-prod.component.css'
})
export class EdicaoProdComponent {
  constructor(private listacService: ListacarneService, private route: ActivatedRoute) {}

  @ViewChild('addname') addName!: ElementRef;
  @ViewChild('addpeso') addPeso!: ElementRef;
  @ViewChild('addpreco') addPreco!: ElementRef;
  @ViewChild('addimg') addImg!: ElementRef;
  
  idUrl: string | null = null;
  pesoUrl: string | null = null;
  precoUrl: string | null = null;

  id!: number;
  nome!: string;
  peso!: number;
  preco!: number;
  img!: string;

  idEdicao!: number;
  nomeEdicao!: string;
  pesoEdicao!: number;
  precoEdicao!: number;
  imgEdicao!: string;

  ngOnInit(): void {
    this.idUrl = this.route.snapshot.paramMap.get('id');
    this.pesoUrl = this.route.snapshot.paramMap.get('peso');
    this.precoUrl = this.route.snapshot.paramMap.get('preco');

    if(this.idUrl !== null){
      this.idEdicao = parseInt(this.idUrl);
      this.nomeEdicao = String(this.route.snapshot.paramMap.get('nome'));
      this.imgEdicao = String(this.route.snapshot.paramMap.get('img'));

      if(this.pesoUrl !== null){
        this.pesoEdicao = parseInt(this.pesoUrl);
      }
      if(this.precoUrl !== null){
        this.precoEdicao = parseFloat(this.precoUrl);
      }
    }

    this.setItensEdicao();
  }

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

  putCarne() {
    if (this.nome === null || this.peso === null || this.preco === null || this.img === null || this.peso <= 0 || this.preco <= 0) {
      console.log('Deu ruim');
    }
    else if (this.nome != null && this.peso != null && this.preco != null && this.img != null && this.peso > 0 && this.preco > 0) {
      const newCarne = { id: this.idEdicao, nome: this.nome, peso: this.peso, preco: this.preco, img: this.img };
      this.listacService.update(newCarne).subscribe((a) => console.log(a));
    }
  }

  setItensEdicao(){
    this.nome = this.nomeEdicao;
    this.peso = this.pesoEdicao;
    this.preco = this.precoEdicao;
    this.img = this.imgEdicao;
  }
}
