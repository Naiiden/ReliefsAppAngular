import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.less'],
  providers: [SearchBarComponent]
})
export class VideoViewComponent implements OnInit {

  public urlvideo = ""

  constructor(
    public searchBar: SearchBarComponent
  ) { }

  ngOnInit() {
  }

}
