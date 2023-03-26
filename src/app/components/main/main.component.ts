import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {INote} from "../../models/note";
import {NotesService} from "../../services/notes.service";
import {SocketService} from "../../services/socket.service";
import {SocketEndpoints} from "../../services/socket.endpoints";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit{
  title = 'sheet-notes-front';
  name = '';
  instrument = '';
  dateFrom : Date;
  dateTo : Date;
  bpm: number
  complexity: number
  durationFrom: number
  durationTo: number

  notes$: Observable<INote[]>

  constructor(private noteService: NotesService, private socketService: SocketService) {
    this.socketService.emitToServer(SocketEndpoints.ALL, {})
  }


  ngOnInit(): void {
    this.noteService.listenToServer(SocketEndpoints.ALL).pipe((change) => {
      console.log('receiving all...')
      this.notes$ = change;
      return change;
    })
  }

}

