export class Pelicula {
  id: number;
  titulo: string;
  director: string;

  constructor(id: number, titulo: string, director: string) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
  }
}