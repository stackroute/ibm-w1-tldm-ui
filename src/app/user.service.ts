import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    // receiver: string;

    sender: User = {
        userId: `sender_123`,
        userName: `sender`,
        name: `Sender`,
        phoneNumber: `123456789`,
        userMail: `sender@sender.com`
    };

    receiver: User = {
        userId: `receiver_987`,
        userName: `receiver`,
        name: `Receiver`,
        phoneNumber: `987654321`,
        userMail: `receiver@receiver.com`
    };

    constructor(private httpClient: HttpClient) {
    }

    baseUrl = 'http://172.23.239.62:8080/api/user';


    getAllUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.baseUrl);
    }

    // setReceiver(name: string) {
    //     this.receiver = name;
    // }
}
