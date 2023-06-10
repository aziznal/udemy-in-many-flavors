import { Injectable, inject } from '@angular/core';
import { AuthApi, LoginRequest } from '../api/auth-api';
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

  login(data: LoginRequest) {
    return this.useQuery(
      ['login', data],
      () => {
        return this.authApi.login(data).pipe(
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
}
