import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { Routes } from '@angular/router/src/config';
import { NavbarComponent } from './navbar.component';
import { HistoricoComponent } from './historico/historico.component';
import { HttpClientModule } from'@angular/common/http';
import { TemperaturaService } from './servicio/temperatura.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TemperaturaComponent ,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [TemperaturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
