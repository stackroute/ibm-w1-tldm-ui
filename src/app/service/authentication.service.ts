import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RegisterUser} from '../model/register-user';
import {Observable} from 'rxjs';
import {AuthUser} from '../model/auth-user';
import {User} from '../model/user';
import {JwtHelperService} from '@auth0/angular-jwt';
import {TokenStorage} from './token-storage.service';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const helper = new JwtHelperService();

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    apiUrl = `http://172.23.239.206:8064/user/auth`;

    token: string;
    userId: string;
    flag: boolean;
    decodedToken: any;

    constructor(private http: HttpClient,
                private tokenStorage: TokenStorage) {
    }

    // registering a user
    register(user: User): Observable<User> {
        return this.http.post<User>(this.apiUrl, user, httpOptions);
    }

    // logging in a user
    login(authUser: AuthUser): Observable<any> {
        return this.http.post(this.apiUrl + '/login', authUser, httpOptions);
    }

    isAuthenticated(): boolean {
        this.token = this.tokenStorage.getToken();
        if (this.token) {
            this.decodedToken = helper.decodeToken(this.token);
            this.userId = this.decodedToken.sub;
            if (this.userId === this.tokenStorage.getUserId()) {
                this.flag = true;
            } else {
                this.flag = false;
            }
        } else {
            this.flag = false;
        }

        return this.flag;
    }
}