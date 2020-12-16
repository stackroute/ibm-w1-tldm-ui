import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ChannelPageComponent} from './channel-page/channel-page.component';
import {AuthGuardService as AuthGuard} from './service/auth-guard.service';
import {LandingPageComponent} from './landing-page/landing-page.component';

const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'landing-page', component: LandingPageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'create-channel', component: ChannelPageComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}