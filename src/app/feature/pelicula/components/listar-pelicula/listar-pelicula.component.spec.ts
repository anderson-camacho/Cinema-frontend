import { Pelicula } from './../../shared/model/pelicula';
import { PeliculaService } from './../../shared/service/pelicula.service';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarPeliculaComponent } from './listar-pelicula.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';

describe('Pruebas Unitarias de Consulta a la Lista', () => {
  let component: ListarPeliculaComponent;
  let fixture: ComponentFixture<ListarPeliculaComponent>;
  let peliculaService: PeliculaService;
  const dummyListaPeliculas: Pelicula[] = [new Pelicula(1, 'Pelicula 1', 'Anderson'), new Pelicula(2, 'Pelicula 2', 'Ana')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPeliculaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [PeliculaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPeliculaComponent);
    component = fixture.componentInstance;
    peliculaService = TestBed.inject(PeliculaService);
    spyOn(peliculaService, 'consultarPelicula').and.returnValue(
      of(dummyListaPeliculas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaPeliculas.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});
