import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AddComponent} from "./components/addupdate/add.component";
import {AppComponent} from "./app.component";
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  { path: 'new', component: AddComponent },
  { path: '', component: MainComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
