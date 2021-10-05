import { EditarPeliculaComponent } from '@pelicula/components/editar-pelicula/editar-pelicula.component';
import { PeliculaService } from '@pelicula/shared/service/pelicula.service';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('EditarPeliculaComponent', () => {
  let component: EditarPeliculaComponent;
  let fixture: ComponentFixture<EditarPeliculaComponent>;
  let peliculaService: PeliculaService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPeliculaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [PeliculaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPeliculaComponent);
    component = fixture.componentInstance;
    peliculaService = TestBed.inject(PeliculaService);
    spyOn(peliculaService, 'actualizarPelicula').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should update', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.peliculaForm.valid).toBeFalsy();
  });

  it('Actualizando pelicula', () => {
    expect(component.peliculaForm.valid).toBeFalsy();
    component.peliculaForm.controls.titulo.setValue('peliculaActualizadaTitulo');
    component.peliculaForm.controls.director.setValue('pelicualActualizadaDirector');
    expect(component.peliculaForm.valid).toBeTruthy();

    component.onSubmit();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });

});
