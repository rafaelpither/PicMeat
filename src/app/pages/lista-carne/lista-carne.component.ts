import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carne } from '../../Interfaces/Carne';
import { ListacarneService } from '../../Services/listaCarne/listacarne.service';

@Component({
  selector: 'app-lista-carne',
  templateUrl: './lista-carne.component.html',
  styleUrls: ['./lista-carne.component.css'],
  providers: [CommonModule],
})
export class ListaCarneComponent implements OnInit {

  constructor(private listacService: ListacarneService) { }
  

  ngOnInit(): void {
    this.getCarnes();
  }

  listaCan: boolean = true;
  pedidosCan: boolean = false;
  editar: boolean = false;
  comprar: boolean = false;

  ////// LISTA DE CARNES

  carnes: Carne[] = [];

  removeCarne(carne: Carne) {
    this.carnes = this.carnes.filter((a) => carne.id !== a.id);
    this.listacService.remove(carne.id).subscribe((a) => console.log(a));
  }

  getCarnes(): void {
    this.listacService.getAll().subscribe((carnes) => (this.carnes = carnes));
  }
}