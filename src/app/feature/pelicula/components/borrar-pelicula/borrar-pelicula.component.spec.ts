import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { BorrarPeliculaComponent } from './borrar-pelicula.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('BorrarProductoComponent', () => {
  let component: BorrarPeliculaComponent;
  let fixture: ComponentFixture<BorrarPeliculaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BorrarPeliculaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
