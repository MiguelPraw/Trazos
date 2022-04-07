import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    InicioComponent,
    PeliculaComponent
  ],
  exports : [
    InicioComponent,
    PeliculaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
