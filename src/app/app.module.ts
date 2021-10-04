import { PeliculaService } from '@pelicula/shared/service/pelicula.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { PeliculaModule } from '@pelicula/pelicula.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PeliculaModule,
    CoreModule
  ],
  providers: [CookieService, PeliculaService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
