import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AddComponent} from "./components/add/add.component";
import {MainComponent} from "./components/main/main.component";
import {UpdateComponent} from "./components/update/update.component";
import {NoteInfoComponent} from "./components/note-info/note-info.component";

const routes: Routes = [
  { path: 'new', component: AddComponent },
  { path: '', component: MainComponent},
  { path: 'update/:id', component: UpdateComponent},
  { path: 'note/:id', component: NoteInfoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
