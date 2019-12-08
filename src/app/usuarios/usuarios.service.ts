import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuarios} from "./models/Usuarios.model";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  readonly url = 'http://localhost:8080/sistemadegaragem/usuarios';

  listar(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.url);
  }

  delete(usuario: Usuarios): Observable<Usuarios> {
    return this.http.delete<Usuarios>(`${this.url}/${usuario.id}`);
  }
}
