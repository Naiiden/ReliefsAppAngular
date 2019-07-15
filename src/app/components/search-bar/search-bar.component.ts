import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less'],
  providers: [HistoryComponent]
})
export class SearchBarComponent implements OnInit {

  public urlvideo = ""
  public url = ""
  public urlJson = {}
  public regex = RegExp('^http(s)?:\\/\\/www.youtube\\.com\\/watch\\?v=.+')
  
  public isButtonVisible = false;

  constructor(
    private backendService: BackendService,
    private historyComponent: HistoryComponent
    ) { }

  ngOnInit() {
  }

  validateUrl() {
    if (this.regex.test(this.url) == false) {
      this.isButtonVisible = true
    } 
    else {
      this.isButtonVisible = false
      this.validate()
    }
  }

  validate() {
    this.urlvideo = this.url

    const videoPlayer = document.getElementById('video2')
    videoPlayer.setAttribute('src', this.url.replace("watch?v=", "embed/"))
    this.saveHistory()
  }

  saveHistory() {
    this.backendService.saveHistoryService(this.url).subscribe(res => {
        this.historyComponent.ngOnInit()
      },
      (error) => {
        console.log('Error ! : ' + error)
      }
    )
  }
}
