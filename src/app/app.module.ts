import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMusicTopComponent } from './music-top/app-music-top.component';
import { AppMusicSlideComponent } from './music-slide/app-music-slide.component';
import { AppMusicDiscoverComponent } from './music-discover/app-music-discover.component';
import { AppMusicBottomComponent } from './music-bottom/app-music-bottom.component';

import { PlayingSongListService } from './playingSongList.service';

@NgModule({
  declarations: [
    AppComponent,
    AppMusicTopComponent,
    AppMusicSlideComponent,
    AppMusicDiscoverComponent,
    AppMusicBottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [],
  providers: [PlayingSongListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
