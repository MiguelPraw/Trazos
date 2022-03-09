import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { FiltroImagenesComponent } from './components/filtro-imagenes/filtro-imagenes.component';
import { SliderComponent } from './components/slider/slider.component';
import { ListadoAlumnosPageComponent } from './pages/listado-alumnos-page/listado-alumnos-page.component';
import { ListadoTareasPageComponent } from './pages/listado-tareas-page/listado-tareas-page.component';
import { ListadoRickMortyComponent } from './pages/listado-rick-morty/listado-rick-morty.component';
import { FichaPersonajeComponent } from './components/ficha-personaje/ficha-personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ServicesPageComponent,
    FiltroImagenesComponent,
    SliderComponent,
    ListadoAlumnosPageComponent,
    ListadoTareasPageComponent,
    ListadoRickMortyComponent,
    FichaPersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
