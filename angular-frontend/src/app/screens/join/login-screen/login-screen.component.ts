import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutes } from 'src/routes';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginScreenComponent {
  get AppRoutes() {
    return AppRoutes;
  }
}
