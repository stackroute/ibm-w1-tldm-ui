import {Component, OnInit} from '@angular/core';
import {ChannelService} from '../service/channel.service';
import {User} from '../model/user';
import {CommunityService} from '../service/community.service';
import {Channel} from '../model/channel';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-channeldialog',
    templateUrl: './channeldialog.component.html',
    styleUrls: ['./channeldialog.component.css']
})
export class ChanneldialogComponent implements OnInit {

    channel: Channel;
    users: User[];
    channelUser1: User[] = [];
    channelUsers: User[] = [];

    constructor(private channelService: ChannelService,
                private communityService: CommunityService,
                private router: Router,
                public dialogRef: MatDialogRef<ChanneldialogComponent>) {
    }

    ngOnInit() {
        this.communityService.getAllCommunityUsers().subscribe((data: User[]) => {
            this.users = data;
        });

        this.channelService.getChannelUsersByChannelName(this.channelService.channel.channelName).subscribe((data: User[]) => {
            this.channelUser1 = data;
            console.log(this.channelUser1);
        });
    }

    addChannelUsers(user: User) {
        this.channelUsers.push(user);
        console.log(user);
    }

    channelUpdate() {
        this.channelService.updateChannel(this.channelService.channel.channelId, this.channelUsers).subscribe((data) => {
            this.channel = data;
            console.log(this.channel);

        });

        this.dialogRef.close();
        this.router.navigateByUrl('/dashboard');
    }

}