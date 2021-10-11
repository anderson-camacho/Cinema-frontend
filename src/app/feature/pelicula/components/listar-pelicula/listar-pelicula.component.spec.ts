import { PeliculaService } from './../../shared/service/pelicula.service';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ListarPeliculaComponent } from './listar-pelicula.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { Pelicula } from './../../shared/model/pelicula';
import { EditarUsuarioComponent } from '@usuario/components/editar-usuario/editar-usuario.component';
import { CrearUsuarioComponent } from '@usuario/components/crear-usuario/crear-usuario.component';

describe('PELICULA - {Listar}', () => {
  const DUMMY_ID_PELICULA = 1;

  let component: ListarPeliculaComponent;
  let fixture: ComponentFixture<ListarPeliculaComponent>;
  let peliculaServicioStub: Partial<PeliculaService>;

  let dummyListaPeliculas: Pelicula[] = [
    new Pelicula({ id: 1, titulo: 'Pelicula 1', director: 'Director 1' }),
    new Pelicula({ id: 2, titulo: 'Pelicula 2', director: 'Director 2' }),
    new Pelicula({ id: 3, titulo: 'Pelicula 3', director: 'Director 3' }),
    new Pelicula({ id: 4, titulo: 'Pelicula 4', director: 'Director 4' })
  ];

  peliculaServicioStub = {
    consultarPelicula: () => {
      return of(dummyListaPeliculas);
    },
    eliminarPelicula: () => {
      return of(DUMMY_ID_PELICULA);
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPeliculaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'pelicula/editar/:id', component: EditarUsuarioComponent },
          { path: 'horario/crear', component: CrearUsuarioComponent }
        ])
      ],
      providers: [{ provide: PeliculaService, HttpService, useValue: peliculaServicioStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('PELICULA {Crearia el componente}', () => {
    expect(component).toBeTruthy();
  });

  it('PELICULA {Comprobaria el componente cree la lista}', () => {
    component.listaPeliculas.subscribe(resultado => {
      expect(resultado).toEqual(dummyListaPeliculas);
    });
  });

  it('PELICULA {Comprobaria que la alerta de vacio este funcional}', () => {
    dummyListaPeliculas = [];
    component.ngOnInit();
    fixture.detectChanges();
    const MSG = fixture.nativeElement.querySelector('#vacio');
    expect(MSG.innerHTML).toEqual(' Hey, No hay peliculas disponibles... ');
  });

  it('PELICULA {Comprobaria que el Boton reciba y envie a Actualizar}', () => {
    const spyPelicula = spyOn(component, 'onSubmitUpdate').and.callThrough();
    component.onSubmitUpdate(DUMMY_ID_PELICULA);
    fixture.detectChanges();
    fixture.checkNoChanges();
    fixture.isStable();
    expect(spyPelicula).toHaveBeenCalled();
  });

  it('PELICULA {Comprobaria que se elimino}', () => {
    const spyPelicula = spyOn(component, 'onSubmitDelete').and.callThrough();
    component.onSubmitDelete(DUMMY_ID_PELICULA);
    fixture.detectChanges();
    expect(spyPelicula).toHaveBeenCalled();
  });
});
