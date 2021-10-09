import { IUsuario } from './usuario.interface';
export class Usuario {
  id: number;
  nombre: string;
  fechaCreacion: string;

  constructor(usuario: IUsuario) {
    this.id = usuario.id;
    this.nombre = usuario.nombre;
    this.fechaCreacion = usuario.fechaCreacion;
  }
}
