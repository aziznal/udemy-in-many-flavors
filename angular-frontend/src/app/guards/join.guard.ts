import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const joinGuard: CanActivateChildFn = (_route, _state) => {
  const authService = inject(AuthService);

  if (authService.isloggedin()) return false;

  return true;
};
