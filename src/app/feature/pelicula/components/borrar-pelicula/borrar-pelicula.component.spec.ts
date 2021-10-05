import { PeliculaService } from '@pelicula/shared/service/pelicula.service';
import { HttpService } from './../../../../core/services/http.service';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BorrarPeliculaComponent } from './borrar-pelicula.component';
import { CommonModule, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { MockLocationStrategy } from '@angular/common/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('Pelicula Eliminar - Preubas Unitarias', () => {
  let component: BorrarPeliculaComponent;
  let fixture: ComponentFixture<BorrarPeliculaComponent>;

  const dummyIdTransfer = 0;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BorrarPeliculaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: convertToParamMap({ id: 1 })
          }
        }
      },PeliculaService,
      { provide: LocationStrategy, useClass: MockLocationStrategy },
      HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Pelicula deberia ser eliminada', () => {
    expect(component).toBeTruthy();
  });

  // it('Pelicula onSubmitDelete', () => {
  //   const peliculaServicioSpy = jasmine.createSpyObj('PeliculaService', ['eliminarPelicula']);
  //   const dummyPeliculaLocal = dummyPelicula;
  //   peliculaServicioSpy.eliminarPelicula(dummyPeliculaLocal).and.returnPelicula(null);
  //   peliculaService = new PeliculaService(peliculaServicioSpy);

  //   expect(peliculaService.eliminarPelicula(dummyPeliculaLocal.id)).toBeTruthy();

  //   fixture.detectChanges();

  // })

  it('Debe eliminar la transferencia', async () => {
    const spyRedirect = spyOn(component, 'onSubmitDelete').and.callThrough();
    component.onSubmitDelete(dummyIdTransfer);
    fixture.detectChanges();
    expect(spyRedirect).toHaveBeenCalled();
  });
});
