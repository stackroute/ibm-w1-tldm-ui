import {Injectable} from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USER_ID = 'UserId';
const RECEIVER = 'ReceiverId';
const CHANNEL = 'ChannelId';

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

    public saveReceiver(receiverId: string) {
        window.localStorage.removeItem(RECEIVER);
        window.localStorage.setItem(RECEIVER, receiverId);
    }

    public removeReceiver() {
        window.localStorage.removeItem(RECEIVER);
    }

    public getReceiver(): string {
        return window.localStorage.getItem(RECEIVER);
    }

    public saveChannel(channelId: string) {
        window.localStorage.removeItem(CHANNEL);
        window.localStorage.setItem(CHANNEL, channelId);
    }

    public removeChannel() {
        window.localStorage.removeItem(CHANNEL);
    }

    public getChannel(): string {
        return window.localStorage.getItem(CHANNEL);
    }
}