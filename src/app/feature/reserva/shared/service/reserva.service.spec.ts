import { environment } from './../../../../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ReservaService, ReservaServiceImplement } from "./usuario.service";
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { ReservaTestDataBuilder } from '../model/reserva.testdatabuilder';
import { Reserva } from '../model/reserva';
import { HttpResponse } from '@angular/common/http';

describe('Reserva Servicio Pruebas Unitarias', () => {
  let service: ReservaServiceImplement;
  let httpMock: HttpTestingController;
  const apiEndpointReserva = `${environment.endpoint}/reservas`;
  const dummyReservaPre = { id: 50, nombre: "Actualizacion", fechaCreacion: "2021-10-06" };

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: ReservaServiceImplement, useClass: ReservaService }, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ReservaServiceImplement);
  });

  it('Reserva deberia ser crado', () => {
    const reservaService: ReservaServiceImplement = TestBed.inject(ReservaServiceImplement);
    expect(reservaService).toBeTruthy();
  });

  it('Reserva pruebas de gestion GET', () => {
    const dummyReserva = [
      new ReservaTestDataBuilder(1, 1, 1).build(),
      new ReservaTestDataBuilder(2, 2, 2).build()
    ];
    service.consultarReserva().subscribe(reservas => {
      expect(reservas.length).toBe(2);
      expect(reservas).toEqual(dummyReserva);
    });
    const req = httpMock.expectOne(apiEndpointReserva);
    expect(req.request.method).toBe('GET');
    req.flush(dummyReserva);
  });

  it('Reserva preubas de gestion POST', () => {
    const dummySolicitud = { id: 1, idUsuario: 1, idHorario: 1 };
    const dummyRespuesta = true;
    service.guardarReserva(dummySolicitud as Reserva).subscribe((respuesta) => {
      expect(respuesta).toEqual(dummyRespuesta);
    });
    const req = httpMock.expectOne(apiEndpointReserva);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('Reserva preubas de gestion PUT', () => {
    const dummyReservaPos = { id: 1, idUsuario: 1, idHorario: 1 };

    service.actualizarReserva(dummyReservaPre.id, dummyReservaPos as Reserva)
    .subscribe((respuesta)=>{
      expect(respuesta).toEqual(false);
    });
    const req = httpMock.expectOne(`${apiEndpointReserva}/${dummyReservaPre.id}`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body: false}));
  });

  it('Reserva pruebas de gestion DELETE', () => {
    service.eliminarReserva(dummyReservaPre.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(false);
    });
    const req = httpMock.expectOne(`${apiEndpointReserva}/${dummyReservaPre.id}`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: false }));
  });

});
