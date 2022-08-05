import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseComponent } from './base/base.component';
import { MaterialModule } from './shared/material.module';
import { NewobservableComponent } from './newobservable/newobservable.component';
import { PlaymoviesComponent } from './base/playmovies/playmovies.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    NewobservableComponent,
    PlaymoviesComponent
  ],
  imports: [
    BrowserModule,MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
