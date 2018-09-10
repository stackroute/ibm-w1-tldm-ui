import {Component, OnInit} from '@angular/core';
import {MessageService} from '../message.service';
import {Message} from '../message';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    messages: Message[];

    constructor(public messageService: MessageService) {
    }

    ngOnInit() {
        this.messageService.establishConnection();
        // this.messageService.getAllMessagesBySenderAndReceiver().subscribe(data => {
        //     this.messages = data;
        // });
    }
}
