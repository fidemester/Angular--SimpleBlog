import { Component, OnInit } from '@angular/core';
import {PostsService} from "../posts.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators"; // @todo: if not used --> delete line
import {Post} from "../app.component";


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  constructor(
     private PostService: PostsService, // @todo: PostsService -> postService (Nagybetüvel csak Class-ok, Interface-ek kapnak -konvenció...)
     private route: ActivatedRoute
  ) { 

    // const id: Observable<string> = route.params.pipe(map(p => p.id));
    // const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));

  }


  post: any = []; // @todo: any helyett készots neki interface-t, getPost(id) csak egy Post típusu elemet tölt le nem tömböt -> típus korrekció szüks, kezdeti érték pedig undefined
  params:any;
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log("params", params);
      this.params = params.id; // @todo: az id mented le, igy a this.params nem jo nev, this. postId:string
    })

    this.PostService.getPost(this.params).subscribe(post => {
      console.log("post detail:", post)
      console.log(this.params)
      this.post = post;
    })

  }
}
