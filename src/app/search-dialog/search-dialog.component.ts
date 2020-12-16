import {Component, OnInit} from '@angular/core';
import {SearchService} from '../service/search.service';
import {User} from '../model/user';
import {TokenStorage} from '../service/token-storage.service';
import {MessageService} from '../service/message.service';
import {ChannelService} from '../service/channel.service';
import {UserService} from '../service/user.service';
import {Message} from '../model/message';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-search-dialog',
    templateUrl: './search-dialog.component.html',
    styleUrls: ['./search-dialog.component.css']
})
export class SearchDialogComponent implements OnInit {

    results: User[];
    user: User;
    messages: Message[];

    constructor(private searchService: SearchService,
                private tokenStorage: TokenStorage,
                private messageService: MessageService,
                private channelService: ChannelService,
                private userService: UserService,
                public dialogRef: MatDialogRef<SearchDialogComponent>) {
    }

    ngOnInit() {
    }

    search(searchTerm: string) {
        this.searchService.searchTerm(searchTerm).subscribe(results => {
            console.log(this.results = results);
        });
    }

    setReceiver(userId: string) {
        if (this.tokenStorage.getChannel()) {
            this.tokenStorage.removeChannel();
        }
        if (this.channelService.isChannelActive) {
            this.channelService.isChannelActive = false;
        }

        this.userService.getUserDetailsById(userId).subscribe(data => {
            console.log(this.user = data);
            this.tokenStorage.saveReceiver(this.user.userId);
            this.messageService.setReceiver(this.user);
            this.messageService.displayName = true;
            this.messageService.getAllMessagesBySenderAndReceiver().subscribe(messages => {
                console.log(this.messages = messages);
                this.messageService.setMessages(this.messages);
                this.messageService.setDisplayMessage(userId);
            });
        });

        this.dialogRef.close();
    }

}
