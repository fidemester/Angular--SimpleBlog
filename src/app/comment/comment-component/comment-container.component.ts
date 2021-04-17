import {Component, Input, OnInit, Output} from '@angular/core';
import {CommentsService} from "../comments.service";
import {IComment} from "../comment.inerface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.css']
})
export class CommentContainerComponent implements OnInit {
  @Output()
  comments:IComment[]=[];
  postId: number | undefined;
  constructor(private commentsService: CommentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log("params", params);
      this.postId = params.id;

    })

    this.commentsService.getComments(this.postId as number).subscribe(comments => {
      console.log(comments);
      // @ts-ignore
      this.comments=comments;
      console.log("new" , this.comments)
    })

    console.log("komi",this.comments)
  }
}
/*
GET /posts?_sort=views&_order=asc
  GET /posts?_sort=id&_order=asc  */
