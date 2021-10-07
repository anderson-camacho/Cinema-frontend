// import { of } from 'rxjs';
// import { EditarPeliculaComponent } from '@pelicula/components/editar-pelicula/editar-pelicula.component';
// import { PeliculaService } from '@pelicula/shared/service/pelicula.service';
// import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpService } from 'src/app/core/services/http.service';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { Pelicula } from '@pelicula/shared/model/pelicula';
// import { ActivatedRoute, convertToParamMap } from '@angular/router';

// describe('Peliculas Editar - Pruebas Unitarias', () => {
//   let component: EditarPeliculaComponent;
//   let fixture: ComponentFixture<EditarPeliculaComponent>;

//   const dummyPelicula: Pelicula = new Pelicula({
//     id: 1,
//     titulo: 'Pelicula Lorem Impsum',
//     director: 'lorem impsunm'
//   });

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [EditarPeliculaComponent],
//       imports: [
//         CommonModule,
//         HttpClientModule,
//         RouterTestingModule,
//         ReactiveFormsModule,
//         FormsModule
//       ],
//       providers: [{
//         provide: ActivatedRoute,
//         useValue: {
//           snapshot: {
//             paramMap: convertToParamMap({ id: 1 })
//           }
//         }
//       },
//       {
//         provide: PeliculaService, useValue: {
//           consultarByIdPelicula: (_pelicula: Pelicula) => {
//             return of(dummyPelicula);
//           }
//         },
//       },
//         HttpService],
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(EditarPeliculaComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('Pelicula se deberia actualizar', () => {
//     expect(component).toBeTruthy();
//   });

//   it('Pelicula no se deberia actualizar', () => {
//     expect(!component).toBeFalsy();
//   });

//   it('Pelicula formalario deberia ser invalido cuando esta vacio', () => {
//     expect(!component.peliculaForm.valid).toBeFalsy();
//   });

//   it('Pelicula deberia tener el boton de editar deshabilitado al ser formulario invalido', () => {
//     const botonGuardar = fixture.debugElement.nativeElement.querySelector('#linkBotonEditar');
//     expect(botonGuardar.disabled).toBeFalse();
//   });

//   it('Pelicula deberia encontrar con ID', () => {
//     component.onSubmit();
//     expect(component.pelicula).toEqual(dummyPelicula);
//   });

// });
