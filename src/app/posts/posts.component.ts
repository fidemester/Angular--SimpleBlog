import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
@Input()
postsFromApp:Post[]=[]

  constructor() { }

  ngOnInit(): void {
  console.log(this.postsFromApp)
  }

}
