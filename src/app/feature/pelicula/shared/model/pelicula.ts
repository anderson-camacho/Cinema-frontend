import { IPelicula } from './pelicula.interface';
export class Pelicula{
  id: number;
  titulo: string;
  director: string;

  constructor(pelicula: IPelicula) {
    this.id = pelicula.id;
    this.titulo = pelicula.titulo;
    this.director = pelicula.director;
  }
}
