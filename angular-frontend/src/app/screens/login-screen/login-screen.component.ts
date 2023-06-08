import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginScreenComponent {}
