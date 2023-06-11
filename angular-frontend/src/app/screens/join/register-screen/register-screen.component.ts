import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AppRoutes } from 'src/routes';
import { PasswordStrengthMeterComponent } from 'src/app/components/password-strength-meter/password-strength-meter.component';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterRequest } from 'src/app/api/auth-api';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, PasswordStrengthMeterComponent, ReactiveFormsModule],
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterScreenComponent {
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);

  isLoading = signal(false);
  isError = signal(false);

  isPasswordHidden = signal(true);

  form = this.formBuilder.group({
    fullname: ['', [Validators.required, Validators.minLength(1)]],
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

  register(event: Event) {
    event.preventDefault();

    if (this.form.invalid) return;

    // reset prev state
    this.isLoading.set(false);
    this.isError.set(false);

    this.authService.register(this.form.value as RegisterRequest).result$.subscribe((state) => {
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
