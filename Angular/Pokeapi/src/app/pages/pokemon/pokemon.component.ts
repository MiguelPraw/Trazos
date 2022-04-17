import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemon, IResults } from 'src/app/interfaces/pokemon.interfaces';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon : any = {
    id            : 0,
    src           : "",
    nombre        : "",
    descripcion   : "",
    altura        : 0,
    peso          : 0,
    habilidades   : [],
    estadisticas  : [],
    sumaStats     : 0,
    tipos         : [],
  };

  constructor(
    private activatedRoute : ActivatedRoute,
    private pokeapi : PokeapiService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ( { nombre } ) => {
      
      this.pokeapi.getPokemons().subscribe( ( datos : IResults ) => {
        
        let pokemonData : any = datos.results.find( ( cadaPokemon : any ) => {
          return cadaPokemon.name.toLowerCase().includes( nombre.toLowerCase() );
        });

        this.pokeapi.getPokemon( pokemonData.url ).subscribe( ( data : any ) => {
          console.log(data);

          let tipos : any[] = [];
          data.types.forEach( (cadaTipo : any) => {                                       
            this.pokeapi.getType( cadaTipo.type.url ).subscribe( (datosTipo : any) => {
              let tipo = this.getTipoEspanol(datosTipo);
              tipos.push(tipo);
            });
          });

          this.pokemon.tipos = tipos;
          this.pokemon.nombre = data.name;
          this.pokemon.altura = data.height / 10;
          this.pokemon.peso = data.weight / 10;
          this.pokemon.estadisticas = data.stats;
          this.pokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
          
          this.pokeapi.getDescripcion( data.species.url ).subscribe( ( descripciones : any ) => {
            this.pokemon.descripcion = descripciones["flavor_text_entries"].find( ( elemento : any ) => elemento.language.name === "es").flavor_text;
          });

          data.abilities.forEach( (cadaHabilidad : any) => {                                       
            this.pokeapi.getHabilidades( cadaHabilidad.ability.url ).subscribe( (datosHabilidad : any) => {
              let habilidad = this.getHabilidadEspanol(datosHabilidad);
              this.pokemon.habilidades.push(habilidad);
            });
          });
        });
      });
    });
  }

  getHabilidadEspanol( habilidad : any ) : void {
    let habilidadCompleta = habilidad.names.find( (cadaHabilidad : any) => {
      return cadaHabilidad.language.name === "es";
    });
    return habilidadCompleta.name;
  }

  getTipoEspanol( tipo : any ) : any {
    let tipoCompleto = tipo.names.find( (cadaTipo : any) => {
        return cadaTipo.language.name === "es";
    })
    return tipoCompleto.name;
  }

  altura( numero : number ) : string {
    return `calc((100% / (200 / ${numero})) )`;
  }
}
