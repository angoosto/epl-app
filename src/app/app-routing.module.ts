import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeasonDetailsComponent } from './season-details/season-details.component';

const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch: 'full'},
  {path: 'home',component:SeasonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
