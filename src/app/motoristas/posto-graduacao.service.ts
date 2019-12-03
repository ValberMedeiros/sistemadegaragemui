import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostoGraduacaoMotorista } from './models/PostoGraduacao.model';

@Injectable({
  providedIn: 'root'
})
export class PostoGraduacaoService {

  readonly url = `http://localhost:8080/sistemadegaragem/motoristas`;

  constructor(private http: HttpClient) { }

  getPostoGraduacao(): Observable<PostoGraduacaoMotorista[]> {
    return this.http.get<PostoGraduacaoMotorista[]>(`${this.url}/postograd`);
  }

}
