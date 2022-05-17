import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';

const routes: Routes = [
  { path : ''               , component : InicioComponent },
  { path : 'pelicula/:url'  , component : PeliculaComponent },
  { path : 'peliculas'      , component : PeliculasComponent },
  { path : 'series'         , component : SeriesComponent }
];

const config : ExtraOptions = {
  scrollPositionRestoration : 'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes , config) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
