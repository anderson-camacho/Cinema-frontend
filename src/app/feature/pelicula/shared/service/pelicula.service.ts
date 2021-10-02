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
    console.log("paso por guardar en el service ID: ",pelicula.id," Otro: ", pelicula);
    return this.http.doPost<Pelicula, boolean>(`${environment.endpoint}/peliculas`, pelicula,
                                                this.http.optsName('crear peliculas'));
  }

  public actualizar(pelicula: Pelicula, peliculaEditor: Pelicula) {
    console.log("paso por actualizar en el service ID: ",pelicula);
    return this.http.doPut<Pelicula, boolean>(`${environment.endpoint}/peliculas/${pelicula.id}`, peliculaEditor,
                                                this.http.optsName('actualizar peliculas'));
  }

  public eliminar(pelicula: Pelicula) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/peliculas/${pelicula.id}`,
                                                 this.http.optsName('eliminar peliculas'));
  }

}
