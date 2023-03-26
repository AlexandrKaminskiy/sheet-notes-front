import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NotesService} from "../../services/notes.service";
import {SocketService} from "../../services/socket.service";
import {SocketEndpoints} from "../../services/socket.endpoints";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {
  constructor(private router: Router, private http: HttpClient, private noteService: NotesService, private socketService: SocketService) {
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

    let dto = { 'name' : this.form.controls.name.value,
                'bpm' : this.form.controls.bpm.value,
                'complexity' :  this.form.controls.complexity.value,
                'duration' :  this.form.controls.duration.value,
                'instrument' :  this.form.controls.instrument.value,
                'description' :  this.form.controls.description.value,
                'sheet' :  this.file
    }

    this.noteService.add(dto);
    this.router.navigate(['/'])

  }

  download($event: any) {
    this.file = $event.target.files[0];
  }

}
