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
    this.listaHorarios = this.horarioService.consultarHorario();
  }

  onSubmitDeleteHorario(horario: Horario): void {
    this.horarioService.eliminarHorario(horario.id)
      .subscribe(
        data => {
          console.log(data);
          this.ngOnInit();
        },
        error => { console.log(error); }
      );
  }

  onSubmitUpdate(horario: Horario): void {
    this.router.navigate([`editar_horario/${horario.id}`]);

  }

}
