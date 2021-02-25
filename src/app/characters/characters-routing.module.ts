import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { InsertComponent } from './pages/insert/insert.component';
import { SearchComponent } from './pages/search/search.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'insert', component: InsertComponent },
      { path: 'edit/:id', component: InsertComponent },
      { path: 'search', component: SearchComponent },
      { path: ':id', component: DetailComponent },
      { path: '**', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
