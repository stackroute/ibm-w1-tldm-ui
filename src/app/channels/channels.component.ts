import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ChannelService} from '../service/channel.service';
import {Channel} from '../model/channel';
import {MessageService} from '../service/message.service';
import {ChannelMessage} from '../model/channel-message';

@Component({
    selector: 'app-channels',
    templateUrl: './channels.component.html',
    styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

    channelMessages: ChannelMessage[];

    constructor(private router: Router,
                public channelService: ChannelService,
                public messageService: MessageService) {
    }

    ngOnInit() {
    }

    // routing to create-channel page
    createChannel() {
        this.router.navigateByUrl('/create-channel');
    }

    // constructing channel perspective for front end
    setupChannel(channel: Channel) {
        this.messageService.resetChannelNotification();
        this.messageService.displayName = true;
        this.channelService.isChannelActive = true;
        this.channelService.setChannel(channel);
        this.messageService.getAllMessagesByChannelId(channel.channelId).subscribe(data => {
            this.channelMessages = data;
            this.messageService.setChannelMessages(this.channelMessages);
        });
        if (this.messageService.receiver) {
            this.messageService.receiver = null;
        }
    }
}
