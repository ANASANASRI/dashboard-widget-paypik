import { Injectable } from "@angular/core";
import * as Stomp from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WebSocketService {
  private stompClient: any;
  private notificationsSubject = new BehaviorSubject<number>(0);
  notifications$ = this.notificationsSubject.asObservable();

  constructor() {}

  // Open connection with the back-end socket
  public connect() {
    let socket = new SockJS(`http://localhost:8085/socket`);
    this.stompClient = Stomp.over(socket);
    return this.stompClient;
  }

  // Subscribe to notifications
  public subscribeToNotifications() {
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/topic/notification', (notifications) => {
        this.notificationsSubject.next(JSON.parse(notifications.body).count);
      });
    });
  }
}
