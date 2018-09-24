import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class UserService {

    receiverName: string;
    senderName: string;

    constructor(private httpClient: HttpClient) {
    }

    baseUrl = 'http://172.23.239.62:8069';

    setSender(name: string) {
        this.senderName = name;
    }

    setReceiver(name: string) {
        this.receiverName = name;
    }

    // registering a user
    registerUser(user: User): Observable<User> {
        return this.httpClient.post<User>(`${this.baseUrl}/register`, user, httpOptions);
    }

    // fetching list of all users
    getAllUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(`${this.baseUrl}/api/v1/user`);
    }

    // finding a user by his userId
    getUserDetailsById(userId: string): Observable<User> {
        return this.httpClient.get<User>(`${this.baseUrl}/api/v1/user/${userId}`);
    }
}
