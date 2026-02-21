import { Component } from '@angular/core';
import { Character, CharacterService } from './services/character.service';

/**
 * The root component of the application.
 *
 * This component serves as the main entry point for the UI and hosts the top-level
 * template for the Naruto Intro application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  character?: Character;

  constructor(public characterService: CharacterService) {
    this.character = characterService.getCharacter('naruto');
  }

  nextCharacter(): void {
    if (!this.character) return;
    console.log(this.character.next.split(' ')[1].toLowerCase());

    this.character = this.characterService.getCharacter(this.character.next.split(' ')[1].toLowerCase());
  }
}
