import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { CharacterService } from '../../services/characters.service';
import { Result } from '../../interfaces/character.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class DetailComponent implements OnInit {
  character!: Result;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.characterService.getCharacterById(id)))
      .subscribe((resp) => {
        console.log(resp);
        this.character = resp.data.results[0];
        console.log(this.character);
      });
  }

  return() {
    this.router.navigate(['/characters/list']);
  }
}
