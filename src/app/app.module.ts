import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExamenHeaderComponent } from './components/examen-header/examen-header.component';
import { ExamenHeroComponent } from './components/examen-hero/examen-hero.component';
import { ExamenMainComponent } from './components/examen-main/examen-main.component';
import { ExamenTablaComponent } from './components/examen-main/examen-tabla/examen-tabla.component';
import { ExamenFooterComponent } from './components/examen-footer/examen-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamenHeaderComponent,
    ExamenHeroComponent,
    ExamenMainComponent,
    ExamenTablaComponent,
    ExamenFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
