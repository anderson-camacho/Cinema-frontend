import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';
import { BorrarPeliculaComponent } from '@pelicula/components/borrar-pelicula/borrar-pelicula.component';
import { CrearPeliculaComponent } from '@pelicula/components/crear-pelicula/crear-pelicula.component';
import { EditarPeliculaComponent } from '@pelicula/components/editar-pelicula/editar-pelicula.component';
import { ListarPeliculaComponent } from '@pelicula/components/listar-pelicula/listar-pelicula.component';
import { CrearUsuarioComponent } from './feature/usuario/components/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './feature/usuario/components/listar-usuario/listar-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard] },
  //Pelicula
  { path: 'pelicula', loadChildren: () => import('@pelicula/pelicula.module').then(mod => mod.PeliculaModule) },
  { path: 'crear_pelicula', component: CrearPeliculaComponent },
  { path: 'listar_pelicula', component: ListarPeliculaComponent },
  { path: 'eliminar_pelicula/:id', component: BorrarPeliculaComponent },
  { path: 'editar_pelicula/:id', component: EditarPeliculaComponent },

  //Usuario o Cliente
  { path: 'usuario', loadChildren: () => import('./feature/usuario/usuario.module').then(mod => mod.UsuarioModule) },
  { path: 'listar_usuario', component: ListarUsuarioComponent },
  { path: 'crear_usuario', component: CrearUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
