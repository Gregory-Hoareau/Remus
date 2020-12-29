import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CharacterSheet } from 'src/app/models/character-sheet.model';

@Injectable({
  providedIn: 'root'
})
export class CrowdsourcingService {

  readonly base_url = 'http://51.210.101.240:8000/' //'http://localhost:8000/'; 
  readonly character_sheet_url = this.base_url + 'characterSheet/';
  readonly availableTags = ['fantasy', 'modern', 'post-apo', 'cyberpunk', 'steampunk']

  private all_sheet: CharacterSheet[] = []
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getCharacterSheets() {
    return this.http.get<CharacterSheet[]>(this.character_sheet_url);
  }

  postCharacterSheet(sheet: CharacterSheet) {
    return this.http.post<CharacterSheet>(this.character_sheet_url, sheet);
  }

  getAvailableTags() {
    return this.availableTags;
  }
}
