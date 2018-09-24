import {Injectable} from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USER_ID = 'UserId';

@Injectable({
    providedIn: 'root'
})
export class TokenStorage {
    constructor() {
    }

    public saveToken(token: string, UserId: string) {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
        window.localStorage.removeItem(USER_ID);
        window.localStorage.setItem(USER_ID, UserId);
    }

    public getToken(): string {
        return localStorage.getItem(TOKEN_KEY);
    }

    public getUserId(): string {
        return localStorage.getItem(USER_ID);
    }

    public removeToken() {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.removeItem(USER_ID);
        window.localStorage.clear();
    }
}