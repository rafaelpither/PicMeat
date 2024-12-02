import { Injectable } from '@angular/core';
import { Usuario } from '../../Interfaces/Usuario';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/usuarios';
  private usuarioSource = new BehaviorSubject<Usuario | null>(null);
  private logadoSource = new BehaviorSubject<boolean>(false);

  usuario$ = this.usuarioSource.asObservable();
  logado$ = this.logadoSource.asObservable();

  get(email: string, senha: string){
    return this.http.get<Usuario>(`${this.apiUrl}/${email}/${senha}`);
  }

  setUsuario(usuario: Usuario){
    this.usuarioSource.next(usuario);
  }

  setLogado(logado: boolean){
    this.logadoSource.next(logado);
  }
}
