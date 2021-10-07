import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      {
        path: 'listar',
        component: ListarUsuarioComponent
      },
      {
        path: 'crear',
        component: CrearUsuarioComponent
      },
      {
        path: 'editar',
        component: EditarUsuarioComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsuarioRoutingModule { }
