import { UsuarioService } from './shared/service/usuario.service';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NgModule } from "@angular/core";
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PeliculaRoutingModule } from '@pelicula/pelicula-routing.module';

@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CoreModule,
    PeliculaRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService]
})
export class UsuarioModule { }
