// import { PeliculaService } from './../../shared/service/pelicula.service';
// import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
// import { of } from 'rxjs';
// import { ListarPeliculaComponent } from './listar-horario.component';
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpService } from 'src/app/core/services/http.service';
// import { Pelicula } from './../../shared/model/pelicula';

// describe('Peliculas Consultar y Listar - Pruebas Unitarias', () => {
//   let component: ListarPeliculaComponent;
//   let fixture: ComponentFixture<ListarPeliculaComponent>;

//   let peliculaServicioStub: Partial<PeliculaService>;

//   let dummyListaPeliculas: Pelicula[] = [
//     new Pelicula({ id: 1, titulo: 'Pelicula 1', director: 'Director 1' }),
//     new Pelicula({ id: 2, titulo: 'Pelicula 2', director: 'Director 2' }),
//     new Pelicula({ id: 3, titulo: 'Pelicula 3', director: 'Director 3' }),
//     new Pelicula({ id: 4, titulo: 'Pelicula 4', director: 'Director 4' })
//   ];

//   peliculaServicioStub = {
//     consultarPelicula: () => {
//       return of(dummyListaPeliculas);
//     }
//   };

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ListarPeliculaComponent],
//       imports: [
//         CommonModule,
//         HttpClientModule,
//         RouterTestingModule
//       ],
//       providers: [{ provide: PeliculaService, HttpService, useValue: peliculaServicioStub }]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ListarPeliculaComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('Pelicula deberia crear dos componentes', () => {
//     expect(component).toBeTruthy();
//     component.listaPeliculas.subscribe(resultado => {
//       expect(resultado).toEqual(dummyListaPeliculas);
//     });
//   });

//   it('Pelicula deberia listar el componente', () => {
//     expect(component).toBeTruthy();
//   });

//   it('Pelicula no debe listar el componente', () => {
//     expect(!component).toBeFalsy();
//   });

//   it('Pelicula deberia listar las peliculas registradas', () => {
//     component.ngOnInit();
//     component.listaPeliculas.subscribe(respuesta => {
//       expect(respuesta).toEqual(dummyListaPeliculas);
//     });
//   });

//   it('Pelicula deberia mostrar alerta sin peliculas registradas', () => {
//     dummyListaPeliculas = [];
//     component.ngOnInit();
//     fixture.detectChanges();
//     const MSG = fixture.nativeElement.querySelector('#vacio');
//     console.log(MSG);
//     expect(MSG.innerHTML).toEqual(' Hey, No hay peliculas disponibles... ');
//   });

//   // it('Debe eliminar la transferencia', async () => {
//   //   service.eliminarPelicula(1).subscribe( respuesta =>{
//   //     fixture.detectChanges();
//   //     expect(respuesta).toBeTruthy();
//   //   });
//   // });
// });
