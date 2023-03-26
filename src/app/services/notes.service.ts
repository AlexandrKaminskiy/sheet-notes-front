import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import * as io from "socket.io-client";
import {SocketEndpoints} from "./socket.endpoints";

@Injectable({
  providedIn: 'root'
})
export class NotesService implements OnInit{

  private clientSocket = io.connect('localhost:3000/')

  listenToServer(connection: string): Observable<any> {
    return new Observable((subscribe) => {
      this.clientSocket.on(connection, (data) => {
        console.log('received...')
        subscribe.next(data);
      })
    })
  }

  ngOnInit(): void {
    this.clientSocket = io.connect('http://localhost:3000')
  }


  private options = {withCredentials: true}
  constructor(private http: HttpClient, private router: Router) {

  }

  getAll() {
    return this.clientSocket.emit(SocketEndpoints.ALL, {})
  }

  getOne(id: number) {
    return this.clientSocket.emit(SocketEndpoints.NOTE, { id })
  }
  add(data: any) {
    this.clientSocket.emit(SocketEndpoints.ADD, { data } )
  }

  update(data: any) {
    console.log('updating')
    this.clientSocket.emit(SocketEndpoints.UPDATE, { data } )
  }

  delete(id: number) {
    this.clientSocket.emit(SocketEndpoints.DELETE, {id} )
  }

  getFile(id: number) {
    this.clientSocket.emit(SocketEndpoints.FILE, {id} )
  }

}
