import { environment } from 'src/environments/environment';
import { Pelicula } from './../model/pelicula';
import { HttpService } from '@core-service/http.service';
import { Injectable } from "@angular/core";

export abstract class PeliculaServiceImplement {
  public abstract consultarPelicula();

  public abstract consultarByIdPelicula(pelicula: Pelicula);

  public abstract guardarPelicula(pelicula: Pelicula);

  public abstract actualizarPelicula(pelicula: Pelicula, peliculaEditor: Pelicula);

  public abstract eliminarPelicula(pelicula: Pelicula);
}

@Injectable()
export class PeliculaService extends PeliculaServiceImplement {
  constructor(protected http: HttpService) { super(); }

  public consultarPelicula() {
    return this.http.doGet<Pelicula[]>(`${environment.endpoint}/peliculas`, this.http.optsName('consultar peliculas'));
  }

  public consultarByIdPelicula(pelicula: Pelicula) {
    return this.http.doGet<Pelicula>(`${environment.endpoint}/peliculas/${pelicula.id}`, this.http.optsName('consultar pelicula por ID'));
  }

  public guardarPelicula(pelicula: Pelicula) {
    return this.http.doPost<Pelicula, boolean>(`${environment.endpoint}/peliculas`, pelicula,
      this.http.optsName('crear peliculas'));
  }

  public actualizarPelicula(pelicula: Pelicula, peliculaEditor: Pelicula) {
    return this.http.doPut<Pelicula, boolean>(`${environment.endpoint}/peliculas/${pelicula.id}`, peliculaEditor,
      this.http.optsName('actualizar peliculas'));
  }

  public eliminarPelicula(pelicula: Pelicula) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/peliculas/${pelicula.id}`, this.http.optsName('eliminar peliculas'));
  }

}
