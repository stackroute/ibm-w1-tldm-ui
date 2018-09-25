import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {Channel} from '../model/channel';
import {Router} from '@angular/router';
import {ChannelService} from '../service/channel.service';
import {CommunityService} from '../service/community.service';
import {MessageService} from '../service/message.service';

@Component({
    selector: 'app-channel-page',
    templateUrl: './channel-page.component.html',
    styleUrls: ['./channel-page.component.css']
})
export class ChannelPageComponent implements OnInit {

    channel: Channel;
    users: User[];
    channelUsers: User[] = [];

    constructor(private channelService: ChannelService,
                private communityService: CommunityService,
                private messageService: MessageService,
                private router: Router) {
    }

    ngOnInit() {
        // fetching list of all users for adding to channel
        this.communityService.getAllCommunityUsers().subscribe((data: User[]) => {
            this.users = data;
        });
    }

    // creating the channel
    create(channelName: string, channelDescription: string) {
        this.channel = new Channel(channelName, channelDescription, this.channelUsers, this.messageService.sender.userName);
        this.channelService.createChannel(this.channel).subscribe(data => {
            console.log('created ' + data.channelName + ' successfully');
            this.messageService.disconnectChannel();
            this.channelService.fetchChannels();
        });

        // navigating to dashboard
        this.router.navigateByUrl('/dashboard');
    }

    // constructing list of users to be added to channel
    addUsers(user: User) {
        this.channelUsers.push(user);
    }
}

