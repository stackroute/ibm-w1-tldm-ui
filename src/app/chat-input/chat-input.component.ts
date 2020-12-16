import {Component, OnInit} from '@angular/core';
import {Message} from '../model/message';
import {MessageService} from '../service/message.service';
import {ChannelService} from '../service/channel.service';
import {ChannelMessage} from '../model/channel-message';

@Component({
    selector: 'app-chat-input',
    templateUrl: './chat-input.component.html',
    styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

    value = '';
    message: Message;
    channelMessage: ChannelMessage;

    constructor(private messageService: MessageService, private channelService: ChannelService) {
    }

    ngOnInit() {
    }

    // sending the message to the web-socket depending on channel-perspective or user-perspective
    sendMessage(messageContent: string) {
        this.value = '';
        if (this.channelService.isChannelActive) {
            if (messageContent !== '') {
                this.channelMessage = new ChannelMessage(messageContent, this.messageService.getSender(), this.channelService.channel);
                this.messageService.sendMessageToChannel(this.channelMessage);
            }
        } else {
            if (messageContent !== '') {
                this.message = new Message(messageContent, this.messageService.getSender(), this.messageService.getReceiver());
                this.messageService.sendMessageToUser(this.message);
            }
        }
    }
}
