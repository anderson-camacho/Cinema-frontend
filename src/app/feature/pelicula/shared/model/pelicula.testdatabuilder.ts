import { Pelicula } from "./pelicula";

export class PeliculaTestDataBuilder{
  id: number;
  titulo: string;
  director: string;

  constructor() {
    this.titulo = "Ratatuille";
    this.director = "Disney";
  }

  build(): Pelicula{
    return{
      id: this.id,
      titulo: this.titulo,
      director: this.director
    };
  }
}
