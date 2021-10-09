import { Horario } from './../model/horario';
import { environment } from 'src/environments/environment';
import { HttpService } from '@core-service/http.service';
import { Injectable } from '@angular/core';

// Clase Abstracta para garantizar los metodos verificados
export abstract class HorarioServiceImplement {
  public abstract consultarHorario();

  public abstract consultarByIdHorario(horario: Horario);

  public abstract guardarHorario(horario: Horario);

  public abstract actualizarHorario(horarioId: number, horarioEditor: Horario);

  public abstract eliminarHorario(horarioId: number);
}

// Servicio para uso de la conexion con el endpoint
@Injectable()
export class HorarioService extends HorarioServiceImplement {
  constructor(protected http: HttpService) { super(); }

  public consultarHorario() {
    return this.http.doGet<Horario[]>(`${environment.endpoint}/horarios`, this.http.optsName('Consultar Horarios'));
  }

  public consultarByIdHorario(horario: Horario) {
    return this.http.doGet<Horario>(`${environment.endpoint}/horarios/${horario.id}`, this.http.optsName('Consultar Horario por ID'));
  }

  public guardarHorario(horario: Horario) {
    return this.http.doPost<Horario, boolean>(`${environment.endpoint}/horarios`, horario,
      this.http.optsName('Crear Horarios'));
  }

  public actualizarHorario(horarioId: number, horarioEditor: Horario) {
    return this.http.doPut<Horario, boolean>(`${environment.endpoint}/horarios/${horarioId}`, horarioEditor,
      this.http.optsName('Actualizar Horarios'));
  }

  public eliminarHorario(horarioId: number) {
    return this.http.doDelete<number>(`${environment.endpoint}/horarios/${horarioId}`, this.http.optsName('Eliminar Horarios'));
  }
}
