import { PeliculaService } from './../../shared/service/pelicula.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../../shared/model/pelicula';

@Component({
  selector: 'app-listar-pelicula',
  templateUrl: './listar-pelicula.component.html',
  styleUrls: ['./listar-pelicula.component.scss']
})
export class ListarPeliculaComponent implements OnInit {
  public listaPeliculas: Observable<Pelicula[]>;

  constructor(protected peliculaService: PeliculaService) { }

  ngOnInit() {
    this.listaPeliculas = this.peliculaService.consultar();
  }

}
