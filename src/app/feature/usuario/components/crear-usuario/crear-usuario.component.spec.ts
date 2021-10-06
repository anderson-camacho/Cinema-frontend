import { HttpService } from '@core-service/http.service';
import { UsuarioService } from './../../shared/service/usuario.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CrearUsuarioComponent } from "./crear-usuario.component";

describe('Usuario crear - Pruebas Unitarias', ()=> {
  let component: CrearUsuarioComponent;
  let fixture: ComponentFixture<CrearUsuarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearUsuarioComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [UsuarioService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Usuario se deberia crear', () => {
    expect(component).toBeTruthy();
  });

  it('Usuario formalario deberia ser invalido cuando esta vacio', () => {
    expect(component.usuarioForm.valid).toBeFalsy();
  });

  it('Usuario Formulario deberia crear y guardar', () => {
    expect(component.usuarioForm.valid).toBeFalsy();
    component.usuarioForm.controls.nombre.setValue('Anderson Camacho Palacios');
    fixture.detectChanges();
    component.onSubmit();
    expect(component.usuarioForm.valid).toBeTruthy();
  });

});
