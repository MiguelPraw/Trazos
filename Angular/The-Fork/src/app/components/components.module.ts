import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { TarjetaRegaloComponent } from './tarjeta-regalo/tarjeta-regalo.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { PromosComponent } from './promos/promos.component';
import { SliderComponent } from './slider/slider.component';
import { SliderCardComponent } from './slider-card/slider-card.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { EresPropietarioComponent } from './eres-propietario/eres-propietario.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    CabeceraComponent,
    TarjetaRegaloComponent,
    BuscadorComponent,
    PromosComponent,
    SliderComponent,
    SliderCardComponent,
    ComoFuncionaComponent,
    EresPropietarioComponent,
    FooterComponent
  ],
  exports: [
    CabeceraComponent,
    TarjetaRegaloComponent,
    BuscadorComponent,
    PromosComponent,
    SliderComponent,
    ComoFuncionaComponent,
    EresPropietarioComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
