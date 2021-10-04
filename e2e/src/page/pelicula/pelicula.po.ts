import { by, element } from 'protractor';

export class PeliculaPage {
  private linkCrearPeliculas = element(by.id('linkCrearPeliculas'));
  private linkListarPeliculas= element(by.id('linkListarPeliculas'));
  private linkEliminarPeliculas = element(by.id('linkEliminarPeliculas'));
  private linkActualizarPeliculas= element(by.id('linkActualizarPeliculas'));
    private inputTituloPeliculas = element(by.id('tituloPeliculas'));
    private inputDirectorPeliculas = element(by.id('directorPeliculas'));
    private listaPeliculas = element.all(by.css('ul.peliculas li'));

    async clickBotonCrearPeliculas() {
      await this.linkCrearPeliculas.click();
  }

  async clickBotonListarPeliculas() {
      await this.linkListarPeliculas.click();
  }

  async clickBotonEliminarPeliculas() {
    await this.linkEliminarPeliculas.click();
}

async clickBotonActualizarPeliculas() {
    await this.linkActualizarPeliculas.click();
}

    async ingresarTituloPelicula(tituloPeliculas) {
        await this.inputTituloPeliculas.sendKeys(tituloPeliculas);
    }

    async ingresarNombreDirectorPelicula(directorPeliculas) {
        await this.inputDirectorPeliculas.sendKeys(directorPeliculas);
    }

    async contarPeliculas() {
        return this.listaPeliculas.count();
    }
}
