import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLayoutComponent {

}
