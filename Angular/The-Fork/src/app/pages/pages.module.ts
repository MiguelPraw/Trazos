import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { ManagerComponent } from './manager/manager.component';


@NgModule({
  declarations: [
    InicioComponent,
    RestauranteComponent,
    ManagerComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
