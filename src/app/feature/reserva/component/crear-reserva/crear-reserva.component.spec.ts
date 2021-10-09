import { ListarReservaComponent } from './../listar-reserva/listar-reserva.component';
import { HttpService } from './../../../../core/services/http.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ReservaService } from '@reserva/shared/service/usuario.service';
import { CrearReservaComponent } from "./crear-reserva.component";

describe('RESERVA - {Crear}', ()=> {
  let component: CrearReservaComponent;
  let fixture: ComponentFixture<CrearReservaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearReservaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'reserva/listar', component: ListarReservaComponent}
      ]),
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ReservaService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('RESERVA {Deberia crear componente', () => {
    expect(component).toBeTruthy();
  });

  it('RESERVA {Deberia ser invalido el formulario}', () => {
    expect(component.reservaForm.valid).toBeFalsy();
  });

  it('HORARIO {Deberia crear usuario', () => {
    expect(component.reservaForm.valid).toBeFalsy();
    component.reservaForm.controls.idUsuario.setValue(1);
    fixture.detectChanges();
    component.onSubmitCrearReserva();
    expect(component.reservaForm.valid).toBeTruthy();
  });

});
