import {Component, OnInit} from '@angular/core';
import {INote} from "./models/note";
import {NotesService} from "./services/notes.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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

  constructor(private noteService: NotesService) {
  }


  ngOnInit(): void {
    this.notes$ = this.noteService.getAll();
  }

}
