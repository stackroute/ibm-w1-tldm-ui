import {Injectable} from '@angular/core';
import {User} from '../model/user';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    userResultSet: User[];

    searchServerUrl = 'http://172.23.239.122:8070/search-users';

    stompClientUser = null;

    constructor() {
    }

    establishConnectionForSearch() {
        const socket = new SockJS(this.searchServerUrl);
        this.stompClientUser = Stomp.over(socket);
        const that = this;
        this.stompClientUser.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            that.stompClientUser.subscribe(`/topic/search-user`, function (resultSet) {
                that.showGreetingForSearch(JSON.parse(resultSet.body));
                console.log(resultSet.body);
            });
        });
    }

    showGreetingForSearch(resultSet) {
        this.userResultSet.push(resultSet);
    }

    disconnect() {
        if (this.stompClientUser !== null) {
            this.stompClientUser.disconnect();
        }
    }
}
