import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { ClasesComponent } from './componentes/clases/clases.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AcordeonComponent } from './componentes/acordeon/acordeon.component';
import { SliderComponent } from './componentes/slider/slider.component';
import { BuclesComponent } from './componentes/bucles/bucles.component';
import { CarlashComponent } from './componentes/carlash/carlash.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    ClasesComponent,
    MenuComponent,
    AcordeonComponent,
    SliderComponent,
    BuclesComponent,
    CarlashComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
