import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app-base';
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'HOME' },
    { url: '/pelicula/listar', nombre: 'PELICULAS' },
    { url: '/pelicula/listar', nombre: 'CLIENTES' },
    { url: '/pelicula/listar', nombre: 'RESERVAS' }

  ];


}
