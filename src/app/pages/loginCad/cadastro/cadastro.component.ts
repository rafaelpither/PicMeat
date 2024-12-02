import { Component } from '@angular/core';
import { CadastroService } from '../../../Services/cadastro/cadastro.service';
import { ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  constructor(private cadastroService: CadastroService, private router: Router) { }

  @ViewChild ('addnome') addNome!: ElementRef;
  @ViewChild ('addsobrenome') addSobrenome!: ElementRef;
  @ViewChild ('addemail') addEmail!: ElementRef;
  @ViewChild ('addsenha') addSenha!: ElementRef;
  @ViewChild ('confirmasenha') confirmaSenha!: ElementRef;

  nome!: string;
  sobrenome!: string;
  email!: string;
  senha!: string;
  confSenha!: string;

  putNome(){
    this.nome = this.addNome.nativeElement.value;
    console.log(this.nome)
  }

  putSobrenome(){
    this.sobrenome = this.addSobrenome.nativeElement.value;
    console.log(this.sobrenome)
  }

  putEmail(){
    this.email = this.addEmail.nativeElement.value;
    console.log(this.email)
  }

  putSenha(){
    this.senha = this.addSenha.nativeElement.value;
  }

  putConfSenha(){
    this.confSenha = this.confirmaSenha.nativeElement.value;
  }

  postUser(){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const senhaRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*([!-/]|[:-@]|[\\[-`]|[{-~])).+$/;


    if (this.nome && this.sobrenome && this.email && this.senha && this.confSenha){
      if (this.senha === this.confSenha){
        console.log(emailRegex.test(this.email))
        console.log(senhaRegex.test(this.senha))
        if (emailRegex.test(this.email) && senhaRegex.test(this.senha)){
          const newUser = { nome: this.nome, sobrenome: this.sobrenome, email: this.email, senha: this.senha, adm: false};
          this.cadastroService.add(newUser).subscribe((a) => (console.log(a)));
          this.router.navigate(['/']);
        }
        else if (!emailRegex.test(this.email) || !senhaRegex.test(this.senha)){
          this.router.navigate(['/cadError']);
        }
      }
      else if(this.senha !== this.confSenha){
        this.router.navigate(['/diffSenha']);
      }
    }
  }
}