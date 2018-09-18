import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MessagesComponent} from './messages/messages.component';
import { InvitemembersComponent } from './invitemembers/invitemembers.component';

const routes: Routes = [
     { path: '', redirectTo: 'invite', pathMatch: 'full' },
   {path:'invite',component:InvitemembersComponent},
    {path: 'message-area/:id', component: MessagesComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
