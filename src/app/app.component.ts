import { Component, NgZone, OnInit } from '@angular/core';
import { Usuario } from './Interfaces/Usuario';
import { LoginService } from './Services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exercicioCarne';

  logado: boolean = false;

  constructor (private loginService: LoginService, private zone: NgZone) { }

  ngOnInit() {
    this.zone.run(() => {
      this.loginService.logado$.subscribe((logado) => {
        this.logado = logado; 
      });
    });
  }
}