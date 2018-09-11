import {Component, OnInit} from '@angular/core';
import {MessageService} from '../message.service';
import {Message} from '../message';
import {UserService} from '../user.service';

@Component({
    selector: 'app-chat-input',
    templateUrl: './chat-input.component.html',
    styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

    value = '';

    message: Message;

    constructor(private messageService: MessageService,
                private userService: UserService) {
    }

    ngOnInit() {
    }

    sendMessage(messageContent: string) {
        this.value = '';
        if (messageContent !== '') {
            this.messageService.sendMessage(messageContent);
        }
    }
}
