import { Component, OnInit } from '@angular/core';
import {
  concatMap,
  delayWhen,
  interval,
  map,
  Observable,
  of,
  take,
  timer,
} from 'rxjs';
import { GetDannieService } from './servises/GetDannie.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private GetDannieService: GetDannieService) {}
  NewsListTimer$?: Observable<number>;
  NewsList: any;
  Loading = false;
  TimeInterval = 60000;
  SetNewsIntervalReload$ = interval(this.TimeInterval);
  ngOnInit() {
    this.GetNewsList();
    const ReloadNewsList = (this.SetNewsIntervalReload$ = interval(
      this.TimeInterval
    ));
    ReloadNewsList.subscribe(() => this.GetNewsList());
  }
  GetNewsList(): void {
    this.GetDannieService.getDataNewsList('newstories', '100').subscribe(
      (List) => {
        this.Loading = true;
        this.NewsList = List;
        console.log(this.NewsList);
        this.Loading = false;
      }
    );
  }
}
