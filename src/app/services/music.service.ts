import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaReproduccion } from '../models/lista-reproduccion.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private apiUrl = 'http://localhost:8080/lists';

  constructor(private http: HttpClient) {}

  getListas(): Observable<ListaReproduccion[]> {
    return this.http.get<ListaReproduccion[]>(this.apiUrl);
  }

  crearLista(lista: ListaReproduccion): Observable<ListaReproduccion> {
    return this.http.post<ListaReproduccion>(this.apiUrl, lista);
  }

  eliminarLista(nombre: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${encodeURIComponent(nombre)}`);
  }
}
