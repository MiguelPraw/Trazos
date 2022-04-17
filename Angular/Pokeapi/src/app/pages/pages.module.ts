import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    InicioComponent,
    PokemonComponent
  ],
  exports : [
    InicioComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule,
    PipesModule
  ]
})
export class PagesModule { }
