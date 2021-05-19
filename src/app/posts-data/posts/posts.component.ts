import {Component, OnInit} from '@angular/core';
import {PostsService} from '../posts.service';
import {Post} from '../../app.component';
import {Ipost} from '../ipost';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any = [];

  constructor(private postServices: PostsService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.postServices.getPosts(this.postsFromApp);

    /*this.postServices.getPosts(10).subscribe(post => {
      console.log(post);
      this.posts = post;
    });*/
    this.posts = this.router.snapshot.data.posts;
    console.log(this.posts);


    this.postServices.getPost(1).subscribe(post => {
      console.log(post);
    });

  }

}
