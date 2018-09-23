import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from '../service/message.service';
import {ChannelService} from '../service/channel.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    opened: boolean;

    constructor(private router: Router,
                public messageService: MessageService,
                public channelService: ChannelService) {
    }

    ngOnInit() {
    }

    logout() {
        this.messageService.clearMessages();
        this.messageService.displayName = false;
        this.channelService.isChannelActive = false;
        this.router.navigateByUrl('/login');
        this.messageService.disconnectUser();
    }

}
