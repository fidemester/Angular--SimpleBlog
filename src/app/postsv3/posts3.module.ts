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

@NgModule({
  declarations: [
    PostsComponent,
    PostItemComponent,
    TrucatePipe,        //@todo  ebbe a modulba csak a posztokkal kapcoslats elemek kerüljenek! --> AppModule-ba kerüljön
    NotFoundComponent, //@todo  ebbe a modulba csak a posztokkal kapcoslats komponensek kerüljenek! --> AppModule
    ContactComponent   //@todo: ebbe a modulba csak a posztokkal kapcoslatos komponensek kerüljenek! ContactComponent --> AppModule
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
      FormsModule
    ],
  exports:[
    PostsComponent
  ],
  providers:[
    PostsService
  ]
})
export class Posts3Module { } //@todo: typo in module name: Posts3Module --> PostsModule, mappa nevet is atnevezni
