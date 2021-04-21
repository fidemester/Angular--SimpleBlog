import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentsService} from "./comments.service";
import { CommentContainerComponent } from './comment-component/comment-container.component';
import {CommentItemComponent} from "./comment-item-component/comment-item.component";
import {MatCardModule} from '@angular/material/card';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentFormContainerComponent } from './comment-form-container/comment-form-container.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
  CommentContainerComponent,
    CommentItemComponent,
    CommentFormComponent,
    CommentFormContainerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports:[
    CommentContainerComponent
  ],
  providers:[
    CommentsService
  ]
})
export class CommentModule { }
