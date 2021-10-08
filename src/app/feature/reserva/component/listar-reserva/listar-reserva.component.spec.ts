import { CommonModule } from '@angular/common';
import { HttpService } from '@core/services/http.service';
import { Reserva } from './../../shared/model/reserva';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReservaService } from '@reserva/shared/service/usuario.service';
import { ListarReservaComponent } from './listar-reserva.component';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('Usuarios Consultar y Listar - Pruebas Unitarias', () => {
  const DUMMY_ID_RESERVA = 1;
  let component: ListarReservaComponent;
  let fixture: ComponentFixture<ListarReservaComponent>;
  let reservaServicioStub: Partial<ReservaService>;

  let dummyListaReserva: Reserva[] = [
    new Reserva( 1, 1, 2 ),
    new Reserva( 2, 2, 1 ),
    new Reserva( 3, 3, 3 ),
    new Reserva( 4, 4, 2 )
  ];

  reservaServicioStub = {
    consultarReserva:()=>{
      return of(dummyListaReserva);
    },
    eliminarReserva:()=>{
      return of (DUMMY_ID_RESERVA);
    }
  };

  beforeEach(waitForAsync(()=>{
    TestBed.configureTestingModule({
      declarations: [ListarReservaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers:[{provide: ReservaService, HttpService, useValue:reservaServicioStub}]
    })
    .compileComponents();
  }));

  beforeEach(()=>{
    fixture=TestBed.createComponent(ListarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('RESERVA {Crearia el componente}', ()=>{
    expect(component).toBeTruthy();
  });

  it('RESERVA {Comprobaria el componente cree la lista}', () => {
    component.listaReservas.subscribe(resultado => {
      expect(resultado).toEqual(dummyListaReserva);
    });
  });



//   it('Usuario no debe listar el componente', () => {
//     expect(!component).toBeFalsy();
//   });

//   it('Pelicula deberia listar las peliculas registradas', () => {
//     component.ngOnInit();

//     component.listaUsuarios.subscribe(respuesta => {
//       expect(respuesta).toEqual(dummyListaUsuarios);
//     });
//   });

//   it('Pelicula deberia mostrar alerta sin peliculas registradas', () => {
//     dummyListaUsuarios = [];
//     component.ngOnInit();
//     fixture.detectChanges();
//     const MSG = fixture.nativeElement.querySelector('#vacio');
//     console.log(MSG);
//     expect(MSG.innerHTML).toEqual(' Hey, No hay usuarios disponibles... ');
//   });

});
