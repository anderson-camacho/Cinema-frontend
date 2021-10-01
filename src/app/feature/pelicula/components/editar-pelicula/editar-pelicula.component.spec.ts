import { CrearPeliculaComponent } from '@pelicula/components/crear-pelicula/crear-pelicula.component';
import { EditarPeliculaComponent } from './../editar-pelicula/editar-pelicula.component';
import { PeliculaService } from '@pelicula/shared/service/pelicula.service';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearProductoComponent', () => {
  let component: CrearPeliculaComponent;
  let fixture: ComponentFixture<CrearPeliculaComponent>;
  let peliculaService: PeliculaService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPeliculaComponent ],
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
    fixture = TestBed.createComponent(CrearPeliculaComponent);
    component = fixture.componentInstance;
    peliculaService = TestBed.inject(PeliculaService);
    spyOn(peliculaService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.peliculaForm.valid).toBeFalsy();
  });

  it('Registrando producto', () => {
    expect(component.peliculaForm.valid).toBeFalsy();
    component.peliculaForm.controls.id.setValue('001');
    component.peliculaForm.controls.descripcion.setValue('Producto test');
    expect(component.peliculaForm.valid).toBeTruthy();

    component.onSubmit();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
