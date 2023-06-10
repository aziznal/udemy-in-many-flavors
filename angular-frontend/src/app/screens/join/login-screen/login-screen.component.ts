import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutes } from 'src/routes';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginRequest } from 'src/app/api/auth-api';
import { AlertComponent } from 'src/app/components/alert/alert.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, AlertComponent],
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent {
  authService = inject(AuthService);

  isLoading = signal(false);
  isError = signal(false);

  get AppRoutes() {
    return AppRoutes;
  }

  login(event: Event) {
    event.preventDefault();

    const loginData = this.#extractFormData();

    this.authService.login(loginData).result$.subscribe((state) => {
      this.isLoading.set(state.isLoading);

      if (state.isError) {
        this.isError.set(state.isError);
      }

      if (state.isSuccess) {
        return this.#routeToMainScreen();
      }
    });
  }

  #extractFormData(): LoginRequest {
    return {
      email: 'foo',
      password: 'bar',
    };
  }

  #routeToMainScreen(): void {
    console.log('routing to main screen...');
  }
}
