import {INote} from "./note";

export interface AllNotesDto {

  data: {
    getNotes: INote[]
  }
}

export interface OneNoteDto {

  data: {
    getNote: INote
  }
}
