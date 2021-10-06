import { UsuarioTestDataBuilder } from './../model/usuario.testdatabuilder';
import { HttpService } from '@core-service/http.service';
import { TestBed } from '@angular/core/testing';
import { environment } from './../../../../../environments/environment';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioService, UsuarioServiceImplement } from "./usuario.service";
import { Usuario } from '../model/usuario';
import { HttpResponse } from '@angular/common/http';

describe('Usuario Servicio Pruebas Unitarias', () => {
  let service: UsuarioServiceImplement;
  let httpMock: HttpTestingController;
  const apiEndpointUsuario = `${environment.endpoint}/usuarios`;
  const dummyUsuarioPre = { id: 50, nombre: "Actualizacion", fechaCreacion: "2021-10-06" };

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: UsuarioServiceImplement, useClass: UsuarioService }, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(UsuarioServiceImplement);
  });

  it('Usuario deberia ser crado', () => {
    const usuarioService: UsuarioServiceImplement = TestBed.inject(UsuarioServiceImplement);
    expect(usuarioService).toBeTruthy();
  });

  it('Usuario pruebas de gestion GET', () => {
    const dummyUsuarios = [
      new UsuarioTestDataBuilder('Usuario 1').build(),
      new UsuarioTestDataBuilder('Usuario 2').build()
    ];
    service.consultarUsuario().subscribe(usuarios => {
      expect(usuarios.length).toBe(2);
      expect(usuarios).toEqual(dummyUsuarios);
    });
    const req = httpMock.expectOne(apiEndpointUsuario);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsuarios);
  });

  it('Usuario preubas de gestion POST', () => {
    const dummySolicitud = { nombre: 'Persona cualquiera' };
    const dummyRespuesta = true;
    service.guardarUsuario(dummySolicitud as Usuario).subscribe((respuesta) => {
      expect(respuesta).toEqual(dummyRespuesta);
    });
    const req = httpMock.expectOne(apiEndpointUsuario);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('Usuario preubas de gestion PUT', () => {
    const dummyUsuarioPos = { nombre: "Actualizacion" };

    service.actualizarUsuario(dummyUsuarioPre.id, dummyUsuarioPos as Usuario)
    .subscribe((respuesta)=>{
      expect(respuesta).toEqual(false);
    });
    const req = httpMock.expectOne(`${apiEndpointUsuario}/${dummyUsuarioPre.id}`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body: false}));
  });

  it('Pelicula pruebas de gestion DELETE', () => {
    service.eliminarUsuario(dummyUsuarioPre.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(false);
    });
    const req = httpMock.expectOne(`${apiEndpointUsuario}/${dummyUsuarioPre.id}`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: false }));
  });

});
