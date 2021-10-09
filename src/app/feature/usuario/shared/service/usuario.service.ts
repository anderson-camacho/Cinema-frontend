import { environment } from '../../../../../environments/environment';
import { HttpService } from '@core-service/http.service';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

// Clase Abstracta para garantizar los metodos verificados
export abstract class UsuarioServiceImplement {
  public abstract consultarUsuario();

  public abstract consultarByIdUsuario(usuarioId: number);

  public abstract guardarUsuario(usuario: Usuario);

  public abstract actualizarUsuario(usuarioId: number, usuarioEditor: Usuario);

  public abstract eliminarUsuario(usuarioId: number);
}

// Servicio para uso de la conexion con el endpoint
@Injectable()
export class UsuarioService extends UsuarioServiceImplement {
  constructor(protected http: HttpService) { super(); }

  public consultarUsuario() {
    return this.http.doGet<Usuario[]>(`${environment.endpoint}/usuarios`, this.http.optsName('Consultar Usuarios'));
  }
  public consultarByIdUsuario(usuarioId: number) {
    return this.http.doGet<Usuario>(`${environment.endpoint}/usuarios/${usuarioId}`, this.http.optsName('Consultar Usuario por ID'));
  }
  public guardarUsuario(usuario: Usuario) {
    return this.http.doPost<Usuario, boolean>(`${environment.endpoint}/usuarios`, usuario,
      this.http.optsName('Crear usuarios'));
  }
  public actualizarUsuario(usuarioId: number, usuarioEditor: Usuario) {
    return this.http.doPut<Usuario, boolean>(`${environment.endpoint}/usuarios/${usuarioId}`, usuarioEditor,
      this.http.optsName('Actualizar Usuarios'));
  }
  public eliminarUsuario(usuarioId: number) {
    return this.http.doDelete<number>(`${environment.endpoint}/usuarios/${usuarioId}`, this.http.optsName('eliminar usuarios'));
  }
}
