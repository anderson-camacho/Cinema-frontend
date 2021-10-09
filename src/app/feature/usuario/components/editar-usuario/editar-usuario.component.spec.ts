import { ListarUsuarioComponent } from '@usuario/components/listar-usuario/listar-usuario.component';
import { of } from 'rxjs';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Usuario } from "@usuario/shared/model/usuario";
import { ActivatedRoute, convertToParamMap } from "@angular/router";
import { EditarUsuarioComponent } from '@usuario/components/editar-usuario/editar-usuario.component';
import { UsuarioService } from '@usuario/shared/service/usuario.service';

describe('USUARIO - {Editar}', ()=>{
  let component: EditarUsuarioComponent;
  let fixture: ComponentFixture<EditarUsuarioComponent>;

  const dummyUsuarios: Usuario = new Usuario({
    id: 1,
    nombre: 'Ana Ramirez',
    fechaCreacion: '2021-10-06'
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditarUsuarioComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'usuario/listar', component: ListarUsuarioComponent}
      ]),
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: convertToParamMap({ id: 1 })
          }
        }
      },
      {
        provide: UsuarioService, useValue: {
          consultarByIdUsuario: (_usuario: Usuario) => {
            return of(dummyUsuarios);
          },
          actualizarUsuario: (_DUMMY_ID_USUARIO) => {
            return of(true);
          }
        },
      },
        HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('USUARIO {Crearia el componente}', () => {
    expect(component).toBeTruthy();
  });

  it('USUARIO {Deberia ser invalido el formulario cuando esta vacio}', () => {
    expect(!component.usuarioForm.valid).toBeFalsy();
  });

  it('USUARIO {Deberia ser invalido el boton guardar cuando el formulario es invalido}', () => {
    const botonGuardar = fixture.debugElement.nativeElement.querySelector('#linkBotonEditarUsuario');
    expect(botonGuardar.disabled).toBeFalse();
  });

  it('USUARIO {Deberia obtener un objeto completo de la consulta especifica}', () => {
    component.onSubmit();
    expect(component.usuario).toEqual(dummyUsuarios);
  });

  it('PELICULA {Deberia enviar los datos a actualizar}', () => {
    const spyUsuario = spyOn(component, 'onSubmitActualizarUsuario').and.callThrough();
    component.onSubmitActualizarUsuario();
    fixture.detectChanges();
    expect(spyUsuario).toHaveBeenCalled();

  });


});
