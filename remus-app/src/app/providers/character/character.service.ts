import { Injectable } from '@angular/core';
import { CharacterSheet } from 'src/app/models/character-sheet.model';
import { all_characters } from 'src/mocks/character'
import { PlayersService } from '../players/players.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private empty_characters: CharacterSheet = {
    img: null,
    name: '',
    age: -1,
    sex: '',
    background: '',
    traits: [{
      name: 'Force',
      value: -1,
    }, {
      name: 'Endurance',
      value: -1,
    }, {
      name: 'Intelligence',
      value: -1,
    }, {
      name: 'Perception',
      value: -1,
    }, {
      name: 'Charisme',
      value: -1,
    }, {
      name: 'Dextérité',
      value: -1,
    }],
    skills: [
    ]
  };

  characters: CharacterSheet[];

  constructor(private playerService: PlayersService) {
    this.characters = playerService.isHost? all_characters: [];
  }

  getCharacter(index = -1) {
    if (index === -1) { // Se la personne qui envoie la requête n'est pas le MJ
      if (this.characters.length === 0) {
        const newChar = {...this.empty_characters}
        this.characters.push(newChar);
        return newChar;
      } else {
        return this.characters[0];
      }
    } else if (index === null) { // Si le MJ veut créer une nouveau PNJ
      const newChar = {...this.empty_characters}
      this.characters.push(newChar);
      return newChar;
    } else {
      return this.characters[index];
    }
  }

}
