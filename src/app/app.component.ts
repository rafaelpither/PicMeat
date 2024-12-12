import { Component, OnInit } from '@angular/core';
import { Usuario } from './Interfaces/Usuario';
import { LoginService } from './Services/login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'exercicioCarne';

  mostraNavbar: boolean = true;

  usuario!: Usuario | null;

  constructor (private loginService: LoginService ) { }

  ngOnInit(){
    this.loginService.usuario$.subscribe((usuario) => {
      this.usuario = usuario;
      console.log(this.usuario);
    });
  }

  teste() {
    console.log(this.usuario);
  }
}