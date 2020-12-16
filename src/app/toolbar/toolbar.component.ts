import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    constructor(public userService: UserService) {
    }

    ngOnInit() {
    }

}
