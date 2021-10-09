import { HorarioService } from '@horario/shared/service/horario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Horario } from '@horario/shared/model/horario';

@Component({
  selector: 'app-listar-horario',
  templateUrl: './listar-horario.component.html',
  styleUrls: ['./listar-horario.component.scss']
})
export class ListarHorarioComponent implements OnInit {
  public listaHorarios: Observable<Horario[]>;
  horarios: Horario[];
  constructor(protected horarioService: HorarioService, private router: Router) { }

  ngOnInit() {
    this.getHorarios();
  }

  getHorarios(){
    this.listaHorarios = this.horarioService.consultarHorario();
  }

  onSubmitDeleteHorario(horarioId: number): void {
    this.horarioService.eliminarHorario(horarioId)
      .subscribe(
        () => {
          this.getHorarios();
        }
      );
  }

  onSubmitAdd(horarioId: number): void {
    localStorage.setItem('idHorario', horarioId.toString());
    this.router.navigate([`reserva/crear`]);

  }

}
