import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from 'src/routes';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginScreenComponent } from './screens/join/login-screen/login-screen.component';
import { RegisterScreenComponent } from './screens/join/register-screen/register-screen.component';
import { HomeComponent } from './screens/home/home.component';
import { joinGuard } from './guards/join.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: AppRoutes.join.root,
        canActivateChild: [joinGuard],
        children: [
          {
            path: AppRoutes.join.loginDef,
            component: LoginScreenComponent,
          },
          {
            path: AppRoutes.join.registerDef,
            component: RegisterScreenComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
