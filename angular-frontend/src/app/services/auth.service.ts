import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { AuthApi, LoginRequest, RegisterRequest } from '../api/auth-api';
import { TokenService } from './token.service';
import { tap } from 'rxjs';
import { UseQuery } from '@ngneat/query';

export type UserSession = {
  email: string;
  iat: number;
  exp: number;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authApi = inject(AuthApi);
  tokenService = inject(TokenService);
  useQuery = inject(UseQuery);

  session = computed<UserSession | null>(() => {
    return this.tokenService.decodedToken();
  });

  isloggedin = computed<boolean>(() => {
    return this.tokenService.isTokenValid();
  });

  login(loginCredentials: LoginRequest) {
    return this.useQuery(['login', loginCredentials], () => {
      return this.authApi.login(loginCredentials).pipe(
        tap((response) => {
          this.tokenService.encodedToken.set(response.accessToken);
        })
      );
    });
  }

  register(registerCredentials: RegisterRequest) {
    return this.useQuery(['register', registerCredentials], () => {
      return this.authApi.register(registerCredentials).pipe(
        tap((response) => {
          this.tokenService.encodedToken.set(response.accessToken);
        })
      );
    });
  }

  logout() {
    this.tokenService.encodedToken.set(null);
  }
}
