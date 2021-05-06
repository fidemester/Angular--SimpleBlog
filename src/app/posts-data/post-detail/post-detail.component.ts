import {Component, OnInit} from '@angular/core';
import {PostsService} from '../posts.service';
import {ActivatedRoute} from '@angular/router';
import {Ipost} from '../ipost';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  constructor(
    private postService: PostsService, // PostsService -> postService (Nagybetüvel csak Class-ok, Interface-ek kapnak -konvenció...)
    private route: ActivatedRoute) {
  }

  post: any | undefined = []; // nem sikerül jól megcsnálni @todo any helyett készíts neki interface-t,
  // getPost(id) csak egy Post típusu elemet tölt le nem tömböt -> típus korrekció szüks, kezdeti érték pedig undefined
  postId: number | undefined;

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log('params', params);
      this.postId = params.id;
    });

    this.postService.getPost(this.postId as number).subscribe(post => {
      console.log('post detail:', post);
      console.log(this.postId);
      this.post = post;

    });

  }
}
