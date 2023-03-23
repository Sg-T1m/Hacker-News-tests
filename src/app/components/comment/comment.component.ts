import { By } from '@angular/platform-browser';
import { INews } from 'src/app/interfase/INews';
import { Component, Input, OnInit } from '@angular/core';
import { GetDannieService } from 'src/app/servises/GetDannie.service';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  arryco: any;
  constructor(private GetDannieService: GetDannieService) {}
  MoreComments = false;
  ngOnInit() {
    this.checKids();
    console.log(this.commentData?.kids, 111);
  }
  allkids?:INews[]=[];
  @Input() commentData?: any;
  checKids() {
    if (this.commentData?.kids != undefined) {
      this.MoreComments = true;
    } 
  }
  getAllKids(elem: string) {
    this.GetDannieService.getDataNews(elem).subscribe((List) => {
   
    });
  }
  getComments(idComments: string[]) {
    idComments.flatMap(x => this.allComents(x))
  }

    allComents(idCommentsRoditel:string){
      var chec;
        this.GetDannieService.getDataNews(idCommentsRoditel).subscribe(
          (List) => {
            this.allkids?.push(List);
            chec = List
            if(chec.kids != undefined ){
              this.getComments(chec.kids);
            }
          }
          
        );
       
    }

}
