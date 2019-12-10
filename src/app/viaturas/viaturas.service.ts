import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Viaturas} from "./models/Viaturas.model";

@Injectable({
  providedIn: 'root'
})
export class ViaturasService {

  constructor(
    private http: HttpClient
  ) { }

  readonly url = 'http://localhost/sistemadegaragem/viaturas';

  listar(): Observable<Viaturas[]> {
    return this.http.get<Viaturas[]>(this.url);
  }

  cadastrar(viatura: Viaturas): Observable<Viaturas> {
    return this.http.post<Viaturas>(this.url, viatura);
  }

  deletar(viatura: Viaturas): Observable<Viaturas> {
    return this.http.delete<Viaturas>(`${this.url}/${viatura.id}`);
  }

  buscarPorId(id: number): Observable<Viaturas> {
    return this.http.get<Viaturas>(`${this.url}/${id}`);
  }

  atualizar(viatura: Viaturas): Observable<Viaturas> {
    return this.http.put<Viaturas>(`${this.url}/${viatura.id}`, viatura);
  }

}
