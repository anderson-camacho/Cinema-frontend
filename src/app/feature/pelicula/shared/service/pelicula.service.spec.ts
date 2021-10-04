import { ResultadoPelicula } from './../model/ResultadoPelicula';
import { PeliculaTestDataBuilder } from './../model/pelicula.testdatabuilder';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PeliculaService, PeliculaServiceImplement } from '@pelicula/shared/service/pelicula.service';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Pelicula } from '../model/pelicula';
import { HttpResponse } from '@angular/common/http';
describe('PeliculaService sin soporte de pruebas', () => {
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

  it('should be created', () => {
    const peliculaService: PeliculaServiceImplement = TestBed.inject(PeliculaServiceImplement);
    expect(peliculaService).toBeTruthy();
  });

  it('deberia listar productos', () => {
    const dummyPeliculas = [
      new PeliculaTestDataBuilder().build(),
      new PeliculaTestDataBuilder().build()
    ];
    service.consultarPelicula().subscribe(peliculas => {
      expect(peliculas.length).toBe(2);
      expect(peliculas).toEqual(dummyPeliculas);
    });
    const req = httpMock.expectOne(apiEndpointPelicula);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPeliculas);
  });

  it('deberia crear una pelicula', () => {
    const dummySolicitud = { titulo: 'pelicula123', director: 'director123' };
    const dummyRespuesta = { valor: 1 };
    service.guardarPelicula(dummySolicitud as Pelicula).subscribe((respuesta) => {
      expect(respuesta).toEqual(dummyRespuesta);
    });
    const req = httpMock.expectOne(apiEndpointPelicula);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<{ valor: ResultadoPelicula }>({ body: { valor: dummyRespuesta } }));
  });

});
