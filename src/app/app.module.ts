import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './components/News/News.component';
import { NewsListComponent } from './components/NewsList/NewsList.component';
import { MoreNewsComponent } from './components/moreNews/moreNews.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentSumsComponent } from './components/commentSums/commentSums.component';
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsListComponent,
    MoreNewsComponent,
    CommentComponent,
    CommentSumsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
