import { of } from 'rxjs';
import { EditarPeliculaComponent } from '@pelicula/components/editar-pelicula/editar-pelicula.component';
import { PeliculaService } from '@pelicula/shared/service/pelicula.service';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Pelicula } from '@pelicula/shared/model/pelicula';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ListarPeliculaComponent } from '../listar-pelicula/listar-pelicula.component';

describe('PELICULA - {Editar}', () => {

  let component: EditarPeliculaComponent;
  let fixture: ComponentFixture<EditarPeliculaComponent>;

  const dummyPelicula: Pelicula = new Pelicula({
    id: 1,
    titulo: 'Pelicula Lorem Impsum',
    director: 'lorem impsunm'
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPeliculaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'pelicula/listar', component: ListarPeliculaComponent}
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
        provide: PeliculaService, useValue: {
          consultarByIdPelicula: () => {
            return of(dummyPelicula);
          },
          actualizarPelicula: (_DUMMY_ID_PELICULA) => {
            return of(true);
          }
        },
      },
        HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('PELICULA {Crearia el componente}', () => {
    expect(component).toBeTruthy();
  });

  it('PELICULA {Deberia ser invalido el formulario cuando esta vacio}', () => {
    expect(!component.peliculaForm.valid).toBeFalsy();
  });

  it('PELICULA {Deberia ser invalido el boton guardar cuando el formulario es invalido}', () => {
    const botonGuardar = fixture.nativeElement.querySelector('#linkBotonEditarPelicula');
    expect(botonGuardar.disabled).toBeFalse();
  });

  it('PELICULA {Deberia obtener un objeto completo de la consulta especifica}', () => {
    component.onSubmit();
    expect(component.pelicula).toEqual(dummyPelicula);
  });


  it('PELICULA {Deberia enviar los datos a actualizar}', () => {
    const spyPelicula = spyOn(component, 'onSubmitActualizar').and.callThrough();
    component.onSubmitActualizar();
    fixture.detectChanges();
    expect(spyPelicula).toHaveBeenCalled();
  });

});
