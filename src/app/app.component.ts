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
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * The title of the application.
   *
   * @remarks
   * This property is bound to the template and displays the application's name.
   */
  title = 'naruto-intro';
}
