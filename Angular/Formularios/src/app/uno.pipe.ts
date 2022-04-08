import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uno'
})
export class UnoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let buscar = value.filter( ( alumno : any ) => {
      return alumno.nombre.toLowerCase().includes( args[0].toLowerCase() );
    })
    return buscar;
  }

}
