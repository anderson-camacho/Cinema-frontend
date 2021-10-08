import { by, element } from 'protractor';

export class NavbarPage {
  linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
  linkPelicula = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
  linkUsuario = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

  async clickBotonPeliculas() {
    await this.linkPelicula.click();
  }

  async clickBotonUsuarios() {
    await this.linkUsuario.click();
  }

  async clickBotonHorarios() {
    await this.linkHome.click();
  }

}
