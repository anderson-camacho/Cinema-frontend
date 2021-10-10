import { ReservaPage } from './../page/reserva/reserva.po';
import { NavbarPage } from './../page/navbar/navbar.po';
import { AppPage } from './../app.po';
import { HorarioPage } from '../page/horario/horario.po';
describe('Reserva E2E', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let horario: HorarioPage;
  let reserva: ReservaPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    horario = new HorarioPage();
    reserva = new ReservaPage();
  });

  it('Deberia crear reservas', () => {
    const HORARIO = 1;
    page.navigateTo();
    navBar.clickBotonReservas();
    horario.clickBotonCrearReseva();
    reserva.ingresarTituloCrearReserva(HORARIO);
    reserva.clickBotonCrearReservas();
  });

  it('Deberia listar reservas', () => {
    page.navigateTo();
    navBar.clickBotonReservas();
    expect(1).toBe(reserva.contarReservas());
  });



  it('Deberia Eliminar reservas', () => {
    page.navigateTo();
    navBar.clickBotonReservas();
    reserva.clickBotonEliminarReservas();
    expect(0).toBe(horario.contarHorarios());
  });

});
