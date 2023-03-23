import { Component, Input, OnInit } from '@angular/core';
import { INews } from 'src/app/interfase/INews';
import { ActivatedRoute, Data } from '@angular/router';
import { GetDannieService } from 'src/app/servises/GetDannie.service';
import { filter } from 'rxjs';
@Component({
  selector: 'app-moreNews',
  templateUrl: './moreNews.component.html',
  styleUrls: ['./moreNews.component.css'],
})
export class MoreNewsComponent implements OnInit {
  message: any;
  test2:any
  constructor(
    private route: ActivatedRoute,
    private GetDannieService: GetDannieService
  ) {}
  NewsContent: INews | undefined;
  arraycomment: INews[] = [];

  test: string[] | undefined = []

  ngOnInit():void {
    this.getData();
    this.checkDataKids(this.NewsContent!.kids);

  }
  times?: Data;
  getData(): void {
    this.route.queryParams.subscribe((params) => {
      this.NewsContent = {
        by: params['bu'],
        title: params['title'],
        time: params['time'],
        url: params['url'],
        kids: params['kids'],
        id: params['id'],
        descendants: params['descendants'],
      };
    });
    this.times = new Date(this.NewsContent?.time! * 1000);
  }
  getComments(idComments: string[]) {
    if(Array.isArray(idComments)){
     idComments?.forEach((elem) => this.getPost(elem));
    }else{
      this.getPost(idComments)
    }
  
  }
  getPost(elem: any) {
    this.GetDannieService.getDataNews(elem).subscribe((List) => {
      this.arraycomment.push(List) ;
  
   
    });
  }
  checkDataKids(arrayKids: string[] | undefined) {
    if (arrayKids != undefined) {
      this.getComments(arrayKids);
    } else{
      console.log(`Пиво`)
    }
    }

  }

