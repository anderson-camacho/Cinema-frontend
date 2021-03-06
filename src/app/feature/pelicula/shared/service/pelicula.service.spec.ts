import { PeliculaTestDataBuilder } from './../model/pelicula.testdatabuilder';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PeliculaService, PeliculaServiceImplement } from '@pelicula/shared/service/pelicula.service';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Pelicula } from '../model/pelicula';
import { HttpResponse } from '@angular/common/http';

describe('PELICULA SERVICIO', () => {
  let service: PeliculaServiceImplement;
  let httpMock: HttpTestingController;
  const apiEndpointPelicula = `${environment.endpoint}/peliculas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: PeliculaServiceImplement, useClass: PeliculaService }, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PeliculaServiceImplement);
  });

  it('PELICULA {Deberia ser creada}', () => {
    const peliculaService: PeliculaServiceImplement = TestBed.inject(PeliculaServiceImplement);
    expect(peliculaService).toBeTruthy();
  });

  it('PELICULA {Deberia consultar GET}', () => {
    const dummyPeliculas = [
      new PeliculaTestDataBuilder('Pelicula 1', 'Director 1').build(),
      new PeliculaTestDataBuilder('Director 2', 'Pelicula 2').build()
    ];
    service.consultarPelicula().subscribe(peliculas => {
      expect(peliculas.length).toBe(2);
      expect(peliculas).toEqual(dummyPeliculas);
    });
    const req = httpMock.expectOne(apiEndpointPelicula);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPeliculas);
  });

  it('PELICULA {Deberia insertar POST}', () => {
    const dummySolicitud = { titulo: 'pelicula123', director: 'director123' };
    const dummyRespuesta = true;
    service.guardarPelicula(dummySolicitud as Pelicula).subscribe((respuesta) => {
      expect(respuesta).toEqual(dummyRespuesta);
    });
    const req = httpMock.expectOne(apiEndpointPelicula);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });
  it('PELICULA {Deberia actualizar PUT}', () => {
    const dummyPeliculaPre = { id: 50, titulo: 'pelicula123', director: 'director123' };
    const dummyPeliculaPos = { titulo: 'pelicula456', director: 'director456' };
    service.actualizarPelicula(dummyPeliculaPre.id, dummyPeliculaPos as Pelicula)
      .subscribe((respuesta) => {
        expect(respuesta).toEqual(false);
      });
    const req = httpMock.expectOne(`${apiEndpointPelicula}/${dummyPeliculaPre.id}`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({ body: false }));
  });
  it('PELICULA {Deberia eliminar DELETEa}', () => {
    const dummyPeliculaPre = { id: 50, titulo: 'pelicula123', director: 'director123' };
    service.eliminarPelicula(dummyPeliculaPre.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(false);
    });
    const req = httpMock.expectOne(`${apiEndpointPelicula}/${dummyPeliculaPre.id}`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: false }));
  });
});
