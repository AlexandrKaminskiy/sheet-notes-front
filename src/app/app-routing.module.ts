import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AddComponent} from "./components/add/add.component";
import {MainComponent} from "./components/main/main.component";
import {UpdateComponent} from "./components/update/update.component";
import {NoteInfoComponent} from "./components/note-info/note-info.component";
import {ErrorComponent} from "./components/error/error.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  { path: 'new', component: AddComponent },
  { path: '', component: MainComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'note/:id', component: NoteInfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
