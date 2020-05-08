import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message} from '../common/message';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl = 'http://localhost:8080';
  private messageAPI = 'http://localhost:8080/messages';

  constructor(private httpClient: HttpClient) { }


getAll(): Observable<Message[]>{
  return this.httpClient.get<GetResponseMessage>(`${this.baseUrl}/messages`).pipe(
    map(response => response._embedded.messages)
  );
}

save(message: any): Observable<Message>{
    let result: Observable<any>;
    if (message.href){
      result = this.httpClient.put(message.href, message);
    } else {
      result = this.httpClient.post(this.messageAPI, message);
    }
    return result;
}

romove(href: string){
    return this.httpClient.delete(href);
}



}
interface GetResponseMessage {
  _embedded: {
    messages: Message[];
  };
}
