import { Component } from '@angular/core';
import { LoginService } from '../../../../Services/login/login.service';
import { NgZone } from '@angular/core';
import { Usuario } from '../../../../Interfaces/Usuario';

@Component({
  selector: 'app-onlog',
  templateUrl: './onlog.component.html',
  styleUrl: './onlog.component.css'
})
export class OnlogComponent {
  logado: boolean = false;
  usuario!: Usuario | null;

  constructor (private loginService: LoginService, private zone: NgZone) { }

  ngOnInit() {
    this.zone.run(() => {
      this.loginService.logado$.subscribe((logado) => {
        this.logado = logado; 
      });
      this.loginService.usuario$.subscribe((usuario) => {
        this.usuario = usuario;
        console.log(this.usuario);
      });
    });
  }

  teste() {
    console.log(this.usuario);
  }
}
