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

    sendMessage(message: string) {
        this.value = '';
        if (message !== '') {
<<<<<<< HEAD
            // this.message = new Message(this.userService.sender, this.userService.receiver, message);
=======
            // this.message = new Message(message, this.userService.sender, this.userService.receiver);
            // this.messageService.sendMessage(this.message);
>>>>>>> 31fd8d336eb134555b2816f75f3461d7e6c0b06c
            this.messageService.sendMessage(message);
        }
    }
}
