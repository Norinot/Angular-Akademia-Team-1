import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { MainComponent } from './components/pages/dashboard/main/main.component';
import { Content2Component } from './components/pages/dashboard/content2/content2.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { StickyNoteFormComponent } from './components/pages/dashboard/sticky-notes/sticky-note-form/sticky-note-form.component';
import { StickyNoteContainerComponent } from './components/pages/dashboard/sticky-notes/sticky-note-container/sticky-note-container.component';
import { StickyNoteComponent } from './components/pages/dashboard/sticky-notes/sticky-note/sticky-note.component';
import { AccordionComponent } from './components/sidenav/accordion/accordion.component';
import { GridComponent } from './components/pages/dashboard/grid/grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Content2Component,
    DashboardComponent,
    SidenavComponent,
    LoginPageComponent,
    StickyNoteFormComponent,
    StickyNoteContainerComponent,
    StickyNoteComponent,
    AccordionComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatExpansionModule,
    MatButtonToggleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
