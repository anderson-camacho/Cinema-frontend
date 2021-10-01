import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Pelicula } from '@pelicula/shared/model/pelicula';
import { PeliculaService } from '@pelicula/shared/service/pelicula.service';

@Component({
  selector: 'app-borrar-pelicula',
  templateUrl: './borrar-pelicula.component.html',
  styleUrls: ['./borrar-pelicula.component.scss']
})

export class BorrarPeliculaComponent implements OnInit {
  peliculaForm: FormGroup;
  pelicula = {} as Pelicula;
  constructor(protected peliculaService: PeliculaService) { }

  ngOnInit() {

  }

  onSubmitDelete(pelicula: Pelicula): void {
    this.peliculaService.eliminar(pelicula).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();

      },
      error => { console.log(error) }
    );

  }

}
