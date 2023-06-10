import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { TokenService } from './services/token.service';
import { delay, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.tokenService.encodedToken;

    if (!authToken) {
      return of('').pipe(
        delay(environment.mockRequestDelay),

        switchMap(() => {
          return next.handle(req).pipe();
        })
      );
    }

    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken),
    });

    return of('').pipe(
      delay(environment.mockRequestDelay),

      switchMap(() => {
        return next.handle(authReq).pipe();
      })
    );
  }
}
