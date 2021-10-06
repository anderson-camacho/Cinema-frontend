import { UsuarioService } from './shared/service/usuario.service';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NgModule } from "@angular/core";
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
@NgModule({
  declarations: [
    ListarUsuarioComponent,
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
