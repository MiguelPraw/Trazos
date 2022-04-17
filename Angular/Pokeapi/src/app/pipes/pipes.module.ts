import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltraPokemonPipe } from './filtra-pokemon.pipe';



@NgModule({
  declarations: [
    FiltraPokemonPipe
  ],
  exports: [
    FiltraPokemonPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
