import { Component } from '@angular/core';
import ajax from '../http/http.js';
ajax.loginCellphone({phone: "16621079485", password: "a13789",})(res => {
  // ajax.recommendSongs()(res => {
  //   musicList = res.recommend;
  // })
});
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
