import {Component, OnInit} from '@angular/core';
import {PostsService} from "../posts.service";
import {Post} from "../../app.component";
import {Ipost} from "../ipost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:any = [];

constructor(private postServices: PostsService) {
}
  ngOnInit(): void {
  //this.postServices.getPosts(this.postsFromApp);

  this.postServices.getPosts(10).subscribe(post =>{
    console.log(post);
    this.posts=post

  })
    this.postServices.getPost(1).subscribe(post =>{
      console.log(post)
    })
  }

}
