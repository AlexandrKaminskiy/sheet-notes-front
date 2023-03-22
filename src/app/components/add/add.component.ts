import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NotesService} from "../../services/notes.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit{
  constructor(private router: Router, private http: HttpClient, private noteService: NotesService) {
  }

  file: File;

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
    file: new FormControl(Blob, Validators.required)
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
    console.log(this.form.value)
    let formData = new FormData();
    formData.append('name',  this.form.controls.name.value as string )
    formData.append('bpm',  this.form.controls.bpm.value as string )
    formData.append('complexity',  this.form.controls.complexity.value as string)
    formData.append('duration',  this.form.controls.duration.value as string)
    formData.append('instrument',  this.form.controls.instrument.value as string )
    formData.append('description',  this.form.controls.description.value as string )
    formData.append('sheet',  this.file)

    this.noteService.add(formData).subscribe(() => {
      this.router.navigate(['']);
    }, error => {
      this.router.navigate(['error'])
    })

  }

  ngOnInit(): void {
    console.log(this.router.routerState.root);
  }

  download($event: any) {
    this.file = $event.target.files[0];
  }
}
