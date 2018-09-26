import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {Injectable} from '@angular/core';
import {ChannelService} from '../service/channel.service';
import {ChannelMessage} from '../model/channel-message';
import {SharedServiceService} from '../service/sharedservice.service';

// import { ChannelNotification } from '../model/channel-notification';


@Component({
    selector: 'app-right-sidenav',
    templateUrl: './right-sidenav.component.html',
    styleUrls: ['./right-sidenav.component.css']
})
@Injectable({
    providedIn: 'root'
})


export class RightSidenavComponent implements OnInit {

    userName: String;

    events: string[] = [];
    users: User[];
    user: User;
    channelMessages: ChannelMessage[];

    constructor(private channelService: ChannelService,
                private sharedService: SharedServiceService) {
    }

    ngOnInit() {
        // fetchUsers() {
        //   this.getUsersByChannelId(this.channelService.users).subscribe(data => {
        //       this.users = data;
        //       this.channelService.establishConnectionForChannel(this.users);
        //   });


        // fetching all the users by specific channel name
        this.channelService.getUsersByChannelName(this.channelService.channel.channelName).subscribe((data) => {
            console.log(this.users = data);
        });
    }

    populateSidenav() {
        this.channelService.getUsersByChannelName(this.channelService.channel.channelName).subscribe((data) => {
            console.log(this.users = data);

        });
    }
}