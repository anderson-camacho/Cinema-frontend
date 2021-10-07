import { by, element } from 'protractor';

export class UsuarioPage {
  //Atributos

  //Acciones Generales Usuario
  //..

  //Acciones Listar Usuario
  private listaUsuario = element.all(by.id('linkBodyListaUsuarios'));
  linkUsuario = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

  //Elementos para Crear Usuario
  private linkCrearUsuariosLista = element(by.id('linkCrearUsuarioLista'));
  private linkBotonCrearUsuario = element(by.id('linkBotonCrearUsuario'));
  private linkInputNombreCrearUsuario = element(by.id('linkInputNombreCrearUsuario'));;

  //Elementos para Actualizar Usuario
  private linkActualizarUsuario = element(by.id('linkActualizarUsuario'));
  private linkBotonEditarUsuario = element(by.id('linkBotonEditarUsuario'));
  private linkInputNombreEditarUsuario = element(by.id('linkInputNombreEditarUsuario'));

  //Elementos para Eliminar Usuario
  private linkEliminarUsuario = element(by.id('linkEliminarUsuario'));

  //Metodos

  //Metodos de accion para Listar Usuario
  async clickBotonListarActualizar() {
    await this.linkUsuario.click();
  }

  async contarUsuarios() {
    return (await this.listaUsuario).length;
  }

  //Metodos de accion para Crear Usuario
  async clickBotonCrearActualizarEnLista() {
    await this.linkCrearUsuariosLista.click();
  }

  async clickBotonCrearUsuarios() {
    await this.linkBotonCrearUsuario.click();
  }

  async ingresarTituloCrearUsuarios(nombreUsuarios) {
    await this.linkInputNombreCrearUsuario.sendKeys(nombreUsuarios);
  }

  //Metodos de accion para Editar Usuario

  async clickBotonActualizarActualizar() {
    await this.linkActualizarUsuario.click();
  }

  async clickBotonEditarUsuarios() {
    await this.linkBotonEditarUsuario.click();
  }

  async ingresarNombreEditarUsuario(nombreUsaurio) {
    await this.linkInputNombreEditarUsuario.sendKeys(nombreUsaurio);
  }


  //Metodos de accion para borrar Usuario

  async clickBotonEliminarUsuarios() {
    await this.linkEliminarUsuario.click();
  }









}
