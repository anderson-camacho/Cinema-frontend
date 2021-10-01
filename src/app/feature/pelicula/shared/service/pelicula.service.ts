import { environment } from 'src/environments/environment';
import { Pelicula } from './../model/pelicula';
import { HttpService } from '@core-service/http.service';
import { Injectable } from "@angular/core";

@Injectable()
export class PeliculaService {
  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Pelicula[]>(`${environment.endpoint}/peliculas`, this.http.optsName('consultar pelicula'));
  }

  public consultarById(pelicula: Pelicula) {
    return this.http.doGet<Pelicula>(`${environment.endpoint}/peliculas/${pelicula.id}`, this.http.optsName('consultar pelicula por ID'));
  }

  public guardar(pelicula: Pelicula) {
    console.log("paso por guardar en el service",pelicula);
    return this.http.doPost<Pelicula, boolean>(`${environment.endpoint}/peliculas`, pelicula,
                                                this.http.optsName('crear/actualizar peliculas'));
  }

  public eliminar(pelicula: Pelicula) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/peliculas/${pelicula.id}`,
                                                 this.http.optsName('eliminar peliculas'));
  }

}
