import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_ROUTE } from './app/app-routing.module';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

const routes: Routes = [];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTE),
    provideAnimations(),
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
}).catch(err => console.error(err));