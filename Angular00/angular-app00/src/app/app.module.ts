import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { Componente2Component } from './componentes/componente2/componente2.component';
import { Componente3Component } from './componentes/componente3/componente3.component';
import { Componente4Component } from './componentes/componente4/componente4.component';
import { Componente5Component } from './componentes/componente5/componente5.component';
import { Componente6Component } from './componentes/componente6/componente6.component';
import { Componente7Component } from './componentes/componente7/componente7.component';
import { Componente8Component } from './componentes/componente8/componente8.component';
import { Componente9Component } from './componentes/componente9/componente9.component';
import { Componente10Component } from './componentes/componente10/componente10.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    Componente5Component,
    Componente6Component,
    Componente7Component,
    Componente8Component,
    Componente9Component,
    Componente10Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
