import { tap, delay } from 'rxjs/operators';
import { HorarioService } from '@horario/shared/service/horario.service';
import { Horario } from '../../shared/model/horario';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-horario',
  templateUrl: './crear-horario.component.html',
  styleUrls: ['./crear-horario.component.scss']
})
export class CrearHorarioComponent implements OnInit {
  horarioForm: FormGroup;
  horario = {} as Horario;
  horarioId: number;
  date;
  constructor(protected horarioService: HorarioService, private router: Router) { }

  ngOnInit() {
    this.construirFormularioHorario();
    this.getHorario();
  }

  getHorario(){
    this.horarioId = Number(localStorage.getItem("idPelicula"));
    this.date = new Date().toISOString().slice(0, 10);
  }

  onSubmit() {
    let horarioGuardar: Horario;
    horarioGuardar = this.horarioForm.value;
    console.log(this.horarioId);
    horarioGuardar.idPelicula = this.horarioId;

    this.horarioService.guardarHorario(horarioGuardar)
      .pipe(
        tap(() => this.router.navigate(['horario/listar'])),
        delay(2000)
      )
      .subscribe(
        data => { console.log(data); },
        error => { console.log(error); }
      );
  }

  private construirFormularioHorario() {
    this.horarioForm = new FormGroup({
      fecha: new FormControl('', [Validators.required]),
      cupos: new FormControl('', [Validators.required])
    });
  }

}
