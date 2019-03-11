import { Component } from '@angular/core';
import { PlayingSongListService } from '../playingSongList.service';
@Component({
  selector: 'app-music-bottom',
  templateUrl: './app-music-bottom.component.html',
  styleUrls: ['./app-music-bottom.component.css']
})
export class AppMusicBottomComponent {
  playingSongListService: PlayingSongListService;
  constructor(playingSongListService: PlayingSongListService) {
    this.playingSongListService = playingSongListService;
  }
}
