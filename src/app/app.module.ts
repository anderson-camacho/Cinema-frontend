import { RouterModule } from '@angular/router';
import { HorarioModule } from './feature/horario/horario.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { PeliculaModule } from '@pelicula/pelicula.module';
import { UsuarioModule } from './feature/usuario/usuario.module';
import { ReservaModule } from '@reserva/reserva.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PeliculaModule,
    UsuarioModule,
    HorarioModule,
    ReservaModule,
    CoreModule,
    RouterModule
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
