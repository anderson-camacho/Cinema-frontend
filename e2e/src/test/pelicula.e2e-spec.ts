import { PeliculaPage } from './../page/pelicula/pelicula.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';

describe('PELICULA E2E', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let pelicula: PeliculaPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    pelicula = new PeliculaPage();
  });

  it('Deberia crear pelicula', () => {
    const TITULO_PELICULA_CREAR = 'HombreDeNegro';
    const DIRECTOR_PELICULA_CREAR = 'OtroHombreDeNegro';
    page.navigateTo();
    navBar.clickBotonPeliculas();
    pelicula.clickBotonCrearPeliculasEnLista();
    pelicula.ingresarTituloCrearPelicula(TITULO_PELICULA_CREAR);
    pelicula.ingresarDirectorCrearPelicula(DIRECTOR_PELICULA_CREAR);
    pelicula.clickBotonCrearPeliculas();
  });

  it('Deberia listar peliculas', () => {
    page.navigateTo();
    navBar.clickBotonPeliculas();
    expect(1).toBe(pelicula.contarPeliculas());
  });

  it('Deberia Actualizar Peliculas', () => {
    const TITULO_PELICULA_EDITAR = 'HombreDeNegroEditado';
    const DIRECTOR_PELICULA_EDITAR = 'OtroHombreDeNegroEditado';
    page.navigateTo();
    navBar.clickBotonPeliculas();
    pelicula.clickBotonActualizarPeliculas();
    pelicula.ingresarTituloEditarPelicula(TITULO_PELICULA_EDITAR);
    pelicula.ingresarDirectorEditarPelicula(DIRECTOR_PELICULA_EDITAR);
    pelicula.clickBotonEditarPeliculas();
  });

  it('Deberia Eliminar Peliculas', () => {
    page.navigateTo();
    navBar.clickBotonPeliculas();
    pelicula.clickBotonEliminarPeliculas();
    expect(0).toBe(pelicula.contarPeliculas());
  });

});
