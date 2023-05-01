import {Component, Input, OnInit} from '@angular/core';
import {INote} from "../../models/note";
import {NotesService} from "../../services/notes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {

  @Input() note: INote;
  id: number
  file: File;

  constructor(private noteService: NotesService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  form = new FormGroup({
    name: new FormControl<string>('',[
      Validators.required,
      Validators.min(1)
    ]),
    bpm: new FormControl<string>('',[
      Validators.required,
      Validators.min(1)
    ]),
    complexity: new FormControl<string>('',[
      Validators.required,
      Validators.min(1)
    ]),
    duration: new FormControl<string>('',[
      Validators.required,
      Validators.min(1)
    ]),
    instrument: new FormControl<string>('',[
      Validators.required,
      Validators.min(1)
    ]),
    description: new FormControl<string>('',[
      Validators.required,
      Validators.min(1)
    ]),
  })

  name() {
    return this.form.controls.name as FormControl;
  }
  bpm() {
    return this.form.controls.bpm as FormControl;
  }
  complexity() {
    return this.form.controls.complexity as FormControl;
  }
  duration() {
    return this.form.controls.duration as FormControl;
  }
  instrument() {
    return this.form.controls.instrument as FormControl;
  }
  description() {
    return this.form.controls.description as FormControl;
  }

  submit() {
    let formData = new FormData();
    console.log(this.file)
    formData.append('name',  this.form.controls.name.value as string)
    formData.append('bpm',  this.form.controls.bpm.value as string )
    formData.append('complexity',  this.form.controls.complexity.value as string)
    formData.append('duration',  this.form.controls.duration.value as string)
    formData.append('instrument',  this.form.controls.instrument.value as string )
    formData.append('description',  this.form.controls.description.value as string )
    if (this.file !== undefined) {
      formData.append('file', this.file.name )
    }
    formData.append('sheet',  this.file)

    this.noteService.update(formData, this.id).subscribe(() => {
      this.router.navigate(['']);
    }, error => {
      this.router.navigate(['error'])
    })
  }

  ngOnInit(): void {
    this.id = 0;
    this.activatedRoute.params.subscribe(params => {
       this.id = params['id']
    });

    this.noteService.getOne(this.id).subscribe((noteData) => {
      let note = noteData.data.getNote;
      this.form.controls.name.setValue(note.name);
      this.form.controls.bpm.setValue(note.bpm.toString());
      this.form.controls.complexity.setValue(note.complexity.toString());
      this.form.controls.description.setValue(note.description);
      this.form.controls.duration.setValue(note.duration.toString());
      this.form.controls.instrument.setValue(note.instrument);
    })
  }

  download($event: any) {
    this.file = $event.target.files[0];
  }

  delete() {
    this.noteService.delete(this.id).subscribe((resp) => {
      console.log(resp)
    },error => {
      this.router.navigate(['error'])
    });
    this.router.navigate(['']);
  }
}



