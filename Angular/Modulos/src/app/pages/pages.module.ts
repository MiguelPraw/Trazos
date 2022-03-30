import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    InicioComponent,
    TrabajosComponent,
    ContactoComponent
  ],
  exports: [
    InicioComponent,
    TrabajosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
