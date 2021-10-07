import { HorarioService } from '@horario/shared/service/horario.service';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HorarioComponent } from './components/horario/horario.component';
// import { EditarHorarioComponent } from './components/editar-horario/editar-horario.component';
import { ListarHorarioComponent } from './components/listar-horario/listar-horario.component';
import { HorarioRoutingModule } from './horario-routing.module';
import { CrearHorarioComponent } from './components/crear-horario/crear-horario.component';


@NgModule({
  declarations: [
    CrearHorarioComponent,
    ListarHorarioComponent,
    // EditarHorarioComponent,
    HorarioComponent
  ],
  imports: [
    CoreModule,
    HorarioRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [HorarioService]
})
export class HorarioModule { }
