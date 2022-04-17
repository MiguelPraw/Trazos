import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtraPokemon'
})
export class FiltraPokemonPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let [ nombre ] : any = args;
    if ( nombre === "" ) {
      return value;
    } else {
      return value.filter( ( pokemon : any ) => {
        return pokemon.nombre.toLowerCase().includes( nombre.toLowerCase() );
      });
    }
  }

}
