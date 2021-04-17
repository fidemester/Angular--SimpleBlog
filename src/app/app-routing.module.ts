import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from "./posts/post/posts.component";
import {RouterModule} from "@angular/router";
import {PostDetailComponent} from "./posts/post-detail/post-detail.component";
import {NotFoundComponent} from "./features/not-found/not-found.component";
import {ContactComponent} from "./features/contact/contact.component";



/*
const routes=[
  {path:"", component:PostsComponent},
  {path:"post/:id", component:PostDetailComponent},
  {path:"contact", component: ContactComponent},
  {path:"**", component:NotFoundComponent},
]*/
@NgModule({
  declarations: [],
  imports: [
    //RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {
}
