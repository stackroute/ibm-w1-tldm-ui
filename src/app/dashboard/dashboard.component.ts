import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from '../service/message.service';
import {ChannelService} from '../service/channel.service';
import {TokenStorage} from '../service/token-storage.service';
import {UserService} from '../service/user.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    opened: boolean;

    userId: string;

    constructor(private router: Router,
                public messageService: MessageService,
                public channelService: ChannelService,
                private tokenStorage: TokenStorage,
                private userService: UserService) {
    }

    ngOnInit() {
        this.userId = this.tokenStorage.getUserId();
        if (this.userId) {
            this.userService.getUserDetailsById(this.userId).subscribe(data => {
                this.messageService.setSender(data);
                console.log(data);
                this.messageService.establishConnectionForUser(this.userId);
                this.channelService.fetchChannels();

            });
        }

        // this.messageService.displayName = true;
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
}
