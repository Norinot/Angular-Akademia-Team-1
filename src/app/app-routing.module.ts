import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { MainComponent } from './components/pages/dashboard/main/main.component';
import { Content2Component } from './components/pages/dashboard/content2/content2.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate : [AuthGuard],

    children: [
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'content2',
        component: Content2Component,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [[RouterModule.forRoot(routes)], CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
