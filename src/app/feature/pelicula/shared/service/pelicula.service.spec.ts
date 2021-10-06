import { PeliculaTestDataBuilder } from './../model/pelicula.testdatabuilder';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PeliculaService, PeliculaServiceImplement } from '@pelicula/shared/service/pelicula.service';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Pelicula } from '../model/pelicula';
import { HttpResponse } from '@angular/common/http';

describe('Pelicula Service Pruebas Unitarias', () => {
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

  it('Pelicula deberia ser creada', () => {
    const peliculaService: PeliculaServiceImplement = TestBed.inject(PeliculaServiceImplement);
    expect(peliculaService).toBeTruthy();
  });

  it('Pelicula pruebas de gestion GET', () => {
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

  it('Pelicula pruebas de gestion POST', () => {
    const dummySolicitud = { titulo: 'pelicula123', director: 'director123' };
    const dummyRespuesta = true;
    service.guardarPelicula(dummySolicitud as Pelicula).subscribe((respuesta) => {
      expect(respuesta).toEqual(dummyRespuesta);
    });
    const req = httpMock.expectOne(apiEndpointPelicula);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });
  it('Pelicula pruebas de gestion PUT', () => {
    const dummyPeliculaPre = {id: 50, titulo: 'pelicula123', director: 'director123'};
    const dummyPeliculaPos = {titulo: 'pelicula456', director: 'director456'};
    service.actualizarPelicula(dummyPeliculaPre.id, dummyPeliculaPos as Pelicula).subscribe((respuesta) => {
      expect(respuesta).toEqual(false);
    });
    const req = httpMock.expectOne(`${apiEndpointPelicula}/${dummyPeliculaPre.id}`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body: false}));
  });
  it('Pelicula pruebas de gestion DELETE', () => {
    const dummyPeliculaPre = {id: 50, titulo: 'pelicula123', director: 'director123' };
    service.eliminarPelicula(dummyPeliculaPre.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(false);
    });
    const req = httpMock.expectOne(`${apiEndpointPelicula}/${dummyPeliculaPre.id}`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: false}));
  });
});
