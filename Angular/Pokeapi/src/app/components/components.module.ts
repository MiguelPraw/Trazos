import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CabeceraComponent,
    PokedexComponent
  ],
  exports: [
    CabeceraComponent,
    PokedexComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
