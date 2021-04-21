import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "./comment.inerface";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  static API_URL='http://localhost:3000/comments';
  constructor(private http:HttpClient) { }


  getComments(postId:number):Observable< IComment[] >{
    return this.http.get<IComment[]>(CommentsService.API_URL + '/' +'?postId='+ postId)

  }

   addComment(comment:IComment):Observable<IComment>{
    return this.http.post<(IComment)>(CommentsService.API_URL, comment)
  }
}
