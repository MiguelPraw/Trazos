import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { RestauranteComponent } from './pages/restaurante/restaurante.component';

const routes: Routes = [
  { path : ""             , component : InicioComponent       },
  { path : "restaurante"  , component : RestauranteComponent  },
  { path : "manager"      , component : ManagerComponent      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
