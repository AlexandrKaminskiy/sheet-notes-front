import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {INote} from "../models/note";

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<INote[]> {
    return this.http.get<INote[]>('http://localhost:3000/notes');
  }

  getOne(id: number): Observable<INote> {
    return this.http.get<INote>(`http://localhost:3000/notes/${id}`)
  }
  add(note: INote): Observable<INote> {
    return this.http.post<INote>('http://localhost:3000/notes/new', note);
  }

  update(note: INote, id: number): Observable<INote> {
    return this.http.put<INote>(`http://localhost:3000/notes/update/${id}`, note);
  }

}
