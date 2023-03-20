import {Component, Input, OnInit} from '@angular/core';
import {INote} from "../../models/note";
import {NotesService} from "../../services/notes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {delay} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {

  @Input() isNew: boolean;
  @Input() note: INote;
  id: number
  constructor(private noteService: NotesService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  form = new FormGroup({
    name: new FormControl<string>('',{nonNullable: true}),
    bpm: new FormControl<number>(0,[
      Validators.required,
      Validators.min(1)
    ]),
    complexity: new FormControl<number>(0),
    duration: new FormControl<number>(0),
    instrument: new FormControl<string>(''),
    description: new FormControl<string>('')
  })

  submit() {
    let note = this.form.value as INote;
    console.log(note)
    this.noteService.update(note, this.id).subscribe(() => {
      this.router.navigate(['']);
    })
  }

  bpm() {
    return this.form.controls.bpm as FormControl;
  }

  ngOnInit(): void {
    this.id = 0;
    this.activatedRoute.params.subscribe(params => {
       this.id = params['id']
    });

    this.noteService.getOne(this.id).subscribe((note) => {
      this.form.controls.name.setValue(note.name);
      this.form.controls.bpm.setValue(note.bpm);
      this.form.controls.complexity.setValue(note.complexity);
      this.form.controls.description.setValue(note.description);
      this.form.controls.duration.setValue(note.duration);
      this.form.controls.instrument.setValue(note.instrument);
    })
  }

}



