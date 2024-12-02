import { Injectable } from '@angular/core';
import { Usuario } from '../../Interfaces/Usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/usuarios'

  add(user: Usuario):Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, user) 
  }
}
