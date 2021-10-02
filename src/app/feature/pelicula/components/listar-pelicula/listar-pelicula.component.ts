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
    this.listaPeliculas = this.peliculaService.consultar();
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

  onSubmitUpdate(pelicula: Pelicula): void {
    localStorage.setItem("id", pelicula.id.toString());
    localStorage.setItem("titulo", pelicula.titulo.toString());
    localStorage.setItem("director", pelicula.director.toString());
    this.router.navigate(["editar_pelicula"]);

  }

}