import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'fir-web24a',
        appId: '1:851715066417:web:06d088d93535ca8e17e310',
        storageBucket: 'fir-web24a.appspot.com',
        apiKey: 'AIzaSyA9xsCRLglaACZYKkfN303Z9B5udXqtzuc',
        authDomain: 'fir-web24a.firebaseapp.com',
        messagingSenderId: '851715066417',
      }),
    ),
    provideAuth(() => getAuth()),
  ],
};
