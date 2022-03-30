import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { RrssComponent } from './rrss/rrss.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    PieComponent,
    RrssComponent
  ],
  exports: [
    CabeceraComponent,
    PieComponent,
    RrssComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
