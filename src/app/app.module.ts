import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { ColorShadesComponent } from './color-shades/color-shades.component';
import { ColorCircleComponent } from './color-shades/color-circle/color-circle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ColorShadesComponent,
    ColorCircleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
