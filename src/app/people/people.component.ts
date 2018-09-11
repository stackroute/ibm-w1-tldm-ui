import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {MessageService} from '../message.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
    users: User[];
    user: User;

    constructor(private userService: UserService, private messageService: MessageService) {
    }

    ngOnInit() {
        this.userService.getAllUsers().subscribe((data: User[]) => {
            this.users = data;
        });
    }

    setSender(name: string) {
        this.userService.setSender(name);
        this.userService.getUserDetailsByName(name).subscribe(data => {
            console.log(this.user = data);
            this.messageService.setSender(this.user);
        });
    }

    setReceiver(name: string) {
        this.userService.setReceiver(name);
        this.userService.getUserDetailsByName(name).subscribe(data => {
            console.log(this.user = data);
            this.messageService.setReceiver(this.user);
        });
    }
}