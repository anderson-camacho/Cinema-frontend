import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from '@pelicula/shared/model/pelicula';
import { PeliculaService } from '@pelicula/shared/service/pelicula.service';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-borrar-pelicula',
  templateUrl: './borrar-pelicula.component.html',
  styleUrls: ['./borrar-pelicula.component.scss']
})

export class BorrarPeliculaComponent implements OnInit {
  peliculaId: number;
  peliculaForm: FormGroup;
  pelicula = {} as Pelicula;
  constructor(protected peliculaService: PeliculaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.peliculaId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.onSubmitDelete(this.peliculaId);
  }

  onSubmitDelete(valueId: number ): void {
    this.peliculaService.eliminarPelicula(valueId)
    .pipe(
      tap(()=> this.router.navigate(['listar_pelicula'])),
      delay(2000)
    )
    .subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      },
      error => { console.log(error) }
    );

  }

}
