import { Injectable } from '@angular/core';
import { Carne } from '../../Interfaces/Carne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListacarneService {
  private apiUrl = 'http://localhost:3000/itens';

  constructor(private http: HttpClient) { }

  add(carne:Carne):Observable<Carne> {
    console.log(carne.img)
    return this.http.post<Carne>(this.apiUrl, carne) 
  }

  remove(id:number) {
    return this.http.delete<Carne>(`${this.apiUrl}/${id}`);
  }

  update(carne:Carne){
    console.log(carne)
    return this.http.put<Carne>(this.apiUrl, carne)
  }

  getAll():Observable<Carne[]> {
    return this.http.get<Carne[]>(this.apiUrl);
  }

  getOne(id: number):Observable<Carne> {
    return this.http.get<Carne>(`${this.apiUrl}/${id}`);
  }
}