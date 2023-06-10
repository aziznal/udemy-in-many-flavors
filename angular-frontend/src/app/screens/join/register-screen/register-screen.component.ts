import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutes } from 'src/routes';
import { PasswordStrengthMeterComponent } from 'src/app/components/password-strength-meter/password-strength-meter.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, PasswordStrengthMeterComponent],
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterScreenComponent {
  get AppRoutes() {
    return AppRoutes;
  }
}
