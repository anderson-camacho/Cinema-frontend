import { Horario } from './horario';

export class HorarioTestDataBuilder {
  id: number;
  idPelicula: number;
  fecha: string;
  cupos: number;
  constructor(idPelicula: number, fecha: string, cupos: number) {
    this.idPelicula = idPelicula;
    this.fecha = fecha;
    this.cupos = cupos;
  }

  setID(id: number) {
    this.id = id;
  }

  build(): Horario {
    return {
      id: this.id,
      idPelicula: this.idPelicula,
      fecha: this.fecha,
      cupos: this.cupos
    };
  }
}
