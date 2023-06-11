import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';
import { provideQueryClientOptions } from '@ngneat/query';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideQueryClientOptions({
      defaultOptions: {
        queries: {
          staleTime: 3000,
          retry: false,
          refetchOnWindowFocus: false,
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
