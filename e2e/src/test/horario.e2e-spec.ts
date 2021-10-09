import { HorarioPage } from '../page/horario/horario.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { PeliculaPage } from '../page/pelicula/pelicula.po';

describe('Horario E2E', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let horario: HorarioPage;
  let pelicula: PeliculaPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    horario = new HorarioPage();
    pelicula = new PeliculaPage();
  });

  it('Deberia crear horarios', () => {
    const CUPOS = 50;
    const FECHA = '2021-10-20';
    page.navigateTo();
    navBar.clickBotonPeliculas();
    pelicula.clickBotonCrearHorarioDesdePelicula();
    horario.ingresarNombreCrearHorario(FECHA);
    horario.ingresarCuposCrearHorario(CUPOS);
    horario.contarHorarios();
  });

  it('Deberia listar horarios', () => {
    page.navigateTo();
    navBar.clickBotonHorarios();
    expect(1).toBe(horario.contarHorarios());
  });



  it('Deberia Eliminar horarios', () => {
    page.navigateTo();
    navBar.clickBotonHorarios();
    horario.clickBotonEliminarHorarios();
    expect(0).toBe(horario.contarHorarios());
  });

});
