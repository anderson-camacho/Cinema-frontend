import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard] },

  // Pelicula
  { path: 'pelicula', loadChildren: () => import('@pelicula/pelicula.module').then(mod => mod.PeliculaModule) },

  // Usuario
  { path: 'usuario', loadChildren: () => import('@usuario/usuario.module').then(mod => mod.UsuarioModule) },

  // Horario
  { path: 'horario', loadChildren: () => import('@horario/horario.module').then(mod => mod.HorarioModule) },

  // Reserva
  { path: 'reserva', loadChildren: () => import('@reserva/reserva.module').then(mod => mod.ReservaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
