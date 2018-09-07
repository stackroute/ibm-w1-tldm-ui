import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    baseUrl = `http://172.23.239.62:8080/api/user`;

    constructor(private httpClient: HttpClient) {
    }

    getAllUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.baseUrl);
    }
}
