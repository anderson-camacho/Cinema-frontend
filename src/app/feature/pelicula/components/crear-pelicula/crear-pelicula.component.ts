import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PeliculaService } from './../../shared/service/pelicula.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pelicula } from '@pelicula/shared/model/pelicula';
import { delay, tap } from 'rxjs/operators';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 10;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 60;

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html'
})
export class CrearPeliculaComponent implements OnInit {
  peliculaForm: FormGroup;
  pelicula = {} as Pelicula;
  constructor(protected peliculaService: PeliculaService, private router: Router) { }

  ngOnInit() {
    this.construirFormularioPelicula();
  }

  onSubmit() {
    this.peliculaService.guardarPelicula(this.peliculaForm.value)
      .pipe(
        tap(() => this.router.navigate(['pelicula/listar'])),
        delay(2000)
      )
      .subscribe(
        data => { console.log(data); },
        error => { console.log(error); }
      );
  }

  private construirFormularioPelicula() {
    this.peliculaForm = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      director: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
      Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    });
  }

}
