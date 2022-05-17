import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ComponentsModule } from '../components/components.module';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';

@NgModule({
  declarations: [
    InicioComponent,
    PeliculaComponent,
    PeliculasComponent,
    SeriesComponent
  ],
  exports : [
    InicioComponent,
    PeliculaComponent,
    PeliculasComponent,
    SeriesComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule
  ]
})
export class PagesModule { }
