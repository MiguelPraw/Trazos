import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ComponentsModule } from '../components/components.module';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

@NgModule({
  declarations: [
    InicioComponent,
    PeliculaComponent,
    PeliculasComponent
  ],
  exports : [
    InicioComponent,
    PeliculaComponent,
    PeliculasComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule
  ]
})
export class PagesModule { }
