import { Injectable, OnDestroy, computed, effect, signal } from '@angular/core';
import decodeJwt from 'jwt-decode';

export type DecodedToken = {
  email: string;
  iat: number;
  exp: number;
};

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService implements OnDestroy {
  constructor() {
    this.encodedToken.set(localStorage.getItem(TOKEN_KEY));
  }

  encodedToken = signal<string | null>(null);

  decodedToken = computed<DecodedToken | null>(() => {
    const token = this.encodedToken();

    if (!token) return null;

    return decodeJwt(token);
  });

  isTokenValid = computed<boolean>(() => {
    const token = this.decodedToken();

    if (!token) return false;

    // *1000 because number given in token is seconds and Date.now() is in ms
    const isTokenExpired = token.exp * 1000 < Date.now();

    return !isTokenExpired;
  });

  #updateStoredToken = effect(() => {
    const newToken = this.encodedToken();

    if (newToken === null) {
      localStorage.removeItem('token');
      return;
    }

    localStorage.setItem('token', newToken);
  });

  ngOnDestroy(): void {
    this.#updateStoredToken.destroy();
  }
}
