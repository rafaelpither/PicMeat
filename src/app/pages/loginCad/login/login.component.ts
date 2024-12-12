import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Usuario } from '../../../Interfaces/Usuario';
import { LoginService } from '../../../Services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) { }

  @ViewChild ('addemail') addEmail!: ElementRef;
  @ViewChild ('addsenha') addSenha!: ElementRef;

  email!: string;
  senha!: string;

  usuario!: Usuario;

  putEmail(){
    this.email = this.addEmail.nativeElement.value;
    console.log(this.email);
  }

  putSenha(){
    this.senha = this.addSenha.nativeElement.value;
  }

  getConta(){
    this.loginService.get(this.email, this.senha).subscribe((user) => {
      if(Object.keys(user).length > 0){
        this.usuario = user;
        this.loginService.setUsuario(this.usuario);
        this.router.navigate(['/']);
      }
      else{
        this.router.navigate(['/naoEnc'])
      }
    });
  }
}
