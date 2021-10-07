import { Reserva } from './reserva';
export class ReservaTestDataBuilder {
  id: number;
  idUsuario: number;
  idHorario: number;

  constructor(id: number, idUsuario: number, idHorario: number) {
    this.id = id;
    this.idUsuario = idUsuario;
    this.idHorario = idHorario;
  }

  build(): Reserva {
    return {
      id: this.id,
      idUsuario: this.idUsuario,
      idHorario: this.idHorario
    }
  }
}
