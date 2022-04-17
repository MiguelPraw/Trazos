import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon, IResults } from '../interfaces/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  pokedex : any[] = [];

  constructor(
    private http : HttpClient
  ) { }

  getPokemons() : Observable<IResults> {
    return this.http.get<IResults>('https://pokeapi.co/api/v2/pokemon?limit=151');
  }

  getPokemon( url : string ) : Observable<IPokemon> {
    return this.http.get<IPokemon>(url);
  }

  getType( url : string ) : any {
    return this.http.get<any>(url);
  }

  getDescripcion( url : string ) : any {
    return this.http.get<any>(url);
  }

  getHabilidades( url : string ) : any {
    return this.http.get<any>(url);
  }

  setPokedex( pokedex : any ) : void {
    this.pokedex = pokedex;
  }

}
