import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NoteComponent} from "./components/note/note.component";
import {HttpClientModule} from "@angular/common/http";
import {FilterNotesPipe} from './pipes/filter-notes.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddComponent } from './components/addupdate/add.component';
import {AppRoutingModule} from "./app-routing.module";
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    FilterNotesPipe,
    AddComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
