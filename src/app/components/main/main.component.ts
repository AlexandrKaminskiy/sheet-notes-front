import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {INote} from "../../models/note";
import {NotesService} from "../../services/notes.service";

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

  constructor(private noteService: NotesService) {
  }


  ngOnInit(): void {
    this.notes$ = this.noteService.getAll();
  }

}

