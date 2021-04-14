import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from "../postsv3/posts/posts.component";
import {PostItemComponent} from "../postsv3/post-item/post-item.component";
import {RouterModule} from "@angular/router";
import {PostDetailComponent} from "../post-detail/post-detail.component";
import {AppComponent} from "../app.component";
import {PostsService} from "../posts.service";
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
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {
}

//@todo: ez a module fajl egy szinten legyen az app.module.ts-sel, ne legyen külön mappában
