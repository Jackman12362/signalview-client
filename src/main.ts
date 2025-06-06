import '@angular/localize/init';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { VERSION as CDK_VERSION } from '@angular/cdk';
import {
  VERSION as MAT_VERSION,
  provideNativeDateAdapter,
} from '@angular/material/core';

import { MainComponentComponent } from './app/main-component/main-component.component';

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

bootstrapApplication(MainComponentComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideNativeDateAdapter(),
  ],
}).catch((err) => console.error(err));
