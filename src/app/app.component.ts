import { Component } from '@angular/core';

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
  /**
   * The title of the application.
   *
   * @remarks
   * This property is bound to the template and displays the application's name.
   */
  title = 'naruto-intro';
  character = {
    firstName: 'SASUKE',
    lastName: 'UCHIHA',
    splits: ['SA', 'SU', 'KE'],
    firstNameKanji: 'サスケ',
    lastNameKanji: 'うちは',
    introduction:
      'Sasuke Uchiha is one of the main characters in the Naruto series. He is a member of the Uchiha clan, a powerful and prestigious family known for their Sharingan abilities. Sasuke is initially portrayed as a rival to Naruto Uzumaki, but his character undergoes significant development throughout the series.',
    imageUri: 'assets/sasuke-uchiha.png',
    primaryColor: '#1e336a',
  };
  // character = {
  //   firstName: 'NARUTO',
  //   lastName: 'UZUMAKI',
  //   splits: ['NA', 'RU', 'TO'],
  //   firstNameKanji: 'ナルト',
  //   lastNameKanji: 'うずまき',
  //   introduction:
  //     ' Naruto Uzumaki is a titular protagonist of the series . He waws the first character created by Kishimoto during the conception of the series and was designed with many traits from other shonen characters.',
  //   imageUri: 'assets/naruto-sage-mode.png',
  //   primaryColor: '#8b3125',
  // };
}
