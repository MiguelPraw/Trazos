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


@NgModule({
  declarations: [
    CabeceraComponent,
    SliderCabeceraComponent,
    SliderCabeceraCardComponent,
    SliderCategoriasComponent,
    SliderPeliculasComponent,
    SliderPeliculasCardComponent,
    FooterComponent
  ],
  exports : [
    CabeceraComponent,
    SliderCabeceraComponent,
    SliderCabeceraCardComponent,
    SliderCategoriasComponent,
    SliderPeliculasComponent,
    SliderPeliculasCardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
