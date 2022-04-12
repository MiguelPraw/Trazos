import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrarPipe } from './filtrar.pipe';
import { SaltoDeLineaPipe } from './salto-de-linea.pipe';


@NgModule({
  declarations: [
    FiltrarPipe,
    SaltoDeLineaPipe
  ],
  exports: [
    FiltrarPipe,
    SaltoDeLineaPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
