import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {INote} from "../models/note";
import {Router} from "@angular/router";
import {Apollo, gql} from "apollo-angular";
import {AllNotesDto, OneNoteDto} from "../models/allNotesDto";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private NOTE = gql`query GetNotes($token: String!){
      getNotes(token: $token) {
        name: String
        description: String
        bpm: Int
        complexity: Int
        duration: Int
        instrument: String
        creation_date: Date
      }
    }`

  private options = { withCredentials: true }
  constructor(private http: HttpClient, private router: Router, private apollo: Apollo) {
  }

  getAll(): Observable<AllNotesDto> {
    let token = localStorage.getItem('auth')
    let query = `query {
      getNotes(token: "${token}") {
        id, name, description, bpm, complexity, duration, instrument, creation_date
      }
    }`
    return this.http.post<AllNotesDto>('http://localhost:3000/graphql', {query}, this.options).pipe(source => {
      console.log(source)
      return source;
    });
  }

  getOne(id: number): Observable<OneNoteDto> {
    let query = `query {
      getNote(id: ${id}) {
        name, description, bpm, complexity, duration, instrument
      }
    }`
    return this.http.post<OneNoteDto>(`http://localhost:3000/graphql/${id}`, {query}, this.options)
  }
  add(data: any): Observable<INote> {
    let token = localStorage.getItem('auth');
    let query = `mutation {
      createNote(token:"${token}", note: {
         name: "${data.name}",
         description: "${data.description}",
         bpm: ${data.bpm},
         complexity: ${data.complexity},
         duration: ${data.duration},
         instrument: "${data.instrument}"
      }){id}
    }`
    return this.http.post<INote>('http://localhost:3000/graphql', {query}, this.options);
  }

  update(formData: FormData, id: number): Observable<INote> {
    return this.http.put<INote>(`http://localhost:3000/notes/update/${id}`, formData, this.options);
  }

  getFile(id: number) {
    return this.http.get(`http://localhost:3000/notes/file/${id}`, {responseType: 'blob', observe: 'response', withCredentials: true})
      .subscribe((data) => {

        this.downloadFile(data.body as Blob);
      }, error => {
        this.router.navigate(['error'])
      });
  }

  downloadFile(data: Blob) {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }

  delete(id: number) : Observable<Response>{
    let query = `mutation {
      deleteNote(id: ${id})
    }`
    return this.http.post<Response>(`http://localhost:3000/graphql`,{query}, this.options);
  }
}
