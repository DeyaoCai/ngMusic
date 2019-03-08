import { Component, OnInit } from '@angular/core';

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
  constructor() {
  };
  setCurrentIndex(index) {
    this.currentIndex = index;
  };
  prev() {
    this.currentIndex = (this.currentIndex + this.adList.length - 1) % this.adList.length;
  };
  next() {
    this.currentIndex =  (this.currentIndex + 1) % this.adList.length;
  };
  isActive(index) {
    return index === this.currentIndex;};
  isPrev(index) {
    return (index + this.adList.length - 1) % this.adList.length === this.currentIndex;
  };
  isNext(index) {
    return (index + 1) % this.adList.length === this.currentIndex;
  };
  onMouseenter() {
    this.isHovering = true;
  };
  onMouseleave() {
    this.isHovering = false;
  };
  nextAd() {
    if (!this.isHovering) {
      this.currentIndex = (this.currentIndex + 1) % this.adList.length;
    }
    setTimeout(() => this.nextAd(), 1000);
  };
  getRecommendSongs(){
    ajax.recommendSongs({})(res => {
      console.log(res);
      this.recommendSongs = res.recommend;
    });
  };
  ngOnInit() {
    ajax.banner({})(res => {
      this.adList = res.banners;
      setTimeout(() => this.nextAd(), 1000);
    });
    ajax.recommendResource({})(res => {
      this.personalized = res.recommend;
    });
    // ajax.personalized({})(res => {
    //   this.personalized = res.result.slice(0, 9);
    // });

    ajax.personalizedPrivatecontent({})(res => {
      this.personalizedPrivatecontent = res.result;
    });
    ajax.personalizedNewsong({})(res => {
      this.personalizedNewsong = res.result;
    });
    ajax.personalizedMv({})(res => {
      this.personalizedMv = res.result;
    });
    ajax.personalizedDjprogram({})(res => {
      this.personalizedDjprogram = res.result;
    });
    ajax.programRecommend({})(res => {
      console.log(res)
      this.programRecommend = res.programs;
    });

  };
}
