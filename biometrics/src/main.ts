import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import '@facephi/selphi-widget-web';
import '@facephi/selphid-widget-web';
import { defineCustomElements } from '@facephi/sdk-web-wc/loader';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

defineCustomElements(window);
