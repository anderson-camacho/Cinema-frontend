import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../shared/service/pelicula.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pelicula } from '@pelicula/shared/model/pelicula';
import { delay, tap } from 'rxjs/operators';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 10;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 60;

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.scss']
})
export class EditarPeliculaComponent implements OnInit {
  peliculaId: number;
  peliculaForm: FormGroup;
  pelicula = {} as Pelicula;
  peliculaEnviar = {} as Pelicula;
  constructor(protected peliculaService: PeliculaService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.construirFormularioPelicula();
    this.peliculaId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.onSubmit();
  }

  onSubmit() {
    this.pelicula.id = this.peliculaId;
    this.peliculaService.consultarByIdPelicula(this.pelicula).subscribe(
      data => {
        this.pelicula = data;
        this.peliculaForm.patchValue(this.pelicula);
      }
    );
  }

  onSubmitActualizar() {
    this.peliculaEnviar = this.peliculaForm.value;
    this.peliculaService.actualizarPelicula(this.peliculaId, this.peliculaEnviar)
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
