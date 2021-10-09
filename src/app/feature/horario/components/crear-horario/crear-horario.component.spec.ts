import { ListarHorarioComponent } from './../listar-horario/listar-horario.component';
import { HorarioService } from '@horario/shared/service/horario.service';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { CrearHorarioComponent } from "./crear-horario.component";
import { HttpService } from '@core/services/http.service';

describe('HORARIO - {Crear}', () => {

  let component: CrearHorarioComponent;
  let fixture: ComponentFixture<CrearHorarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearHorarioComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'horario/listar', component: ListarHorarioComponent}
      ]),
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [HorarioService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('HORARIO {Deberia crear componente', () => {
    expect(component).toBeTruthy();
  });

  it('HORARIO {Deberia ser invalido el formulario}', () => {
    expect(component.horarioForm.valid).toBeFalsy();
  });

  it('HORARIO {Deberia crear usuario', () => {
    expect(component.horarioForm.valid).toBeFalsy();
    component.horarioForm.controls.fecha.setValue('2025-12-21');
    component.horarioForm.controls.cupos.setValue('directorPrueba');
    fixture.detectChanges();
    component.onSubmit();
    expect(component.horarioForm.valid).toBeTruthy();
  });
});
