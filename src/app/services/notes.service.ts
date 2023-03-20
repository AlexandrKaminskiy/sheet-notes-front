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
    return this.http.get<INote[]>('http://localhost:3000/notes');
  }

  getOne(id: number): Observable<INote> {
    return this.http.get<INote>(`http://localhost:3000/notes/${id}`)
  }
  add(formData: FormData): Observable<INote> {
    return this.http.post<INote>('http://localhost:3000/notes/new', formData);
  }

  update(formData: FormData, id: number): Observable<INote> {
    return this.http.put<INote>(`http://localhost:3000/notes/update/${id}`, formData);
  }

  getFile(id: number) {
    return this.http.get(`http://localhost:3000/notes/file/${id}`, {responseType: 'blob', observe: 'response'})
      .subscribe((data) => {
      this.downloadFile(data.body as Blob);
    });
  }

  downloadFile(data: Blob) {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }
}
