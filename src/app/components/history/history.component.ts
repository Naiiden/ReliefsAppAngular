import { Component, OnInit, Injectable } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service'
import { BookmarksComponent } from '../bookmarks/bookmarks.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less'],
  providers: [BookmarksComponent]
})
export class HistoryComponent implements OnInit {

  public historyUrl = []
  public itemHistoryUrl = ""

  constructor(
    private backendService: BackendService,
    private bookmarksComponent: BookmarksComponent
  ) { }

  ngOnInit() {
    this.getHistory()
  }

  addVideoToBookmarks(item: string) {
    this.itemHistoryUrl = item
    this.bookmarksComponent.saveBookmarks(item)
  }

  playVideoFromHistory(itemVideo: string) {
    this.itemHistoryUrl = itemVideo
    const videoPlayer = document.getElementById('video2')
    videoPlayer.setAttribute('src', this.itemHistoryUrl.replace("watch?v=", "embed/"))
  }

  getHistory() {
    this.backendService.getHistoryService().subscribe(res => {
      this.historyUrl = JSON.parse(JSON.stringify(res)).slice().reverse()
      localStorage.setItem("historyList", JSON.stringify(this.historyUrl))
    },
      (error) => {
        console.log('Error ! : ' + error)
      }
    )
  }
}
