import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Result, Character, Data } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiUrl: string = environment.apiUrl;
  private apiKey: string = environment.apiKey;
  limit: string = '20';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character> {
    return this.http.get<Character>(
      `${this.apiUrl}characters?limit=${this.limit}&apikey=${this.apiKey}`
    );
  }
}
