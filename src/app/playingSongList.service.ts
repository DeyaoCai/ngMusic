import {Injectable} from '@angular/core';
import ajax from '../http/http.js';

@Injectable({
  providedIn: 'root',
})
export class PlayingSongListService {
  playList = [];
  currentIndex = 0;
  playingUrl = ``;

  constructor() {
  }

  playPrevSong() {
    this.currentIndex = (this.currentIndex - 1 + this.playList.length) % this.playList.length;
    this.getSongUrl(undefined, undefined);
  }

  playNextSong() {
    this.currentIndex = (this.currentIndex + 1 + this.playList.length) % this.playList.length;
    this.getSongUrl(undefined, undefined);
  }

  getSongUrl(ids, songList) {
    if (songList) {
      this.playList = songList;
      this.currentIndex = 0;
    }
    let id;
    try {
      id = ids.join(`,`);
    } catch (e) {
      id = ids;
    }
    if (!id) {
      id = this.playList[this.currentIndex].id;
    } else {
      this.currentIndex = this.playList.findIndex(item => item.id === ids) || 0;
    }
    ajax.songUrl({id})(res => {
      this.playingUrl = res.data[0].url;
    });
  }

  setPlayList(songList) {
    this.playList = songList;
  }
}

export const playingSongListService = new PlayingSongListService();
