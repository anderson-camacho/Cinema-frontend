export class Horario {
  id: number;
  idPelicula: number;
  fecha: string;
  cupos: number;
  constructor(id: number, idPelicula: number, fecha: string, cupos: number) {
    this.id = id;
    this.idPelicula = idPelicula;
    this.fecha = fecha;
    this.cupos = cupos;
  }
}
