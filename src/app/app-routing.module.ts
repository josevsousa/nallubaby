import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { HomeComponent } from "./home/home.component";
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  {path:'home', component: HomeComponent },
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'contato', component: ContatoComponent},
  {path:'**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
