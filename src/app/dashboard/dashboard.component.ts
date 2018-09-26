import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from '../service/message.service';
import {ChannelService} from '../service/channel.service';
import {TokenStorage} from '../service/token-storage.service';
import {UserService} from '../service/user.service';
import {MatDialog} from '@angular/material';
import {SearchDialogComponent} from '../search-dialog/search-dialog.component';
import {Channel} from '../model/channel';
import {ChanneldialogComponent} from '../channeldialog/channeldialog.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    opened: boolean;

    userId: string;
    receiverId: string;
    channelId: string;

    channel: Channel;

    dialogRef;

    constructor(private router: Router,
                public messageService: MessageService,
                public channelService: ChannelService,
                private tokenStorage: TokenStorage,
                private userService: UserService,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        if (this.tokenStorage.getReceiver()) {
            console.log('Receiver ID is :: ' + this.tokenStorage.getReceiver());
            this.receiverId = this.tokenStorage.getReceiver();
            this.userService.getUserDetailsById(this.receiverId).subscribe(data => {
                this.messageService.setReceiver(data);
                this.messageService.displayName = true;
                this.messageService.getAllMessagesBySenderAndReceiver().subscribe(messages => {
                    this.messageService.setMessages(messages);
                    this.messageService.setDisplayMessage(this.receiverId);
                });
            });
        }

        if (this.tokenStorage.getChannel()) {
            console.log('Channel ID is :: ' + this.tokenStorage.getChannel());
            this.channelId = this.tokenStorage.getChannel();
            this.channelService.getChannelDetailByChannelId(this.channelId).subscribe(data => {
                this.channelService.setChannel(data);
                this.messageService.displayName = true;
                this.channelService.isChannelActive = true;
                this.messageService.getAllMessagesByChannelId(this.channelId).subscribe(messages => {
                    this.messageService.setChannelMessages(messages);
                });
            });
        }

        this.userId = this.tokenStorage.getUserId();
        if (this.userId) {
            this.userService.getUserDetailsById(this.userId).subscribe(data => {
                this.messageService.setSender(data);
                console.log(data);
                this.messageService.establishConnectionForUser(this.userId);
                this.channelService.fetchChannels();
            });
        }
    }

    // logging out and clearing/resetting all required variables
    logout() {
        this.messageService.displayName = false;
        this.channelService.isChannelActive = false;
        this.messageService.receiver = null;
        this.messageService.disconnectUser();
        this.messageService.clearMessages();
        this.tokenStorage.removeToken();

        this.router.navigateByUrl('/login');
    }

    openDialog() {
        this.dialogRef = this.dialog.open(SearchDialogComponent, {});

        this.dialogRef.afterClosed().subscribe(result => {
            // this.searchService.disconnect();
        });
    }

    openChannelDialog() {
        this.dialog.open(ChanneldialogComponent);
    }

    closeChat() {
        this.messageService.displayName = false;
        this.channelService.isChannelActive = false;
        this.messageService.receiver = null;
    }
}
