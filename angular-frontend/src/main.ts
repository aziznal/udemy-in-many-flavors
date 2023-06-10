import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.mockRequestDelay) {
  console.warn(
    'mock request delay is to',
    environment.mockRequestDelay,
    'ms (see environment.ts file)'
  );
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
