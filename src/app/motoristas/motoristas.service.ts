import { Motoristas } from './models/Motoristas.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {

  constructor(private http: HttpClient) { }

  readonly url = 'http://localhost/sistemadegaragem/motoristas';

  cadastrar(motorista: Motoristas) {
    return this.http.post<Motoristas>(this.url, motorista);
  }

  listar(): Observable<Motoristas[]> {
    return this.http.get<Motoristas[]>(this.url);
  }

  deletar(motorista: Motoristas): Observable<any> {
    return this.http.delete(`${this.url}/${motorista.id}`);
  }

  buscarPorId(idMotorista: number): Observable<Motoristas> {
    return this.http.get<Motoristas>(`${this.url}/${idMotorista}`);
  }

  atualizar(motorista: Motoristas): Observable<Motoristas> {
    return this.http.put<Motoristas>(`${this.url}/${motorista.id}`, motorista);
  }

}
