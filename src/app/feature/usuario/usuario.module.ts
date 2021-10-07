import { UsuarioService } from './shared/service/usuario.service';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NgModule } from "@angular/core";
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
@NgModule({
  declarations: [
    ListarUsuarioComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    UsuarioComponent
  ],
  imports: [
    CoreModule,
    UsuarioRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService]
})
export class UsuarioModule { }
