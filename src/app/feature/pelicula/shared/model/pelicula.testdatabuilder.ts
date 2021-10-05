import { IPelicula } from './pelicula.interface';
import { Pelicula } from './pelicula';

export class PeliculaTestDataBuilder implements IPelicula {
  id: number;
  titulo: string;
  director: string;

  constructor(titulo: string, director: string) {
    this.titulo = titulo;
    this.director = director;
  }

  setID(id: number) {
    this.id = id;
  }

  build(): Pelicula {
    return {
      id: this.id,
      titulo: this.titulo,
      director: this.director
    };
  }
}
