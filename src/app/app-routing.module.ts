import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './cotacts/list/list.component'
import { DetailComponent } from './cotacts/detail/detail.component'

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'detail/:letter/:contact', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
