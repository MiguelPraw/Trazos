import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let [ termino ] = args;
    console.log( termino );
    console.log( value );
    let nuevaClase = value.filter( (cadaAlumno : any) => {
      return cadaAlumno.nombre.toLowerCase().includes( termino.toLowerCase() );
    });
    console.log(nuevaClase);
    return nuevaClase;
  }
}
