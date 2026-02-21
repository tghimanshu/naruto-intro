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
  next: string
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
      next: 'UCHIHA SASUKE',
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
      next: 'HARUNO SAKURA',
    },
    {
      firstName: 'SAKURA',
      lastName: 'HARUNO',
      splits: ['SA', 'KU', 'RA'],
      firstNameKanji: 'サクラ',
      lastNameKanji: 'はるの',
      introduction:
        'Sakura Haruno is one of the main characters in the Naruto series. She is a member of Team 7, which consists of Naruto Uzumaki, Sasuke Uchiha, and their sensei, Kakashi Hatake. Sakura is initially portrayed as a somewhat insecure and self-conscious character, but she undergoes significant growth and development throughout the series.',
      imageUri: 'assets/sakura-haruno.png',
      primaryColor: '#e91e63',
      teamNumber: 7,
      next: 'HATAKE KAKASHI',
    },
    {
      firstName: 'KAKASHI',
      lastName: 'HATAKE',
      splits: ['KA', 'KA', 'SHI'],
      firstNameKanji: 'カカシ',
      lastNameKanji: 'はたけ',
      introduction:
        'Kakashi Hatake is a prominent character in the Naruto series. He is a skilled ninja and serves as the leader of Team 7, which consists of Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno. Kakashi is known for his calm and laid-back demeanor, as well as his exceptional combat skills and intelligence.',
      imageUri: 'assets/kakashi-hatake.png',
      primaryColor: '#9e9e9e',
      teamNumber: 7,
      next: 'UZUMAKI NARUTO',
    }
  ];

  getCharacter(name: string): Character | undefined {
    return this.characters.find(
      (character) => character.firstName.toLowerCase() === name.toLowerCase(),
    );
  }

}
