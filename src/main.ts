/**
 * @fileoverview The main entry point for the Angular application.
 *
 * This file is responsible for bootstrapping the `AppModule` using the
 * `platformBrowserDynamic` platform. It initializes the Angular application
 * in the browser environment.
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/**
 * Bootstraps the Angular application.
 *
 * This function call initializes the platform and bootstraps the root module (`AppModule`).
 * Errors during the bootstrap process are caught and logged to the console.
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
