import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';

const routes: Routes = [
  { path : ''         , component : InicioComponent   },
  { path : 'trabajos/:nombre' , component : TrabajosComponent },
  { path : 'contacto' , component : ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
