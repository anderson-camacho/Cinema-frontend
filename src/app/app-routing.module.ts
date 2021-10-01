import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';
import { BorrarPeliculaComponent } from '@pelicula/components/borrar-pelicula/borrar-pelicula.component';
import { CrearPeliculaComponent } from '@pelicula/components/crear-pelicula/crear-pelicula.component';
import { EditarPeliculaComponent } from '@pelicula/components/editar-pelicula/editar-pelicula.component';
import { ListarPeliculaComponent } from '@pelicula/components/listar-pelicula/listar-pelicula.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'pelicula', loadChildren: () => import('@pelicula/pelicula.module').then(mod => mod.PeliculaModule)},
  { path: 'crear_pelicula', component:CrearPeliculaComponent},
  { path: 'listar_pelicula', component:ListarPeliculaComponent},
  { path: 'eliminar_pelicula', component:BorrarPeliculaComponent},
  { path: 'editar_pelicula', component:EditarPeliculaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
