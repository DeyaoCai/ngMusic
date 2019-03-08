import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMusicTopComponent } from './music-top/app-music-top.component';
import { AppMusicSlideComponent } from './music-slide/app-music-slide.component';
import { AppMusicDiscoverComponent } from './music-discover/app-music-discover.component';
@NgModule({
  declarations: [
    AppComponent,
    AppMusicTopComponent,
    AppMusicSlideComponent,
    AppMusicDiscoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
