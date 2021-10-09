import { environment } from './../../../../../environments/environment';
import { HttpService } from './../../../../core/services/http.service';
import { Injectable } from '@angular/core';
import { Reserva } from './../model/reserva';


// Clase Abstracta para garantizar los metodos verificados
export abstract class ReservaServiceImplement {
  public abstract consultarReserva();

  public abstract consultarByIdReserva(reservaId: number);

  public abstract guardarReserva(reserva: Reserva);

  public abstract actualizarReserva(reservaId: number, reservaEditor: Reserva);

  public abstract eliminarReserva(reservaId: number);
}

// Servicio para uso de la conexion con el endpoint
@Injectable()
export class ReservaService extends ReservaServiceImplement {
  constructor(protected http: HttpService) { super(); }

  public consultarReserva() {
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas`, this.http.optsName('Consultar Reserva'));
  }
  public consultarByIdReserva(reservaId: number) {
    return this.http.doGet<Reserva>(`${environment.endpoint}/reservas/${reservaId}`, this.http.optsName('Consultar reservas por ID'));
  }
  public guardarReserva(reserva: Reserva) {
    return this.http.doPost<Reserva, boolean>(`${environment.endpoint}/reservas`, reserva,
      this.http.optsName('Crear reservas'));
  }
  public actualizarReserva(reservaId: number, reservaEditor: Reserva) {
    return this.http.doPut<Reserva, boolean>(`${environment.endpoint}/reservas/${reservaId}`, reservaEditor,
      this.http.optsName('Actualizar reservas'));
  }
  public eliminarReserva(usuarioId: number) {
    return this.http.doDelete<number>(`${environment.endpoint}/reservas/${usuarioId}`, this.http.optsName('eliminar reservas'));
  }
}
