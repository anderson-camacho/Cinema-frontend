import { HttpService } from '@core-service/http.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Usuario } from './../../shared/model/usuario';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UsuarioService } from '../../shared/service/usuario.service';
import { ListarUsuarioComponent } from './listar-usuario.component';
import { of } from 'rxjs';

describe('Usuarios Consultar y Listar - Pruebas Unitarias', () => {
  let component: ListarUsuarioComponent;
  let fixture: ComponentFixture<ListarUsuarioComponent>;

  let usuarioServicioStub: Partial<UsuarioService>;

  let dummyListaUsuarios: Usuario[] = [
    new Usuario({ id: 1, nombre: 'Juan Esteban GAlindo Hernandez', fechaCreacion: '2021-10-06' }),
    new Usuario({ id: 2, nombre: 'Aquileo Camacho Camacho', fechaCreacion: '2021-10-06' }),
    new Usuario({ id: 3, nombre: 'Aracely Hernandez Hernandez', fechaCreacion: '2021-10-06' }),
    new Usuario({ id: 4, nombre: 'Alezander Camacho Palacios', fechaCreacion: '2021-10-06' })
  ];

  usuarioServicioStub = {
    consultarUsuario:()=>{
      return of(dummyListaUsuarios);
    }
  };

  beforeEach(waitForAsync(()=>{
    TestBed.configureTestingModule({
      declarations: [ListarUsuarioComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers:[{provide: UsuarioService, HttpService, useValue:usuarioServicioStub}]
    })
    .compileComponents();
  }));

  beforeEach(()=>{
    fixture=TestBed.createComponent(ListarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Pelicula deberia crear dos componentes', () => {
    expect(component).toBeTruthy();
    component.listaUsuarios.subscribe(resultado => {
      expect(resultado).toEqual(dummyListaUsuarios);
    });
  });

  it('Usuario deberia listar el componente', ()=>{
    expect(component).toBeTruthy();
  });

  it('Usuario no debe listar el componente', () => {
    expect(!component).toBeFalsy();
  });

  it('Pelicula deberia listar las peliculas registradas', () => {
    component.ngOnInit();

    component.listaUsuarios.subscribe(respuesta => {
      expect(respuesta).toEqual(dummyListaUsuarios);
    });
  });

  it('Pelicula deberia mostrar alerta sin peliculas registradas', () => {
    dummyListaUsuarios = [];
    component.ngOnInit();
    fixture.detectChanges();
    const MSG = fixture.nativeElement.querySelector('#vacio');
    console.log(MSG);
    expect(MSG.innerHTML).toEqual(' Hey, No hay usuarios disponibles... ');
  });

})
