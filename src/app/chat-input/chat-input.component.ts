import {Component, OnInit} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
    selector: 'app-chat-input',
    templateUrl: './chat-input.component.html',
    styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

    value = '';

    constructor(private messageService: MessageService) {
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
