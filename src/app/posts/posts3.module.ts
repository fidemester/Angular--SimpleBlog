import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from "./post/posts.component";
import {PostItemComponent} from "./post-item/post-item.component";
import {TrucatePipe} from "../trucate.pipe";
import {PostsService} from "./post/posts.service";
import {HttpClientModule} from "@angular/common/http";
import {NotFoundComponent} from "../features/not-found/not-found.component";
import {RouterModule} from "@angular/router";
import {ContactComponent} from "../features/contact/contact.component";
import {FormsModule} from "@angular/forms";
import {PostRoutingModule} from "./post-routing.module";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {CommentModule} from "../comment/comment.module";






@NgModule({
  declarations: [
    PostsComponent,
    PostItemComponent,
    PostDetailComponent,
    TrucatePipe


  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    PostRoutingModule,
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
