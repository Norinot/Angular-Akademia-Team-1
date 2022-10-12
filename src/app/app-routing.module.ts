import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { MainComponent } from './components/pages/dashboard/main/main.component';
import { Content2Component } from './components/pages/dashboard/content2/content2.component';
import { StickyNoteComponent } from './components/pages/dashboard/sticky-notes/sticky-note/sticky-note.component';
import { StickyNoteContainerComponent } from './components/pages/dashboard/sticky-notes/sticky-note-container/sticky-note-container.component';
import { StickyNoteFormComponent } from './components/pages/dashboard/sticky-notes/sticky-note-form/sticky-note-form.component';
import { AccordionComponent } from './components/sidenav/accordion/accordion.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],

    children: [
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'content2',
        component: Content2Component,
      },
      {
        path: 'sticky-notes-container',
        component: StickyNoteContainerComponent,

        children: [
          { path: '', redirectTo: 'sticky-note', pathMatch: 'full' },
          { path: 'sticky-note', component: StickyNoteComponent },
          { path: 'sticky-note-form/:id', component: StickyNoteFormComponent },
        ],
      },
      { path: 'accordion', component: AccordionComponent },
    ],
  },
  { path: '**', redirectTo: 'sticky-note'},

];

@NgModule({
  declarations: [],
  imports: [[RouterModule.forRoot(routes)], CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
