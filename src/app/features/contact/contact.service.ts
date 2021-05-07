import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactFormMessage} from './contactFormMessage';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  static API_URL = 'http://localhost:3000/ContactFormMessage';

  constructor(public http: HttpClient) {
  }

  sendMessage(message: ContactFormMessage | undefined): Observable<ContactFormMessage> {
    return this.http.post<(ContactFormMessage)>(ContactService.API_URL, message);
  }
}
