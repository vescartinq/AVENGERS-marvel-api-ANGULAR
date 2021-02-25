import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/characters.service';

import { Result, Data, Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  constructor(private characterService: CharacterService) {}

  characters: Result[] = [];

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((resp) => {
      this.characters = resp.data.results;
      console.log(this.characters);
    });
  }
}
