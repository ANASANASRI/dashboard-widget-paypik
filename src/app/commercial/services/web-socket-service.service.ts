import { Injectable } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor(private rxStompService: RxStompService) { }

  connect(): Observable<any> {
    return new Observable(observer => {
      this.rxStompService.watch('/ws').subscribe(message => {
        observer.next(JSON.parse(message.body));
      });
    });
  }
}
