import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from "./posts/posts.component";
import {PostItemComponent} from "./post-item/post-item.component";
import {TrucatePipe} from "../trucate.pipe";
import {PostsService} from "../posts.service";
import {HttpClientModule} from "@angular/common/http";
import {NotFoundComponent} from "../not-found/not-found.component";
import {RouterModule} from "@angular/router";
import {ContactComponent} from "../contact/contact.component";
import {FormsModule} from "@angular/forms";
import {CommentModule} from "../comment/comment.module";

@NgModule({
  declarations: [
    PostsComponent,
    PostItemComponent,
    TrucatePipe,
    NotFoundComponent,
    ContactComponent,

  ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
      FormsModule,
      CommentModule
    ],
  exports:[
    PostsComponent
  ],
  providers:[
    PostsService
  ]
})
export class Posts3Module { }
