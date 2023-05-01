import {Component, OnInit} from '@angular/core';
import {NotesService} from "../../services/notes.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-note-info',
  templateUrl: './note-info.component.html'
})
export class NoteInfoComponent implements OnInit {

  id: number
  name: string
  bpm: number
  complexity: number
  duration: number
  instrument: string
  description: string
  constructor(private noteService: NotesService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = 0;
    this.activatedRoute.params.subscribe(params => {

      this.id = params['id']
    });

    this.noteService.getOne(this.id).subscribe((noteData) => {
      let note = noteData.data.getNote;
      this.name = note.name;
      this.bpm = note.bpm;
      this.complexity = note.complexity;
      this.description = note.description;
      this.duration = note.duration;
      this.instrument = note.instrument;
    }, error => {
      this.router.navigate(['error'])
    })
  }


  download() {
    this.noteService.getFile(this.id);
  }
}
