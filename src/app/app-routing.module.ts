import { ListarHorarioComponent } from './feature/horario/components/listar-horario/listar-horario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';
import { CrearPeliculaComponent } from '@pelicula/components/crear-pelicula/crear-pelicula.component';
import { EditarPeliculaComponent } from '@pelicula/components/editar-pelicula/editar-pelicula.component';
import { ListarPeliculaComponent } from '@pelicula/components/listar-pelicula/listar-pelicula.component';
import { CrearUsuarioComponent } from '@usuario/components/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from '@usuario/components/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from '@usuario/components/listar-usuario/listar-usuario.component';
import { CrearHorarioComponent } from '@horario/components/crear-horario/crear-horario.component';

// import { EditarHorarioComponent } from '@horario/components/editar-horario/editar-horario.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard] },

  //Pelicula
  { path: 'pelicula', loadChildren: () => import('@pelicula/pelicula.module').then(mod => mod.PeliculaModule) },
  { path: 'crear_pelicula', component: CrearPeliculaComponent },
  { path: 'listar_pelicula', component: ListarPeliculaComponent },
  { path: 'editar_pelicula/:id', component: EditarPeliculaComponent },

  //Usuario
  { path: 'usuario', loadChildren: () => import('@usuario/usuario.module').then(mod => mod.UsuarioModule) },
  { path: 'listar_usuario', component: ListarUsuarioComponent },
  { path: 'crear_usuario', component: CrearUsuarioComponent },
  { path: 'editar_usuario/:id', component: EditarUsuarioComponent },

  //Horario
  { path: 'horario', loadChildren: () => import('@horario/horario.module').then(mod => mod.HorarioModule) },
  { path: 'listar_horario', component: ListarHorarioComponent },
  { path: 'crear_horario', component: CrearHorarioComponent },
  // { path: 'editar_horario/:id', component: EditarHorarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
