import { Injectable, inject } from '@angular/core';
import { AuthApi, LoginRequest, RegisterRequest } from '../api/auth-api';
import { TokenService } from './token.service';
import { tap } from 'rxjs';
import { UseQuery } from '@ngneat/query';

export type LoginState = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authApi = inject(AuthApi);
  tokenService = inject(TokenService);
  useQuery = inject(UseQuery);

  login(loginCredentials: LoginRequest) {
    return this.useQuery(
      ['login', loginCredentials],
      () => {
        return this.authApi.login(loginCredentials).pipe(
          tap((response) => {
            this.tokenService.encodedToken = response.accessToken;
          })
        );
      },
      {
        retry: false,
        refetchOnWindowFocus: false,
      }
    );
  }

  register(registerCredentials: RegisterRequest) {
    return this.useQuery(['register', registerCredentials], () => {
      return this.authApi.register(registerCredentials).pipe(
        tap((response) => {
          this.tokenService.encodedToken = response.accessToken;
        })
      );
    });
  }
}
