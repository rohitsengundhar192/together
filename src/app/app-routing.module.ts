import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaymoviesComponent } from './base/playmovies/playmovies.component';
import { NewobservableComponent } from './newobservable/newobservable.component';

const routes: Routes = [
  {path:'man',component:PlaymoviesComponent},
  {path:'newob',component:NewobservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
