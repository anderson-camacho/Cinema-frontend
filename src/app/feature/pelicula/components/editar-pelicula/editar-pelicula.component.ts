import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../shared/service/pelicula.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
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
  peliculaForm: FormGroup;
  pelicula = {} as Pelicula;
  peliculaEnviar = {} as Pelicula;
  constructor(protected peliculaService: PeliculaService, private router: Router) { }

  ngOnInit() {
    this.construirFormularioPelicula();
    this.onSubmit();
  }

  onSubmit() {
    let id = localStorage.getItem("id");
    let titulo = localStorage.getItem("titulo");
    let director = localStorage.getItem("director");
    this.pelicula.id = +id;
    this.pelicula.titulo=titulo;
    this.pelicula.director = director;


    this.peliculaService.consultarById(this.pelicula).subscribe(
      data=>{
        this.pelicula = data;
        this.peliculaForm.patchValue(this.pelicula);
      }
    );
  }

  onSubmitActualizar(){
    this.peliculaEnviar = this.peliculaForm.value;

    this.peliculaService.actualizar(this.pelicula, this.peliculaEnviar)
    .pipe(
      tap(()=> this.router.navigate(['listar_pelicula'])),
      delay(2000)
    )
  .subscribe(
      data => {console.log(data)},
      error => {console.log(error)}
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
