import {Component, OnInit} from '@angular/core';
import {PlayingSongListService} from '../playingSongList.service';
import ajax from '../../http/http.js';

@Component({
  selector: 'app-music-discover',
  templateUrl: './app-music-discover.component.html',
  styleUrls: ['./app-music-discover.component.css']
})

export class AppMusicDiscoverComponent implements OnInit {
  date = new Date().getDate();
  adList = [];
  personalizedNewsong = [];
  personalizedPrivatecontent = [];
  personalizedDjprogram = [];
  programRecommend = [];
  personalizedMv = [];
  personalized = [];
  recommendSongs = [];
  currentIndex = 1;
  isHovering = false;
  playingSongListService: PlayingSongListService;
  sheetSongList: [];

  constructor(playingSongListService: PlayingSongListService) {
    this.playingSongListService = playingSongListService;
  }

  setCurrentIndex(index) {
    this.currentIndex = index;
  }

  getSheetList(id) {
    ajax.playlistDetail({id})(res => {
      this.sheetSongList = res.playlist.tracks;
    });
  }

  getUrl(id, songList) {
    this.playingSongListService.getSongUrl(id, songList);
  }

  prev() {
    this.currentIndex = (this.currentIndex + this.adList.length - 1) % this.adList.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.adList.length;
  }

  isActive(index) {
    return index === this.currentIndex;
  }

  isPrev(index) {
    return (index + this.adList.length - 1) % this.adList.length === this.currentIndex;
  }

  isNext(index) {
    return (index + 1) % this.adList.length === this.currentIndex;
  }

  onMouseenter() {
    this.isHovering = true;
  }

  to00(num: number): string {
    return num > 9 ? `` + num : `0` + num;
  }

  onMouseleave() {
    this.isHovering = false;
  }

  nextAd() {
    if (!this.isHovering) {
      this.currentIndex = (this.currentIndex + 1) % this.adList.length;
    }
    setTimeout(() => this.nextAd(), 1000);
  }

  getSongArtistsName(song) {
    const ar = song.artists || song.ar;
    return ar.map(item => item.name).join(`、`);
  }

  parseSecondToMinutes(time: number): string {
    time = Math.round(time / 1000);
    const second = Math.floor(time / 60);
    const minutes = time % 60;
    return `${this.to00(second)}:${this.to00(minutes)}`;
  }

  getRecommendSongs() {
    ajax.recommendSongs({})(res => {
      this.recommendSongs = res.recommend;
      this.playingSongListService.setPlayList(res.recommend);
      this.playingSongListService.getSongUrl([res.recommend[0].id], undefined);
    });
  }

  ngOnInit() {
    ajax.banner({})(res => {
      this.adList = res.banners;
      setTimeout(() => this.nextAd(), 1000);
    });
    ajax.recommendResource({})(res => {
      this.personalized = res.recommend.slice(0, 4);
    });
    // ajax.personalized({})(res => {
    //   this.personalized = res.result.slice(0, 9);
    // });

    ajax.personalizedPrivatecontent({})(res => {
      this.personalizedPrivatecontent = res.result;
    });
    ajax.personalizedNewsong({})(res => {
      this.personalizedNewsong = res.result;
      this.playingSongListService.setPlayList(res.result);
      this.playingSongListService.getSongUrl([res.result[0].id], undefined);
      this.getRecommendSongs();
    });
    ajax.personalizedMv({})(res => {
      this.personalizedMv = res.result;
    });
    ajax.personalizedDjprogram({})(res => {
      this.personalizedDjprogram = res.result;
    });
    ajax.programRecommend({})(res => {
      this.programRecommend = res.programs;
    });

  }
}
