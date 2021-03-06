import { Reserva } from './../../shared/model/reserva';
import { tap, delay } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from '@reserva/shared/service/usuario.service';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html'
})
export class CrearReservaComponent implements OnInit {
  reservaForm: FormGroup;
reserva = {} as Reserva;
horarioId: number;

constructor(protected reservaService: ReservaService, private router: Router) { }

  ngOnInit(): void {
    this.construirFormularioReserva();
    this.horarioId = Number(localStorage.getItem('idHorario'));
  }

  onSubmitCrearReserva() {
    let reservaGuardar: Reserva;
    reservaGuardar = this.reservaForm.value;
    reservaGuardar.idHorario = this.horarioId;
    this.reservaService.guardarReserva(reservaGuardar)
      .pipe(
        tap(() => this.router.navigate(['reserva/listar'])),
        delay(2000)
      )
      .subscribe();
  }

  private construirFormularioReserva() {
    this.reservaForm = new FormGroup({
      idUsuario: new FormControl('', [Validators.required])
    });
  }
}
