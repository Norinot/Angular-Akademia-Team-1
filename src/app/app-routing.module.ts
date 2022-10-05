import { Content2Component } from './components/content2/content2.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthGuard } from './services/auth.guard';

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
