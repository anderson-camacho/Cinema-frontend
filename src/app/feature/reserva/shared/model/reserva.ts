export class Reserva {
  id: number;
  idUsuario: number;
  idHorario: number;

  constructor(id: number, idUsuario: number, idHorario: number) {
    this.id = id;
    this.idUsuario = idUsuario;
    this.idHorario = idHorario;
  }
}
