import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('ws://localhost:8085/tutorial'); // WebSocket URL
  }

  // Method to subscribe to WebSocket messages
  subscribeToMessages() {
    return this.socket$.asObservable();
  }
}
