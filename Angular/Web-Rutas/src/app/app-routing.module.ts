import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListadoAlumnosPageComponent } from './pages/listado-alumnos-page/listado-alumnos-page.component';
import { ListadoTareasPageComponent } from './pages/listado-tareas-page/listado-tareas-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "contacto", component: ContactPageComponent},
  {path: "services", component: ServicesPageComponent},
  {path: "alumnos", component: ListadoAlumnosPageComponent},
  {path: "tareas", component: ListadoTareasPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
