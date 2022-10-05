import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

import { Content2Component } from './components/content2/content2.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

  // const routes: Routes = [
  //   { path: 'div-main', component: MainComponent },
  //   { path: 'login', component: LoginPageComponent },
  // ];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Content2Component,
    DashboardComponent,
    SidenavComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
