import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularExemplifyModule } from 'angular-exemplify';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularExemplifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
