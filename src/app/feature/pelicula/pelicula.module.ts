import { CoreModule } from './../../core/core.module';
import { EditarPeliculaComponent } from './components/editar-pelicula/editar-pelicula.component';
import { NgModule } from '@angular/core';
import { PeliculaRoutingModule } from './pelicula-routing.module';
import { BorrarPeliculaComponent } from './components/borrar-pelicula/borrar-pelicula.component';
import { ListarPeliculaComponent } from './components/listar-pelicula/listar-pelicula.component';
import { CrearPeliculaComponent } from './components/crear-pelicula/crear-pelicula.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SharedModule } from '@shared/shared.module';
import { PeliculaService } from './shared/service/pelicula.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearPeliculaComponent,
    ListarPeliculaComponent,
    BorrarPeliculaComponent,
    EditarPeliculaComponent,
    PeliculaComponent
  ],
  imports: [
    CoreModule,
    PeliculaRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [PeliculaService]
})
export class PeliculaModule { }
