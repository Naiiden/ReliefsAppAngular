import { Injectable } from '@angular/core';
import { YoutubeUrl } from './../youtubeUrl';

@Injectable({
  providedIn: 'root'
})
export class YoutubeUrlService {

  constructor() { }

  addYoutubeUrl (youtubeUrl: string) {
    let newYoutubeUrl = new YoutubeUrl
    newYoutubeUrl.url = youtubeUrl
    let historyUrlCache = []
    if (localStorage.getItem("historyList")) {
      historyUrlCache = JSON.parse(localStorage.getItem("historyList"))
    }
    historyUrlCache.push(newYoutubeUrl)
    localStorage.setItem("historyList", JSON.stringify(historyUrlCache))
  }
}
