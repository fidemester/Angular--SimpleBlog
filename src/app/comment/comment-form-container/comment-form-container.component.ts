import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from '../comments.service';
import {IComment} from '../comment.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comment-form-container',
  templateUrl: './comment-form-container.component.html',
  styleUrls: ['./comment-form-container.component.css']
})
export class CommentFormContainerComponent implements OnInit {
  @Input()
  comment: any = []; // @todo;
  postId: number | undefined;

  constructor(private commentsService: CommentsService, private route: ActivatedRoute) {
  }

  handleOutput(data: IComment): any {
    console.log('handleoutput', data, typeof data);
    const commentKeys = (Object.values(data));
    this.comment =
      {
        name : commentKeys[0] + ' ' + commentKeys[1],
        body : data.body,
        postId : this.postId,
        email: data.email
      };
    this.commentsService.addComment(this.comment)
      .subscribe(comment => {
        console.log(comment);
        console.log(this.comment);
      });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('params', params);
      this.postId = params.id;
    });
  }

}

