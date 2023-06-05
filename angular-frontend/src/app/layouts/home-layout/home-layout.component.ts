import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  template: `
      <header>
        <app-header></app-header>
      </header>

      <router-outlet></router-outlet>

      <footer>
        <app-footer></app-footer>
      </footer>
      `,
  styles: [

  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLayoutComponent {

}
