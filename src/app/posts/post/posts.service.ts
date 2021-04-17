import {Injectable, Input, OnInit} from '@angular/core';
import{AppComponent} from "../../app.component";
import {PostsComponent} from "./posts.component";
import {Post} from "../../app.component";
import {HttpClient, HttpErrorResponse, HttpEvent, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {IPost} from "./IPost";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  static API_URL='http://localhost:3000/posts';

  constructor(private http:HttpClient) {
  }
getPosts(limit:number) : Observable< IPost[] >{
      return this.http.get<IPost[]>(PostsService.API_URL,{ params: new HttpParams({fromString: "_page=1&_limit="+limit}) } );
}
getPost(id:number){
  return this.http.get<IPost[]>(PostsService.API_URL + '/' + id);
}


//error handling
  handleError(error:HttpErrorResponse):Observable<HttpEvent<Error>>{
    let errorMessage="";
    if (error.error instanceof ProgressEvent){
      //client side error
      errorMessage= `Client side error:${error.message}`
    }else {
      //server side error
      errorMessage= `Code: ${error.status}/n
      Message: Baj van`;
    }
    return throwError(new Error(errorMessage))
  }
}
