import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { CharactersRoutingModule } from './characters-routing.module';
import { MaterialModule } from './../material/material.module';

import { CharacterCardComponent } from './components/character-card/character-card.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { InsertComponent } from './pages/insert/insert.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    // componets
    ListComponent,
    CharacterCardComponent,
    HomeComponent,
    InsertComponent,
    SearchComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    CharactersRoutingModule,
    MaterialModule,
  ],
})
export class CharactersModule {}
