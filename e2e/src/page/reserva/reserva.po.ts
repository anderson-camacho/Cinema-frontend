import { by, element } from "protractor";

export class ReservaPage {
  // Atributos

  // Acciones Generales Reserva

  // Acciones Listar Reserva
  private listaReservas = element.all(by.id('linkBodyListaReservas'));
  linkReserva = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));

  // Elementos para Crear Reserva
  private linkCrearReservas = element(by.id('linkBotonCrearReserva'));
  private inputlinkInputNombreCrearReserva = element(by.id('linkInputNombreCrearReserva'));

  //Elementos para Eliminar Reserva
  private linkEliminarReservas = element(by.id('linkEliminarReserva'));

  //Metodos

  //Metodos de accion para Listar Reserva
  async clickBotonListarReservas() {
    await this.linkReserva.click();
  }

  async contarReservas() {
    return (await this.listaReservas).length;
  }

  //Metodos de accion para Crear Reserva

  async clickBotonCrearReservas() {
    await this.linkCrearReservas.click();
  }

  async ingresarTituloCrearReserva(tituloReservas) {
    await this.inputlinkInputNombreCrearReserva.sendKeys(tituloReservas);
  }


  //Metodos de accion para borrar Reserva

  async clickBotonEliminarReservas() {
    await this.linkEliminarReservas.click();
  }


}
