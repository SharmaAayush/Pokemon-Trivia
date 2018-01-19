import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { RawTableComponent } from "./raw-table/raw-table.component";
import { PrettyComponent } from "./pretty/pretty.component";
import { DetailsComponent } from "./pretty/details/details.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'basic', pathMatch: 'full' },
  { path: 'basic', component: RawTableComponent },
  { path: 'pretty', component: PrettyComponent, children: [
    { path: ':num', component: DetailsComponent }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}