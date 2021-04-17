import { Component, OnInit } from '@angular/core';
import {PostsService} from "../post/posts.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {IPost} from "../post/IPost";
import {Post} from "../../app.component";


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  constructor(private PostService: PostsService, private route: ActivatedRoute) {

    // const id: Observable<string> = route.params.pipe(map(p => p.id));
    // const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));

  }


  post: any= [];
  postId:any;
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log("params", params);
      this.postId = params.id;
    })

    this.PostService.getPost(this.postId).subscribe(post => {
      console.log("post detail:", post)
      console.log(this.postId)
      this.post = post;
    })

  }
}
