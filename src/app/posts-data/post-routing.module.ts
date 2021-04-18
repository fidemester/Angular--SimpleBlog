import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from "./posts/posts.component";
import {RouterModule} from "@angular/router";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {NotFoundComponent} from "../not-found/not-found.component";
import {ContactComponent} from "../contact/contact.component";

const routes=[
  {path:"", component:PostsComponent},
  {path:"post/:id", component:PostDetailComponent},
  {path:"contact", component: ContactComponent},
  {path:"**", component:NotFoundComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class PostRoutingModule { }
