import {Component, Input, OnInit, Output} from '@angular/core';
import {CommentsService} from '../comments.service';
import {IComment} from '../comment.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.css']
})
export class CommentContainerComponent implements OnInit {

  comments: IComment[] = [];
  @Input()  postId: number | undefined;

  constructor(private commentsService: CommentsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {


    this.route.params.subscribe(params => {
      console.log('params', params);
      this.postId = params.id;
    });
    console.log('postId-container', this.postId);

    this.commentsService.getComments(this.postId as number).subscribe(comments => {
      console.log(comments);
      this.comments = comments;
      console.log('new', this.comments);
    });

  }

  addComment(comment: IComment): void {
    console.log('container', comment);

  }
}

/*
GET /posts-data?_sort=views&_order=asc
  GET /posts-data?_sort=id&_order=asc  */
