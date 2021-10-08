import { environment } from 'src/environments/environment';
import { Pelicula } from './../model/pelicula';
import { HttpService } from '@core-service/http.service';
import { Injectable } from '@angular/core';

//Clase Abstracta para garantizar los metodos verificados
export abstract class PeliculaServiceImplement {
  public abstract consultarPelicula();

  public abstract consultarByIdPelicula(pelicula: Pelicula);

  public abstract guardarPelicula(pelicula: Pelicula);

  public abstract actualizarPelicula(peliculaId: number, peliculaEditor: Pelicula);

  public abstract eliminarPelicula(peliculaId: number);
}

//Servicio para uso de la conexion con el endpoint
@Injectable()
export class PeliculaService extends PeliculaServiceImplement {
  constructor(protected http: HttpService) { super(); }

  public consultarPelicula() {
    return this.http.doGet<Pelicula[]>(`${environment.endpoint}/peliculas`, this.http.optsName('Consultar Peliculas'));
  }

  public consultarByIdPelicula(pelicula: Pelicula) {
    return this.http.doGet<Pelicula>(`${environment.endpoint}/peliculas/${pelicula.id}`, this.http.optsName('Consultar Pelicula por ID'));
  }

  public guardarPelicula(pelicula: Pelicula) {
    return this.http.doPost<Pelicula, boolean>(`${environment.endpoint}/peliculas`, pelicula,
      this.http.optsName('Crear Peliculas'));
  }

  public actualizarPelicula(peliculaId: number, peliculaEditor: Pelicula) {
    return this.http.doPut<Pelicula, boolean>(`${environment.endpoint}/peliculas/${peliculaId}`, peliculaEditor,
      this.http.optsName('Actualizar Peliculas'));
  }

  public eliminarPelicula(peliculaId: number) {
    return this.http.doDelete<number>(`${environment.endpoint}/peliculas/${peliculaId}`, this.http.optsName('Eliminar Peliculas'));
  }
}
