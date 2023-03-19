import { Pipe, PipeTransform } from '@angular/core';
import {INote} from "../models/note";

@Pipe({
  name: 'filterNotes'
})
export class FilterNotesPipe implements PipeTransform {

  transform(notes: INote[],
            name: string,
            instrument: string,
            dateFrom: Date,
            dateTo: Date,
            complexity: number,
            durationFrom: number,
            durationTo: number): INote[] {

    console.log(name)
    return notes.filter(p => {
      return p.name.toLowerCase().includes(name.toLowerCase())
        && p.instrument.toLowerCase().includes(instrument.toLowerCase())
        && (!dateFrom || p.creation_date > dateFrom)
        && (!dateTo || p.creation_date < dateTo)
        && (!complexity || p.complexity == complexity)
        && (!durationFrom || p.duration >= durationFrom)
        && (!durationTo || p.duration <= durationTo)
    })
  }

}
