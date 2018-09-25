import {Injectable} from '@angular/core';
import {User} from '../model/user';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    userResultSet: User[];

    baseUrl = 'http://172.23.239.8070/api/v1/search-users';

    // searchServerUrl = 'http://172.23.239.122:8070/search-users';

    // stompClientUser = null;

    constructor(private httpClient: HttpClient) {
    }

    // code for searching through web sockets
    /*establishConnectionForSearch() {
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

    sendQuery(query: string) {
        this.stompClientUser.send('/app/search', {}, JSON.stringify(query));
    }

    disconnect() {
        if (this.stompClientUser !== null) {
            this.stompClientUser.disconnect();
        }
    }*/

    // code for searching through REST calls
    /*searchUsers(userName: string): Observable<User[]> {
        return this.httpClient.get<User[]>(this.baseUrl);
    }*/

    searchUsers(term: string): Observable<User[]> {
        if (!term.trim()) {
            // if not search term then return empty hero array
            return of([]);
        }
        // return this.getMovies().filter();
    }
}
