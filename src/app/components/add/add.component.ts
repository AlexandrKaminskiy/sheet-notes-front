import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit{
  constructor(private router: Router, private http: HttpClient) {
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

  bpm() {
    return this.form.controls.bpm as FormControl;
  }

  submit() {
    console.log(this.form.value)
    this.http.post('http://localhost:3000/notes/new', this.form.value).subscribe(() => {
      this.router.navigate([''])
    })
  }

  ngOnInit(): void {
    console.log(this.router.routerState.root);
  }

}
