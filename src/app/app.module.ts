import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FotoPokemonComponent } from './componets/foto-pokemon/foto-pokemon.component';
import { DetallePokemonComponent } from './componets/detalle-pokemon/detalle-pokemon.component';
import { TarjetaPokemonComponent } from './componets/tarjeta-pokemon/tarjeta-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FotoPokemonComponent,
    DetallePokemonComponent,
    TarjetaPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
