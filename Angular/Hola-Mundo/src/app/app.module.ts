import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RelojComponent } from './components/reloj/reloj.component';
import { ParImparComponent } from './components/par-impar/par-impar.component';
import { ModalComponent } from './components/modal/modal.component';
import { RedimensionComponent } from './components/redimension/redimension.component';
import { GridImagenesComponent } from './components/grid-imagenes/grid-imagenes.component';

@NgModule({
  declarations: [
    AppComponent,
    RelojComponent,
    ParImparComponent,
    ModalComponent,
    RedimensionComponent,
    GridImagenesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
