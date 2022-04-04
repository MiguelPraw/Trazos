import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    InicioComponent
  ],
  exports : [
    InicioComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule
  ]
})
export class PagesModule { }
