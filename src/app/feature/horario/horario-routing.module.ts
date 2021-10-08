// import { EditarHorarioComponent } from './components/editar-horario/editar-horario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarHorarioComponent } from './components/listar-horario/listar-horario.component';
import { HorarioComponent } from './components/horario/horario.component';
import { CrearHorarioComponent } from './components/crear-horario/crear-horario.component';


const routes: Routes = [
  {
    path: '',
    component: HorarioComponent,
    children: [
      {
        path: 'crear',
        component: CrearHorarioComponent
      },
      {
        path: 'listar',
        component: ListarHorarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HorarioRoutingModule { }
