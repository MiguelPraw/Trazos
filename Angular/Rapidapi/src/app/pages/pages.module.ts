import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    InicioComponent
  ],
  exports: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
