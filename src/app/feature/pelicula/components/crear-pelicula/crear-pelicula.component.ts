import { Component, OnInit } from '@angular/core';
import { PeliculaService } from './../../shared/service/pelicula.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Pelicula } from '@pelicula/shared/model/pelicula';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 10;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 60;

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.scss']
})
export class CrearPeliculaComponent implements OnInit {
  peliculaForm: FormGroup;
  pelicula = {} as Pelicula;
  constructor(protected peliculaService: PeliculaService) { }

  ngOnInit() {
    this.construirFormularioPelicula();
  }

  onSubmit() {
    console.log("paso por onSubmit",this.peliculaForm.value );
    this.pelicula.titulo = "Rapido y furioso";
    this.pelicula.director = "Anderson Camacho";
    this.peliculaService.guardar(this.peliculaForm.value).subscribe(
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
