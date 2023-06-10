import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutes } from 'src/routes';
import { PasswordStrengthMeterComponent } from 'src/app/components/password-strength-meter/password-strength-meter.component';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, PasswordStrengthMeterComponent],
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterScreenComponent {
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);

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

  register() {
    // reset prev state
    this.isLoading.set(false);
    this.isError.set(false);
  }

  togglePasswordVisibility() {
    this.isPasswordHidden.update((val) => !val);
  }
}
