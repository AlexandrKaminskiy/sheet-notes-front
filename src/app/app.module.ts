import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NoteComponent} from "./components/note/note.component";
import {HttpClientModule} from "@angular/common/http";
import {FilterNotesPipe} from './pipes/filter-notes.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddComponent} from './components/add/add.component';
import {AppRoutingModule} from "./app-routing.module";
import {MainComponent} from './components/main/main.component';
import {UpdateComponent} from './components/update/update.component';
import { NoteInfoComponent } from './components/note-info/note-info.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    FilterNotesPipe,
    AddComponent,
    MainComponent,
    UpdateComponent,
    NoteInfoComponent,

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
