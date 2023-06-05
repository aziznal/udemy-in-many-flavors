import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from 'src/routes';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegisterScreenComponent } from './screens/register-screen/register-screen.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: AppRoutes.join.root,
        children: [
          {
            path: AppRoutes.join.loginDef,
            component: LoginScreenComponent,
          },
          {
            path: AppRoutes.join.registerDef,
            component: RegisterScreenComponent,
          },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
