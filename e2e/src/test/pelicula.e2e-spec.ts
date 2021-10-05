import { PeliculaPage } from './../page/pelicula/pelicula.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';

describe('workspace-project Pelicula', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let pelicula: PeliculaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        pelicula = new PeliculaPage();
    });

    it('Deberia crear pelicula', () => {
        const TITULO_PELICULA = 'HombreDeNegro';
        const DIRECTOR_PELICULA = 'OtroHombreDeNegro';

        page.navigateTo();
        navBar.clickBotonPeliculas();
        pelicula.clickBotonCrearPeliculas;
        pelicula.ingresarTituloPelicula(TITULO_PELICULA);
        pelicula.ingresarNombreDirectorPelicula(DIRECTOR_PELICULA);

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar peliculas', () => {
        page.navigateTo();
        navBar.clickBotonPeliculas();
        pelicula.clickBotonListarPeliculas();

        expect(1).toBe(pelicula.contarPeliculas());
    });
});
