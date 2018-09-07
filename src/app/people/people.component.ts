import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
    users: User[];

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getAllUsers().subscribe((data: User[]) => {
            this.users = data;
        });
    }
}