import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { NuevaofertaModule } from './nuevaoferta/nuevaoferta.module';
import { OfertasModule } from './ofertas/ofertas.module';
import { OfertaModule } from './oferta/oferta.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './services/home.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NuevaofertaModule,
    OfertasModule,
    OfertaModule,
    LoginModule,
    HttpClientModule,
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
