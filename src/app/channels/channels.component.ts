import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ChannelService} from '../service/channel.service';
import {Channel} from '../model/channel';
import {MessageService} from '../service/message.service';

@Component({
    selector: 'app-channels',
    templateUrl: './channels.component.html',
    styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

    channels: Channel[];

    constructor(private router: Router,
                public channelService: ChannelService,
                private messageService: MessageService) {
    }

    ngOnInit() {
    }

    createChannel() {
        this.router.navigateByUrl('/create-channel');
    }

    setupChannel(channel: Channel) {
        this.messageService.displayName = true;
        this.channelService.isChannelActive = true;
        this.channelService.setChannel(channel);

        if (this.messageService.receiver) {
            this.messageService.receiver = null;
        }
    }
}
