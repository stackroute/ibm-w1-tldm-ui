import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarComponentComponent} from './sidebar-component/sidebar-component.component';
import {ChannelsComponent} from './channels/channels.component';
import {PeopleComponent} from './people/people.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDialogModule
} from '@angular/material';
import {MatCheckboxModule, MatTooltipModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MessagesComponent} from './messages/messages.component';
import {ChatInputComponent} from './chat-input/chat-input.component';
import {MatInputModule} from '@angular/material/input';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {SortbyTimestampPipe} from './sortby-timestamp.pipe';
import {ChannelPageComponent} from './channel-page/channel-page.component';
import {SearchDialogComponent} from './search-dialog/search-dialog.component';
import {RightSidenavComponent} from './right-sidenav/right-sidenav.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {ChanneldialogComponent} from './channeldialog/channeldialog.component';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponentComponent,
        ChannelsComponent,
        PeopleComponent,
        MessagesComponent,
        ChatInputComponent,
        ToolbarComponent,
        DashboardComponent,
        RegisterComponent,
        LoginComponent,
        PageNotFoundComponent,
        SortbyTimestampPipe,
        ChannelPageComponent,
        SearchDialogComponent,
        RightSidenavComponent,
        LandingPageComponent,
        ChanneldialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatMenuModule,
        MatInputModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatDialogModule,
    ],
    entryComponents: [
        SearchDialogComponent, ChanneldialogComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}