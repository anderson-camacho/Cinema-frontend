import { HttpService } from '@core-service/http.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Usuario } from './../../shared/model/usuario';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UsuarioService } from '../../shared/service/usuario.service';
import { ListarUsuarioComponent } from './listar-usuario.component';
import { of } from 'rxjs';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';

describe('USUARIO - {Listar, Eliminar}', () => {
  const DUMMY_ID_USUARIO = 1;

  let component: ListarUsuarioComponent;
  let fixture: ComponentFixture<ListarUsuarioComponent>;
  let usuarioServicioStub: Partial<UsuarioService>;

  let dummyListaUsuarios: Usuario[] = [
    new Usuario({ id: 1, nombre: 'Juan Esteban Galindo Hernandez', fechaCreacion: '2021-10-06' }),
    new Usuario({ id: 2, nombre: 'Aquileo Camacho Camacho', fechaCreacion: '2021-10-06' }),
    new Usuario({ id: 3, nombre: 'Aracely Hernandez Hernandez', fechaCreacion: '2021-10-06' }),
    new Usuario({ id: 4, nombre: 'Alexander Camacho Palacios', fechaCreacion: '2021-10-06' })
  ];

  usuarioServicioStub = {
    consultarUsuario: () => {
      return of(dummyListaUsuarios);
    },
    eliminarUsuario: () => {
      return of(DUMMY_ID_USUARIO);
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarUsuarioComponent],
      imports: [CommonModule, HttpClientModule, RouterTestingModule.withRoutes([
        { path: 'usuario/editar/:id', component: EditarUsuarioComponent}
    ]),],
      providers: [{ provide: UsuarioService, HttpService, useValue: usuarioServicioStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('USUARIO {Crearia el componente}', () => {
    expect(component).toBeTruthy();
  });

  it('USUARIO {Comprobaria el componente cree la lista}', () => {
    component.listaUsuarios.subscribe(resultado => {
      expect(resultado).toEqual(dummyListaUsuarios);
    });
  });

  it('USUARIO {Comprobaria que el Boton reciba y envie a Actualizar}', () => {
    const spyUsuario = spyOn(component, 'onSubmitUpdate').and.callThrough();
    component.onSubmitUpdate(DUMMY_ID_USUARIO);
    fixture.detectChanges();
    fixture.checkNoChanges();
    fixture.isStable();
    expect(spyUsuario).toHaveBeenCalled()
  });

  it('USUARIO {Comprobaria que la alerta de vacio este funcional', () => {
    dummyListaUsuarios = [];
    component.ngOnInit();
    fixture.detectChanges();
    const MSG = fixture.nativeElement.querySelector('#AlertaListaDeUsauriosVacia');
    console.log(MSG);
    expect(MSG.innerHTML).toEqual(' Hey, No hay usuarios disponibles... ');
  });

  it('USUARIO {Comprobaria que se elimino}', () => {
    const spyUsuario = spyOn(component, 'onSubmitDelete').and.callThrough();
    component.onSubmitDelete(DUMMY_ID_USUARIO);
    fixture.detectChanges();
    expect(spyUsuario).toHaveBeenCalled();
  });
})
