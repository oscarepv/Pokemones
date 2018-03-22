import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// services
import { PokemonService } from './services/pokemon.service';
// rutas
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import {Router} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PokemonesComponent,
    PokemonComponent
  ],
  imports: [
    APP_ROUTING,
    FormsModule,
    HttpModule,
    BrowserModule
  ],
  // agregar el servicio
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
