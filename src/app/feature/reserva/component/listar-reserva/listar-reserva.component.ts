import { Reserva } from '../../shared/model/reserva';
import { ReservaService } from '../../shared/service/usuario.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.scss']
})
export class ListarReservaComponent implements OnInit {
  public listaReservas: Observable<Reserva[]>;
  Reservas: Reserva[];
  constructor(protected reservaService: ReservaService, ) { }

  ngOnInit() {
    this.listaReservas = this.reservaService.consultarReserva();
  }

  onSubmitDelete(reserva: Reserva): void {
    this.reservaService.eliminarReserva(reserva.id)
      .subscribe(
        data => {
          console.log(data);
          this.ngOnInit();
        },
        error => { console.log(error); }
      );
  }



}
