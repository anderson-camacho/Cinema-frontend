import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { UsuarioPage } from '../page/usuario/usuario.po';

describe('Usuario E2E', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let usuario: UsuarioPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    usuario = new UsuarioPage();
  });

  it('Deberia crear usuario', () => {
    const NOMBRE_USUARIO = 'Juan Andres';
    page.navigateTo();
    navBar.clickBotonUsuarios();
    usuario.clickBotonCrearActualizarEnLista();
    usuario.ingresarNombreEditarUsuario(NOMBRE_USUARIO);
    usuario.contarUsuarios();
  });

  it('Deberia listar usuarios', () => {
    page.navigateTo();
    navBar.clickBotonUsuarios();
    expect(1).toBe(usuario.contarUsuarios());
  });

  it('Deberia Actualizar Peliculas', () => {
    const TITULO_PELICULA_EDITAR = 'HombreDeNegroEditado';
    page.navigateTo();
    navBar.clickBotonUsuarios();
    usuario.clickBotonActualizarActualizar();
    usuario.ingresarNombreEditarUsuario(TITULO_PELICULA_EDITAR);
    usuario.clickBotonCrearUsuarios();
  });

  it('Deberia Eliminar Usuarios', () => {
    page.navigateTo();
    navBar.clickBotonUsuarios();
    usuario.clickBotonEliminarUsuarios();
    expect(0).toBe(usuario.contarUsuarios());
  });

});
