import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {Message} from '../model/message';
import {UserService} from '../service/user.service';
import {MessageService} from '../service/message.service';
import {ChannelService} from '../service/channel.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

    users: User[];
    user: User;
    messages: Message[];

    constructor(private userService: UserService,
                public messageService: MessageService,
                private channelService: ChannelService) {
    }

    ngOnInit() {
        // fetching all users on component initialization
        this.userService.getAllUsers().subscribe((data: User[]) => {
            console.log(this.users = data);
        });
    }

    // setting receiver value for front-end
    setReceiver(userId: string) {
        if (this.channelService.isChannelActive) {
            this.channelService.isChannelActive = false;
        }

        this.messageService.resetUserNotification();
        this.userService.getUserDetailsById(userId).subscribe(data => {
            console.log(this.user = data);
            this.messageService.setReceiver(this.user);
            this.messageService.displayName = true;
            this.messageService.getAllMessagesBySenderAndReceiver().subscribe(messages => {
                console.log(this.messages = messages);
                this.messageService.setMessages(this.messages);
                this.messageService.setDisplayMessage(userId);
            });
        });
    }
}
