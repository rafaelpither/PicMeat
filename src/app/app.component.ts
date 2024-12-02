import { Component, OnInit } from '@angular/core';
import { Usuario } from './Interfaces/Usuario';
import { LoginService } from './Services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exercicioCarne';

  mostraNavbar!: boolean;

  logado: boolean = false;
  usuario!: Usuario | null;

  constructor (private loginService: LoginService ) { }

  ngOnInit(){
    this.mostraNavbar = false;

    setTimeout(() => {
      this.mostraNavbar = true;
    })

    this.loginService.logado$.subscribe((logado) => {
      this.logado = logado; 
    });
    this.loginService.usuario$.subscribe((usuario) => {
      this.usuario = usuario;
      console.log(this.usuario);
    });
    return this.usuario;
  }

  teste() {
    console.log(this.usuario);
  }
}