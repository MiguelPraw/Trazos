import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { SliderCabeceraComponent } from './slider-cabecera/slider-cabecera.component';
import { SliderCabeceraCardComponent } from './slider-cabecera-card/slider-cabecera-card.component';
import { SliderCategoriasComponent } from './slider-categorias/slider-categorias.component';
import { SliderPeliculasComponent } from './slider-peliculas/slider-peliculas.component';
import { SliderPeliculasCardComponent } from './slider-peliculas-card/slider-peliculas-card.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { PeliculaCabeceraComponent } from './pelicula-cabecera/pelicula-cabecera.component';
import { PeliculaTabsComponent } from './pelicula-tabs/pelicula-tabs.component';
import { PeliculaDetallesCardComponent } from './pelicula-detalles-card/pelicula-detalles-card.component';
import { PeliculaSimilaresComponent } from './pelicula-similares/pelicula-similares.component';
import { PeliculaValoracionesComponent } from './pelicula-valoraciones/pelicula-valoraciones.component';
import { PeliculaExtrasComponent } from './pelicula-extras/pelicula-extras.component';
import { PeliculaDetallesComponent } from './pelicula-detalles/pelicula-detalles.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    CabeceraComponent,
    SliderCabeceraComponent,
    SliderCabeceraCardComponent,
    SliderCategoriasComponent,
    SliderPeliculasComponent,
    SliderPeliculasCardComponent,
    PeliculaCabeceraComponent,
    PeliculaTabsComponent,
    PeliculaDetallesComponent,
    PeliculaDetallesCardComponent,
    PeliculaSimilaresComponent,
    PeliculaValoracionesComponent,
    PeliculaExtrasComponent,
    FooterComponent,
    BuscadorComponent,
  ],
  exports : [
    CabeceraComponent,
    SliderCabeceraComponent,
    SliderCabeceraCardComponent,
    SliderCategoriasComponent,
    SliderPeliculasComponent,
    SliderPeliculasCardComponent,
    PeliculaCabeceraComponent,
    PeliculaTabsComponent,
    PeliculaDetallesComponent,
    PeliculaDetallesCardComponent,
    PeliculaSimilaresComponent,
    PeliculaValoracionesComponent,
    PeliculaExtrasComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
