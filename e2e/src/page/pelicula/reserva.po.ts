// import { by, element } from 'protractor';

// export class PeliculaPage {
//   //Atributos

//   //Acciones Generales Pelicula
//   //..

//   //Acciones Listar Pelicula
//   private listaPeliculas = element.all(by.id('linkBodyListaPeliculas'));
//   linkPelicula = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));

//   //Elementos para Crear Pelicula
//   private linkCrearPeliculasLista = element(by.id('linkCrearPeliculaLista'));
//   private linkCrearPeliculas = element(by.id('linkBotonCrear'));
//   private inputTituloCrearPeliculas = element(by.id('linkInputTituloCrearPelicula'));
//   private inputDirectorCrearPeliculas = element(by.id('linkInputDirectorCrearPelicula'));

//   //Elementos para Actualizar Pelicula
//   private linkActualizarPeliculas = element(by.id('linkActualizarPelicula'));
//   private linkEditarPeliculas = element(by.id('linkBotonCrear'));
//   private inputTituloEditarPeliculas = element(by.id('linkInputTituloEditarPelicula'));
//   private inputDirectorEditarPeliculas = element(by.id('linkInputDirectorEditarPelicula'));

//   //Elementos para Eliminar Pelicula
//   private linkEliminarPeliculas = element(by.id('linkEliminarPelicula'));

//   //Metodos

//   //Metodos de accion para Listar Pelicula
//   async clickBotonListarPeliculas() {
//     await this.linkPelicula.click();
//   }

//   async contarPeliculas() {
//     return (await this.listaPeliculas).length;
//   }

//   //Metodos de accion para Crear Pelicula
//   async clickBotonCrearPeliculasEnLista() {
//     await this.linkCrearPeliculasLista.click();
//   }

//   async clickBotonCrearPeliculas() {
//     await this.linkCrearPeliculas.click();
//   }

//   async ingresarTituloCrearPelicula(tituloPeliculas) {
//     await this.inputTituloCrearPeliculas.sendKeys(tituloPeliculas);
//   }

//   async ingresarDirectorCrearPelicula(directorPeliculas) {
//     await this.inputDirectorCrearPeliculas.sendKeys(directorPeliculas);
//   }

//   //Metodos de accion para Editar Pelicula

//   async clickBotonActualizarPeliculas() {
//     await this.linkActualizarPeliculas.click();
//   }

//   async clickBotonEditarPeliculas() {
//     await this.linkEditarPeliculas.click();
//   }

//   async ingresarTituloEditarPelicula(tituloPeliculas) {
//     await this.inputTituloEditarPeliculas.sendKeys(tituloPeliculas);
//   }

//   async ingresarDirectorEditarPelicula(directorPeliculas) {
//     await this.inputDirectorEditarPeliculas.sendKeys(directorPeliculas);
//   }


//   //Metodos de accion para borrar Pelicula

//   async clickBotonEliminarPeliculas() {
//     await this.linkEliminarPeliculas.click();
//   }









// }
