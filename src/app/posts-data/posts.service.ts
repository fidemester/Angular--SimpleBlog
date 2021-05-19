import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Ipost} from './ipost';

@Injectable({
  providedIn: 'root'
})
export class PostsService { // a service fajl kerüljön a "posts-data" modul mappába!

  static API_URL = 'http://localhost:4440/posts';

  constructor(private http: HttpClient) {
  }

  getPosts(limit: number): Observable<Ipost[]> { // rename to Post or  IPost
    return this.http.get<Ipost[]>(PostsService.API_URL, {params: new HttpParams({fromString: '_page=1&_limit=' + limit})}); // fromString kérdéses számomra, müxik így?
  }

  getPost(id: number) {
    return this.http.get<Ipost[]>(PostsService.API_URL + '/' + id);
  }


//error handling
  handleError(error: HttpErrorResponse): Observable<HttpEvent<Error>> {
    let errorMessage = '';
    if (error.error instanceof ProgressEvent) {
      //client side error
      errorMessage = `Client side error:${error.message}`;
    } else {
      //server side error
      errorMessage = `Code: ${error.status}/n
      Message: Baj van`;
    }
    return throwError(new Error(errorMessage));
  }
}
