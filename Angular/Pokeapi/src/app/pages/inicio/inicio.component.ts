import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  nombrePokemon : string = "";

  pokedex : any = [];

  constructor(
    private pokeapi : PokeapiService
  ) { }

  ngOnInit(): void { 

    this.pokeapi.getPokemons().subscribe( ( pokemons : any ) => {
      
      pokemons.results.forEach( ( cadaPokemon : any, index : number ) => {
        this.pokeapi.getPokemon( cadaPokemon.url ).subscribe( (pokemon : any) => {

          let tipos : any[] = [];
          pokemon.types.forEach( (cadaTipo : any) => {                                       
            this.pokeapi.getType( cadaTipo.type.url ).subscribe( (datosTipo : any) => {
              let tipo = this.getTipoEspanol(datosTipo);
              tipos.push(tipo);
            });
          });

          this.pokedex.push( 
          {
            id          : index + 1,
            url         : cadaPokemon.url, 
            nombre      : pokemon.name, 
            img         : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`, 
            tipos       : tipos,
          });
          this.ordenaPokedex();
          this.pokeapi.setPokedex(this.pokedex);
        });
      });
    });
  }

  getTipoEspanol( tipo : any ) : any {
    let tipoCompleto = tipo.names.find( (cadaTipo : any) => {
        return cadaTipo.language.name === "es";
    })
    return tipoCompleto.name;
  }

  ordenaPokedex() : void {
    this.pokedex.sort( (a : any , b : any ) => {
        if (a.id < b.id) {
            return -1;
        } else if (a.id > b.id) {
            return 1;
        } else {
            return 0;
        }
    });
  }

  setNombrePokemon( nombre : any) : void {
    this.nombrePokemon = nombre;
  }

}