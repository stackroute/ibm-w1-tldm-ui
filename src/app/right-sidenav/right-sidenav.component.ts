import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {Injectable} from '@angular/core';
import {ChannelService} from '../service/channel.service';

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

    constructor(private channelService: ChannelService) {
    }

    ngOnInit() {
        // fetching all the users by specific channel name
        this.channelService.getChannelUsersByChannelName(this.channelService.channel.channelName).subscribe((data) => {
            console.log(this.users = data);
        });
    }

    populateSidenav() {
        this.channelService.getChannelUsersByChannelName(this.channelService.channel.channelName).subscribe((data) => {
            console.log(this.users = data);

        });
    }
}
