import { CrearReservaComponent } from '@reserva/component/crear-reserva/crear-reserva.component';
import { HttpService } from './../../../../core/services/http.service';
import { Horario } from './../../shared/model/horario';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HorarioService } from '@horario/shared/service/horario.service';
import { ListarHorarioComponent } from './listar-horario.component';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('HORARIO - {Listar, Eliminar}', () => {
  const DUMMY_ID_HORARIO = 1;

  let component: ListarHorarioComponent;
  let fixture: ComponentFixture<ListarHorarioComponent>;
  let horarioServicioStub: Partial<HorarioService>;

  let dummyListaHorarios: Horario[] = [
    new Horario(1, 1, '2021-12-31', 50),
    new Horario(2, 2, '2021-12-31', 50),
    new Horario(3, 3, '2021-12-31', 50),
    new Horario(4, 4, '2021-12-31', 50)
  ];

  horarioServicioStub = {
    consultarHorario: () => {
      return of(dummyListaHorarios);
    },
    eliminarHorario: () => {
      return of(DUMMY_ID_HORARIO);
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarHorarioComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'reserva/crear', component: CrearReservaComponent }
        ])
      ],
      providers: [{ provide: HorarioService, HttpService, useValue: horarioServicioStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('HORARIO {Crearia el componente}', () => {
    expect(component).toBeTruthy();
  });

  it('HORARIO {Comprobaria el componente cree la lista}', () => {
    component.listaHorarios.subscribe(resultado => {
      expect(resultado).toEqual(dummyListaHorarios);
    });
  });

  it('HORARIO {Comprobaria que la alerta de vacio este funcional}', () => {
    dummyListaHorarios = [];
    component.ngOnInit();
    fixture.detectChanges();
    const MSG = fixture.nativeElement.querySelector('#vacio');
    expect(MSG.innerHTML).toEqual(' Hey, No hay Horarios disponibles... ');
  });

  it('HORARIO {Comprobaria que el Boton reciba y envie a Actualizar}', () => {
    const spyHorario = spyOn(component, 'onSubmitAdd').and.callThrough();
    component.onSubmitAdd(DUMMY_ID_HORARIO);
    fixture.detectChanges();
    fixture.checkNoChanges();
    fixture.isStable();
    expect(spyHorario).toHaveBeenCalled();
  });

  it('HORARIO {Comprobaria que se elimino}', () => {
    const spyHorario = spyOn(component, 'onSubmitDeleteHorario').and.callThrough();
    component.onSubmitDeleteHorario(DUMMY_ID_HORARIO);
    fixture.detectChanges();
    expect(spyHorario).toHaveBeenCalled();
  });
});
