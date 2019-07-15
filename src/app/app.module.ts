import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgModule} from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HistoryComponent } from './components/history/history.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { VideoViewComponent } from './components/video-view/video-view.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HistoryComponent,
    BookmarksComponent,
    VideoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookmarksComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
