import { Injectable } from '@angular/core';
import decodeJwt from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  get encodedToken(): string | null {
    return localStorage.getItem('token');
  }

  set encodedToken(value: string | null) {
    if (value === null) {
      localStorage.removeItem('token');
      return;
    }

    localStorage.setItem('token', value);
  }

  getDecodedToken() {
    const token = this.encodedToken;

    if (!token) {
      return null;
    }

    return decodeJwt(token);
  }
}
