import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.less']
})
export class BookmarksComponent implements OnInit {

  public bookmarksList
  public itemHistoryUrl = ""
  public counterBookmarks
  public isButtonVisible = false;

  constructor() { }

  ngOnInit() {
    this.getBookmarks()
  }

  playVideoFromBookmarks(itemBookmarks: string) {
    this.itemHistoryUrl = itemBookmarks
    const videoPlayer = document.getElementById('video2')
    videoPlayer.setAttribute('src', this.itemHistoryUrl.replace("watch?v=", "embed/"))
  }

  getBookmarks() {
    let bookmarksListObject = []
    bookmarksListObject = JSON.parse(localStorage.getItem('bookmarksList')) 
    this.bookmarksList = bookmarksListObject
    this.counterBookmarks = bookmarksListObject.length
  }

  saveBookmarks(item: string) {
    this.itemHistoryUrl = item
    let bookmarks = []
    if (localStorage.getItem("bookmarksList")) {
      bookmarks = JSON.parse(localStorage.getItem("bookmarksList"))
    }
    bookmarks.push(this.itemHistoryUrl)
    localStorage.setItem("bookmarksList", JSON.stringify(bookmarks))
    let bookmarksListObject = []
    bookmarksListObject = JSON.parse(localStorage.getItem('bookmarksList')) 
    this.counterBookmarks = bookmarksListObject.length
  }

}

