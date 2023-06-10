import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

enum PasswordStrength {
  TooShort = 0,
  Weak = 1,
  Good = 2,
  Strong = 3,
  VeryStrong = 4,
}

@Component({
  selector: 'app-password-strength-meter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength-meter.component.html',
  styleUrls: ['./password-strength-meter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordStrengthMeterComponent {
  @Input()
  password?: string;

  // making enum accessible to component
  PasswordStrength = PasswordStrength;

  get strength(): PasswordStrength {
    if (!this.password) {
      return this.PasswordStrength.TooShort;
    }

    if (this.password.length < 8) {
      return this.PasswordStrength.Weak;
    }

    if (this.password.length < 12) {
      return this.PasswordStrength.Good;
    }

    if (this.password.length < 16) {
      return this.PasswordStrength.Strong;
    }

    return this.PasswordStrength.VeryStrong;
  }

  get strengthText(): string {
    switch (this.strength) {
      case this.PasswordStrength.TooShort:
        return 'Too short';

      case this.PasswordStrength.Weak:
        return 'Weak';

      case this.PasswordStrength.Good:
        return 'Good';

      case this.PasswordStrength.Strong:
        return 'Strong';

      case this.PasswordStrength.VeryStrong:
        return 'Very strong';

      default:
        return '';
    }
  }
}
