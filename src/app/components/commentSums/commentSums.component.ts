import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentSums',
  templateUrl: './commentSums.component.html',
  styleUrls: ['./commentSums.component.css']
})
export class CommentSumsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.Commetn, "test")
  }
 @Input()Commetn:any[any]
}
