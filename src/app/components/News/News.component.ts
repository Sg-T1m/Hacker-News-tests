import { Component, Input, OnInit } from '@angular/core';
import { INews } from 'src/app/interfase/INews';
import { GetDannieService } from 'src/app/servises/GetDannie.service';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-News',
  templateUrl: './News.component.html',
  styleUrls: ['./News.component.css']
})
export class NewsComponent implements OnInit {
  id: any;
  message?: string;

  constructor(
    private GetDannieService: GetDannieService,
    private route: ActivatedRoute
    ) {
    }
  @Input() NewsId: string = "";
  NewsData? : INews
  ngOnInit() {
    this.getNews()
  }
  
  getNews():void{
    this.GetDannieService.getDataNews(  this.NewsId ).subscribe(
      (List) => {
        this.NewsData = List;
       
      }
    );
    this.id = this.NewsData?.id
  }
  print(){
    console.log(this.NewsData?.kids)
  
    console.log(this.id, "id")
  }
}
