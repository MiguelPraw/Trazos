import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { RrssComponent } from './rrss/rrss.component';
import { AppRoutingModule } from '../app-routing.module';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    PiepaginaComponent,
    RrssComponent,
    CardComponent
  ],
  exports: [
    CabeceraComponent,
    PiepaginaComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
