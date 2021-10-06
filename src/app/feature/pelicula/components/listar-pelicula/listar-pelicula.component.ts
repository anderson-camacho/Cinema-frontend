import { Router } from '@angular/router';
import { Pelicula } from './../../shared/model/pelicula';
import { PeliculaService } from './../../shared/service/pelicula.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-pelicula',
  templateUrl: './listar-pelicula.component.html',
  styleUrls: ['./listar-pelicula.component.scss']
})
export class ListarPeliculaComponent implements OnInit {
  public listaPeliculas: Observable<Pelicula[]>;
  peliculas: Pelicula[];
  constructor(protected peliculaService: PeliculaService, private router: Router) { }

  ngOnInit() {
    this.listaPeliculas = this.peliculaService.consultarPelicula();
  }

  onSubmitDelete(pelicula: Pelicula): void {
    this.router.navigate([`eliminar_pelicula/${pelicula.id}`]);
  }

  onSubmitUpdate(pelicula: Pelicula): void {
    this.router.navigate([`editar_pelicula/${pelicula.id}`]);

  }

}
