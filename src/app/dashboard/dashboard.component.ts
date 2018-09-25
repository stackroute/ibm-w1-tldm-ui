import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from '../service/message.service';
import {ChannelService} from '../service/channel.service';
import {TokenStorage} from '../service/token-storage.service';
import {UserService} from '../service/user.service';
import {MatDialog} from '@angular/material';
import {SearchDialogComponent} from '../search-dialog/search-dialog.component';
import {SearchService} from '../service/search.service';

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

    dialogRef;

    constructor(private router: Router,
                public messageService: MessageService,
                public channelService: ChannelService,
                private tokenStorage: TokenStorage,
                private userService: UserService,
                public dialog: MatDialog,
                private searchService: SearchService) {
    }

    ngOnInit() {
        if (this.tokenStorage.getReceiver()) {
            console.log('Receiver ID is :: ' + this.tokenStorage.getReceiver());
            this.receiverId = this.tokenStorage.getReceiver();
            this.userService.getUserDetailsById(this.receiverId).subscribe(data => {
                this.messageService.setReceiver(data);
                this.messageService.displayName = true;
            });
        }

        if (this.tokenStorage.getChannel()) {
            console.log('Channel ID is :: ' + this.tokenStorage.getChannel());
            this.messageService.displayName = true;
            this.channelService.isChannelActive = true;
            // TODO: Setting channel on dashboard refresh
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
}
