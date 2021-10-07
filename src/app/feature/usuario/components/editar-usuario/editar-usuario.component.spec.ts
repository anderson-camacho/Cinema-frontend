import { of } from 'rxjs';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Usuario } from "@usuario/shared/model/usuario";
import { ActivatedRoute, convertToParamMap } from "@angular/router";
import { EditarUsuarioComponent } from '@usuario/components/editar-usuario/editar-usuario.component';

describe('Usuarios Editar - Pruebas Unitarias', ()=>{
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
        RouterTestingModule,
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

  it('Usuario se deberia actualizar', () => {
    expect(component).toBeTruthy();
  });

  it('Usuario no se deberia actualizar', () => {
    expect(!component).toBeFalsy();
  });

  it('Usuario formalario deberia ser invalido cuando esta vacio', () => {
    expect(!component.usuarioForm.valid).toBeFalsy();
  });

  it('Usuario deberia tener el boton de editar deshabilitado al ser formulario invalido', () => {
    const botonGuardar = fixture.debugElement.nativeElement.querySelector('#linkBotonEditarUsuario');
    expect(botonGuardar.disabled).toBeFalse();
  });

  it('Usuario deberia encontrar con ID', () => {
    component.onSubmit();
    expect(component.usuario).toEqual(dummyUsuarios);
  });

});
