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

  readonly url = 'http://localhost:8080/sistemadegaragem/viaturas';

  listar(): Observable<Viaturas[]> {
    return this.http.get<Viaturas[]>(this.url);
  }

  cadastrar(viaturas: Viaturas): Observable<Viaturas> {
    return this.http.post<Viaturas>(this.url, viaturas);
  }

}
