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
    name: new FormControl<string>('',{nonNullable: true}),
    bpm: new FormControl<string>('',[
      Validators.required,
      Validators.min(1)
    ]),
    complexity: new FormControl<string>(''),
    duration: new FormControl<string>(''),
    instrument: new FormControl<string>(''),
    description: new FormControl<string>(''),
    file: new FormControl(Blob, Validators.required)
  })

  bpm() {
    return this.form.controls.bpm as FormControl;
  }

  submit() {
    console.log(this.form.value)
    let formData = new FormData();
    formData.append('name',  this.form.controls.name.value )
    formData.append('bpm',  this.form.controls.bpm.value as string )
    formData.append('complexity',  this.form.controls.complexity.value as string)
    formData.append('duration',  this.form.controls.duration.value as string)
    formData.append('instrument',  this.form.controls.instrument.value as string )
    formData.append('description',  this.form.controls.description.value as string )
    formData.append('sheet',  this.file)

    this.noteService.add(formData).subscribe(() => {
      this.router.navigate(['']);
    })

  }

  ngOnInit(): void {
    console.log(this.router.routerState.root);
  }

  download($event: any) {
    this.file = $event.target.files[0];
  }
}
