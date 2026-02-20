import { Injectable } from '@angular/core';

export type Character = {
  firstName: string;
  lastName: string;
  splits: string[];
  firstNameKanji: string;
  lastNameKanji: string;
  introduction: string;
  imageUri: string;
  primaryColor: string;
  teamNumber: number;
};

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  /**
   * Retrieves the character data for multiple characters.
   *
   * **/

  characters: Character[] = [
    {
      firstName: 'NARUTO',
      lastName: 'UZUMAKI',
      splits: ['NA', 'RU', 'TO'],
      firstNameKanji: 'ナルト',
      lastNameKanji: 'うずまき',
      introduction:
        ' Naruto Uzumaki is a titular protagonist of the series . He waws the first character created by Kishimoto during the conception of the series and was designed with many traits from other shonen characters.',
      imageUri: 'assets/naruto-sage-mode.png',
      primaryColor: '#8b3125',
      teamNumber: 7,
    },
    {
      firstName: 'SASUKE',
      lastName: 'UCHIHA',
      splits: ['SA', 'SU', 'KE'],
      firstNameKanji: 'サスケ',
      lastNameKanji: 'うちは',
      introduction:
        'Sasuke Uchiha is one of the main characters in the Naruto series. He is a member of the Uchiha clan, a powerful and prestigious family known for their Sharingan abilities. Sasuke is initially portrayed as a rival to Naruto Uzumaki, but his character undergoes significant development throughout the series.',
      imageUri: 'assets/sasuke-uchiha.png',
      primaryColor: '#1e336a',
      teamNumber: 7,
    },
  ];

  getCharacter(name: string): Character | undefined {
    return this.characters.find(
      (character) => character.firstName.toLowerCase() === name.toLowerCase(),
    );
  }
}
