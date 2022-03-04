import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "contacto", component: ContactPageComponent},
  {path: "services", component: ServicesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
