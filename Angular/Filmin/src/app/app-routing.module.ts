import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';

const routes: Routes = [
  { path : ''               , component : InicioComponent },
  { path : 'pelicula/:url'  , component : PeliculaComponent },
  { path : 'peliculas'      , component : PeliculasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
