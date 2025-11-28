import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

/**
 * The root module of the application.
 *
 * This module declares the application's components and imports necessary Angular modules.
 * It bootstraps the `AppComponent` to launch the application.
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
