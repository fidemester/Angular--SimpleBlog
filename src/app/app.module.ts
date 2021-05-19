import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeaderComponent} from './features/header/header.component';
import {Posts3Module} from './posts-data/post.module';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {PostDetailComponent} from './posts-data/post-detail/post-detail.component';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from './features/footer/footer.component';
import {CommentModule} from './comment/comment.module';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostDetailComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    Posts3Module,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    CommentModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
