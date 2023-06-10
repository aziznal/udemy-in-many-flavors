import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterScreenComponent {}
