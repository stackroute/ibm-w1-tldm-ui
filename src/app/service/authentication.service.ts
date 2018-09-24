import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RegisterUser} from '../model/register-user';
import {Observable} from 'rxjs';
import {AuthUser} from '../model/auth-user';
import {User} from '../model/user';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    apiUrl = `http://172.23.239.206:8064/user/auth`;

    constructor(private http: HttpClient) {
    }

    // registering a user
    register(user: User): Observable<User> {
        return this.http.post<User>(this.apiUrl, user, httpOptions);
    }

    // logging in a user
    login(authUser: AuthUser): Observable<any> {
        return this.http.post(this.apiUrl + '/login', authUser, httpOptions);
    }
}
