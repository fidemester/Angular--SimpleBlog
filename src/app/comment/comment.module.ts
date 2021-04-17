import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentsService} from "./comments.service";
import { CommentContainerComponent } from './comment-component/comment-container.component';
import {CommentItemComponent} from "./comment-item-component/comment-item.component";
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
  CommentContainerComponent,
    CommentItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[
    CommentContainerComponent
  ],
  providers:[
    CommentsService
  ]
})
export class CommentModule { }
