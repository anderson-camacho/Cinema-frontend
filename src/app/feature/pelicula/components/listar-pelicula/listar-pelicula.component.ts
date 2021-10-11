import { Router } from '@angular/router';
import { Pelicula } from './../../shared/model/pelicula';
import { PeliculaService } from './../../shared/service/pelicula.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-pelicula',
  templateUrl: './listar-pelicula.component.html'
})
export class ListarPeliculaComponent implements OnInit {
  public listaPeliculas: Observable<Pelicula[]>;
  peliculas: Pelicula[];
  constructor(protected peliculaService: PeliculaService, private router: Router) { }

  ngOnInit() {
    this.getPeliculaListar()
  }

  getPeliculaListar(){
    this.listaPeliculas = this.peliculaService.consultarPelicula();
  }

  onSubmitDelete(peliculaId: number): void {
    this.peliculaService.eliminarPelicula(peliculaId)
      .subscribe(
        () => {
          this.getPeliculaListar();
        },
      );
  }

  onSubmitUpdate(peliculaId: number): void {
    this.router.navigate([`pelicula/editar/${peliculaId}`]);
  }

  onSubmitCreateHorario(pelicula: Pelicula): void {
    localStorage.setItem('idPelicula', pelicula.id.toString());
    this.router.navigate([`horario/crear`]);
  }

}
