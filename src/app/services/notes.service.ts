import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {INote} from "../models/note";

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<INote[]> {
    return this.http.get<INote[]>('http://localhost:3000');
  }

  add() {

  }
}
