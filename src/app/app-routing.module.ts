import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts-data/posts/posts.component';
import {RouterModule} from '@angular/router';
import {PostDetailComponent} from './posts-data/post-detail/post-detail.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ContactComponent} from './features/contact/contact.component';
import {PostResolver} from './posts-data/post.resolver';


const routes = [
  {path: '', resolve: {posts: PostResolver}, component: PostsComponent},
  {path: 'post/:id', component: PostDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

