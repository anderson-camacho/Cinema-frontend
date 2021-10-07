import { ListarReservaComponent } from './component/listar-reserva/listar-reserva.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaComponent } from './component/reserva/reserva.component';
import { CrearReservaComponent } from './component/crear-reserva/crear-reserva.component';

const routes: Routes = [
  {
    path: '',
    component: ReservaComponent,
    children: [
      {
        path: 'listar',
        component: ListarReservaComponent
      },
      {
        path: 'crear',
        component: CrearReservaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReservaRoutingModule { }
