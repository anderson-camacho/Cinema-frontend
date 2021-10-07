import { ReservaService } from './shared/service/usuario.service';
import { CoreModule } from './../../core/core.module';
import { ListarReservaComponent } from './component/listar-reserva/listar-reserva.component';
import { CrearReservaComponent } from "./component/crear-reserva/crear-reserva.component";
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReservaComponent } from './component/reserva/reserva.component';
import { ReservaRoutingModule } from './reserva-routing.module';

@NgModule({
  declarations: [
    ListarReservaComponent,
    CrearReservaComponent,
    ReservaComponent
  ],
  imports: [
    CoreModule,
    ReservaRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [ReservaService]
})
export class ReservaModule { }
