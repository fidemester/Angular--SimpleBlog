import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts/posts.component';
import {PostItemComponent} from './post-item/post-item.component';
import {TrucatePipe} from '../trucate.pipe';
import {PostsService} from './posts.service';
import {HttpClientModule} from '@angular/common/http';
import {NotFoundComponent} from '../not-found/not-found.component';
import {RouterModule} from '@angular/router';
import {ContactComponent} from '../features/contact/contact.component';
import {FormsModule} from '@angular/forms';
import {CommentModule} from '../comment/comment.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ContactModule} from '../features/contact/contact.module';
import {PostResolver} from './post.resolver';

@NgModule({
  declarations: [
    PostsComponent,
    PostItemComponent,
    TrucatePipe,
    NotFoundComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    CommentModule,
    FontAwesomeModule,
    ContactModule
  ],
  exports: [
    PostsComponent
  ],
  providers: [
    PostsService, PostResolver
  ]
})
export class Posts3Module {
}
