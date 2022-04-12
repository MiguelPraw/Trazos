import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saltoDeLinea'
})
export class SaltoDeLineaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let textoFiltrado = value.replace(/\n/g, "<br />");
    console.log(value);
    console.log(textoFiltrado)
    return value;
  }

}
