import {Injectable, OnInit} from '@angular/core';
import * as io from 'socket.io-client'
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocketService implements OnInit{

  private clientSocket = io.connect('localhost:3000/')

  listenToServer(connection: string): Observable<any> {
    return new Observable((subscribe) => {
      this.clientSocket.on(connection, (data) => {
        console.log('subscribed...')
        subscribe.next(data);
      })
    })
  }

  emitToServer(connection: string, data: any) {
    console.log('emitting...')
    this.clientSocket.emit(connection, data);
  }

  ngOnInit(): void {
    this.clientSocket = io.connect('http://localhost:3000')
  }

}
