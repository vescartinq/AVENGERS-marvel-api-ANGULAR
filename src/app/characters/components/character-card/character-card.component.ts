import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styles: [
    `
      mat-card {
        margin-top: 20px;
        margin-bottom: 20px;
        height: 92%;
      }
    `,
  ],
})
export class CharacterCardComponent {
  @Input() character!: Character;
}
