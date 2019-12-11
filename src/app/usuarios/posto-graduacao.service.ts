import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostoGraduacaoMotorista} from "../motoristas/models/PostoGraduacao.model";
import {PostoGraduacao} from "./models/Usuarios.model";

@Injectable({
  providedIn: 'root'
})
export class PostoGraduacaoService {
  readonly url = `http://localhost/sistemadegaragem/usuarios`;

  constructor(private http: HttpClient) { }

  getPostoGraduacao(): Observable<PostoGraduacao[]> {
    return this.http.get<PostoGraduacao[]>(`${this.url}/postograd`);
  }
}
