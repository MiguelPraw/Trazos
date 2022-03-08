import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Respuesta } from 'src/app/models/personaje.model';

@Injectable({
  providedIn: 'root'
})
export class ApiRickMortyService {

  private url_base:string = "https://rickandmortyapi.com/api";

  constructor ( private http: HttpClient ) { }

  getPersonajes (pagina:number):Observable<any> {
    return this.http.get<Respuesta>(this.url_base + "/character?page=" + pagina);
  }

}
