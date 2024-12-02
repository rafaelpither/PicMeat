import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedidos } from '../../Interfaces/Pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private apiUrl = 'http://localhost:3000/pedidos'

  constructor(private http: HttpClient) { }

  add(params: {}):Observable<Pedidos> {
    return this.http.post<Pedidos>(this.apiUrl, params) 
  }

  getAll():Observable<Pedidos[]> {
    return this.http.get<Pedidos[]>(this.apiUrl);
  }
}
