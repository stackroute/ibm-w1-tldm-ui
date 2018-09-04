import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { MatCardModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { LayoutModule } from '@angular/cdk/layout';
@NgModule({
  declarations: [
    AppComponent,
    Card1Component,
    Card2Component
=======
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TextareaComponent } from './textarea/textarea.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import {  MatCheckboxModule,   MatTooltipModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';


@NgModule({
  declarations: [
    AppComponent,

    TextareaComponent,
    MainNavComponent
>>>>>>> c9f9623764b93facdf1bea470b1a95821f1c8ffa
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatCardModule,
=======

>>>>>>> c9f9623764b93facdf1bea470b1a95821f1c8ffa
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
<<<<<<< HEAD
=======
    NoopAnimationsModule,
    MatInputModule,

    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule
>>>>>>> c9f9623764b93facdf1bea470b1a95821f1c8ffa
  ],
  entryComponents:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
