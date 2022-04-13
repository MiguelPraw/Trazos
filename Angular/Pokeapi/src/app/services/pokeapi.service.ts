import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResults } from '../interfaces/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(
    private http : HttpClient
  ) { }

  getPokemons() : Observable<IResults> {
    return this.http.get<IResults>('https://pokeapi.co/api/v2/pokemon?limit=151');
  }

}
