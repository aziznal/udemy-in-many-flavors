import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutes } from 'src/routes';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginRequest } from 'src/app/api/auth-api';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, AlertComponent, ReactiveFormsModule],
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginScreenComponent {
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);

  isLoading = signal(false);
  isError = signal(false);

  isPasswordHidden = signal(true);

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,

        // 8+ of any characters
        Validators.pattern(/.{8,}/),
      ],
    ],
  });

  get AppRoutes() {
    return AppRoutes;
  }

  login(event: Event) {
    event.preventDefault();

    if (this.form.invalid) {
      return;
    }

    this.isLoading.set(false);
    this.isError.set(false);

    this.authService
      // okay to cast since validity is checked
      .login(this.form.value as LoginRequest)
      .result$.subscribe((state) => {
        this.isLoading.set(state.isLoading);

        if (state.isError) {
          return this.isError.set(state.isError);
        }

        if (state.isSuccess) {
          return this.#routeToMainScreen();
        }
      });
  }

  togglePasswordVisibility() {
    this.isPasswordHidden.update((val) => !val);
  }

  #routeToMainScreen(): void {
    this.router.navigateByUrl('/');
  }
}
