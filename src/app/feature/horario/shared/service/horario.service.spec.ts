import { HorarioTestDataBuilder } from './../model/horario.testdatabuilder';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HorarioService, HorarioServiceImplement } from '@horario/shared/service/horario.service';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Horario } from '../model/horario';
import { HttpResponse } from '@angular/common/http';

describe('Horario Service Pruebas Unitarias', () => {
  let service: HorarioServiceImplement;
  let httpMock: HttpTestingController;
  const apiEndopointHorario = `${environment.endpoint}/horarios`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HorarioServiceImplement, useClass: HorarioService }, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(HorarioServiceImplement);
  });

  it('Horario deberia ser creada', () => {
    const horarioService: HorarioServiceImplement = TestBed.inject(HorarioServiceImplement);
    expect(horarioService).toBeTruthy();
  });

  it('Horario pruebas de gestion GET', () => {
    const dummyHorarios = [
      new HorarioTestDataBuilder(1, '2022-10-11', 60).build(),
      new HorarioTestDataBuilder(2, '2022-12-21', 20).build()
    ];
    service.consultarHorario().subscribe(horarios => {
      expect(horarios.length).toBe(2);
      expect(horarios).toEqual(dummyHorarios);
    });
    const req = httpMock.expectOne(apiEndopointHorario);
    expect(req.request.method).toBe('GET');
    req.flush(dummyHorarios);
  });

  it('Horarios pruebas de gestion POST', () => {
    const dummySolicitud = { idPelicula: 1, fecha:'2022-10-11',cupos: 60 };
    const dummyRespuesta = true;
    service.guardarHorario(dummySolicitud as Horario).subscribe((respuesta) => {
      expect(respuesta).toEqual(dummyRespuesta);
    });
    const req = httpMock.expectOne(apiEndopointHorario);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });
  it('Horario pruebas de gestion PUT', () => {
    const dummyHorarioPre = {id: 1, idPelicula: 1, fecha:'2022-10-11',cupos: 60  };
    const dummyHorarioPos = {idPelicula: 2, fecha:'2022-11-11',cupos: 10  };
    service.actualizarHorario(dummyHorarioPre.id, dummyHorarioPos as Horario)
      .subscribe((respuesta) => {
        expect(respuesta).toEqual(false);
      });
    const req = httpMock.expectOne(`${apiEndopointHorario}/${dummyHorarioPre.id}`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({ body: false }));
  });
  it('Horariospruebas de gestion DELETE', () => {
    const dummyHorarioPre = { id: 1, idPelicula: 1, fecha:'2022-10-11',cupos: 60  };
    service.eliminarHorario(dummyHorarioPre.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(false);
    });
    const req = httpMock.expectOne(`${apiEndopointHorario}/${dummyHorarioPre.id}`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: false }));
  });
});
