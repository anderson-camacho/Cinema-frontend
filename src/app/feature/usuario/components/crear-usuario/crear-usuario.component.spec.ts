import { HttpService } from '@core-service/http.service';
import { UsuarioService } from './../../shared/service/usuario.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CrearUsuarioComponent } from "./crear-usuario.component";
import { ListarUsuarioComponent } from '../listar-usuario/listar-usuario.component';

describe('USUARIO - {Crear}', () => {
  let component: CrearUsuarioComponent;
  let fixture: ComponentFixture<CrearUsuarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearUsuarioComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'usuario/listar', component: ListarUsuarioComponent}
      ]),
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

  it('USUARIO {Deberia crear componente}', () => {
    expect(component).toBeTruthy();
  });

  it('USUARIO {Deberia ser invalido el formulario}', () => {
    expect(component.usuarioForm.valid).toBeFalsy();
  });

  it('USUARIO {Deberia crear usuario}', () => {
    expect(component.usuarioForm.valid).toBeFalsy();
    component.usuarioForm.controls.nombre.setValue('Anderson Camacho Palacios');
    fixture.detectChanges();
    component.onSubmit();
    expect(component.usuarioForm.valid).toBeTruthy();
  });
});
