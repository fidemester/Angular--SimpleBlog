import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import {Posts3Module} from "./posts/posts3.module";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './features/footer/footer.component';
import {ContactComponent} from "./features/contact/contact.component";
import {NotFoundComponent} from "./features/not-found/not-found.component";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    NotFoundComponent,


  ],
  imports: [
    BrowserModule,
    Posts3Module,
    AppRoutingModule,
    RouterModule,
    FormsModule,


  ],
  providers: [],
  exports: [
    FooterComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
