import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role, Usuarios} from "./models/Usuarios.model";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  readonly url = 'http://localhost/sistemadegaragem/usuarios';

  listar(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.url);
  }

  cadastrar(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.url, usuario);
  }

  delete(usuario: Usuarios): Observable<Usuarios> {
    return this.http.delete<Usuarios>(`${this.url}/${usuario.id}`);
  }

  getRole(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.url}/roles`);
  }

  buscarPorId(usuario: Usuarios): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${this.url}/${usuario.id}`);
  }

  atualizar(usuario: Usuarios): Observable<Usuarios> {
    return this.http.put<Usuarios>(`${this.url}/${usuario.id}`, usuario);
  }

}
