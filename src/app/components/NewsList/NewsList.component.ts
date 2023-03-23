import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { GetDannieService } from 'src/app/servises/GetDannie.service';
@Component({
  selector: 'app-NewsList',
  templateUrl: './NewsList.component.html',
  styleUrls: ['./NewsList.component.css']
})
export class NewsListComponent implements OnInit {

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
