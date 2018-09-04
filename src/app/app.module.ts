import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TextareaComponent } from './textarea/textarea.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';

import { MatCheckboxModule, MatTooltipModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';

import { IntegrationComponent } from './integration/integration.component';



@NgModule({
  declarations: [
    AppComponent,

    TextareaComponent,
    MainNavComponent,
    IntegrationComponent,
   
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NoopAnimationsModule,
    MatInputModule,

    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatCardModule,
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
