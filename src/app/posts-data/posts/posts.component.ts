import {Component, OnInit} from '@angular/core';
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:any;

constructor(private PostService: PostsService) {
}
  ngOnInit(): void {
  //this.PostService.getPosts(this.postsFromApp);

  this.PostService.getPosts(10).subscribe(post =>{
    console.log(post);
    this.posts=post

  })
    this.PostService.getPost(1).subscribe(post =>{
      console.log(post)
    })
  }

}
