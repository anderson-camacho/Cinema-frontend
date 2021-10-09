import { by, element } from 'protractor';

export class HorarioPage {
  // Acciones Generales Horario
  // Acciones Listar Horario
  private listaHorarios = element.all(by.id('linkBodyListaHorarios'));
  linkHorario = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));

  // Elementos para Crear Horario
  private linkBotonCrearHorario = element(by.id('linkBotonCrearHorario'));
  private linkInputNombreCrearHorario = element(by.id('linkInputNombreCrearHorario'));
  private linkInputCuposCrearHorario = element(by.id('linkInputCuposCrearHorario'));

  // Elementos para Eliminar Horario
  private linkEliminarHorario = element(by.id('linkEliminarHorario'));

  // Metodos
  // Metodos de accion para Listar Horario
  async clickBotonListarHorarios() {
    await this.linkHorario.click();
  }

  async contarHorarios() {
    return (await this.listaHorarios).length;
  }

  // Metodos de accion para Crear Horario
  async clickBotonCrearHorariosEnLista() {
    await this.linkBotonCrearHorario.click();
  }

  async ingresarNombreCrearHorario(tituloHorarios) {
    await this.linkInputNombreCrearHorario.sendKeys(tituloHorarios);
  }

  async ingresarCuposCrearHorario(directorHorarios) {
    await this.linkInputCuposCrearHorario.sendKeys(directorHorarios);
  }

  // Metodos de accion para borrar Horario

  async clickBotonEliminarHorarios() {
    await this.linkEliminarHorario.click();
  }









}
