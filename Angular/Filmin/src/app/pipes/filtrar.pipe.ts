import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let [ pelicula ] = args;
    let peliculaBuscada = value.filter( ( cadaPelicula : any ) => {
      if ( pelicula === ""){
        return null;
      } else {
        return cadaPelicula.titulo.toLowerCase().includes(pelicula.toLowerCase());
      }
    });
    return peliculaBuscada;
  }

}
