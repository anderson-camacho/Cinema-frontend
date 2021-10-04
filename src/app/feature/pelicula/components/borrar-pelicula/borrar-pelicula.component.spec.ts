import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { BorrarPeliculaComponent } from './borrar-pelicula.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PeliculaService } from '@pelicula/shared/service/pelicula.service';
import { of } from 'rxjs';

describe('BorrarProductoComponent', () => {
  let component: BorrarPeliculaComponent;
  let fixture: ComponentFixture<BorrarPeliculaComponent>;
  let peliculaService: PeliculaService ;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BorrarPeliculaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [PeliculaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarPeliculaComponent);
    component = fixture.componentInstance;
    peliculaService = TestBed.inject(PeliculaService);
    spyOn(peliculaService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should delete', () => {
    expect(component).toBeTruthy();
  });
});
