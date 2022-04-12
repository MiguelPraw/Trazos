import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalComponent } from './normal/normal.component';
import { ReactivoComponent } from './reactivo/reactivo.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { UnoPipe } from './uno.pipe';
import { FiltrarPipe } from './pipes/filtrar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NormalComponent,
    ReactivoComponent,
    BuscadorComponent,
    UnoPipe,
    FiltrarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
