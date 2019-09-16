import { Injectable } from '@angular/core';
import { YoutubeUrl } from './../youtubeUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeUrlService {

  constructor() { }

  addYoutubeUrl (youtubeUrl: string): Observable<YoutubeUrl> {
    let newYoutubeUrl = new YoutubeUrl
    newYoutubeUrl.url = youtubeUrl
    let historyUrlCache = []
    if (localStorage.getItem("historyList")) {
      historyUrlCache = JSON.parse(localStorage.getItem("historyList"))
    }
    historyUrlCache.push(newYoutubeUrl)
    localStorage.setItem("historyList", JSON.stringify(historyUrlCache))
    return 
  }
}
