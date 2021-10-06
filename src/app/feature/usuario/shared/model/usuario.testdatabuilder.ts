import { Usuario } from "./usuario";

export class UsuarioTestDataBuilder {
  id: number;
  nombre: string;
  fechaCreacion: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  setID(id: number) {
    this.id = id;
  }

  setFechaCreacion(fechaCreacion: string) {
    this.fechaCreacion = fechaCreacion;
  };

  build(): Usuario{
    return{
      id: this.id,
      nombre: this.nombre,
      fechaCreacion: this.fechaCreacion
    }
  }
}
