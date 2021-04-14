import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../app.component";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
@Input()
data: Post | any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
